const app = Vue.createApp({
    data() {
        return {
            goalA: 'Establish a habit to learn 2 hours Vue everyday, including weekends.',
            goalB: 'Solve Proto questions at hand.',
            goalC: 'Feel comfortable to start my own Vue project.',
            vueLink: 'https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463138#questions/12725120',
        };
    },
    // functions
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5 ) {
                return this.goalB;
            } else {
                return this.goalC;
            }
        }
    }
});
app.mount('#user-goal');