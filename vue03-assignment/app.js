const app = Vue.createApp({
    data() {
        return {
            inputOne: "Cutie",
            inputTwo: "Cutie with enter key",
            confirmedInputTwo: "Cutie with enter key"
        }
    },
    methods: {
        showAlert() {
            alert("I am an alert! xx");
        },
        setInputOne(event) {
            this.inputOne = event.target.value;
        },
        setInputTwo(event) {
            this.inputTwo = event.target.value;
        },
        confirmInputTwo() {
            this.confirmedInputTwo = this.inputTwo;
        }
    }
});

app.mount('#assignment');