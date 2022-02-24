const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    // Note: Click listener doesn't need "return"
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    }
  }
});

app.mount('#events');
