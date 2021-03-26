const app = Vue.createApp({
  data() {
    return {
      counter: 8,
      name: '',
      confirmedName: '',
      fullname: ''
    };
  },
  watch: {
    confirmedName(value) {
      if(value === '') {
        this.fullname = "";
      }
      this.fullname = value + " " + "Baby";
    }
  },
  computed: {
    // fullname() {
    //   if ( this.confirmedName === '') {
    //     return '';
    //   }
    //   return this.confirmedName + ' ' + 'Cutie';
    // }
  },
  methods: {
    // This function was moved into computed property
    // Because everytime a vue property run, all functions will run again
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
