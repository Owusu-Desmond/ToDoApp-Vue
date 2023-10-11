<script setup>
import { ref, onMounted } from 'vue';

const count = ref(0);

function increment() {
  count.value++
}

function decrement() {
  count.value--
}

onMounted(() => {
  console.log('Component is mounted!')
})
</script>
<template>
  <h1>Counter</h1>

  <button @click="decrement">-</button>
  <span :style="{color: 'red'}">{{ count }}</span>
  <button @click="increment">+</button>


</template>
