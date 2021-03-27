const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            paragVisible: true,
        };
    },
    computed: {
        paragClass(){
            return {
                user1: this.inputClass === 'user1', 
                user2: this.inputClass === 'user2', 
                visible: this.paragVisible, 
                hidden: !this.paragVisible
            }
        }
    },
    methods: {
        togglePVisibility() {
            this.paragVisible = !this.paragVisible;
        }
    }
});

app.mount('#assignment');