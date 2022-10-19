<template>
  <div class="tabVisual">
      <div class="container">
        <h2>기관소식</h2>
        <div class="row mb-3">
            <div class="col-md-1 tab" @click="tab=1" :class="{active:tab==1}">공지사항</div>
            <div class="col-md-1 tab" @click="tab=2" :class="{active:tab==2}">스토리</div>
            <div class="col-md-1 tab" @click="tab=3" :class="{active:tab==3}">언론보도</div>
        </div>

        <visual-tap-swiper :notice="notice" :story="story" :news="news" :tab="tab"></visual-tap-swiper>
      </div>
  </div>
</template>

<script>
import VisualTapSwiper from "@/components/VisualTapSwiper.vue"
export default {
    components:{
        VisualTapSwiper,
    },
    props:[
        "notice",
        "story",
        "news"
    ],
    data(){
        return {
            tab:1,
        }
    }
}
</script>

<style lang="scss">
    .tabVisual{
        .tab{
            text-align: center;
            height: 40px;
            position: relative;
            cursor:pointer;
            &.active:after{
                content:"";
                position: absolute;
                width: 100%;
                height: 3px;
                background: rgb(34, 111, 141);
                left: 0;bottom: 0;
            }
        }
    }
</style>