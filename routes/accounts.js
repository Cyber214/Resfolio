import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as accountsCtrl from "../controllers/accountss.js"

const router = Router()


// GET localhost:3000/profiles
router.get('/', isLoggedIn, accountsCtrl.index)

// GET localhost:3000/applications/new
router.get('/new', isLoggedIn, accountsCtrl.new)

// POST localhost:3000/profiles
router.post('/', isLoggedIn, accountsCtrl.create)

export {
  router
}
