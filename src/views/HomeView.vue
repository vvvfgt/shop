<template>
  <div class="home">
    <div class="container">
      <MainContainer>
        <h1>Home Page</h1>
      </MainContainer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainContainer from "@/components/MainContainer";

export default {
  name: 'HomeView',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MainContainer,
  }

}
</script>
