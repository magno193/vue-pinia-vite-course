<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>

        <a
          @click.prevent="showMobileNav = !showMobileNav"
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': showMobileNav }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          ref="navbarBurgerRef"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
        ref="navbarMenuRef"
      >
        <div class="navbar-end">
          <RouterLink
            :to="{ name: 'notes' }"
            @click="showMobileNav = false"
            class="navbar-item"
            active-class="is-active"
          >
            Notas
          </RouterLink>
          <RouterLink
            :to="{ name: 'stats' }"
            @click="showMobileNav = false"
            class="navbar-item"
            active-class="is-active"
          >
            Estatísticas
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
//#region imports
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
//#endregion

//#region mobile nav
const showMobileNav = ref(false);
//#endregion

//#region outside click close
const navbarMenuRef = ref(null);
const navbarBurgerRef = ref(null);

onClickOutside(navbarMenuRef, () => (showMobileNav.value = false), {
  ignore: [navbarBurgerRef],
});
//#endregion
</script>

<style scoped>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
    opacity: 0.98;
  }
}
</style>
