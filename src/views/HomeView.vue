<template>
  <div class="home">
    <HomeCarousel/>
    <MainContainer>

    </MainContainer>
  </div>
</template>

<script>
// @ is an alias to /src
import MainContainer from "@/components/MainContainer";
import HomeCarousel from "@/components/HomeCarousel";

export default {
  name: 'HomeView',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MainContainer,
    HomeCarousel,
  }

}
</script>
