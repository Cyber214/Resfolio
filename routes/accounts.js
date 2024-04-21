import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as accountsCtrl from '../controllers/accounts.js'

const router = Router()

router.get('/', isLoggedIn, accountsCtrl.index)
router.get('/new', isLoggedIn, accountsCtrl.new)
router.post('/new', isLoggedIn, accountsCtrl.create)

export {
  router
}
