import express from 'express';
import { uploadPhoto, getPhotos } from '../controllers/photoController.js';
import upload from '../middleware/multer.js';

const router = express.Router();

router.post('/upload', upload.single('image'), uploadPhoto);
router.get('/', getPhotos);

export default router;
