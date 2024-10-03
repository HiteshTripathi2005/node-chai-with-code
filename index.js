import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", (req, res) => {
  res.send("users");
});

app.get("/users/:id", (req, res) => {
  res.send(req.params.id);
});

app.get("/api", (req, res) => {
  res.json({
    success: true,
    name: "test",
    message: "Hello World",
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
