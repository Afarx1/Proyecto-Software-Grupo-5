import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export async function connectToDatabase() {
  if (process.env.NODE_ENV === 'development' && !process.env.MONGODB_URI.startsWith('mongodb')) {
    console.warn('Using mock database for development')
    return {
      db: {
        collection: (name) => ({
          findOne: async () => null,
          insertOne: async () => ({ insertedId: 'mock-id' }),
        }),
      },
    }
  }

  const client = await clientPromise
  const db = client.db()
  return { client, db }
}