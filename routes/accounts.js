import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as accountsCtrl from '../controllers/accounts.js'

const router = Router()

router.get('/new', isLoggedIn, accountsCtrl.new)

export {
  router
}
