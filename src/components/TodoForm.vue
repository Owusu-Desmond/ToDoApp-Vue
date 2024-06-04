<template>
    <form @submit.prevent="addTodo()">
    <input v-model="newTodo" placeholder="Add a new todo">
    <button type="submit">Add</button>
  </form>
</template>

<script setup>

import { ref, inject } from 'vue';

let newTodo = ref('');

const todoStore = inject('todoStore');

console.log(todoStore);

const addTodo = () => {
  if (newTodo.value.trim() === '') {
    return;
  }

  todoStore.addTodo({
    id: new Date().getTime(),
    title: newTodo.value,
    completed: false,
  });

  newTodo.value = '';
}

</script>