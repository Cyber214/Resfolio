import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as accountsCtrl from '../controllers/accounts.js'

const router = Router()

router.get('/', isLoggedIn, accountsCtrl.index)

router.get('/new', isLoggedIn, accountsCtrl.new)

router.get('/:accountId', isLoggedIn, accountsCtrl.show)

router.post('/', isLoggedIn, accountsCtrl.create)

router.delete('/:accountId', isLoggedIn, accountsCtrl.delete)

router.post('/:accountId/applications', isLoggedIn, accountsCtrl.createApp)

export {
  router
}
