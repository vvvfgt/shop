<template>
  <div class="feature">
    <div class="container">
      <div class="row">
        <div class="col-md-3" v-for="item in data" :key="item.id">
          <div class="feature__col">
            <span class="feature__icon">{{item.icon}}</span>
            <h4 class="feature__title">{{item.title}}</h4>
            <p>{{item.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureGroup",
  props: {
    data: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<style scoped>

</style>