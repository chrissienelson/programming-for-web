let vm = new Vue({
    el: "#myPlants",
    data: {
        newConsoleObj: {
            name: '',
            botanicalName: '',
            light: '',
            petFriendly: ''
        },

      plants: [
        {
            name: "Snake Plant",
            botanicalName: "Sansevieria trifasciata",
            light: "low to bright indirect light",
            petFriendly: "No"
        }, {
            name: "Monstera",
            botanicalName: "Monstera deliciosa",
            light: "bright indirect to full sun",
            petFriendly: "No"
        }, {
            name: "Fiddle leaf Fig",
            botanicalName: "Ficus lyrata",
            light: "bright indirect light",
            petFriendly: "No"
        }, {
            name: 'Money Tree',
            botanicalName: "Pachira aquatica",
            light: "low to bright indirect light",
            petFriendly: "Yes"
        }, {
            name: 'Bamboo Palm',
            botanicalName: "Chamaedorea seifrizii",
            light: "low to bright indirect light",
            petFriendly: "Yes"
        }
      ]
    },
    methods: {
        submitHandler: () => {
            console.log('submitted');
            vm.plants = vm.plants.concat(vm.newConsoleObj);
        }
    }
});