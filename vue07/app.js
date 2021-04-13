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

app.component('friend-contact', {
    template:`
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">{{ showDetailStatus }}</button>
          <ul v-if="detailsVisible">
            <li><strong>Phone: </strong>{{ friend.phone }}</li>
            <li><strong>Email: </strong>{{ friend.email }}</li>
          </ul>
        </li>
    `,
    data(){
        return {
            detailsVisible: false,
            friend: {
                id: 'Cutie', 
                name: 'Cutie Math', 
                phone: '123-456789', 
                email: 'cutie@protonmail.com' 
            },
        }
    },
    methods: {
        toggleDetails(){
            this.detailsVisible = !this.detailsVisible;
        }
    }
});
app.mount('#app');