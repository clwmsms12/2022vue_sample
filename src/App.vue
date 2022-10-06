<template>
  <HeaderView></HeaderView>
  <MainVisual></MainVisual>
</template>

<script>
  import HeaderView from "./components/HeaderView.vue"
  import MainVisual from "./components/MainVisual.vue"
export default {
  components:{
    HeaderView,
    MainVisual
  }
}
</script>

<style>
*{margin: 0 auto;padding: 0;}
ul,li{list-style: none;}
a:visited,a:link{text-decoration: none;color: #333;}
</style>