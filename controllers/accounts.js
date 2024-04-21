import { Account } from "../models/account.js"

function newAccount(req, res) {
  res.render('accounts/new', {
    title: 'Create Account',
  })
}

function create(req, res) {
  Profile.create(req.body)
  .then(profile => {
    res.redirect('/profiles')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function index(req, res){
  Profile.find({})
  .then(profiles => {
    res.render('accounts/index', {
      profiles: profiles,
      title: 'All Accounts'
    })
  })
    .catch(err => {
      console.log(err)
      res.redirect('/accounts')
  })
}

export {
  newAccount as new,
  create,
  index,
}