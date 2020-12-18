<template>
  <el-container :style="{ backgroundColor: this.$store.state.baseColor }">
    <div class="header">
      <div class="h1">
        <div class="h11">
          <a href="#" style="padding-left: 20px">SOCEO - 繁星大数据中心平台</a>
        </div>
        <div class="h21">
          <ul>
            <li>用户名：</li>
            <li>
              <a href="#">{{ name }}</a>
            </li>
            <li>用户ID：</li>
            <li>
              <a href="#">{{ ID }}</a>
            </li>
            <li>余额：</li>
            <li><a href="#" style="color: red">￥6666</a></li>
            <li><a href="#" style="color: cadetblue">购物车</a></li>
            <li><a href="#">订单中心</a></li>
            <li style="padding-right: 20px" @click="exit">
              <a href="#">退出</a>
            </li>
            <li>
              <el-color-picker
                v-model="$store.state.baseColor"
                title="主题"
              ></el-color-picker>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </el-container>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
      name: this.$store.state.userinfo.name,
      ID: this.$store.state.userinfo.ID,
    };
  },
  methods: {
    exit() {
      this.$store.commit("login", ""); //更新userInfo

      this.$router.push("/");
    },
  },
};
</script>

<style >
* {
  margin: 0px;
  padding: auto;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
.header {
  position: fixed;
  z-index: 1000;
  height: 40px;

  top: 0px;
  left: 0px;
  right: 0px;
  background-color: ghostwhite;
  border-bottom: 0.5px solid pink;
}
.header .h1 {
  height: 40px;
  line-height: 40px;
  background-color: white;
  box-shadow: 0px 0px 0px #000;
}
.h11,
.h21 {
  float: left;
}
.h21 {
  float: right;
}
.h21 ul li {
  float: left;
  padding-left: 20px;
}
.h21 ul li:last-child {
  right: 20px;
}
.h2 {
  height: 160px;
  line-height: 160px;
}
.h2_3 ul li {
  float: left;
  padding-left: 20px;
  border: 0px pink solid;
}
.h2_3 ul li a {
  padding: 5px 5px 5px 5px;
}
.h2_3 ul li a:hover {
  background-color: #2bc4e2;
  padding: 5px 5px 5px 5px;
}
.h2_3 {
  margin-right: 10px;
}
.h2_2 {
  margin-right: 100px;
  margin-left: 500px;
}
.h2_1,
.h2_2,
h2_3 {
  float: left;
  line-height: 160px;
}
.h2_2 ul li {
  float: left;
  padding-left: 20px;
}
</style>
