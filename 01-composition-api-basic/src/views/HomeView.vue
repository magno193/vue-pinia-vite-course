<template>
  <div class="home">
    <div>
      <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counter }}</span>
      <button class="btn" @click="increaseCounter">+</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const counter = ref(0)

    const increaseCounter = () => {
      counter.value++
    }
    const decreaseCounter = () => {
      counter.value--
    }

    return {
      counter,
      increaseCounter,
      decreaseCounter
    }
  }
}
</script>

<!--<script>
export default {
  data: () => ({
    counter: 0
  }),
  methods: {
    increaseCounter() {
      this.counter++
    },
    decreaseCounter() {
      this.counter--
    }
  }
}
</script>!-->
<style>
.home {
  text-align: center;
  padding: 1rem;
}

.btn,
.counter {
  font-size: 3rem;
  margin: 1rem;
}
</style>