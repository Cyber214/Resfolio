import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as applicationsCtrl from "../controllers/applications.js"

const router = Router()

// GET localhost:3000/applications/new
router.get('/new', isLoggedIn, applicationsCtrl.new)

export {
  router
}