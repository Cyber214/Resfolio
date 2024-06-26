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
    res.redirect('/accounts/new')
  })
}

function show(req, res) {
  Account.findById(req.params.accountId)
  .populate('author')
  .then(account => {
    res.render('accounts/show' ,{
      title: 'Account Details',
      account: account
    })
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

function deleteAccount(req, res) {
  Account.findByIdAndDelete(req.params.accountId)
  .then(account => {
    res.redirect('/accounts')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function createApp(req, res) {
  Account.findById(req.params.accountId)
  .then(account => {
    req.body.author = req.user.profile._id
    account.applications.push(req.body)
    account.save()
    .then(()=> {
      res.redirect(`/accounts/${account._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function deleteApp(req, res) {
  Account.findById(req.params.accountId)
  .then(account => {
    account.applications.remove({_id: req.params.applicationId})
    account.save()
    .then(() => {
      res.redirect(`/accounts/${account._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function edit(req, res) {
  Account.findById(req.params.accountId)
  .then(account => {
    res.render('accounts/edit', {
      account: account,
      title: 'Edit Account'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/accounts')
  })
}

function update(req, res) {
  Account.findByIdAndUpdate(req.params.accountId, req.body, {new: true})
  .then(account => {
    res.redirect(`/accounts/${account._id}`)
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
  deleteAccount as delete,
  show,
  createApp,
  deleteApp,
  edit,
  update,
}