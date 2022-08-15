<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3 class="title">{{ counterData.title }}:</h3>

    <div>
      <button class="btn" @click="decreaseCounter(accAmount)">-</button>
      <span class="counter">{{ counterData.counter }}</span>
      <button class="btn" @click="increaseCounter(accAmount)">+</button>
    </div>

    <p>{{ oddOrEven }}</p>

    <div class="edit">
      <h4>Editar título</h4>
      <input v-model="counterData.title" type="text" v-autofocus />
      <h4>Quantidade de mudança (-/+)</h4>
      <input v-model.number="accAmount" type="number" />
    </div>
  </div>
</template>

<script setup>
//#region imports
import { ref, onMounted } from "vue";
import { useCounter } from "../use/useCounter";
import { vAutofocus } from "@/directives/vAutofocus";
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

//#region counter data
const {
  accAmount,
  counterData,
  decreaseCounter,
  increaseCounter,
  oddOrEven,
} = useCounter();
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
