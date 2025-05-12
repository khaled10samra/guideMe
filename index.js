
  




const express = require("express");
const app = express();
const authRoutes = require("./route/auth");
const museumRoutes = require('./route/museum'); // Adjust path as needed
const communityRoutes = require('./route/community'); // Adjust path as needed

require("./mongo_connection/mongo_connection"); // Connect to MongoDB

// ===== Middleware =====
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// ===== Routes =====
app.use("/auth/v1", authRoutes); // User auth routes
app.use('/museum/v1', museumRoutes); // Prefix routes with /museum
app.use("/communityRoutes/v1", communityRoutes); // User auth routes

// ===== Test Route =====
app.get("/", (req, res) => {
  res.send("Hi, my first server");
});

// ===== Start Server =====
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
