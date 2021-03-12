const express = require('express'); //from documentation: express is function
const app = express();//app is an object
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.json());

// app.get('/', (req, res) => {
//     res.json('App is talking');
// });

app.use("/api/equipment", require("./controllers/equipmentController.js"));

app.use("/api/eqp", require("./controllers/eqpController.js"));

app.listen(3000, () => {
    console.log("Nodemon listening");
  });
    