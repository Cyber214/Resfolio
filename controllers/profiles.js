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
  .then(profile => {
    res.render('profiles/index', {
      profile: profile,
      title: 'Profile Page'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function addEdu(req, res) {
  Profile.find(req.body)
  .then(profile => {
    profile.save()
    .then(() => {
      res.redirect('/profiles')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/profiles')
    })
  })
}

function addEducation(req, res) {
  Profile.find({})
  .then(education => {
    req.body = req.user
    profile.educations.push(req.body)
    profile.save()
    .then(()=> {
      res.redirect('/profiles')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/profiless')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

export {
  newProfile as new,
  create,
  index,
  addEdu,
}