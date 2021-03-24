// Use Vue
Vue.createApp({
    data() {
        // define the user input and structure it
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        // add the value from user input
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        },
    },
}).mount('#app');




// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');
// function add(){
//     const entered = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = entered;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';
// }
// buttonEl.addEventListener('click', add);