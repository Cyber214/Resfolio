import { Account} from '../models/account.js'

function newAcoount(req, res) {
  res.render('accounts/new', {
    title: 'New Account',
  })
}

export {
  
}