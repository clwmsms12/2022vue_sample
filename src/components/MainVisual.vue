<template>
  <swiper 
  :navigation="true" 
  :modules="modules" 
  :loop="true"
  :pagination="{
      clickable: true,
    }"
  class="mySwiper"
  >
    <swiper-slide 
      v-for="(item,i) in swiperView" 
      :key="item" 
      :style="{'background-color':`${swiperView[i].color}`}"
    >
      <!-- <div :style="{'background-color':`${item.color}`}" class="innerItem"> -->
      <div class="innerItem">
        <img :src="`./images/swiper/${item.src}`" alt="">
      </div>
    </swiper-slide>
    
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation,Pagination } from "swiper";
//swiper data
import sData from "@/data/swiper.js"
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation,Pagination],
      swiperView:sData,
    };
  },
};
</script>
<style lang="scss">
  .mySwiper{
    .swiper-slide{
      height: 400px;
      .innerItem{ 
        height: 100%;
      }
      img{
        display: block;
        margin:0 auto
      }
    }
  }
</style>