'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(
     "Equipment",
     [
       {
         name:"Tractor",
         model:"3010",
         hoursOilChanged:4520,
         hoursHydraulicOilChanged:4520,
         hoursFuelFilterChanged:4520,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
        name:"Tractor",
        model:"3020",
        hoursOilChanged:4520,
        hoursHydraulicOilChanged:4520,
        hoursFuelFilterChanged:4520,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name:"Tractor",
        model:"4000",
        hoursOilChanged:4520,
        hoursHydraulicOilChanged:4520,
        hoursFuelFilterChanged:4520,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name:"Tractor",
        model:"4230",
        hoursOilChanged:4520,
        hoursHydraulicOilChanged:4520,
        hoursFuelFilterChanged:4520,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name:"Tractor",
        model:"4240",
        hoursOilChanged:4520,
        hoursHydraulicOilChanged:4520,
        hoursFuelFilterChanged:4520,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name:"Tractor",
        model:"4440",
        hoursOilChanged:4520,
        hoursHydraulicOilChanged:4520,
        hoursFuelFilterChanged:4520,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name:"Tractor",
        model:"4440G",
        hoursOilChanged:4520,
        hoursHydraulicOilChanged:4520,
        hoursFuelFilterChanged:4520,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name:"Tractor",
        model:"7400",
        hoursOilChanged:4520,
        hoursHydraulicOilChanged:4520,
        hoursFuelFilterChanged:4520,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name:"Tractor",
        model:"7410",
        hoursOilChanged:4520,
        hoursHydraulicOilChanged:4520,
        hoursFuelFilterChanged:4520,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name:"Tractor",
        model:"6130D",
        hoursOilChanged:4520,
        hoursHydraulicOilChanged:4520,
        hoursFuelFilterChanged:4520,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name:"Tractor",
        model:"4055",
        hoursOilChanged:4520,
        hoursHydraulicOilChanged:4520,
        hoursFuelFilterChanged:4520,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name:"Tractor",
        model:"8310",
        hoursOilChanged:4520,
        hoursHydraulicOilChanged:4520,
        hoursFuelFilterChanged:4520,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name:"Tractor",
        model:"8130",
        hoursOilChanged:4520,
        hoursHydraulicOilChanged:4520,
        hoursFuelFilterChanged:4520,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name:"Tractor",
        model:"9120",
        hoursOilChanged:4520,
        hoursHydraulicOilChanged:4520,
        hoursFuelFilterChanged:4520,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name:"Tractor",
        model:"4960",
        hoursOilChanged:4520,
        hoursHydraulicOilChanged:4520,
        hoursFuelFilterChanged:4520,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
     
      {
        name:"Tractor",
        model:"7330",
        hoursOilChanged:4520,
        hoursHydraulicOilChanged:4520,
        hoursFuelFilterChanged:4520,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name:"Combine",
        model:"9660",
        hoursOilChanged:4520,
        hoursHydraulicOilChanged:4520,
        hoursFuelFilterChanged:4520,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name:"Combine",
        model:"9660G",
        hoursOilChanged:4520,
        hoursHydraulicOilChanged:4520,
        hoursFuelFilterChanged:4520,
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
