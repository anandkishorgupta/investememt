import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "./src/models/admin.model.js";

dotenv.config();

const testAdminLogin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Find admin
    const admin = await Admin.findOne({ email: "admin@gmail.com" });
    
    if (!admin) {
      console.log("Admin user not found!");
      process.exit(1);
    }

    console.log("Admin found:");
    console.log("Email:", admin.email);
    console.log("Name:", admin.name);
    console.log("Role:", admin.role);
    console.log("Password hash:", admin.password);
    
    // Test password comparison
    const isMatch = await admin.comparePassword("admin");
    console.log("Password 'admin' matches:", isMatch);
    
    process.exit(0);
  } catch (error) {
    console.error("Error testing admin:", error);
    process.exit(1);
  }
};

testAdminLogin();
