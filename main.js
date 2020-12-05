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
    <div class="modal is-active">
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

new Vue({
    el: '#root', 
    data: {
        showModal: false
    }
});