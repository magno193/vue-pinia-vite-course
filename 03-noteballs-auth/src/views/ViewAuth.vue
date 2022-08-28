<template>
  <div class="auth">
    <div class="tabs is-centered">
      <ul>
        <li :class="{ 'is-active': !registerFlag }">
          <a @click.prevent="registerFlag = false">Entrar</a>
        </li>
        <li :class="{ 'is-active': registerFlag }">
          <a @click.prevent="registerFlag = true">Registrar</a>
        </li>
      </ul>
    </div>
    <div class="card auth-form">
      <div class="card-content">
        <div class="title has-text-centered">{{ titleText }}</div>
        <div class="content has-text-centered">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, minus.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//#region imports
import { computed } from "vue";
import { ref } from "vue";
//#endregion

//#region register / login
const registerFlag = ref(false);

const titleText = computed(() => (registerFlag.value ? "Registrar" : "Entrar"));
//#endregion
</script>

<style>
.auth-form {
  max-width: 25rem;
  margin: 0 auto;
}
</style>
