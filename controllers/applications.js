import { Application } from "../models/application.js"

function newApp(req, res) {
  res.render('profiles/new', {
    title: 'My Profile',
  })
}

export {
  newApp as new,
}