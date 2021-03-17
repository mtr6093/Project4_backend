const express = require('express');
const app = express();
const methodOverride = require("method-override");
const cors = require("cors");

app.use(methodOverride("_method"));
app.use(express.json());
app.use(cors());



app.use("/api/equipment", require("./controllers/equipmentController.js"));




    