<template>
  <div class="notes">
    <AddEditNote v-model="noteInput">
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

    <TheNote :note="note" v-for="note in storeNotes.notes" :key="note.id" />
  </div>
</template>

<script setup>
//#region imports
import { ref } from "vue";
import TheNote from "@/components/Notes/TheNote.vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "../stores/storeNotes";
//#endregion

//#region store notes
const storeNotes = useStoreNotes();
//#endregion

//#region notes
const noteInput = ref("");
const noteInputRef = ref(null); // template ref

const addNote = () => {
  storeNotes.addNote(noteInput.value);

  noteInput.value = ""; // clear
  noteInputRef.value.focus(); // template ref
};
//#endregion
</script>

<style lang="scss" scoped></style>
