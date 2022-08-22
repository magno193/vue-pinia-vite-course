<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div ref="modalCardRef" class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Deletar nota?</p>
        <button class="delete" @click="closeModal" />
      </header>
      <section class="modal-card-body">
        Você tem certeza que deseja deletar esta nota?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button" @click="closeModal">Cancelar</button>
        <button class="button is-danger">Deletar</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
//#region imports
import { onClickOutside } from "@vueuse/core";
import { onMounted, onUnmounted, ref } from "vue";
//#endregion

//#region props
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
//#endregion

//#region emits
const emit = defineEmits(["update:modelValue"]);
//#endregion

//#region close modal
const closeModal = () => emit("update:modelValue", false); // para mudar parente
//#endregion

//#region outside click close modal
const modalCardRef = ref(null);

onClickOutside(modalCardRef, closeModal);
//#endregion

//#region keyboard control
const handleCloseKeyboard = (e) => {
  if (e.key === "Escape") closeModal();
};

onMounted(() => {
  document.addEventListener("keyup", handleCloseKeyboard);
});

onUnmounted(() => {
  // Necessário apagar o event listener para não duplicar-lo em mounted
  document.removeEventListener("keyup", handleCloseKeyboard);
});
//#endregion
</script>
