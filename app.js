const express = require("express");
const path = require("path")

const app = express();
const port = 3000;

app.use("/assets",express.static('public/assets'));

app.use(
    "/fontawesome",
    express.static(path.resolve("node_modules/@fortawesome/fontawesome-free"))
  );

app.use("**",function(req, res){
    return res.sendFile(path.resolve(`public/index.html`));
});
app.use("/fontawesome",express.static('node_modules/@fortawesome/fontawesome/css'));
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})