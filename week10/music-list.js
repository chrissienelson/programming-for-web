Vue.component('streaming-track', {
    template: `<div class="track">
        <h3>{{track.title}}</h3>
        <div><img v-bind:src="track.cover" alt=""></div>
        <small>{{track.artist}}</small>
    </div>`,
    props: ['track']
});
const vm = new Vue({
    el: "#musicApp",
    data: {
        track:[]
    },
    mounted () {
        axios 
            .get('./data/music-list.json')
            .then(response => {
                console.log('response', response);
                vm.tracks = response.data;
                console.log(vm.tracks);
            });

    }
})