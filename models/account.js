import mongoose from 'mongoose'

const Schema = mongoose.Schema

const appSchema = new Schema({
	author: { type: Schema.Types.ObjectId, ref: 'Profile' },
	company: {
		type: String,
		required: true
	},
	position: String,
	type: {
		type: String,
		enum: ['part time', 'full time', 'temporary', 'contract']
	},
	availability: {
		type: String,
		enum: ['immediately', '2 weeks', '1 month']
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

const accountSchema = new Schema({
	author: { type: Schema.Types.ObjectId, ref: 'Profile' },
	address: String,
	email: String,
	phoneNo: {
    type: Number,
  },
	dateOfBirth: Date,
  languages: [String],
  accountPhoto: String,
	applications: [appSchema]
}, {
	timestamps: true
})

const Account = mongoose.model('Account', accountSchema)

export {
  Account
}