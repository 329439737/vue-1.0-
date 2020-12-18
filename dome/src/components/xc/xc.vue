<template>
  <div id="app">
    <el-card class="box-card" shadow="always">
      <div slot="header" class="clearfix">
        <span>王子三千缘：扫一扫关注我</span>
      </div>
      <div class="card">
        <ul class="showlist">
          <li>
            <img src="../../img/vx.jpg" />

            <p><a href="javascript:void(0)">Vx公共号</a></p>
          </li>
          <li>
            <img src="../../img/bjh.png" />
            <p>
              <a
                href="https://author.baidu.com/home?context=%7B%22app_id%22%3A%221630686982573806%22%7D&wfr=bjh"
                target="_black"
                >百家号</a
              >
            </p>
          </li>
          <li>
            <img src="../../img/qq.png" />
            <p>
              <a
                href="https://kandian.qq.com/mqq/vue/main?_wv=10145&_bid=3302&adfrom=qqshare&x5PreFetch=1&accountId=MTAwMTAwNjU0NjkxOA==&adtag=qqshare&t=1608168284997"
                target="_black"
                >腾讯看点</a
              >
            </p>
          </li>
          <li>
            <img src="../../img/vb.jpg" />
            <p>
              <a href="https://weibo.com/u/5525416643" target="_black">微博</a>
            </p>
          </li>
          <li>
            <img src="../../img/tt.png" />
            <p>
              <a
                href="https://profile.zjurl.cn/rogue/ugc/profile/?version_code=801&version_name=80001&user_id=85951589755&media_id=1653619729004552&request_source=1&active_tab=dongtai&device_id=65&app_name=news_article&tt_from=copy_link&utm_source=copy_link&utm_medium=toutiao_android&utm_campaign=client_share"
                target="_black"
                >今日头条</a
              >
            </p>
          </li>
          <li>
            <img src="../../img/zh.jpg" />
            <p>
              <a
                href="https://www.zhihu.com/people/xiao-tian-jiang-zhi-er"
                target="_black"
                >知乎</a
              >
            </p>
          </li>
        </ul>
      </div>
      <div slot="foot" class="clearfix">
        <span>王子三千缘：扫一扫关注我</span>
      </div>
    </el-card>
    <el-card>
      <div slot="header" class="clearfix">
        <span>支付宝活动来袭</span>
      </div>
      <div>
        <el-timeline>
          <el-timeline-item timestamp="第一步" placement="top">
            <el-card>
              <h4>打开支付宝扫一扫</h4>
              <p>先领取红包</p>
              <img src="../../img/sj.jpg" />
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="第二步" placement="top">
            <el-card>
              <h4>向商家付款</h4>
              <p>红包可抵消</p>
              <img src="../../img/zfb.jpg" />
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="结语" placement="top">
            <el-card>
              <h4>更多活动进行中...</h4>
              <p>红包、金币、皮肤、超值券来袭</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#app {
  width: 80%;
  height: 0 auto;
  .el-card:nth-child(2) {
    margin-top: 30px;
  }
  .el-timeline img {
    width: 200px;
    height: 250px;
  }
  .card ul li {
    float: left;
    margin-left: 180px;
    border-bottom: 1px skyblue solid;
    margin-top: 10px;
    p {
      text-align: center;
      color: red;
      padding-left: 10px;
      border: 1px solid pink;
      border-radius: 1px;
    }
    img {
      width: 130px;
      height: 130px;
    }
  }
}
</style>