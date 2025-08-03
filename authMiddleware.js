import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  let token;

  // Check for Bearer token in Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1]; // Get token after "Bearer"

      // Decode the token using your JWT_SECRET from .env
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find the user and attach to request object (excluding password)
      req.user = await User.findById(decoded.id).select("-password");

      next(); // Proceed to next middleware or route
    } catch (error) {
      console.error("Token verification failed:", error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};