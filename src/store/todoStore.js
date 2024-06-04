import { reactive } from 'vue'

const useTodoStore = () => {
    const state = reactive({
        todos: [
            { id: 1, title: 'Buy milk', completed: false },
            { id: 2, title: 'Buy eggs', completed: false },
            { id: 3, title: 'Buy bread', completed: false }
        ]
    })

    const addTodo = (todo) => {
        state.todos.push({
            id: state.todos.length + 1,
            title: todo.title,
            completed: false
        })
    }

    const removeTodo = (id) => {
        state.todos = state.todos.filter(todo => todo.id !== id)
    }

    const toggleCompleted = (id) => {
        state.todos = state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
    }

    const clearAllCompleted = () => {
        state.todos = state.todos.filter(todo => !todo.completed)
    }

    return {
        todos: state.todos,
        addTodo,
        removeTodo,
        toggleCompleted,
        clearAllCompleted
    }
}

export default useTodoStore;