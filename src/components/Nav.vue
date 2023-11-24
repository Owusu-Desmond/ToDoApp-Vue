<template>
  <nav>
    <router-link to="/" exact>Todo</router-link>
    <ul>
      <li>
        <router-link to="/todos">Todo List</router-link>
      </li>
      <li>
        <router-link to="/add-todo">Add Todo</router-link>
      </li>
      <li>
        <router-link to="/recent-deleted">Recent Deleted Tasks</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<style scoped>
nav {
  background-color: #f2f2f2;
  padding: 10px;
    display: flex;
    justify-content: space-between;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}

li {
  margin-right: 10px;
}

router-link {
  text-decoration: none;
  color: #333;
  padding: 5px;
}

router-link-active {
  font-weight: bold;
}
</style>
