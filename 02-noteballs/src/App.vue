<template>
  <NavBar />
  <!-- <RouterLink to="/" class="button">Notas</RouterLink> |
  <RouterLink to="stats" class="button">Estatísticas</RouterLink> -->

  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
</template>

<script setup>
//#region imports
import { RouterView } from "vue-router";
import NavBar from "@/components/Layout/NavBar.vue";
//#endregion
</script>

<style>
@import "bulma/css/bulma.min.css";
</style>
