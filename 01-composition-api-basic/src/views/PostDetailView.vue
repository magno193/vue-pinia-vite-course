<template>
  <div class="post-detail">
    <h1>Uma página de detalhes de postagem</h1>
    <p>Mostre o conteúdo da postagem com ID de {{ $route.params.id }} neste espaço</p>
    <div><button @click="showPostId">Mostrar ID de Postagem</button></div>
    <p>
      <RouterLink to="/posts">&lt; Back</RouterLink>
    </p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute() // mesmo que this.$route em options

const showPostId = () => {
  alert(`O ID desta postagem é ${route.params.id}`)
}
</script>