const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all students
router.get("/", async (req, res) => {
    const result = await db.query("SELECT * FROM students ORDER BY id");
    res.json(result.rows);
});

// Get student by ID
router.get("/:id", async (req, res) => {
    const result = await db.query(
        "SELECT * FROM students WHERE id=$1",
        [req.params.id]
    );

    res.json(result.rows[0]);
});

// Add student
router.post("/", async (req, res) => {

    const { name, email } = req.body;

    await db.query(
        "INSERT INTO students(name,email) VALUES($1,$2)",
        [name, email]
    );

    res.json({
        message: "Student Added"
    });

});

// Update student
router.put("/:id", async (req, res) => {

    const { name, email } = req.body;

    await db.query(
        "UPDATE students SET name=$1,email=$2 WHERE id=$3",
        [name, email, req.params.id]
    );

    res.json({
        message: "Student Updated"
    });

});

// Delete student
router.delete("/:id", async (req, res) => {

    await db.query(
        "DELETE FROM students WHERE id=$1",
        [req.params.id]
    );

    res.json({
        message: "Student Deleted"
    });

});

module.exports = router;
