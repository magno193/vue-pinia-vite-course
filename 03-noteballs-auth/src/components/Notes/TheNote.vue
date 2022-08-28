<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="columns is-mobile has-text-grey-light mt-2">
          <small class="column">{{ formattedDate }}</small>
          <small class="column has-text-rightlet">{{ charLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <router-link :to="`/note/${note.id}`" class="card-footer-item">
        Editar
      </router-link>
      <a @click.prevent="modals.deleteNote = true" class="card-footer-item"> Deletar </a>
    </footer>
    <modal-delete-note
      v-if="modals.deleteNote"
      v-model="modals.deleteNote"
      :id="note.id"
    />
  </div>
</template>

<script setup>
//#region imports
import { useDateFormat } from "@vueuse/shared";
import { computed, reactive } from "vue";
import ModalDeleteNote from "./ModalDeleteNote.vue";
//#endregion

//#region props
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});
//#endregion

//#region computed
const charLength = computed(() =>
  props.note.content.length > 1
    ? `${props.note.content.length} caracteres`
    : `${props.note.content.length} caractere`
);

const formattedDate = computed(() => {
  let formatted = new Date(parseInt(props.note.date));
  return useDateFormat(formatted, "DD/MM/YYYY - HH:mm:ss").value;
});
//#endregion

//#region modals
const modals = reactive({
  deleteNote: false,
});
//#endregion
</script>
