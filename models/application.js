import mongoose from 'mongoose'

const Schema = mongoose.Schema

const applicationSchema = new Schema({
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: 'Profile',
        required: true
    },
    availability: {
        type: String,
        enum: ['immediately', '2 weeks', '1 month']
    },
    company: {
        type: String,
        required: true
    },
    position: String,
    type: {
        type: String,
        enum: ['part time', 'full time', 'temporary', 'contract']
    },
    location: String,
    mileRange: {
        type: Number,
        enum: [0, 5, 10, 15, 20]
    },
    workDays: {
        type: String,
        enum: ['weekends only', 'weekdays only']
    },
    skills: [String],
}, {
  timestamps: true
})


const Application = mongoose.model('Application', applicationSchema)

export {
  Application
}

