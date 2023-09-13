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
             <p>{{this.address['city']}}</p>
           </li>
           <li>
             <p>Phone: {{this.address['phone']}}</p>
             <p>Telegram: {{this.address['telegram']}}</p>
             <p>Skype: {{this.address['skype']}}</p>
             <p>Mail: {{this.address['mail']}}</p>
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
  created() {
    this.getAddress();
  },
  data() {
    return {
      footerMenu: menuList,
      footerMenuClient: menuClient,
      capNavigation: 'Navigation',
      capClient: "For clients",
      address: [],
      baseUrl: 'http://bot/api',
    }
  },
  components: {
    FooterMenu,
    FooterIcons,
  },
  methods: {
    getAddress() {
      this.axios.get(`${this.baseUrl}/address`)
          .then(res => {
            console.log(res)
            this.address = res.data;
          })
    }
  }
}
</script>

<style scoped>

</style>