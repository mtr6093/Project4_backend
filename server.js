const express = require('express'); //from documentation: express is function
const app = express();//app is an object


app.get('/', (req, res) => {
    res.json('App is talking');
});

app.use("/api/equipment", require("./controllers/equipmentController.js"));


app.listen(3000, () => {
    console.log("Nodemon listening");
  });
    