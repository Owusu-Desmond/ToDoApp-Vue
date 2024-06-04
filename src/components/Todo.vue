<template>
<li>
    <div>
      <input type="checkbox" @change="toggleComplete(todo.id)" :checked="todo.completed">
      <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
    </div>
    <button @click="remove(todo.id)">Remove</button>
</li>
</template>

<script setup>


import { inject } from 'vue';

const props = defineProps({
    todo: Object,
})

const todoStore = inject('todoStore');

const toggleComplete = (id) => {
    todoStore.toggleComplete(id);
}

const remove = (id) => {
    todoStore.removeTodo(id);
}

</script>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>


