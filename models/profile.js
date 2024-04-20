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

const profileSchema = new Schema({
  name: String,
  avatar: String,
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'},
  email: String,
  phoneNumber: Number,
  resumeUrl: String,
  education: [eduSchema],
  resumeUrl: String,
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
