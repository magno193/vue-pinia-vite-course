<template>
  <div class="notes">
    <AddEditNote
      v-model="noteInput"
      ref="addEditNoteRef"
      placeholder="Adicione uma nova nota"
    >
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!noteInput"
          class="button is-link has-background-success"
        >
          Adicionar Nova Nota
        </button>
      </template>
    </AddEditNote>

    <progress v-if="!storeNotes.notesLoaded" class="progress is-large is-success" />
    <template v-else>
      <TheNote :note="note" v-for="note in storeNotes.notes" :key="note.id" />
      <div
        v-if="!storeNotes.notes.length"
        class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6"
      >
        Não existem notas criadas ainda..
      </div>
    </template>
  </div>
</template>

<script setup>
//#region imports
import { ref } from "vue";
import TheNote from "@/components/Notes/TheNote.vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "../stores/storeNotes";
import { useWatchCharacters } from "../uses/useWatchCharacters";
//#endregion

//#region store notes
const storeNotes = useStoreNotes();
//#endregion

//#region notes
const noteInput = ref("");
const addEditNoteRef = ref(null); // template ref
//#endregion

//#region add notes context
const addNote = () => {
  storeNotes.addNote(noteInput.value);

  noteInput.value = ""; // clear
  addEditNoteRef.value.focusTextarea(); // template ref
};
//#endregion

//#region watcher composable
useWatchCharacters(noteInput);
//#endregion
</script>

<style lang="scss" scoped></style>
