const app = Vue.createApp({
    data() {
        return {
            detailsVisible: true,
            friends: [
                {
                    id: 'Cutie', 
                    name: 'Cutie Math', 
                    phone: '123-456789', 
                    email: 'cutie@protonmail.com' 
                },
                {
                    id: 'Baby', 
                    name: 'Baby G', 
                    phone: '000-456555', 
                    email: 'baby@protonmail.com' 
                },
            ]
        }
    },
    computed: {
        showDetailStatus() {
            if (this.detailsVisible) {
                return 'Hide Details';
            } else {
                return 'Show Details';
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        }
    }
});

app.component('friend-contact', {});
app.mount('#app');