<template>
    <ul v-for="(todo, index) in todos" :key="index">
        <Todo :todo="todo" @toggleComplete="toggleCompleteStatus(todo)" @remove="removeTodo(index)" />
    </ul>
</template>

<script setup>
    
import Todo from './Todo.vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    todos: Array,
})


const emit = defineEmits(['toggleCompleteStatus', 'removeTodo'])

function removeTodo (index) {
    // emit an event to the parent component to remove the todo
    emit('removeTodo', index)
}

function toggleCompleteStatus (todo) {
    // emit an event to the parent component to toggle complete status
    emit('toggleCompleteStatus', todo)
}


</script>