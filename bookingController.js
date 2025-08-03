import Booking from "../models/Booking.js";

// POST /api/bookings/book
export const createBooking = async (req, res) => {
  try {
    const { name, email, sessionType, date, message } = req.body;
    const newBooking = new Booking({ name, email, sessionType, date, message });
    await newBooking.save();
    res.status(201).json({ message: "Booking request submitted", booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: "Failed to create booking", error });
  }
};

// GET /api/bookings
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ date: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch bookings", error });
  }
};

// PUT /api/bookings/:id/status
export const updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: "Failed to update booking", error });
  }
};
