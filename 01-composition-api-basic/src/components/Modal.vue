<template>
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal">
      <h1>{{ title }}</h1>
      <slot />
      <button @click="handleButtonClick">Esconder modal</button>
    </div>
  </teleport>
</template>

<script setup>
//#region imports
//#endregion

//#region props
const props = defineProps({
  modelValue: {
    // prop especial para v-model
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "Nenhum título especificado",
  },
});
//#endregion

//#region emits
const emits = defineEmits(["update:modelValue"]); // this.$emit('hideModal')
//#endregion

//#region btn cick
const handleButtonClick = () => {
  emits("update:modelValue", false);
};
//#endregion

//#region slots
// const slots = useSlots()
// // $slots.title()[0].children
// // this.$slots em options api
// let [slotTitle] = slots.title()
// slotTitle = slotTitle.children
//#endregion
</script>

<style>
.modal {
  background: beige;
  color: black;
  padding: 1rem;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
