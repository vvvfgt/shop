<template>
  <div class="wrap d-flex flex-column min-vh-100">
    <Header/>
    <main class="flex-fill">
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script>
   import Header from "@/components/Header"
   import Footer from "@/components/Footer/Footer";

   export default {
     components: {
       Header,
       Footer
     }
   }
</script>

