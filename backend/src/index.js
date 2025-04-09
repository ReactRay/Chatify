import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/user.routes.js'
import adminRoutes from './routes/admin.routes.js'
import authRoutes from './routes/auth.routes.js'
import songRoutes from './routes/song.routes.js'
import albumRoutes from './routes/album.routes.js'
import statsRoutes from './routes/stat.routes.js'
import { connectDB } from './lib/db.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT

app.use(express.json()) // parse req.body

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/songs', songRoutes)
app.use('/api/albums', albumRoutes)
app.use('/api/stats', statsRoutes)

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`)
  connectDB()
})
