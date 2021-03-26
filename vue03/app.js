const app = Vue.createApp({
  data() {
    return {
      counter: 8,
      name: '',
      confirmedName: ''
    };
  },
  computed: {
    fullname() {
      if ( this.confirmedName === '') {
        return '';
      }
      return this.confirmedName + ' ' + 'Cutie';
    }
  },
  methods: {
    // outputFullname(){
    //   if ( this.confirmedName === '') {
    //     return '';
    //   }
    //   return this.confirmedName + ' ' + 'Cutie';
    // },
    resetInput() {
      this.confirmedName = '';
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
