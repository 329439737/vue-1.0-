<template>
  <div class="app">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>个人信息</span>
      </div>
      <div class="card">
        <el-row :gutter="20">
          <el-col :span="10">
            <el-row :gutter="20">
              <el-col :span="5" class="img">
                <el-avatar
                  :size="80"
                  src="https://xinmeibao.oss-cn-hangzhou.aliyuncs.com/avatar/WX20181031-092417.png"
                ></el-avatar>
              </el-col>
              <el-col :span="17">
                <el-row class="list_row">
                  <el-col :span="5">用户名</el-col>
                  <el-col :span="19">{{ name }}</el-col>
                </el-row>
                <el-row class="list_row">
                  <el-col :span="5">会员等级</el-col>
                  <el-col :span="19">VIP8</el-col>
                </el-row>
                <el-row class="list_row">
                  <el-col :span="5">手机号码</el-col>
                  <el-col :span="19">15713935339</el-col>
                </el-row>
                <el-row class="list_row">
                  <el-col :span="5">账户余额</el-col>
                  <el-col :span="5">￥6888.00</el-col>
                  <el-col :span="14"
                    ><el-button
                      @click="cz"
                      type="primary"
                      size="small"
                      round
                      style="width: 60px"
                      >充值</el-button
                    ></el-col
                  >
                </el-row>
              </el-col>
            </el-row>
          </el-col>

          <el-col :span="8">
            <el-row :gutter="20">
              <el-col :span="17">
                <el-row class="list_row">
                  <el-col :span="6">超级管理员</el-col>
                  <el-col :span="16">&nbsp;</el-col>
                </el-row>
                <el-row class="list_row">
                  <el-col :span="5">联系人</el-col>
                  <el-col :span="19">王子三千元</el-col>
                </el-row>
                <el-row class="list_row">
                  <el-col :span="5">QQ</el-col>
                  <el-col :span="19">329439737</el-col>
                </el-row>
                <el-row class="list_row">
                  <el-col :span="5">手机号码</el-col>
                  <el-col :span="19">15713935339</el-col>
                </el-row>
              </el-col>
              <el-col :span="5" class="img1">
                <el-avatar
                  shape="square"
                  :size="120"
                  :src="require('../../img/logo.jpg')"
                ></el-avatar>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <!-- 内容2 -->
    <div class="four">
      <div
        class="four_img"
        style="width: 23%; height: 100px; margin-left: 0px"
        :style="tips"
      >
        <el-row>
          <el-col :span="5">
            <i class="el-icon-loading"></i>
          </el-col>
          <el-col :span="8"><a href="#">最新资讯</a></el-col>
          <el-col :span="11"><a href="#">81</a></el-col>
        </el-row>
      </div>
      <div
        class="four_img"
        style="width: 23%; height: 100px; margin: 0 50px"
        :style="tips"
      >
        <el-row>
          <el-col :span="5">
            <i class="el-icon-service"></i>
          </el-col>

          <el-col :span="8"> <a href="#">发卡信息</a></el-col>
          <el-col :span="11"><a href="#">66</a></el-col>
        </el-row>
      </div>
      <div class="four_img" style="width: 23%; height: 100px" :style="tips">
        <el-row>
          <el-col :span="5">
            <i class="el-icon-first-aid-kit"></i>
          </el-col>
          <el-col :span="8"><a href="#">消费管理</a></el-col>
          <el-col :span="11"><a href="#">90</a></el-col>
        </el-row>
      </div>
      <div
        class="four_img"
        style="width: 23%; height: 100px; margin: 0 50px"
        :style="tips"
      >
        <el-row>
          <el-col :span="5">
            <i class="el-icon-chat-dot-round"></i>
          </el-col>
          <el-col :span="8"><a href="#">文件管理</a></el-col>
          <el-col :span="11"><a href="#">78</a></el-col>
        </el-row>
      </div>
    </div>
    <!-- 内容3 -->
    <div style="margin: 50px 0">
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
          <span
            >绑定微信
            <span style="color: red"
              >扫码关注官方微信，并使用微信登录，您可以随时接收订单的最新处理状态！</span
            ></span
          >
        </div>
        <div style="display: flex; justify-content: center">
          <div style="margin: 0 100px">
            <p style="color: red; font-size: 14px">1，关注官方微信公共号</p>
            <el-avatar
              shape="square"
              :size="150"
              :src="require('../../img/wxg.jpg')"
            ></el-avatar>
          </div>
          <div style="margin: 0 100px">
            <p style="color: red; font-size: 14px">2，点击接收消息</p>
            <el-avatar
              style="background: #fff"
              shape="square"
              :size="150"
              src="https://xinmeibao.oss-cn-hangzhou.aliyuncs.com/assets/image/weixin.png"
            ></el-avatar>
          </div>
        </div>
      </el-card>
    </div>
    <!-- 内容4 -->
    <div>
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
          <span>选择投放平台</span>
        </div>
        <div class="card">
          <ul class="showlist">
            <li>
              <img src="https://static.711.cn/material/icon/v3/news.png" />
              <p>软文发布</p>
            </li>
            <li>
              <img src="https://static.711.cn/material/icon/v3/woa.png" />
              <p>微信公众号</p>
            </li>
            <li>
              <img src="https://static.711.cn/material/icon/v3/weibo.png" />
              <p>新浪微博</p>
            </li>
            <li>
              <img src="https://static.711.cn/material/icon/v3/xhs.png" />
              <p>小红书</p>
            </li>
          </ul>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      name: this.$store.state.userinfo.name,
      tips: {
        backgroundImage: "url(" + require("../../img/b.png") + ")",
      },
      logo: {
        backgroundImage: "url(" + require("../../img/logo.jpg") + ")",
      },
    };
  },
  methods: {
    cz() {
      Axios.post("/AliRecharge/Alipay_Scan_Order", {
        phone: "15713935339",
        money: 10,
        integral: this.integral,
      });
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0px;
  padding: 0px;
}
a {
  text-decoration: none;
}

//
.four > .four_img {
  // background-image: url("../../img/a.png");
  background-repeat: no-repeat;
  background-size: cover;
  i {
    width: 50px;
    height: 77px;
    display: block;
    //background-color: pink;
    line-height: 77px;
    text-align: center;
    font-size: 40px;
  }
  .el-col:nth-child(3) {
    font-size: 25px;
  }
  a {
    color: white;
  }
}

.list_row {
  margin-top: 20px;
}
.img {
  // background: red;
  margin-left: 40px;
  margin-top: 40px;
}
.img1 {
  margin-left: 4px;
  margin-top: 40px;
}
.box-card {
  width: 100%;
  height: 28%;
  .clearfix {
    height: 100%;
    line-height: 10px;
    span {
      font-size: 14px;
    }
  }
  .card {
    width: 80vw;
    height: 20vh;
    // display: flex;
    // justify-content:center
  }
}
.four {
  margin: 50px 0;
  width: 80vw;
  display: flex;
}
.four div {
  background-image: url("");
  line-height: 100px;
}
.four div .el-row .el-col:nth-child(1) {
  margin-top: 13px;
}
.four div .el-row .el-col {
  padding-left: 40px;
  color: white;
}
four div .el-row .el-col:nth-child(3) {
  font-size: 130px;
}
.showlist {
  width: 85%;
  margin: 50px auto 0;

  display: flex;

  li {
    display: list-item;
    list-style: none;
    margin-left: 12%;
    img {
      width: 65px;
      height: 65px;
      border-radius: 50%;
      box-shadow: 0 0 20px #f5f5f5;
    }
    p {
      text-align: center;
      color: rgba(102, 102, 102, 0.4);
      font-size: 14px;
      margin-top: 17px;
      &:hover {
        color: #0082e6;
      }
    }
  }
}
</style>
