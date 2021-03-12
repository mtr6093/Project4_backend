'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(
     "Eqps",
     [
       {
         type:"Tractor",
         model:"3010",
         oilChangeHours:4520,
         hydraulicOilChangeHours:4520,
         fuelFilterChangeHours:4520,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
        type:"Tractor",
        model:"3020",
        oilChangeHours:4520,
        hydraulicOilChangeHours:4520,
        fuelFilterChangeHours:4520,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        type:"Tractor",
        model:"4000",
        oilChangeHours:4520,
        hydraulicOilChangeHours:4520,
        fuelFilterChangeHours:4520,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
    ],
    {}
   )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
