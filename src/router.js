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
        path: '/todo-list',
        name: 'TodoList',
        component: TodoList
    },
    {
        path: '/add-todo',
        name: 'AddToDo',
        component: AddToDo
    }
    ]

const router = createRouter({
    history: createWebHistory(), // createWebHashHistory()
    routes
})

export default router
