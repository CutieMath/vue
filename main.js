Vue.component('task-list', {
    template: '<div><task v-for="task in tasks">{{ task.description }}</task></div>',
    data(){
        return {
            tasks: [
                { description: 'Being cute', complete: true},
                { description: 'Being sweet', complete: false},
                { description: 'Being honey', complete: false},
                { description: 'Being yummy', complete: true},
            ]
        };
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});