<template>
    <swiper
       v-bind="swiperOptions1"
      :modules="modules1"
      class="mySwiper1"
    >
      <swiper-slide v-if="tab==1" v-for="item in notice" :key="item" :class="{notice:tab=1}">
        <h4>{{item.name}}</h4> 
        {{item.title}}
      </swiper-slide>

      <swiper-slide v-if="tab==2" v-for="item in story" :key="item" :class="{story:tab=2}">
        <h4>{{item.name}}</h4> {{item.title}} <br>{{item.subtitle}}

      </swiper-slide>

      <swiper-slide v-if="tab==3" v-for="item in news" :key="item" :class="{news:tab=3}">
        <h4>{{item.name}}</h4> {{item.title}}
      </swiper-slide>

    </swiper>

  </template>
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  
  import "swiper/css/pagination";
  import "swiper/css/navigation";
  
 
  
  // import required modules
  import { Pagination, Navigation } from "swiper";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    props:[
        "notice",
        "story",
        "news",
        "tab",
    ],
    setup() {
      return {
        modules1: [Pagination, Navigation],
        swiperOptions1:{
            slidesPerView:3,
            spaceBetween:30,
            loop:true,
            observer: true,
            observeParents: true,
        
      }
      }
    },
  };
  </script>
<style lang="scss">
    .swiper-slide{
        height: 400px;
        &.notice{
            background: skyblue;
        }
        &.story{
            background: pink;
        }
        &.news{
            background: green;
        }
    }
</style>