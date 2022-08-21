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
  </div>
</template>

<script setup>
//#region imports
import { useStoreNotes } from "../stores/storeNotes";
//#endregion

//#region store note
const storeNotes = useStoreNotes();
//#endregion
</script>
