<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal = true">Mostrar modal</button>
        <div>
            <label>Mostrar modal dark?
                <input
                  type="checkbox"
                  v-model="showDarkModals"
                >
            </label>
        </div>
        <!-- <component
          :is="Modal"
          title="Isto é uma modal"
          v-model="showModal"
        > -->
        <component
          :is="showDarkModals ? ModalDark : Modal"
          title="Isto é uma modal"
          v-model="showModal"
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, illo?
        </component>
    </div>
</template> 
<script setup>
//#region imports
import { ref } from 'vue'
import Modal from '../components/Modal.vue'
import ModalDark from '../components/ModalDark.vue'
//#endregion

//#region modals
const showModal = ref(false)
const showDarkModals = ref(false)
//#endregion
</script>