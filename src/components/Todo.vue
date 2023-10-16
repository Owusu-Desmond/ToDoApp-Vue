<template>
<li>
    <div>
      <input type="checkbox" @change="() => toggleComplete(todo)" :checked="todo.completed">
      <span :class="{ completed: todo.completed }">{{ todo.task }}</span>
    </div>
    <button @click="() => remove(todo.index)">Remove</button>
</li>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    todo: Object,
})

const emit = defineEmits(['toggleComplete', 'remove'])

function toggleComplete(todo) {
    // emit an event to the parent component to toggle complete status
    emit('toggleComplete', todo)
}

function remove(index) {
    // emit an event to the parent component to remove the todo
    emit('remove', index)
}

</script>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>


