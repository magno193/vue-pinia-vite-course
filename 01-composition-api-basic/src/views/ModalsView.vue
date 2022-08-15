<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal = true">Mostrar modal</button>
    </div>
    <div v-if="showModal" class="modal">
        <h1>Esta é uma modal</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, illo?</p>
        <button @click="showModal = false">Esconder modal</button>
    </div>
</template> 
<script setup>
//#region imports
import { ref } from 'vue'
//#endregion

//#region modals
const showModal = ref(false)
//#endregion
</script>
<style>
.modal {
    background: beige;
    color: black;
    padding: 1rem;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
</style>