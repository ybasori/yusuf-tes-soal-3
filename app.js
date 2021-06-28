const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "wjiongpghpgfdr",
    host: "ec2-52-86-25-51.compute-1.amazonaws.com",
    database: "depfch5hthtu4c",
    password:
        "d3aa8c8cb4361ac938030b4a955db27b0d99796a9d7ae9c31e9f3a8e405b3493",
    port: 5432,
});

app.use("/assets", express.static("public/assets"));

app.use(
    "/fontawesome",
    express.static(path.resolve("node_modules/@fortawesome/fontawesome-free"))
);

app.get("/customer", (req, res) => {
    let query = "SELECT * FROM customer";
    pool.query(query, (error, results) => {
        if (error) {
            throw error;
        }
        res.json({
            msg: "bla",
            data: res,
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
