<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      bg-color="link"
      label="Editar nota"
      placeholder="Edite a nota"
    >
      <template #buttons>
        <button @click="$router.back()" class="button is-link is-light mr-2">
          Cancelar
        </button>
        <button
          @click="handleSaveClick"
          :disabled="!noteContent"
          class="button is-link has-background-link"
        >
          Salvar Nota
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
//#region imports
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import AddEditNote from "../components/Notes/AddEditNote.vue";
import { useStoreNotes } from "../stores/storeNotes";
//#endregion

//#region router
const route = useRoute();
const router = useRouter();
//#endregion

//#region note
const noteContent = ref();
//#endregion

//#region store note
const storeNotes = useStoreNotes();
noteContent.value = storeNotes.getNoteContent(route.params.id);
//#endregion

//#region update note
const handleSaveClick = () => {
  let payload = {
    id: route.params.id,
    content: noteContent.value,
  };

  storeNotes.updateNote(payload);
  router.back();
};
//#endregion
</script>
