import { clerkClient } from '@clerk/express'

export const protectRoute = async (req, res, next) => {
  if (!req.auth.userId) {
    res.status(401).json({ message: 'unauthorized - please login' })
    return
  }

  next()
}

export const requireAdmin = async (req, res, next) => {
  try {
    const currentUser = await clerkClient.users.getUser(req.auth.userId)
    const isAdmin =
      process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress.emailAddress

    if (!isAdmin) {
      res.status(403).json({ message: 'unauthorized , you are not admin ' })
    }

    next()
  } catch (error) {
    next(error)
  }
}
