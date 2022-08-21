<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Estado</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Número de notas</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Número de caracteres para todas as notas</td>
          <td>{{ storeNotes.totalCharacterNotesCount }}</td>
        </tr>
      </tbody>
    </table>

    <input
      v-model="noteballsInput"
      type="text"
      class="input"
      placeholder="Você ama noteballs?"
      v-autofocus
    />
  </div>
</template>

<script setup>
//#region imports
import { useStoreNotes } from "../stores/storeNotes";
import { vAutofocus } from "@/directives/vAutofocus";
import { ref } from "vue";
import { useWatchCharacters } from "../uses/useWatchCharacters";
//#endregion

//#region noteballs
const noteballsInput = ref("");
//#endregion

//#region store note
const storeNotes = useStoreNotes();
//#endregion

//#region composable watcher
useWatchCharacters(noteballsInput, 50);
//#endregion
</script>
