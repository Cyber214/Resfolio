import { Account } from "../models/account.js"

function newAccount(req, res) {
  res.render('accounts/new', {
    title: 'Add Account'
  })
}

function create(req, res) {
  req.body.author = req.user.profile._id
  Account.create(req.body)
  .then(account => {
    res.redirect('/accounts')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function index(req, res) {
  Account.find({})
  .populate('author')
  .then(accounts => {
    res.render('accounts/index', {
      title: 'All Accounts',
      accounts: accounts,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  newAccount as new,
  create,
  index,
}