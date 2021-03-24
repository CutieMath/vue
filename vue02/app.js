const app = Vue.createApp({
    data() {
        return {
            goal: 'Establish a habit to learn 2 hours Vue everyday, including weekends.',
            vueLink: 'https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463138#questions/12725120',
        };
    },
    // functions
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5 ) {
                return 'Solve Proto questions at hand.';
            } else {
                return 'Feel comfortable to do my own Vue projects.';
            }
        }
    }
});

app.mount('#user-goal');