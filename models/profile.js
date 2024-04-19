import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  email: String,
  phoneNumber: number,
  resumeUrl: String,
  education: [eduSchema],
  application: [appSchema],
}, {
  timestamps: true
})

const eduSchema = new Schema({
  name: {type: String, required: true},
  degree: {
    type: String,
    enum: ['G', 'PG', 'PG-13', 'R']
  },
  state: String,
  country: String,
  completed: Boolean,
  startYear: {
    type: Number, 
    default: function() {
      return new Date().getFullYear()
    }
  },
})

const appSchema = new Schema({
  companyName: {type: String, required: true},
  prosition: String,
  jobtype: {
    type: String,
    enum: ['part time', 'full time', 'temporary', 'contract']
  },
  state: String,
  country: String,
  mileRange: {
    type: Number,
    enum: ['0', '5', '10', '15', '20']
  },
  workDays: {
    type: String,
    enum: ['weekend only', 'weekdays only']
  },
  availaibility
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
