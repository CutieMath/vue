const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    submitForm(event){
      event.preventDefault();
      alert('submitted x');
    },
    add(num){
      this.counter = this.counter + num;
    },
    minus(num){
      this.counter = this.counter - num;
    },
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
    }
  }
});

app.mount('#events');
