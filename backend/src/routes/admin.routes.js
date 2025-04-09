import { Router } from 'express'
import { getAdmin } from '../controller/admin.controller.js'
import { protectRoute } from '../middleware/auth.middleware.js'
import { requireAdmin } from '../middleware/auth.middleware.js'

const router = Router()

router.get('/', protectRoute, requireAdmin, getAdmin)

export default router
