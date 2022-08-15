<template>
  <div class="user-data">
    {{ userData.name }} @{{ userData.username }}
  </div>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/modals">Modals</RouterLink>
    <RouterLink to="/posts">Postagens</RouterLink>
  </nav>

  <RouterView />
</template>

<script setup>
//#region imports
import { RouterLink, RouterView } from 'vue-router'
import { provide, reactive } from 'vue'
//#endregion

//#region user data
const userData = reactive({
  name: 'Alex',
  username: 'alexmlf'
})
//#endregion

//#region provide/inject
provide('userData', userData)
//#endregion
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.user-data {
  position: absolute;
  background: #333;
  color: floralwhite;
  padding: .1rem;
  border-bottom-left-radius: 0.4rem;
  top: 0;
  right: 0;
}
</style>
