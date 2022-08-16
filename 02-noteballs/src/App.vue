<template>
  <RouterLink to="/">Notas</RouterLink> |
  <RouterLink to="stats">Estatísticas</RouterLink>

  <RouterView />
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>
