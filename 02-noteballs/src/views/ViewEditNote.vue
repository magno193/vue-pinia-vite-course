<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      bg-color="link"
      label="Editar nota"
      placeholder="Edite a nota"
    >
      <template #buttons>
        <button @click="$router.back()" class="button is-link is-light">Cancelar</button>
        <button :disabled="!noteContent" class="button is-link has-background-link">
          Salvar Nota
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
//#region imports
import { ref } from "vue";
import { useRoute } from "vue-router";
import AddEditNote from "../components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";
//#endregion

//#region router
const route = useRoute();
//#endregion

//#region note
const noteContent = ref();
//#endregion

//#region store note
const storeNotes = useStoreNotes();
noteContent.value = storeNotes.getNoteContent(route.params.id);
//#endregion
</script>
