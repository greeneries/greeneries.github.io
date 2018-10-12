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

    // if(localStorage.length > 0){
    //   for (var i = 0; i < localStorage.length; i++) {
    //     if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
    //       let values = {"content": localStorage.key(i), "editing": false};
    //       this.todoItems.push(values);
    //     }
    //
    //   }
    // }
  },
  methods: {
    addTodo (content){
      let id = this.todoItems.length <=0 ? 1 : this.todoItems.length+1;
      let values = {id:id, content:content, editing:false};
      this.todoItems.push(values);
      //localStorage.setItem(content, JSON.stringify(values));

    },
    clearAll(){
    //  localStorage.clear();
      this.todoItems = [];
    },
    removeTodo(id){
      //localStorage.removeItem(content);
      let k = this.todoItems.findIndex(x => x.id === id);
      this.todoItems.splice(k,1);
    },
    isUpdate(id){

      //let todoItem = localStorage.getItem(localStorage.key(index));
      // let k = this.todoItems.findIndex(x => x.content === JSON.parse(todoItem).content);

      let k = this.todoItems.findIndex(x => x.id === id);
      // let boolValue = todoItem.editing == 'true' ? true : false;
      this.todoItems[k].editing = !this.todoItems[k].editing;

    },
    updateTodo(id, content){
      console.log('updateTodo is called');
      let k = this.todoItems.findIndex(x => x.id === id);

      console.log(this.todoItems[k].content,content);
      this.todoItems[k].editing = false;
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
