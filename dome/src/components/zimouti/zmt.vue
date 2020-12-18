 <template>
  <div id="app">
    <el-tabs type="border-card">
      <el-tab-pane label="新郎微博">
        <span>
          <i class="el-icon-circle-check"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
          <i class="el-icon-s-promotion"></i>
        </span>
        <div class="info">
          <h3>
            成功人生四步曲：1、耐住寂寞;2、抵住诱惑;3、懂得放弃;4、学会选择
            <a
              href="https://weibo.com/u/5525416643"
              target="_blank"
              style="color: red"
              >--小甜酱汁儿</a
            >
          </h3>
        </div>
        <el-steps :active="1">
          <el-step
            title="步骤 1"
            description="打开微博搜索用户：小甜酱汁儿"
          ></el-step>
          <el-step
            title="步骤 2"
            description="快来和他做朋友，点击关注"
          ></el-step>
          <el-step
            title="步骤 3"
            description="关注成功，大奖即将开始！"
          ></el-step>
        </el-steps>
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item v-for="(img, index) in imgList" :key="index">
            <img :src="img.url" width="100%" height="100%" />
          </el-carousel-item>
        </el-carousel>
        <div>
          <span style="color: pink">头上一片晴天，心中一个想念</span>
          <el-divider content-position="left" style="color: pink"
            >王子三千缘分</el-divider
          >
          <span style="color: pink">饿了别喊饿, 喊饿了</span>
          <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
          <span style="color: pink">为了无法计算的价值</span>
          <el-divider content-position="right" style="color: red"
            >微博空间时间挂载</el-divider
          >
        </div>
        <el-calendar v-model="value"> </el-calendar>
      </el-tab-pane>
      <el-tab-pane label="百家号">待更新</el-tab-pane>
      <el-tab-pane label="QQ看点">待更新</el-tab-pane>
      <el-tab-pane label="知乎">待更新</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date(),
      imgList: [
        {
          url: require("@/img/w1.png"),
        },
        {
          url: require("@/img/w2.png"),
        },
        {
          url: require("@/img/w3.png"),
        },
        {
          url: require("@/img/w4.png"),
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
#app {
  width: 80%;
}
.el-carousel {
  margin-top: 20px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-tab-pane span:nth-child(0) {
  display: block;
  width: 100%;
  height: 50px;
  //background-color: pink;
  border: 1px solid pink;
  border-radius: 50%;
  h1 {
    line-height: 20px;
    text-align: center;
  }
}
.el-tab-pane {
  .info {
    height: 80px;
    //  background-color: pink;
    margin-top: 20px;
    h3 {
      // width: 100%;
      display: block;
      height: 50px;
      background-color: whitesmoke;
      border-bottom: 1px salmon solid;
      line-height: 50px;
      //border-radius: 10px;
      padding-left: 20px;
    }
  }
}
</style>>
</style>