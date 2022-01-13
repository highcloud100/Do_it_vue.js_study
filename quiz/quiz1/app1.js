var cmp = {
    template : '<p>this is another local child component</P>'
};

Vue.component( 'todo-footer',{
    template : '<p>this is another global child component</P>'
});

var app = new Vue({
    el: '#app',
    data : {
        message: 'this is a parent component'
    },
    components : {
        'todo-list' : cmp
    }
});