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
  let equip = await EquipmentModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  console.log("updated")
  res.json({ equip });
});

// // Create Equipment
// router.post("/", async (req, res) => {
//   let equip = await EquipmentModel.create(req.body).then((response)=>{
//     res.json({ response })
//     console.log(response)
//     console.log(req.body)

//   })
//   ;
// });

// create equipment
router.post("/", async (req, res) => {
  let equip = await EquipmentModel.create(req.body)
  console.log(equip)
  ;

  res.json({ equip })
})



// Delete Equipment
router.delete("/:id", async (req, res) => {
  await EquipmentModel.destroy({ where: { id: req.params.id }});
  res.json({ message: `equipment with id ${req.params.id} was deleted` });
});


module.exports = router;