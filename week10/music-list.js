const vw = new Vue({
    el: "#musicApp",
    data: {
        track:[]
    },
    mounted () {
        axios 
            .get('./week10/music-list.json')
            .then(response => {
                console.log('response', response);
                vm.tracks = response.data;
                console.log(vm.tracks);
            });

    }
})