var seener = new Vue({
    el: '#app',
    data: {
      seen: false
    }
  })
  
var clicker = new Vue({
    el: '#clicker',
    data: {
        name: 'Vue.js'
    },
    methods:
    {
        test: function () {
            
            seener.seen == true ? seener.seen = false : seener.seen = true;
        }
    }

})
//   seener.seen = true;
