<template>
    <ul v-for="(todo, index) in todos" :key="index">
        <Todo :todo="todo" />
    </ul>
    <button v-if="todos.length !== 0" @click="clearAllCompleted">Clear All Completed</button>
</template>

<script setup>
    
import Todo from './Todo.vue';

import { inject, watchEffect, ref } from 'vue';

const todoStore = inject('todoStore');

if (!todoStore) {
  throw new Error('todoStore is not provided');
}

const clearAllCompleted = () => {
    todoStore.clearAllCompleted();
}
 
const todos = ref(todoStore.todos);

console.log(todos.value);

watchEffect(() => {
    todos.value = todoStore.todos;
});

</script>