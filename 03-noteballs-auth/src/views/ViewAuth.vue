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

        <form @submit.prevent="onSubmit">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                v-model="credentials.email"
                type="text"
                class="input"
                placeholder="Digite o email"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Senha</label>
            <div class="control">
              <input
                v-model="credentials.password"
                type="password"
                class="input"
                placeholder="Digite a senha"
              />
            </div>
          </div>

          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <button href="" class="button is-primary">
                {{ titleText }}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
//#region imports
import { computed, reactive } from "vue";
import { ref } from "vue";
import { useStoreAuth } from "../stores/storeAuth";
//#endregion

//#region stores
const storeAuth = useStoreAuth();
//#endregion

//#region register / login
const registerFlag = ref(false);

const titleText = computed(() => (registerFlag.value ? "Registrar" : "Entrar"));
//#endregion

//#region submit method
const onSubmit = () => {
  if (!credentials.email || !credentials.password)
    return alert("Por favor insira email e senha");
  if (registerFlag.value) return storeAuth.registerUser(credentials);
  if (!registerFlag.value) return alert(`Usuário ${credentials.email} logado`);
};
//#endregion

//#region credenciais
const credentials = reactive({
  email: "",
  password: "",
});
//#endregion
</script>

<style>
.auth-form {
  max-width: 25rem;
  margin: 0 auto;
}
</style>
