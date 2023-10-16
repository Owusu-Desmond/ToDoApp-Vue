<template>
    <form @submit.prevent="addTodo()">
    <input v-model="newTodo" placeholder="Add a new todo">
    <button type="submit">Add</button>
  </form>
</template>

<script setup>

import { ref, defineEmits } from 'vue';

const newTodo = ref('');
const emit = defineEmits(['addTodo'])

function addTodo() {
    // emit an event to the parent component to add a new todo
    emit('addTodo', newTodo.value)
  newTodo.value = '';
}

</script>