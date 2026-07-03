const express = require("express");
const studentRoutes = require("./routes/students");

const app = express();

app.use(express.json());

app.use("/students", studentRoutes);

app.get("/", (req, res) => {
    res.send("PostgreSQL Student CRUD API");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
