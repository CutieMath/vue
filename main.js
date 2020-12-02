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

new Vue({
    el: '#root'
});