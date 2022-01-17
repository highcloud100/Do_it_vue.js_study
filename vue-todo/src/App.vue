<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addTodo="addTodo"></todo-input>
    <todo-list v-bind:propsdata="todoItems" v-on:removeTodo="removeTodo"></todo-list>
    <todo-footer v-on:removeAll="clearAll"></todo-footer>
  </div>
</template>

<script>
import TodoFooterVue from './components/TodoFooter.vue'
import TodoHeaderVue from './components/TodoHeader.vue'
import TodoInputVue from './components/TodoInput.vue'
import TodoListVue from './components/TodoList.vue'

export default {
    data(){
      return{
        todoItems:[]
      }
    },
    
    created() {
        if(localStorage.length > 0){
            for(var i=0;i<localStorage.length;i++){
              if (localStorage.key(i) != "loglevel:webpack-dev-server"){
                this.todoItems.push(localStorage.key(i));
              }
            }
        }
    },

    methods:{
      clearAll(){
        localStorage.clear();
        this.todoItems = [];
      },
      addTodo(todoItem){
          localStorage.setItem(todoItem, todoItem);
          this.todoItems.push(todoItem);
      },
      removeTodo(todoItem, index){
        localStorage.removeItem(todoItem);
            this.todoItems.splice(index,1);
      }
    },
    components:{
      'TodoHeader':TodoHeaderVue,
      'TodoList': TodoListVue,
      'TodoInput': TodoInputVue,
      'TodoFooter':TodoFooterVue
    }
}
</script>

<style>
    body{
        text-align: center;
        background-color: #f6f6f6;
    }  
    input{
      border-style: groove;
      width: 200px;
    }
    button{
      border-style: groove;
    }
    .shadow{
      box-shadow: 5px, 10px, 10px, rgba(0,0,0,0.03);
    }
</style>
