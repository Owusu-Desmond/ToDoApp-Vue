<template>
  <h1> Todo App</h1>
  <TodoForm @addTodo="addTodo" />
  <h2>Todo List</h2>
  <TodoList :todos="todos" @removeTodo="removeTodo" @toggleCompleteStatus="toggleCompleteStatus" />
  <h4 v-if="todos.length === 0">You have no todo tasks</h4>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';

const todos = ref([]);

function addTodo (newTodo) {
  if (newTodo.value) {
    const todoTask = {
      task: newTodo.value,
      completed: false,
      index: todos.value.length + 1
    }
    todos.value = [...todos.value, todoTask]
  }
  saveTodos()
}

function removeTodo(index) {
  const newTodos = todos.value.filter(todo => todo.index !== index)
  todos.value = newTodos
  saveTodos()
}

function toggleCompleteStatus (todo) {
  todo.completed = !todo.completed
  saveTodos()
}

function saveTodos() {
  localStorage.setItem('Todos', JSON.stringify(todos.value))
}

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
