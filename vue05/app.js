const app = Vue.createApp({
  data() {
    return { 
      enteredGoal: '',
      goals: [] 
    };
  },
  computed: {
    goalsCheck() {
      if(this.goals.length === 0){
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoal);
    }, 
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  }
});

app.mount('#user-goals');
 