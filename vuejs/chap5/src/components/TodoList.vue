<template lang="html">
  <section>
      <transition-group name="list" tag="ul">
      <!--  화면의 일부를 삭제하거나 정렬할 때 key 속성을 사용합니다.
            안 붙여도 되긴 하지만 개발자가 붙여주면 그만큼 처리가 빨라집니다.
            key 값은 유니크한 값이면 어떤 것이든 가능합니다.
            <i class="far fa-pencil"></i>
     -->

      <li v-for="(todoItem,index) in propsdata" v-bind:key="todoItem.content" class="shadow">

        <i class="checkBtn fas fa-check" aria-hidden="true"></i>
        <input v-if="todoItem.editing === true" type="text"  v-model="todoItem.content" v-on:keyup.enter="updateTodo(todoItem.id, todoItem.content)" />
        <p v-else> {{ todoItem.content }} </p>
<!--  :updateTodo(todoItem.content,index)-->

        <!-- <button v-if="todoItem.editing === true" type="button" v-on:click="updateTodo(todoItem.content,index)">수정완료</button>
        <button v-else type="button" v-on:click="isUpdate(index)">수정</button> -->

        <span v-if="todoItem.editing === true" class="updateBtn" type="button" v-on:click="updateTodo(todoItem.id, todoItem.content)">
          <i class="fas fa-pen-square" aria-hidden="true"></i>
        </span>

        <span v-else class="updateBtn" type="button" v-on:click="isUpdate(todoItem.id)">
          <i class="fas fa-pen-alt" aria-hidden="true"></i>
        </span>

        <span class="removeBtn" type="button" v-on:click="removeTodo(todoItem.id)">
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li>

    </transition-group>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'todo-list',
    props: ['propsdata'],
    mounted() {

    },
    methods: {
      removeTodo(id){
        this.$emit('removeTodo', id);
      },
      isUpdate(id){
        this.$emit('isUpdate', id);
      },
      updateTodo(id, content){
        this.$emit('updateTodo', id, content);
      }
    },
    computed: {

    }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.updateBtn {
  margin-left: auto;
  color: #de4343;
}
.removeBtn {
  /* margin-left: auto; */
  color: #de4343;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
