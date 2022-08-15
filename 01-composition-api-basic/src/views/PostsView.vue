<template>
  <div class="posts">
    <h1>Postagens</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <Router-Link :to="`/posts/${post.id}`">{{ post.title }}</Router-Link>
      </li>
    </ul>

    <textarea v-autofocus></textarea>
  </div>
</template>

<script setup>
//#region Imports
import { ref } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus';
//#endregion

//#region posts
const posts = ref([
  {
    id: 'id1',
    title: 'Post 1'
  },
  {
    id: 'id2',
    title: 'Post 2'
  },
  {
    id: 'id3',
    title: 'Post 3'
  }
])
//#endregion
</script>