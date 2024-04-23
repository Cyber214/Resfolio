import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as accountsCtrl from '../controllers/accounts.js'

const router = Router()

router.get('/', isLoggedIn, accountsCtrl.index)

router.get('/new', isLoggedIn, accountsCtrl.new)

router.get('/:accountId', isLoggedIn, accountsCtrl.show)

router.get('/:accountId/edit', accountsCtrl.edit)

router.post('/', isLoggedIn, accountsCtrl.create)

router.delete('/:accountId', isLoggedIn, accountsCtrl.delete)

router.post('/:accountId/applications', isLoggedIn, accountsCtrl.createApp)

router.delete('/:accountId/applications/:applicationId', isLoggedIn, accountsCtrl.deleteApp)

router.put('/:accountId', accountsCtrl.update)

export {
  router
}