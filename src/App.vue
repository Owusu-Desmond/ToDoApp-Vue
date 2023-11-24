<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import Nav from './components/Nav.vue';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';

import './assets/styles.css';

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

const removeTodo = (index) => {
  updateTodos((todo) => todo.index !== index);
};

const toggleCompleteStatus = (todo) => {
  todo.completed = !todo.completed
  saveTodos()
}

const saveTodos = () => localStorage.setItem('Todos', JSON.stringify(todos.value));

const clearAllCompleted = () => {
  updateTodos((todo) => !todo.completed);
};

const updateTodos = (filterFunction) => {
  const newTodos = todos.value.filter(filterFunction);
  newTodos.map((todo, index) => (todo.index = index + 1));
  todos.value = newTodos;
  saveTodos();
};

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
