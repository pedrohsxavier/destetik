import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
      type: String,
      required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    address: {
      street: {
        type: String,
        required: true
      },
      district: {
        type: String,
        required: true
      },
      houseNumber: {
        type: Number,
        required: true
      },
      geoLocation: {
        lat: {
          type: Number
        },
        lng: {
          type: Number
        }
      }
    },
    services: [{
      type: Schema.Types.ObjectId,
      ref: 'service'
    }]
})

export default mongoose.model('user', UserSchema);
