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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, illo?</p>
            <pre>{{ `Username é ${userData.username || '<não fornecido>'}` }}</pre>
        </component>
    </div>
</template> 
<script setup>
//#region imports
import { inject, ref } from 'vue'
import Modal from '../components/Modal.vue'
import ModalDark from '../components/ModalDark.vue'
//#endregion

//#region modals
const showModal = ref(false)
const showDarkModals = ref(false)
//#endregion

//#region provide/inject
const userData = inject('userData')
//#endregion
</script>