const app = Vue.createApp({
    data(){
        return {
            number: 0,
        }
    },
    computed: {
        result() {
            if (this.number < 37) {
                return "Not there yet x Do it again"
            } else if (this.number > 37) {
                return "TOO MUCH!";
            } else {
                return this.number + " You WON! 😍";
            }
        }
    },
    watch: {
        number(value){
            if (value > 37) {
                const that = this;
                setTimeout(function (){
                    that.number = 0;
                }, 5000);
            }
        }
    },
    methods: {
        addFive() {
            this.number += 5;
        },
        addOne() {
            this.number += 1;
        }
    }

});

app.mount("#assignment");