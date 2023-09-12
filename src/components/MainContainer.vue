<template>
  <div class="wrap d-flex flex-column min-vh-100">
    <header>
      <slot name="header"></slot>
    </header>
    <main class="flex-fill container-fluid p-0">
      <row>
        <slot></slot>
      </row>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "MainContainer"
}
</script>

<style scoped>

</style>