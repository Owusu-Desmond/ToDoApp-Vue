<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script setup>

import Nav from './components/Nav.vue';

import { provide } from 'vue';
import useTodoStore from './store/todoStore';

const todoStore = useTodoStore();

provide('todoStore', todoStore);

import './assets/styles.css';

</script>