const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    // Note: Click listener doesn't need "return"
    add() {
      this.counter++;
    },
    reduce() {
      this.counter--;
    }
  }
});

app.mount('#events');
