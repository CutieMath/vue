const app = Vue.createApp({
    data() {
        return {
            myName: "Cutie",
            myAge: 30,
            imageURL: "https://cdn.gizmostory.com/wp-content/uploads/2022/01/My-Dress-Up-Darling-Episode-1-Anime-Corner-2.jpg?strip=all&lossy=1&ssl=1",
            textValue: "Cutie Vue x"
        }
    },
    methods: {
        randomNumber() {
            return Math.round(Math.random() * 10);
        }
    }
})

app.mount('#assignment')