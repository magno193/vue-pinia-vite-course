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
      v-for="note in notes"
      :key="note.id"
    />
  </div>
</template>

<script setup>
//#region imports
import { ref } from "vue";
import TheNote from "@/components/Notes/TheNote.vue";
//#endregion

//#region notes
const noteInput = ref("");
const noteInputRef = ref(null); // template ref

const notes = ref([
  {
    id: "id1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ea voluptas dolore, voluptatibus velit eos iusto dignissimos accusantium molestias, ut magnam, debitis provident id harum?",
  },
  {
    id: "id2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, expedita.",
  },
]);

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
