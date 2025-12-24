import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "./src/models/admin.model.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: "admin@gmail.com" });
    
    if (existingAdmin) {
      console.log("Admin user already exists!");
      process.exit(0);
    }

    // Create default admin
    const admin = new Admin({
      email: "admin@gmail.com",
      password: "admin",
      name: "Admin User",
      role: "Administrator",
    });

    await admin.save();
    console.log("Default admin created successfully!");
    console.log("Email: admin@gmail.com");
    console.log("Password: admin");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding admin:", error);
    process.exit(1);
  }
};

seedAdmin();
