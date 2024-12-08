import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { connectToDatabase } from '@/utils/db'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` })
  }

  try {
    const { db } = await connectToDatabase()
    const body = req.body

    if (body.action === 'register') {
      const { name, email, password, confirmPassword } = body

      if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' })
      }

      const existingUser = await db.collection('users').findOne({ email })
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' })
      }

      const hashedPassword = await bcrypt.hash(password, 10)

      const result = await db.collection('users').insertOne({
        name,
        email,
        password: hashedPassword,
      })

      return res.status(201).json({ message: 'User created successfully', userId: result.insertedId })
    } else if (body.action === 'login') {
      const { email, password } = body

      const user = await db.collection('users').findOne({ email })
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' })
      }

      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid credentials' })
      }

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })

      return res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email } })
    } else {
      return res.status(400).json({ message: 'Invalid action' })
    }
  } catch (error) {
    console.error('Error in auth API:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

