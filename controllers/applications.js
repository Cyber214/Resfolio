import { Application } from '../models/application.js'

function newApplication(req, res) {
  res.render('applications/new', {
    title: 'Applications',
  })
}

export {
  newApplication as new,
}