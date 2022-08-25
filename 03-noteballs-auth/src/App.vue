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
import { useStoreNotes } from "./stores/storeNotes";
import { onMounted } from "vue";
//#endregion

//#region store
const storeNotes = useStoreNotes();
//#endregion

//#region mounted
onMounted(() => {
  storeNotes.getNotes();
});
//#endregion
</script>

<style>
@import "bulma/css/bulma.min.css";
</style>
