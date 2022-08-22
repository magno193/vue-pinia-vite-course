<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ charLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <router-link :to="`/note/${note.id}`" class="card-footer-item"> Edit </router-link>
      <a @click.prevent="modals.deleteNote = true" class="card-footer-item"> Delete </a>
    </footer>
    <modal-delete-note v-if="modals.deleteNote" v-model="modals.deleteNote" />
  </div>
</template>

<script setup>
//#region imports
import { computed, reactive } from "vue";
import { useStoreNotes } from "../../stores/storeNotes";
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

//#region store notes
const storeNotes = useStoreNotes();
//#endregion

//#region character length
const charLength = computed(() =>
  props.note.content.length > 1
    ? `${props.note.content.length} caracteres`
    : `${props.note.content.length} caractere`
);
//#endregion

//#region metodo handleDeleteClick
const handleDeleteClick = (id) => {
  storeNotes.deleteNote(id);
};
//#endregion

//#region modals
const modals = reactive({
  deleteNote: false,
});
//#endregion
</script>
