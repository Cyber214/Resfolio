import mongoose from 'mongoose'

const Schema = mongoose.Schema

const eduSchema = new Schema({
  name: { type: String, required: true },
  degree: {
    type: String,
    enum: ['BSc', 'BEng', 'LLB', 'BSW', 'BBA']
  },
  state: String,
  country: String,
  completed: Boolean,
  startYear: {
    type: Number, 
    default: function() {
      return new Date().getFullYear()
    }
  }
})

const appSchema = new Schema({
  companyName: { type: String, required: true },
  position: String,
  jobType: {
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
  availability: {
    type: Number,
    enum: ['Immediately', '2 weeks', '1 Month']
  }
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  email: String,
  phoneNumber: Number,
  resumeUrl: String,
  education: [eduSchema],
  application: [appSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
