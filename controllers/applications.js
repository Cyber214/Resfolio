import { Application } from '../models/application.js'

function newApplication(req, res) {
  res.render('applications/new', {
    title: 'New Applications',
  })
}

function create(req, res) {
  Application.create(req.body)
  .then(application => {
    res.redirect('/applications')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function index(req, res) {
  Application.find({})
  .then(applications => {
    res.render('applications/index', {
      applications: applications,
      title: 'All Applications'
    })
  })
  .catch(err => {
    console.log(err);
    res.redirect('/')
  })
}


export {
  newApplication as new,
  create,
  index,
}