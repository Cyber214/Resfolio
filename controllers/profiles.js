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
  Profile.findById(req.user.profile._id)
  .then(profileData => {
    res.render('profiles/index', { 
      profile: profileData,
      title: 'Add Performer'
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