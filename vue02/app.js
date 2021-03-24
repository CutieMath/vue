const app = Vue.createApp({
    data() {
        return {
            goal: 'Establish a habit to learn 2 hours Vue everyday, including weekends.',
            vueLink: 'https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463138#questions/12725120',
        };
    },
});

app.mount('#user-goal');