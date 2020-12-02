Vue.component('task', {
    template: '<p><slot></slot></p>',
});

new Vue({
    el: '#root'
})