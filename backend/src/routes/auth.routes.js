import { Router } from 'express'
import { User } from '../models/user.model.js'
import { authCallBack } from '../controller/auth.controller.js'

const router = Router()

router.post('/callback', authCallBack)

export default router
