import mongoose from "mongoose";

const createConnection = async () => {
  try {
    
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};
export default createConnection;
