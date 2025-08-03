import Photo from "../models/Photo.js";

// POST /api/photos/upload
export const uploadPhoto = async (req, res) => {
  try {
    const { title, category } = req.body;
    const imageUrl = req.file.path; // Cloudinary URL

    const newPhoto = new Photo({ title, imageUrl, category });
    await newPhoto.save();
    res.status(201).json({ message: "Photo uploaded successfully", photo: newPhoto });
  } catch (error) {
    res.status(500).json({ message: "Failed to upload photo", error });
  }
};

// GET /api/photos
export const getPhotos = async (req, res) => {
  try {
    const photos = await Photo.find().sort({ uploadedAt: -1 });
    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch photos", error });
  }
};
