<template>
    <form @submit.prevent="addTodo()">
    <input v-model="newTodo" placeholder="Add a new todo">
    <button type="submit">Add</button>
  </form>
</template>

<script setup>

import { ref, defineEmits } from 'vue';

let newTodo = ref('');

const emit = defineEmits(['addTodo'])

const addTodo = () => {
    emit('addTodo', newTodo.value)
    newTodo.value = ''
}

</script>