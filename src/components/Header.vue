<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand logo" href="/"><img src="../assets/images/logo.png" alt="logo"></a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item menu-link" v-for="(menu, index) in headerMenuList" :key="index">
            <router-link class="nav-link" aria-current="page" :to="menu.path">
              {{ menu.name }}
            </router-link>
          </li>
        </ul>
        <div class="icons">
          <a href="#"><img src="../assets/images/icons/facebook.png" alt=""></a>
          <a href="#"><img src="../assets/images/icons/google_play.png" alt=""></a>
          <a href="#"><img src="../assets/images/icons/skype.png" alt=""></a>
          <a href="#"><img src="../assets/images/icons/twitter.png" alt=""></a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import {menuList} from '@/constants/menuLinks'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  data() {
    return {
      headerMenuList: menuList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../assets/layouts/index";
  .logo {
    padding-right: 100px;
  }
  .menu-link {
    padding: 0 30px;
    &:hover {
      background: $grey;
    }
  }
  .icons {
    a {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
</style>
