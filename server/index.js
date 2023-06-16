const express = require("express");
const app = express();

app.use(express.json());

require("dotenv").config();
const PORT = process.env.PORT || 4000;
//

const cors = require("cors");
const corsOptions = {
  origin: true,
  credentials: true,
};

app.use(cors(corsOptions));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

//
const blog = require("./routes/blogRoutes");
app.use("/api/v1", blog);

const user = require("./routes/authRoutes");
app.use("/auth", user);

//
app.listen(PORT, () => {
  console.log(`Server is started on PORT no. http://localhost:${PORT}`);
});

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
  res.send("<h1>This is my HomePage</h1>");
});
