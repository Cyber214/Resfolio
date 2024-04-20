import { Profile } from "../models/profile.js"

function newProfile(req, res) {
  res.render('profiles/new', {
    title: 'My Profile',
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

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles: profiles,
      title: 'Profile Page'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  newProfile as new,
  create,
  index,
}