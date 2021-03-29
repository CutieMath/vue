const app = Vue.createApp({
    data() {
        return {
            enteredTask: '',
            tasks: [],
            isVisible: true
        }
    },
    computed: {
        visibilityClasses() {
            return { visible: this.isVisible };
        },
        hideOrShow() {
            if (this.isVisible) {
                return 'Hide List'
            } else {
                return 'Show List'
            }
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
        },
        toggleVisible() {
            this.isVisible = !this.isVisible;
        }
    }
});

app.mount('#assignment');