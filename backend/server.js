const express = require("express");
const notes = require("./data/notes");
const app = express();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const dotenv = require("dotenv");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api working");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
