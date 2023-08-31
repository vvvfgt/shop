<template>
 <footer class="footer footer_bg">
   <div class="container">
     <div class="row">

       <FooterIcons/>
       <FooterMenu
           :footer-menu="footerMenu"
           :caption = "capNavigation"
       />
       <FooterMenu
           :footer-menu="footerMenuClient"
           :caption = "capClient"
       />

       <div class="col">
         <h3 class="footer__title">Contact us</h3>
         <ul class="footer__list">
           <li>
             <p>240 Central Park, London</p>
           </li>
           <li>
             <p>Phone 059603429</p>
             <p>Telegram 059603429</p>
             <p>Skype 059603429</p>
           </li>
           <li>
             <p><a class="footer__link">mail</a></p>
           </li>
         </ul>
       </div>
     </div>
   </div>
 </footer>
</template>

<script>
import {menuList, menuClient} from '@/constants/menuLinks'
import FooterIcons from "@/components/Footer/FooterIcons";
import FooterMenu from "@/components/Footer/FooterMenu";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  data() {
    return {
      footerMenu: menuList,
      footerMenuClient: menuClient,
      capNavigation: 'Navigation',
      capClient: "For clients",
    }
  },
  components: {
    FooterMenu,
    FooterIcons,
  }
}
</script>

<style scoped>

</style>