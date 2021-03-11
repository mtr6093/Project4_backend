const express = require('express');
const router = express.Router();

const EquipmentModel = require("../models").Equipment;

  // Get ALL Equipment
  router.get("/", async(req, res)=>{
    console.log("API Working")
    let allEquipment = await EquipmentModel.findAll();
  
    res.json({ allEquipment });
  })



module.exports = router;