<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div :class="`card has-background-${bgColor}-dark p-4 mb-5`">
    <label v-if="label" class="label has-text-white">{{ label }}</label>

    <div class="field">
      <div class="control">
        <textarea
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          class="textarea"
          :placeholder="placeholder"
          ref="textareaRef"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
//#region imports
import { ref } from "vue";
//#endregion

//#region props
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "Escreva algo...",
  },
  label: {
    type: String,
  },
});
//#endregion

//#region emits
defineEmits(["update:modelValue"]);
//#endregion

//#region focus textarea
const textareaRef = ref(null);

const focusTextarea = () => {
  textareaRef.value.focus();
};

// expor método para outro componente
defineExpose({
  focusTextarea,
});
//#endregion
</script>
