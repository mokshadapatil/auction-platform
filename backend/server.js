const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/auctionDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const auctionRoutes = require("./routes/auction");
app.use("/api/auctions", auctionRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
