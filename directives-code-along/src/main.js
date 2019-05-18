import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
    bind(el, binding, vnode) {
        //hardcode value like this:
        // el.style.backgroundColor = 'green';
        //bind color to different values:
        // el.style.backgroundColor = binding.value;
        var delay = 0;
        if (binding.modifiers['delayed']) {
            delay = 3000;
        }
        setTimeout(() => {
            //if we have :background then background color will be changed
            //otherwise text color will change
            //with delay of 3secs
            if (binding.arg == 'background') {
                el.style.backgroundColor = binding.value;
            } else {
                el.style.color = binding.value;
            }
        }, delay);
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
