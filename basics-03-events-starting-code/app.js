const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: ""
    };
  },
  methods: {
    outputFullName(){
      if(this.name == ""){
        return "";
      } 
      return this.name + " " + "Cutie";
    },
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
    },
    resetInput(){
      this.name = "";
      this.confirmedName = "";
    }
  }
});

app.mount('#events');
