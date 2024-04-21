import { Account } from "../models/account.js"

function newAccount(req, res) {
  res.render('accounts/new', {
    title: 'Add Account'
  })
}

export {
  newAccount as new
}