import { reactive } from 'vue';

const useTodoStore = () => {
  const todos = reactive([
    { id: 1, title: 'Buy milk', completed: false },
    { id: 2, title: 'Buy eggs', completed: false },
    { id: 3, title: 'Buy bread', completed: false }
  ]);

  const addTodo = (todo) => {
    todos.push({
      id: todos.length + 1,
      title: todo.title,
      completed: false
    });
  };

  const removeTodo = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
    }
  };

  const toggleCompleted = (id) => {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  };

  const clearAllCompleted = () => {
    for (let i = todos.length - 1; i >= 0; i--) {
      if (todos[i].completed) {
        todos.splice(i, 1);
      }
    }
  };

  return {
    todos,
    addTodo,
    removeTodo,
    toggleCompleted,
    clearAllCompleted
  };
};

export default useTodoStore;
