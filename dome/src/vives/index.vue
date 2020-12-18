<template>
  <div>
    <ha></ha>
    <div class="all">
      <el-container :style="{ backgroundColor: $store.state.baseColor }">
        <el-header height="100px">
          <el-row :gutter="24">
            <el-col :span="3">
              <div class="img-col1">
                <img style="width: 180px" :src="img" />
              </div>
            </el-col>
            <el-col :span="15">
              <div class="img-col2">
                <div class="nav_group">
                  <a href="javascript:void(0)" @click="zb">直播管理</a>
                  <a href="javascript:void(0)" @click="xc">自媒体联盟</a>
                  <a href="javascript:void(0)" @click="vx">微信公众号</a>
                  <a href="javascript:void(0)" @click="xl">新浪微博</a>
                  <a href="javascript:void(0)">百家号</a>
                  <a href="javascript:void(0)">公众号涨粉</a>
                  <a href="javascript:void(0)">微信代运营</a>
                </div>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="img-col3">
                <el-button>用户中心</el-button>
                <el-button plain>订单中心</el-button>
                <el-button plain>充值中心</el-button>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-container>
          <el-aside width="210px">
            <el-menu
              router
              :default-active="$route.path"
              class="el-menu-vertical-demo"
              theme="dark"
              :default-openeds="openeds"
            >
              <el-menu-item index="/index">
                <i class="el-icon-menu"></i>
                <span slot="title"> 用户中心 </span>
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-edit"></i>
                  <span>发卡管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/publish">发卡发布</el-menu-item>
                  <el-menu-item index="/news_order">发卡列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">文件管理</span>
              </el-menu-item>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-edit-outline"></i>
                  <span>代运营</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="4-1">文章代写</el-menu-item>
                  <el-menu-item index="4-2">代写列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-sort"></i>
                  <span>充值与消费</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="5-1">充值中心</el-menu-item>
                  <el-menu-item index="5-2">交易流水</el-menu-item>
                  <el-menu-item index="5-3">发票列表</el-menu-item>
                  <el-menu-item index="5-4">发票信息审核</el-menu-item>
                  <el-menu-item index="5-5">邮寄地址管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="6">
                <template slot="title">
                  <i class="el-icon-tickets"></i>
                  <span>个人资料</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/glinfo">编辑管理</el-menu-item>
                  <el-menu-item index="6-2">资料编辑</el-menu-item>
                  <el-menu-item index="6-3">修改密码</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="/zmt">
                <i class="el-icon-view"></i>
                <span slot="title">我的自谋体</span>
              </el-menu-item>
            </el-menu>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
        <foot></foot>
      </el-container>
    </div>
  </div>
</template>

<script>
import "./../assets/css/index.css";
import ha from "../components/top";
import foot from "../components/foot/foot";

export default {
  name: "index",
  components: { ha, foot },
  data() {
    return {
      img: require("../img/logo2.png"),
      openeds: ["2", "3", "4", "5", "6", "7"],
    };
  },
  methods: {
    xl() {
      this.$router.push({ path: "./zmt" });
    },
    zb() {
      this.$router.push({ path: "./zb" });
    },
    xc() {
      this.$router.push({ path: "./xc" });
    },
    vx() {
      this.$router.push({ path: "./vx" });
    },
  },
};
</script>

<style lang="less">
.all {
  background: #f6f8f9;
  margin-top: 40px;
}
// 头
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
  font-family: Microsoft YaHei UI, Microsoft YaHei, \\5fae\8f6f\96c5\9ed1,
    SimSun, \\5b8b\4f53, sans-serif;
  font-size: 14px;
  white-space: nowrap;
  .img-col1 {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img-col2 {
    height: 100px;
    position: relative;
    top: 25px;
    .nav_group {
      margin-left: 400px;
      a {
        // background: saddlebrown;
        width: 50px;
        margin-left: 25px;
        padding: 5px 8px;
        border: 1px solid transparent;
        border-radius: 10px;
        color: white;
        &:hover {
          width: 50px;
          background: #0082e6;
          color: #ffffff;
        }
      }
    }
  }
  .img-col3 {
    height: 100px;
    position: relative;
    top: 25px;
    .el-button {
      color: #0082e6;
      border-radius: 2px;
      font-weight: 700;
      width: 100px;
      height: 31px;
      background: #ffffff;
      border: 1px solid #0082e6;
      margin-left: 20px;
      line-height: 3px;
      &:hover {
        background: #0082e6;
        color: #ffffff;
      }
    }
  }
}
//左侧
.el-aside {
  color: #666;
  line-height: 200px;
}
//内容
.el-main {
  // background-color:pink;
  // padding: 0px !important;
  // flex: 0 !important;
  margin-left: 130px;
  width: 80%;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>