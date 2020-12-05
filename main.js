// message component
Vue.component('baby-message', {
    props: ['title', 'body'],
    data() {
        return {
            isVisible: true
        };
    },
    template: `
    <div>
        <article class="message m-5" v-show="isVisible">
            <div class="message-header">
            <p>{{ title }}</p>
            <button @click="hideModal" class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    </div>
  `,
  methods: {
      hideModal(){
          this.isVisible = false;
      }
  }
});


// modal component 
Vue.component('baby-modal', {
    template: `
    <div class="modal is-active is-centered">
        <div @click="$emit('close')" class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <slot></slot>
            </div>
        </div>
        <button @click="$emit('close')" class="modal-close is-large" aria-label="close"></button>
    </div>
    `
})


// tabs component
Vue.component('tabs', {
    template: `
    <div>
        <div class="tabs is-centered">
            <ul>
                <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }"> 
                    <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                </li>
            </ul>
        </div>
        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
    `,
    data(){
        return { tabs: [] };
    },
    created(){
        this.tabs = this.$children;
    }, 
    methods: {
        selectTab(selectedTab){
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
})

Vue.component('tab', {
    props: {
        name: { required: true },
        selected: { default: false }
    },
    template: `
        <div v-show="isActive"><slot></slot></div>
    `,
    data() {
        return {
            isActive: false
        }
    },
    computed: {
        href(){
            return '#' + this.name.toLowerCase().replace(/ /g, '-' );
        }
    },
    mounted() {
        this.isActive = this.selected;
    }
})

new Vue({
    el: '#root', 
    data: {
        showModal: false
    }
});