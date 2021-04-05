Vue.component('plants-component', {
    template: `
    <tr>
        <td>{{name}}</td>
        <td>{{botanicalname}}</td>
        <td>{{light}}</td>
        <td>{{petfriendly}}</td>
    </tr>`,
    props: ['name', 'botanicalname', 'light', 'petfriendly']
  });


const vm = new Vue({
    el: "#myPlants",
    data: {
        newPlantObj: {
            name: '',
            botanicalname: '',
            light: '',
            petfriendly: ''
        },

      plants: [
        {
            name: "Snake Plant",
            botanicalname: "Sansevieria trifasciata",
            light: "low to bright indirect light",
            petfriendly: "No"
        }, {
            name: "Monstera",
            botanicalname: "Monstera deliciosa",
            light: "bright indirect to full sun",
            petfriendly: "No"
        }, {
            name: "Fiddle leaf Fig",
            botanicalname: "Ficus lyrata",
            light: "bright indirect light",
            petfriendly: "No"
        }, {
            name: 'Money Tree',
            botanicalname: "Pachira aquatica",
            light: "low to bright indirect light",
            petfriendly: "Yes"
        }, {
            name: 'Bamboo Palm',
            botanicalname: "Chamaedorea seifrizii",
            light: "low to bright indirect light",
            petfriendly: "Yes"
        }
      ]
    },


    methods: {
        submitHandler: () => {
            console.log('submitted');
            vm.plants = vm.plants.concat(vm.newPlantObj);
            vm.resetForm();
        },
        resetForm: () => {
            vm.newPlantObj = {
                name: '',
                botanicalname: '',
                light: '',
                petfriendly: ''

            };
        }
    }
});