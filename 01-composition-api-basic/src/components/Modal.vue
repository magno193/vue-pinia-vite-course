<template>
    <teleport to=".modals-container">
        <div class="modal">
            <h1>
                <slot name="title" />
            </h1>
            <slot />
            <pre>{{ slotTitle }}</pre>
            <button>Esconder modal</button>
        </div>
    </teleport>
</template>

<script setup>
import { useSlots } from 'vue';

const slots = useSlots()
// $slots.title()[0].children
// this.$slots em options api
let [slotTitle] = slots.title()
slotTitle = slotTitle.children
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