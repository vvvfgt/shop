<template>
  <div class="col">
    <h3 class="footer__title">{{ caption }}</h3>
    <ul class="footer__list">
      <li class="footer__item" v-for="(menu, i) in footerMenu" :key="i">
        <router-link :to="menu.path" class="footer__link">{{ menu.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "FooterMenu",
  props: {
    footerMenu: {
      type: Array,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    }
  }

}
</script>

<style scoped>

</style>