<template lang="html">

  <div class="clearAllContainer">
    <span class="clcearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>

</template>

<script lang="js">
  export default  {
    name: 'todo-footer',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {
      clearTodo(){
        this.$emit('removeAll');
      }
    },
    computed: {

    }
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>
