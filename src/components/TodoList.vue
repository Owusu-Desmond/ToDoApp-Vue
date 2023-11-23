<template>
    <ul v-for="(todo, index) in todos" :key="index">
        <Todo :todo="todo" @toggleComplete="toggleCompleteStatus(todo)" @remove="removeTodo(todo.index)" />
    </ul>
    <button v-if="todos.length !== 0" @click="clearAllCompleted">Clear All Completed</button>
</template>

<script setup>
    
import Todo from './Todo.vue';

const props = defineProps({
    todos: Array,
})


const emit = defineEmits(['toggleCompleteStatus', 'removeTodo', 'clearAllCompleted'])

const removeTodo  = (index) => emit('removeTodo', index);
const toggleCompleteStatus = (todo) => emit('toggleCompleteStatus', todo)
const clearAllCompleted = () => emit('clearAllCompleted')


</script>