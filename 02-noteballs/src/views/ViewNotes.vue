<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Adicionar nova nota"></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success">
            Adicionar Nova Nota
          </button>
        </div>
      </div>
    </div>

    <div v-for="note in notes" :key="note.key" class="card mb-4">
      <div class="card-content">
        <div class="content">
          {{ note.content }}
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script setup>
//#region imports
import { ref } from "vue";
//#endregion

//#region notes
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
//#endregion
</script>

<style lang="scss" scoped></style>
