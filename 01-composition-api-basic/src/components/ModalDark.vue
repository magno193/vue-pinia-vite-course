<template>
    <teleport to=".modals-container">
        <div
          v-if="modelValue"
          class="modal-dark "
        >
            <h1>{{ title }}</h1>
            <slot />
            <button @click="handleButtonClick">Esconder modal</button>
        </div>
    </teleport>
</template>

<script setup>
//#region imports
//#endregion

//#region props
const props = defineProps({
    modelValue: { // prop especial para v-model
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: 'Nenhum título especificado'
    }
})
//#endregion

//#region emits
const emits = defineEmits(['update:modelValue']) // this.$emit('hideModal')
//#endregion

//#region btn cick
const handleButtonClick = () => {
    emits('update:modelValue', false)
}
//#endregion
</script>

<style>
.modal-dark {
    background: #333;
    color: white;
    padding: 1rem;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
</style>