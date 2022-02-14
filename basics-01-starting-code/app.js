const app = Vue.createApp({
    data() {
        return {
            myGoal: "Master Vue and make projects with Vue.",
            deepWorkURL: "https://www.youtube.com/watch?v=2ybOJMibAbA&ab_channel=TheArtofImprovement"
        };
    }
});

app.mount('#user-goal');