<template>
    <TodoForm @addTodo="addTodo" />
</template>

<script setup>

import TodoForm from '../components/TodoForm.vue';

import { ref, onMounted } from 'vue';

const todos = ref([]);

const addTodo = (newTodo) => {
    if (newTodo !== '') {
        const todoTask = {
            task: newTodo,
            completed: false,
            index: todos.value.length + 1
        }
        todos.value = [...todos.value, todoTask]
    }
    saveTodos()
}

const saveTodos = () => localStorage.setItem('Todos', JSON.stringify(todos.value));

onMounted(() => {
    const defaultTodos = [
        { task: 'Learn Vue 3', completed: false, index: 1 },
        { task: 'Learn React', completed: true, index: 2 },
        { task: 'Learn Angular', completed: false, index: 3 }
    ];
    const todosData = JSON.parse(localStorage.getItem('Todos')) || defaultTodos;
    todos.value = todosData;
    saveTodos()
})

</script>