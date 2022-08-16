<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3 class="title">{{ counter.title }}:</h3>

    <div>
      <button class="btn">--</button>
      <button class="btn">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button class="btn">+</button>
      <button class="btn">++</button>
    </div>

    <p>Par/ímpar</p>

    <div class="edit">
      <h4>Editar título</h4>
      <input v-autofocus v-model="counter.title" type="text" />
    </div>
  </div>
</template>

<script setup>
//#region imports
import { ref, onMounted } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";
import { useCounterStore } from "../stores/counter";
//#endregion

//#region app title
const appTitle = "App de exemplos Vue";
const appTitleRef = ref(null); // options acesso é this.$refs
onMounted(() => {
  // vira um objeto [object HTMLHeadingElement]
  console.log(
    `Ref esta à ${appTitleRef.value.offsetWidth} pixels de largura em relação ao layout`
  );
});
//#endregion

//#region counter data (pinia)
const counter = useCounterStore();
//#endregion

//#region directives
// const vAutofocus = {
//   mounted(el) {
//     el.focus()
//   }
// }
//#endregion
</script>

<style>
.home {
  text-align: center;
  padding: 1rem;
}

.btn,
.counter {
  font-size: 3rem;
  margin: 1rem;
}

.edit {
  margin-top: 2rem;
}
</style>
