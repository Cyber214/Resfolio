import { Profile } from "../models/profile.js"

function newProfile(req, res) {
  res.render('profiles/new', {
    title: 'My Profile',
  })
}

export {
  newProfile as new,
}
