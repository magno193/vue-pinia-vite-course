<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal = true">Mostrar modal</button>
        <Modal v-if="showModal" title="Isto é uma modal" @hide-modal="showModal = false">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, illo?
        </Modal>
    </div>
</template> 
<script setup>
//#region imports
import { ref } from 'vue'
import Modal from '../components/Modal.vue'
//#endregion

//#region modals
const showModal = ref(false)
//#endregion
</script>