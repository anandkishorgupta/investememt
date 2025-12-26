import cors from "cors";
import express from "express";
import errorMiddleware from "./middlewares/error.middleware.js";
import routes from "./services/routes.js";
const app = express();

// Middleware
app.use(cors({
  origin: ["http://localhost:5173","https://investememt.onrender.com"], // your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // include PATCH here
  credentials: true, // if you need cookies/auth
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(generalLimiter); // applies to all routes

// Static folder (images)
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api", routes);

// Error handler
app.use(errorMiddleware);

// Global error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message || "Server Error",
  });
});

export default app;
