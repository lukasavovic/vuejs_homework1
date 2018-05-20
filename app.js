Vue.component('carditem', {
  props: ['card'],
  template: '<div class="card"><img v-bind:src="card.imgUrl" alt=""><p>{{card.phoneName}}</p></div>'
});
var app = new Vue({
  el: '#app',
  
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('http://api.myjson.com/bins/1cpywi')
      .then(response => (this.info = response.data.phones))
  }
});
