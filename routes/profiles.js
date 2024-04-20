import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from "../controllers/profile.js"

const router = Router()

// GET localhost:3000/profiles/new
router.get('/new', isLoggedIn, profilesCtrl.new)

export {
  router
}
