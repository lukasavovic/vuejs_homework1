
Vue.component('carditem', {
  props: ['card'],
  template: '<div class="card"><img v-bind:src="card.imgUrl" alt=""><p>{{card.phoneName}}</p></div>'
});
var app = new Vue({
  el: '#app',
  data: {
    url: "http://api.myjson.com/bins/1cpywi",
    info: ""
  },
  methods: {
    ajax: function() {
      var request = new XMLHttpRequest();
      request.onload = function(vm) {
          vm.info = this.response;
          vm.info = JSON.parse(vm.info);
      }.bind(request, this);
      request.open("GET", this.url);
      request.send();
    }
  }, beforeMount(){
    this.ajax()
  }

  
})