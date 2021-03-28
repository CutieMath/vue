const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            isVisible: true,
            userInputStyle: '',
        }
    },
    computed: {
        userDeterminedInput() {
            return { user1: this.userInput === 'user1', user2: this.userInput === 'user2' };
        },
        visibleClasses(){
            return {
                visible: this.isVisible,
                hidden: !this.isVisible
            }
        }
    },
    methods: {
        toggleVisible() {
            this.isVisible = !this.isVisible;
        }
    }
});

app.mount('#assignment');