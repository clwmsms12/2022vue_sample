<template>
  <HeaderView></HeaderView>
  <MainVisual></MainVisual>
  <DirectBanner :data="directData"> </DirectBanner>
  <div class="container">
    <div class="row">
      <div class="col-md-6 bg-primary">test</div>
      <div class="col-md-6 bg-info">test</div>
    </div>
  </div>
  <visual-tap 
    :notice="notice"
    :story="story"
    :news="news"
    >
  </visual-tap>


  <VisualEdu></VisualEdu>

  <web-count></web-count>
</template>

<script>
import HeaderView from "./components/HeaderView.vue";
import MainVisual from "./components/MainVisual.vue";
import DirectBanner from "./components/DirectBanner.vue";
import 자료 from "@/data/directs.js";
import VisualEdu from "./components/VisualSwiper.vue";
import VisualTap from "./components/VisualTap.vue";

import edu from "@/data/03edu.js";
import notice from "@/data/04notice.js";
import story from "@/data/05story.js";
import news from "@/data/06news.js";
export default {
  components: {
    HeaderView,
    MainVisual,
    DirectBanner,
    VisualTap,
    VisualEdu,

  },
  data() {
    return {
      directData: 자료,
      notice: notice,
      story: story,
      news: news,
      edu:edu,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
a:link,
a:visited {
  text-decoration: none;
  color: #333;
}
.container {
  width: 1280px;
  margin: 0 auto;
}
</style>