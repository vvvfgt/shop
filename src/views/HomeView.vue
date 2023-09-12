<template>
  <div class="home">
    <HomeCarousel/>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3 class="home__offering">Мы предлагаем качественные товары</h3>
        </div>
        <div class="col-md-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, tellus in nunc a ex justo id integer,
            sem pharetra massa congue tincidunt venenatis. Primis felis natoque nisl senectus vestibulum
            lobortis id pretium nam, magna taciti nisi penatibus feugiat pellentesque nunc. Lectus sociosqu
            ligula purus duis ullamcorper taciti sem vel eu lacus justo ipsum, primis viverra nisi habitant
            cras curabitur iaculis eget commodo efficitur senectus orci conubia, lorem adipiscing integer
            sapien magna ridiculus rutrum ad luctus accumsan tincidunt. Nam orci suspendisse nascetur metus
            elit litora, primis natoque tellus auctor ex consectetur, fermentum leo etiam dictum mus.
            Laoreet hac sagittis libero magnis odio vel duis lobortis scelerisque nulla sapien in,
            venenatis volutpat tellus quam ultrices sollicitudin elit sed varius dolor dictumst maecenas
            quisque, feugiat cubilia risus ipsum lectus at ante convallis porta proin interdum.
            Arcu velit porttitor mi donec feugiat at quis id montes, et mattis faucibus sociosqu dictumst
          </p>
        </div>
      </div>
    </div>

    <FeatureGroup
      :data="featureData"
    />

  </div>
</template>

<script>
import HomeCarousel from "@/components/HomeCarousel";
import FeatureGroup from "@/components/FeatureGroup";

export default {
  name: 'HomeView',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HomeCarousel,
    FeatureGroup
  },
  created() {
    this.getGroups()
  },
  data() {
    return {
      featureData: [],
      baseUrl: 'http://bot/api',
    }
  },
  methods: {
    getGroups() {
      this.axios.get(`${this.baseUrl}/groups`)
          .then(res => {
            this.featureData = res.data
          })
    }
  }

}
</script>
