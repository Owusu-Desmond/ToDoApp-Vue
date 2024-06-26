import { createRouter, createWebHistory } from 'vue-router'
import TodoList from './views/TodoList.vue'
import Home from './views/Home.vue'
import AddToDo from './views/AddToDo.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/todos',
        name: 'TodoList',
        component: TodoList
    },
    {
        path: '/addTodo',
        name: 'AddToDo',
        component: AddToDo
    }
    ]

const router = createRouter({
    history: createWebHistory(), // createWebHashHistory()
    routes
})

export default router
