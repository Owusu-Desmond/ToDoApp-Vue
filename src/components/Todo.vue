<template>
<li>
    <div>
      <input type="checkbox" @change="toggleComplete(todo)" :checked="todo.completed">
      <span :class="{ completed: todo.completed }">{{ todo.task }}</span>
    </div>
    <button @click="remove(todo.index)">Remove</button>
</li>
</template>

<script setup>

const props = defineProps({
    todo: Object,
})

const emit = defineEmits(['toggleComplete', 'remove'])

const toggleComplete = (todo) => emit('toggleComplete', todo);
const remove = (index) => emit('remove', index);

</script>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>


