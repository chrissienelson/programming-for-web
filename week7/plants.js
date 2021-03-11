let vm = new Vue({
    el: "#myPlants",
    data: {
      plants: [
        {
            name: "Snake Plant",
            botanicalName: "Sansevieria trifasciata",
            light: "Low to bright indirect light",
            petFriendly: “No”
        },
        {
            name: "Monstera",
            botanicalName: 'Monstera deliciosa',
            light: "Bright indirect to full sun",
            petFriendly: “No”
        },
        {
            name: “Fiddle Leaf Fig”,
            botanicalName: "Ficus lyrata",
            light: "Bright indirect light",
            petFriendly: “No”
        },
        {
            name: 'Money Tree',
            botanicalName: "Pachira aquatica",
            light: "Low to bright indirect light",
            petFriendly: “Yes”
        },
        {
            name: 'Bamboo Palm',
            botanicalName: "Chamaedorea seifrizii",
            light: "Low to bright indirect light",
            petFriendly: “Yes”
        }

      ]
  
    }
});