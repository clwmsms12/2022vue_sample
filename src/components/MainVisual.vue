<template>
  <div class="visual">
    <Swiper>
      <SwiperSlide class="item">test1</SwiperSlide>
      <SwiperSlide class="item">test2</SwiperSlide>
      <SwiperSlide class="item">test3</SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperSlide} from "swiper/vue"
  import "swiper/css"
export default {
  components:{
    Swiper,
    SwiperSlide,
  }
}
</script>

<style lang="scss">
    .visual{
        background: pink;
        margin-bottom: 20px;
        .item{
          height: 300px;
          display: flex;justify-content: center;align-items: center;
          }
    }
</style>