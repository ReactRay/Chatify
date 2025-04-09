import { Router } from 'express'
import { protectRoute } from '../middleware/auth.middleware.js'
import { requireAdmin } from '../middleware/auth.middleware.js'
import {
  createSong,
  deleteSong,
  createAlbum,
  deleteAlbum,
} from '../controller/admin.controller.js'

const router = Router()

router.get('/check', (req, res) => {})

router.post('/songs', protectRoute, requireAdmin, createSong)
router.delete('/songs/:id', protectRoute, requireAdmin, deleteSong)

router.post('/albums', protectRoute, requireAdmin, createAlbum)
router.delete('/albums/:id', protectRoute, requireAdmin, deleteAlbum)

export default router
