import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobileNo: { type: String,required: true},
  password: { type: String, required: true, minlength: 6 },
},{ timestamps: true });

const User = mongoose.model("User", userSchema);

export default User