const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sree@2407",
    database: "studentdb"
});

db.connect(err => {
    if (err) {
        console.log("DB Error:", err);
    } else {
        console.log("Connected to MySQL");
    }
});

app.post("/add-student", (req, res) => {
    const { name, email, student_id, phone, department } = req.body;

    const sql = `
        INSERT INTO students 
        (name, email, student_id, phone, department) 
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(sql, [name, email, student_id, phone, department], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Insert failed");
        } else {
            res.send("Student saved successfully");
        }
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
