new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function() {
                alert('This is an alert!');
            },
            storeValue: function() {
                this.value = event.target.value;
            }
        }
    });
