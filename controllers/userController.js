import User from "../models/users.js";
import bcrypt from "bcrypt";

const createUser = async (req, resp) => {
  try {
    const { fname, lname, email, mobileNo, password } = req.body;

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return resp
        .status(409)
        .json({ statusCode: 409, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fname,
      lname,
      email,
      mobileNo,
      password: hashedPassword,
    });

    await newUser.save();
    return resp
      .status(200)
      .json({ statusCode: 200, message: "User added successfully" });
  } catch (error) {
    return resp
      .status(500)
      .json({ statusCode: 500, message: "Internal server error" });
  }
};
const getusers = async (req, resp) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    return resp.status(200).json({ statusCode: 200, data: users });
  } catch (error) {
    return resp
      .status(500)
      .json({ statusCode: 500, message: "internal server error" });
  }
};
const updateUser = async (req, resp) => {
  try {
    const { id } = req.params;
    const { fname, lname, email, mobileNo } = req.body;
      await User.findByIdAndUpdate(
      { _id: id },
      {
      fname,
      lname,
      email,
      mobileNo,
      }
    );
    return resp
      .status(200)
      .json({ statusCode: 200, message: "User updated successfuly" });
  } catch (error) {
    return resp
      .status(500)
      .json({ statusCode: 500, message: "internal server error" });
  }
};
const delateUser = async (req, resp) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete({ _id: id });
    return resp
      .status(200)
      .json({ statusCode: 200, message: "Department deleted successfuly" });
  } catch (error) {
    return resp
      .status(500)
      .json({ statusCode: 500, message: "internal server error" });
  }
};
export {getusers, createUser,updateUser,delateUser };
