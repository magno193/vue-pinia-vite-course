<template>
  <div class="posts">
    <h1>Postagens</h1>

    <ul>
      <li>
        <Router-Link to="/posts/id1">Post 1</Router-Link>
      </li>
      <li>
        <Router-Link to="/posts/id2">Post 2</Router-Link>
      </li>
      <li>
        <Router-Link to="/posts/id3">Post 3</Router-Link>
      </li>
    </ul>

    <textarea v-autofocus></textarea>
  </div>
</template>

<script setup>
import { vAutofocus } from '@/directives/vAutofocus';
</script>