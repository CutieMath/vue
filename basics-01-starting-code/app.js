const app = Vue.createApp({
    data() {
        return {
            myGoal: "Master Vue and make projects with Vue.",
            deepWorkURL: "https://www.youtube.com/watch?v=2ybOJMibAbA&ab_channel=TheArtofImprovement"
        };
    },
    methods: {
        randomiseGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return "Master Vue";
            } else {
                return "Implement Deep Work";
            }
        }
    }
});

app.mount('#user-goal');