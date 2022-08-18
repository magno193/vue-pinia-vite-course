<template>
  <div class="card has-background-success-dark p-4 mb-5">
    <div class="field">
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Adicionar nova nota"
          ref="noteInputRef"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>
