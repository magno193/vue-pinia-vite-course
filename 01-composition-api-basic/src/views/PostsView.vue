<template>
  <div class="posts">
    <h1>Postagens</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <Router-Link :to="`/posts/${post.id}`">{{ post.title }}</Router-Link>
      </li>
    </ul>

    <textarea v-autofocus></textarea>

    <button
      @click="counter.increaseCounter"
      class="counter-button"
      :class="counter.oddOrEvenCSSClass"
    >
      {{ counter.count }}
    </button>
  </div>
</template>

<script setup>
//#region Imports
import { ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";
import { useCounterStore } from "../stores/counter";
//#endregion

//#region posts
const posts = ref([
  {
    id: "id1",
    title: "Post 1",
  },
  {
    id: "id2",
    title: "Post 2",
  },
  {
    id: "id3",
    title: "Post 3",
  },
]);
//#endregion

//#region counter btn (pinia)
const counter = useCounterStore();
//#endregion
</script>

<style scoped>
.counter-button {
  font-size: 3rem;
  width: 100%;
  background-color: pink;
}
.green {
  color: green;
}
.salmon {
  color: salmon;
}
</style>
