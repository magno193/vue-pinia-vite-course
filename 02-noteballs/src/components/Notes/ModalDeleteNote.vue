<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div ref="modalCardRef" class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Deletar nota?</p>
        <button @click="closeModal" class="delete" />
      </header>
      <section class="modal-card-body">
        Você tem certeza que deseja deletar esta nota?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button @click="closeModal" class="button">Cancelar</button>
        <button @click="handleDeleteNote" class="button is-danger">Deletar</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
//#region imports
import { onClickOutside } from "@vueuse/core";
import { onMounted, onUnmounted, ref } from "vue";
import { useStoreNotes } from "../../stores/storeNotes";
//#endregion

//#region props
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    required: true,
  },
});
//#endregion

//#region emits
const emit = defineEmits(["update:modelValue"]);
//#endregion

//#region store note
const storeNotes = useStoreNotes();
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

//#region deletar nota
const handleDeleteNote = () => {
  storeNotes.deleteNote(props.id);
};
//#endregion
</script>
