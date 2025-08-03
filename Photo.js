import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  category: String,
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Photo", photoSchema);
