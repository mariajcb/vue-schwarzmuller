new Vue({
  el: '#exercise',
  data: {
    effect: true,
    userClass: '',
    isVisible: true,
    myStyle: {
        backgroundColor: 'purple',
        width: '100px',
        height: '150px'
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        vm.effect = !vm.effect;
      }, 1000);
    },
    startProgress: function() {
      var vm = this;
      var width = 0;
      setInterval(function() {
        width = width + 10;
        vm.progressBar.width = width + 'px';
      }, 500)
    }
  }
});
