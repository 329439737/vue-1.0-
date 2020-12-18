<template>
  <div id="app">
    <el-card>
      <div id="card_1">
        <span>历史文章</span>
      </div>
      <div>
        <ul>
          <li>
            <span>1</span>
            <a
              href="https://mp.weixin.qq.com/s/gWNuik8-wI-NxMsMC6bcwg"
              target="_black"
              >VLOG:我的诗和远方</a
            >
          </li>
          <li>
            <span>2</span>
            <a
              href="https://mp.weixin.qq.com/s/eyRvNUWQOwc4nQEFe7Lo4w"
              target="_black"
              >面对2020年最后一个月，你还有哪些未完成的心愿？</a
            >
          </li>
          <li>
            <span>3</span>
            <a
              href="https://mp.weixin.qq.com/s/kXYNbHDpohXUHQPoMSgnmQ"
              target="_black"
              >当代大学生遗憾排行榜，看看你中了几条？</a
            >
          </li>
          <li>
            <span>4</span>
            <a
              href="https://mp.weixin.qq.com/s/-kIeHxohcKYPOvw58l_MJw"
              target="_black"
              >张艺兴，开局就是王炸，对着空气比划，《扫黑风暴》上映</a
            >
          </li>
          <li>
            <span>5</span>
            <a
              href="https://mp.weixin.qq.com/s/QcPWniYk43n83kmSXLXYZw"
              target="_black"
              >'95后'女生录节目被骂惨：你以为的耿直，其实就是嘴贱！</a
            >
          </li>
        </ul>
      </div>
    </el-card>
    <el-card>
      <div id="card_2">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item
            ><a href="javascript:viod(0)">微信公共号</a></el-breadcrumb-item
          >
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div id="a">
          <el-radio-group v-model="direction">
            <el-radio label="ltr">从左往右开</el-radio>
            <el-radio label="rtl">从右往左开</el-radio>
            <el-radio label="ttb">从上往下开</el-radio>
            <el-radio label="btt">从下往上开</el-radio>
          </el-radio-group>

          <el-button
            @click="drawer = true"
            type="primary"
            style="margin-left: 16px"
          >
            点我打开活动详情
          </el-button>
          <el-rate v-model="value" show-text> </el-rate>
          <el-drawer
            title=""
            :visible.sync="drawer"
            :direction="direction"
            :before-close="handleClose"
          >
            <span>重要通知！2021年微信公共号将被收购！赶快来入股吧。</span>
          </el-drawer>
        </div>
      </div>
    </el-card>
    <div id="img">
      <img src="../../img/a.png" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      direction: "rtl",
      value: null,
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>

<style lang="less" scoped>
#img {
  position: relative;
  width: 100%;
  top: 10px;
  img {
    background-size: convert;
    width: 100%;
  }
}
.el-rate {
  margin-top: 30px;
}
.el-card {
  margin-top: 20px;
  #a {
    padding-top: 40px;
  }
}
#card_1 {
  border-bottom: 1px solid whitesmoke;
  height: 50px;
}
#app {
  a {
    text-decoration: none;
    color: red;
  }
  li {
    list-style: none;
  }
  ul li {
    margin-top: 20px;
    border-bottom: 1px solid pink;
    a {
      padding-left: 20px;
    }

    span {
      display: block;
      width: 25px;
      height: 25px;
      border: 1px solid pink;
      border-radius: 50%;
      text-align: center;
      color: powderblue;
      float: left;
      //  margin-top: 20px;
    }
  }
}
</style>