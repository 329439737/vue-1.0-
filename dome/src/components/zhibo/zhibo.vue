<template>
  <div class="center">
    <div class="live">
      <div id="dplayer"></div>
    </div>
  </div>
</template>
</template>

<script>
/*
 我这里使用的是m3u8流，你们也可以选择其他方式，dplayer官网都有详细介绍。
*/
let Hls = require("hls.js");
import DPlayer from "dplayer";
export default {
  name: "Live",
  methods: {
    // 直播
    live() {
      const dp = new DPlayer({
        live: true,
        container: document.getElementById("dplayer"),
        video: {
          url:
            "http://122171.livepush.myqcloud.com/a/b.m3u8?txSecret=Md5(01ba5e231001b4ac16e048caeb6f07a0)&txTime=5FCDD786", // 示例地址
          type: "customHls",
          customType: {
            customHls: function (video, player) {
              const hls = new Hls();
              hls.loadSource(video.src);
              hls.attachMedia(video);
            },
          },
        },
      });
    },
  },
  mounted() {
    this.live();
  },
};
</script>

<style scoped>
#dplayer {
  width: 100%;
  height: 700px;
}
</style>