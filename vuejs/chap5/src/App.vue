<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"  @updateTodo="updateTodo" @isUpdate="isUpdate"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue';
  import TodoInput from './components/TodoInput.vue';
  import TodoList from './components/TodoList.vue';
  import TodoFooter from './components/TodoFooter.vue';

export default {
  name: 'app',
  data () {
    return {
      todoItems : []
    }
  },
  created(){

    if(localStorage.length > 0){
      for (var i = 0; i < localStorage.length; i++) {
        let values = {"content": localStorage.key(i), "editing": false};
        this.todoItems.push(values);
         // JSON.stringify(values)
        //this.todoItems.push(JSON.stringify(values));
        // this.todoItems.push(localStorage.key(i));
      }
    }
  },
  methods: {
    addTodo (content){

      let values = {content:content, editing:false};
      this.todoItems.push(values);
      localStorage.setItem(content, JSON.stringify(values));

    },
    clearAll(){
      localStorage.clear();
      this.todoItems = [];
    },
    removeTodo(content, index){
      localStorage.removeItem(content);
      this.todoItems.splice(index,1);
    },
    isUpdate(index){

      let todoItem = localStorage.getItem(localStorage.key(index));
      let k = this.todoItems.findIndex(x => x.content === JSON.parse(todoItem).content);
      let boolValue = JSON.parse(todoItem).editing == 'true' ? true : false;
      this.todoItems[k].editing = !boolValue;

    },
    updateTodo(content, index){
      console.log('updateTodo is called');
      this.removeTodo(content, index);
      this.addTodo(content);
    }
  },
  components:{
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
