const app = Vue.createApp({
    data() {
        return {
            myGoalA: "Master Vue.",
            myGoalB: "Make APPs use Vue.",
            deepWorkURL: "https://www.youtube.com/watch?v=2ybOJMibAbA&ab_channel=TheArtofImprovement"
        };
    },
    methods: {
        randomiseGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.myGoalA;
            } else {
                return this.myGoalB;
            }
        }
    }
});

app.mount('#user-goal');