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
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" @click.prevent="handleDeleteClick" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script setup>
//#region imports
import { computed } from "vue";
//#endregion

//#region props
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});
//#endregion

//#region emits
const emits = defineEmits(["deleteClick"]);
//#endregion

//#region character length
const charLength = computed(() =>
  props.note.content.length > 1
    ? `${props.note.content.length} caracteres`
    : `${props.note.content.length} caractere`
);
//#endregion

//#region metodo handleDeleteClick
const handleDeleteClick = () => {
  emits("deleteClick", props.note.id);
};
//#endregion
</script>
