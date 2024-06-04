<template>
    <h2>Todo List</h2>
    <TodoList />

    <h4 v-if="todos.length === 0">You have no todo tasks</h4>
</template>

<script setup>

import { inject } from 'vue';

import TodoList from '../components/TodoList.vue';

const todoStore = inject('todoStore');

const todos = todoStore.todos;

</script>