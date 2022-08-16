<template>
  <div class="notes">
    <div v-for="i in 3" :key="i" class="card mb-4">
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ea voluptas
          dolore, voluptatibus velit eos iusto dignissimos accusantium molestias, ut
          magnam, debitis provident id harum? Explicabo placeat molestiae cum quos.
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
