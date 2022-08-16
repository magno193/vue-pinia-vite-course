<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <RouterLink :to="{ name: 'notes' }" class="navbar-item" active-class="is-active">
          Notas
        </RouterLink>
        <RouterLink :to="{ name: 'stats' }" class="navbar-item" active-class="is-active">
          Estatísticas
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
//#region imports
import { RouterLink } from "vue-router";
//#endregion
</script>

<style lang="scss" scoped></style>
