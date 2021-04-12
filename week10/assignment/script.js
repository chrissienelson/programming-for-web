
// Add your code here


let vm = new Vue({
    el: "#myApp",
    data: {
      artObjects: []
    },
    mounted: function () {
      const baseUrl = "https://collectionapi.metmuseum.org/public/collection/v1/objects";

// fetch ids from department

      axios.get(baseUrl + "?departmentIds=13").then(function(response) {
        console.log("response", response);
        let responseArray = response.data.objectIDs.slice(0, 9);
        console.log(responseArray);
        for(let i = 0; i < responseArray.length; i++) {
          axios.get(baseUrl + "/" + responseArray[i]).then(function(objectResponse) {
            console.log(":D", objectResponse.data);
            vm.artObjects.push(objectResponse.data);
          })
        }
      })
    }
  });
  