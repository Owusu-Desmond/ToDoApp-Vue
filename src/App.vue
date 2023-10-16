<script setup>
import { ref, onMounted } from 'vue';

const newTodo = ref('');
const defaultTodos = [
  { task: 'Learn Vue 3', completed: false, index: 1 },
  { task: 'Learn React', completed: false, index: 2 },
  { task: 'Learn Angular', completed: false, index: 3 }
];
const todosData = JSON.parse(localStorage.getItem('Todos')) || defaultTodos;
const todos = ref(todosData);

function addTodo() {
  if (newTodo.value) {
    const todoTask = {
      task: newTodo.value,
      completed: false,
      index: todos.value.length + 1
    }
    todos.value = [...todos.value, todoTask]
  }
  newTodo.value = '';
  saveTodos()
}

function removeTodo(index) {
  const newTodos = todos.value.filter(todo => todo.index !== index)
  todos.value = newTodos
  saveTodos()
}

function completedTodo (todo) {
  todo.completed = !todo.completed
  saveTodos()
}

function saveTodos() {
  localStorage.setItem('Todos', JSON.stringify(todos.value))
}

onMounted(() => {
  saveTodos()
})
</script>

<template>
  <h1> Todo App</h1>
  <form @submit.prevent="addTodo()">
    <label for="newTodo">Add a new todo</label>
    <input v-model="newTodo" placeholder="Add a new todo">
    <button type="submit">Add</button>
  </form>
  <h2>Todo List</h2>
  <ul v-for="(todo, index) in todos" :key="index">
    <li>
      <div>
        <input type="checkbox" @change="completedTodo(todo)">
        <span :class="{ completed: todo.completed }">{{ todo.task }}</span>
      </div>
      <button @click="removeTodo(index)">Remove</button>
    </li>
  </ul>
  <h4 v-if="todos.length === 0">You have no todo tasks</h4>
</template>