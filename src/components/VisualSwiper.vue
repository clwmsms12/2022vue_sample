<template>
  <swiper
    style="border: 1px solid red; width: 400px"
    :slides-per-view="1"
    @swiper="onSwiper"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
  </swiper>

  <button @click="handleSlideTo">slide to 4</button>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
export default {
  name: "App",
  
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiper: null,
    };
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },
    handleSlideTo() {
      this.swiper.slideTo(3);
    },
  },
};
</script>