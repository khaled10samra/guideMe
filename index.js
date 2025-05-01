
// const express= require("express");
// const app =express();


// //const uploadImage = require('./route/cloudinary');





// // require("dotenv").config();
// require("./mongo_connection/mongo_connection");

// //  const cors = require("cors");
// //const mongoSanitize = require("express-mongo-sanitize");
// // const xss = require("xss-clean");
// const bodyparser = require("body-parser");
// const auth = require("./route/auth");
// // const cookieParser=require('cookie-parser');
// require("./mongo_connection/mongo_connection");

// app.use(bodyparser.json());
// app.use(express.json());
// //  app.use(cors())
// // Middleware configuration
// // app.use(
// //   cors({
// //     origin: "*",
// //     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
// //     credentials: true,
// //   })
// // );
 
// // app.use(express.json({ limit: "100kb" }));
// // app.use(bodyparser.json());
// // app.use(xss());
// // app.use(cookieParser());


// app.use("/auth/v1", auth);
// // app.use("/trip/v1", trip);
// //app.use("/Image", uploadImage);

// //app.use("/setting/v1", setting);

// app.get('/', (req, res) => {
//     res.send('Hi, my first server');
//   });
  


  


// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT  } `);
// });



const express = require("express");
const app = express();
const authRoutes = require("./route/auth");
const museumRoutes = require('./route/museum'); // Adjust path as needed

require("./mongo_connection/mongo_connection"); // Connect to MongoDB

// ===== Middleware =====
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// ===== Routes =====
app.use("/auth/v1", authRoutes); // User auth routes
app.use('/museum/v1', museumRoutes); // Prefix routes with /museum

// ===== Test Route =====
app.get("/", (req, res) => {
  res.send("Hi, my first server");
});

// ===== Start Server =====
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
