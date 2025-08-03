import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  sessionType: String,
  date: Date,
  message: String,
  status: {
    type: String,
    default: "Pending"
  }
});

export default mongoose.model("Booking", bookingSchema);
