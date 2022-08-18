<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="noteInput"
            class="textarea"
            placeholder="Adicionar nova nota"
            ref="noteInputRef"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!noteInput"
            class="button is-link has-background-success"
          >
            Adicionar Nova Nota
          </button>
        </div>
      </div>
    </div>

    <TheNote
      :note="note"
      @delete-click="deleteNote"
      v-for="note in storeNotes.notes"
      :key="note.id"
    />
  </div>
</template>

<script setup>
//#region imports
import { ref } from "vue";
import TheNote from "@/components/Notes/TheNote.vue";
import { useStoreNotes } from "../stores/storeNotes";
//#endregion

//#region store notes
const storeNotes = useStoreNotes();
//#endregion

//#region notes
const noteInput = ref("");
const noteInputRef = ref(null); // template ref

const notes = ref([]);

const addNote = () => {
  notes.value.unshift({
    id: generateId(),
    content: noteInput.value,
  });

  noteInput.value = ""; // clear
  noteInputRef.value.focus(); // template ref
};

const generateId = () =>
  notes.value.length
    ? `id ${+notes.value[notes.value.length - 1].id.replace(/\D+/, "") + 1}`
    : "id1";

const deleteNote = (id) => {
  notes.value = notes.value.filter((note) => note.id !== id);
};
//#endregion
</script>

<style lang="scss" scoped></style>
