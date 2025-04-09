import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/user.routes.js'
import adminRoutes from './routes/admin.routes.js'
import authRoutes from './routes/auth.routes.js'
import songRoutes from './routes/song.routes.js'
import albumRoutes from './routes/album.routes.js'
import statsRoutes from './routes/stat.routes.js'
import { connectDB } from './lib/db.js'
import { clerkMiddleware } from '@clerk/express'
import fileUpload from 'express-fileupload'
import path from 'path'

dotenv.config()

const app = express()

const __dirname = path.resolve()

const PORT = process.env.PORT

app.use(express.json()) // parse req.body
app.use(clerkMiddleware()) // this will add auth to req object
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.joing(__dirname, 'tmp'),
    createParentPath: true,
    limits: {
      fileSize: 10 * 1024 * 1024,
    },
  })
)

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/songs', songRoutes)
app.use('/api/albums', albumRoutes)
app.use('/api/stats', statsRoutes)

//error handler
app.use((err, req, resizeBy, next) => {
  res
    .status(500)
    .json({
      message:
        process.env.NODE_ENV === 'production'
          ? 'internal server error'
          : err.message,
    })
})

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`)
  connectDB()
})
