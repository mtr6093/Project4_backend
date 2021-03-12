const express = require('express');
const router = express.Router();

const EquipmentModel = require("../models").Equipment;

  // Get ALL Equipment
  router.get("/", async(req, res)=>{
    console.log("API Working")
    let allEquipment = await EquipmentModel.findAll();
  
    res.json({ allEquipment });
  })

  // Get Single Piece of Equipment
  router.get("/:id", async (req, res) => {
    let equip = await EquipmentModel.findByPk(req.params.id);
    res.json({ equip });
  });

  // UPDATE Equipment
router.put("/:id", async (req, res) => {
  EquipmentModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  console.log("updated")
  res.json({ EquipmentModel });
});

module.exports = router;