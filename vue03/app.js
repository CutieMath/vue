const app = Vue.createApp({
  data() {
    return {
      counter: 8,
      name: '',
      confirmedName: '',
      confirmedLastName: ''
    };
  },
  computed: {
    fullname() {
      if ( this.confirmedName === '') {
        return '';
      } 
      return this.confirmedName + ' ' + this.confirmedLastName;
    }
  },
  watch: {
    counter(value) {
      if (value > 30) {
        this.counter = 0;
      }
    }
  },
  methods: {
    // This function was moved into computed property
    // Because everytime a vue property run, all functions will run again
    // For every re-render cycle
    // outputFullname(){
    //   if ( this.confirmedName === '') {
    //     return '';
    //   }
    //   return this.confirmedName + ' ' + 'Cutie';
    // },
    resetInput() {
      this.confirmedName = '';
      this.confirmedLastName = '';
    },
    confirmInput(){
      this.confirmedName = this.name
    },
    submitForm(){
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
