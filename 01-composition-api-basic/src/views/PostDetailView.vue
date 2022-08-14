<template>
  <div class="post-detail">
    <h1>Uma página de detalhes de postagem</h1>
    <p>Mostre o conteúdo da postagem com ID de {{ $route.params.id }} neste espaço</p>
    <div><button @click="showPostId">Mostrar ID de Postagem</button></div>
    <div>
      <button @click="goHomeIn3Sec">Vá para Home e 3 segundos</button>
    </div>
    <div>
      <button @click="goToFirstPost">Vá primeira postagem</button>
    </div>
    <p>
      <RouterLink to="/posts">&lt; Back</RouterLink>
    </p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute() // mesmo que this.$route em options
const router = useRouter()

const showPostId = () => {
  alert(`O ID desta postagem é ${route.params.id}`)
}

const goHomeIn3Sec = () => {
  const funcCallback = () => {
    router.push({
      name: 'home'
    })
  }
  setTimeout(funcCallback, 3000)
}

const goToFirstPost = () => {
  router.push({
    name: 'postDetail',
    params: {
      id: 'id1'
    }
  })
}
</script>