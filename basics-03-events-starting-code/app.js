const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: ""
    };
  },
  methods: {
    submitForm(){
      alert('Submitted!');
    },
    setName(){
      this.name = event.target.value;
    },
    confirmName(){
      this.confirmedName = event.target.value;
    },
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