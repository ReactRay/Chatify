import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`connected to MongoDB ${conn.connection.host}`)
  } catch (error) {
    console.log('FAILED TO CONNECT TO MONGODB ', error)
    process.exit(1)
  }
}
