<template>
  <div class="post-detail">
    <h1>Uma página de detalhes de postagem</h1>
    <p>Mostre o conteúdo da postagem com ID de {{ $route.params.id }} neste espaço</p>
    <p>
      <RouterLink to="/posts">&lt; Back</RouterLink>
    </p>
  </div>
</template>

<script setup>
</script>