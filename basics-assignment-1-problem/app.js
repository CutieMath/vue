const app = Vue.createApp({
    data(){
        return {
            myName: "Cutie",
            myAge: 30
        }
    },
    methods: {
        randomNumber(){
            return Math.round(Math.random() * 10);
        }
    }
})

app.mount('#assignment')