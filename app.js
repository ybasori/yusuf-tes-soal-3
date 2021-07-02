const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const Client = require("pg").Client;

const client = new Client({
    user: "wjiongpghpgfdr",
    host: "ec2-52-86-25-51.compute-1.amazonaws.com",
    database: "depfch5hthtu4c",
    password:
        "d3aa8c8cb4361ac938030b4a955db27b0d99796a9d7ae9c31e9f3a8e405b3493",
    port: 5432,
    ssl: { rejectUnauthorized: false },
});
client.connect();
app.use(cors());
app.use("/assets", express.static("public/assets"));

app.use(
    "/fontawesome",
    express.static(path.resolve("node_modules/@fortawesome/fontawesome-free"))
);

app.get("/customer", (req, res) => {
    let query = "SELECT * FROM customer ORDER BY id ASC";
    client.query(query, (err, result) => {
        if (err) throw err;
        res.json({
            data: result.rows,
        });
    });
});

app.post("/customer", (req, res) => {
    let query = `INSERT INTO customer (code, name, email, status) VALUES ('${req.body.code}','${req.body.name}','${req.body.email}','${req.body.status}')`;
    client.query(query, (err, result) => {
        if (err) throw err;
        res.json({
            msg: "success",
        });
    });
});

app.put("/customer/:id", (req, res) => {
    let query = `UPDATE customer SET code='${req.body.code}', name='${req.body.name}', email='${req.body.email}', status='${req.body.status}' WHERE id='${req.params.id}'`;
    client.query(query, (err, result) => {
        if (err) throw err;
        res.json({
            msg: "success",
        });
    });
});

app.delete("/customer/:id", (req, res) => {
    let query = `DELETE FROM customer WHERE id='${req.params.id}'`;
    client.query(query, (err, result) => {
        if (err) throw err;
        res.json({
            msg: "success",
        });
    });
});

app.get("/api/v1/province", (req, res) => {
    let query = `SELECT * FROM wilayah WHERE parent_id='0'`;
    client.query(query, (err, result) => {
        if (err) throw err;
        res.json({
            msg: "success",
        });
    });
});

app.get("**", function (req, res) {
    return res.sendFile(path.resolve(`public/index.html`));
});
app.use(
    "/fontawesome",
    express.static("node_modules/@fortawesome/fontawesome/css")
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

process.on("SIGINT", function () {
    console.log("Caught interrupt signal");

    client.end();
    process.exit();
});
