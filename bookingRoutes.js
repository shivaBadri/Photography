import express from 'express';
import {
  createBooking,
  getBookings,
  updateBookingStatus
} from '../controllers/bookingController.js';

const router = express.Router();

router.post('/book', createBooking);
router.get('/', getBookings);
router.put('/:id/status', updateBookingStatus);

export default router;
