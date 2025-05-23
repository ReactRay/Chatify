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
import cors from 'cors'
import { createServer } from 'http'
import { initializeSocket } from './lib/socket.js'
import cron from "node-cron";
import fs from 'fs'


dotenv.config()

const app = express()

const __dirname = path.resolve()

const PORT = process.env.PORT


const httpServer = createServer(app)

initializeSocket(httpServer)

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  
}))
app.use(express.json()) // parse req.body
app.use(clerkMiddleware()) // this will add auth to req object
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'tmp'),
    createParentPath: true,
    limits: {
      fileSize: 10 * 1024 * 1024,
    },
  })
)

const tempDir = path.join(process.cwd(), "tmp");
cron.schedule("0 * * * *", () => {
	if (fs.existsSync(tempDir)) {
		fs.readdir(tempDir, (err, files) => {
			if (err) {
				console.log("error", err);
				return;
			}
			for (const file of files) {
				fs.unlink(path.join(tempDir, file), (err) => {});
			}
		});
	}
});

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/songs', songRoutes)
app.use('/api/albums', albumRoutes)
app.use('/api/stats', statsRoutes)


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')))

  app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'dist', 'index.html'))
  })
}


//error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    message:
      process.env.NODE_ENV === 'production'
        ? 'internal server error'
        : err.message,
  })
})

httpServer.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`)
  connectDB()
})
