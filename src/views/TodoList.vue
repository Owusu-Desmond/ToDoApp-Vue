<template>
    <h2>Todo List</h2>
    <TodoList 
        :todos="todos" 
        @removeTodo="removeTodo" 
        @toggleCompleteStatus="toggleCompleteStatus"
        @clearAllCompleted="clearAllCompleted"
    />
    <h4 v-if="todos.length === 0">You have no todo tasks</h4>
</template>

<script setup>
import TodoList from '../components/TodoList.vue';
</script>