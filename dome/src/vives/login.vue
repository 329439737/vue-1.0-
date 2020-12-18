 <template>
  <div id="app" :style="tips">
    <vue-particles color="#ccc"></vue-particles>
    <div class="info">
      <!--侧边栏-->
      <side></side>
      <!--联系我-->
      <div></div>
      <!--登录页面-->
      <div>
        <template>
          <a href="http://49.235.81.22:6111" target="_blank">
            <el-alert
              title="欢迎登录繁星大数据中心！"
              type="success"
              :closable="false"
            >
            </el-alert
          ></a>
        </template>
      </div>
      <div v-if="faly === 2">
        <el-form
          label-width="80px"
          :model="loginform"
          :rules="rules"
          ref="loginform"
          class="form_tab"
        >
          <el-form-item label="用户名：" prop="name">
            <el-input
              placeholder="请输入用户名"
              v-model="loginform.name"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="序列号：" prop="pass">
            <el-input
              placeholder="请输入序列号"
              v-model="loginform.pass"
            ></el-input>
          </el-form-item>
          <!--验证码-->
          <el-form-item label="验证码:" prop="yzm">
            <el-input
              placeholder="请输入验证码"
              v-model="loginform.yzm"
            ></el-input>
          </el-form-item>
          <el-form-item label="" style="background-color: transparent">
            <el-button type="text">{{ loginform.code }}</el-button>
            <el-button type="round" :loading="false" @click="yzm"
              >换个验证码</el-button
            >
          </el-form-item>

          <!---->
          <el-form-item>
            <!--登录：  <el-button type="primary" round @click="login1()">登录</el-button>-->
            <el-button type="primary" round @click="login()">登录</el-button>

            <el-button type="primary" round @click="resit()"
              >注册账号</el-button
            >
            <!-- <el-link
              type="warning"
              round
              @click="resit()"
              style="margin-left: 20px"
              >还没有账号？</el-link
            >-->
            <br />
            <el-link type="danger" @click="list1()"
              >序列号忘记?点我查看</el-link
            >
          </el-form-item>
        </el-form>
      </div>
      <!--回去序列号-->
      <div v-if="faly === 3">
        <template>
          <el-table :data="list" height="350">
            <el-table-column
              v-for="{ prop, label } in colConfigs"
              :key="prop"
              :prop="prop"
              :label="label"
            >
            </el-table-column>
          </el-table>
        </template>
        <div class="btn">
          <el-button
            type="success"
            round
            @click="resit1()"
            style="margin-left: 20px"
            >返回</el-button
          >
          <el-button type="warning" round @click="open()">打赏作者</el-button>
        </div>
      </div>

      <div v-if="faly === 1">
        <!--注册页面-->
        <el-form
          label-width="80px"
          :model="loginform"
          :rules="rules"
          class="form_tab"
          ref="loginform"
        >
          <el-form-item label="用户名：" prop="name">
            <el-input
              placeholder="请输入用户名"
              v-model="loginform.name"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="psaaword">
            <el-input
              placeholder="请输入密码"
              v-model="loginform.psaaword"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <!--注册-->
            <el-button type="primary" round @click="zc()">注册</el-button>
            <el-link type="primary" @click="resit1()" style="margin-left: 20px"
              >返回登录</el-link
            >
          </el-form-item>
        </el-form>
      </div>
      <!--弹出框-->
    </div>
  </div>
</template>

<script>
import index from "../components/index/index.vue";
import side from "../components/side/side.vue";
import axios from "axios";
import vuex from "vuex";

import yzm from "../components/yzm/yzm.vue";
export default {
  components: { index, side, yzm },
  data() {
    this.colConfigs = [
      { prop: "name", label: "用户名" },
      { prop: "id", label: "序列号" },
    ];
    return {
      visible: false,
      tips: {
        backgroundImage: "url(" + require("../img/a.jpg") + ")",
      },
      identifyCodes: "1234567890",
      identifyCode: "",

      list: [],

      faly: 2,
      loginform: {
        name: "",
        pass: "",
        psaaword: "",
        yzm: "",
        code: "", //text框输入的验证码
      },
      rules: {
        name: [
          {
            required: true, //是否必填
            message: "用户名必填!", //规则
            trigger: "blur", //何事件触发
          },
        ],
        pass: [
          {
            required: true,
            message: "序列号必填!",
            trigger: "blur",
          },
        ],
        psaaword: [{ required: true, message: "密码必填!", trigger: "blur" }],
        yzm: [
          {
            required: true,
            message: "验证码必填!",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    this.randomNum();
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
    4;
  },
  methods: {
    yzm() {
      this.randomNum();
      this.refreshCode();
      this.makeCode();
    },
    //验证码
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },

    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      this.loginform.code = this.identifyCode;
      // console.log(this.identifyCode);
    },
    //切换注册页面
    resit() {
      this.faly = 1;
      this.loginform.name = "";
      this.loginform.pass = "";
      this.loginform.pass1 = "";
    },
    //登录页面
    resit1() {
      this.faly = 2;
      this.loginform.name = "";
      this.loginform.pass = "";
      this.loginform.pass1 = "";
    },
    //无接口登录
    login1() {
      if (
        this.loginform.name === "" ||
        this.loginform.pass === "" ||
        this.listinfo.yzm
      ) {
        alert("请不要为空！");
      } else {
      }
    },
    //登录确定

    login() {
      if (
        this.loginform.name === "" ||
        this.loginform.pass === "" ||
        this.listinfo.yzm
      ) {
        alert("请不要为空！");
      } else {
        if (this.loginform.yzm != this.loginform.code) {
          alert("验证码不正确");
        } else {
          const self = this;
          axios
            .get("http://www.liulongbin.top:3005/api/getprodlist")
            .then((response) => {
              var res = response.data.message,
                len = res.length,
                userNameArr = [],
                userID = [];
              // ses = window.sessionStorage;
              for (var i = 0; i < len; i++) {
                userNameArr.push(res[i].name);
                userID.push(res[i].id);
              }
              // console.log(res);
              //  console.log(userNameArr);
              //console.log(userNameArr, userID);
              if (userNameArr.indexOf(this.loginform.name) === -1) {
                alert("账号不存在");
              } else {
                var index = userNameArr.indexOf(this.loginform.name);
                //Saeeegiknnooorssstt中在把放;
                //console.log(index);
                //console.log(userID[index]);

                if (userID[index] == this.loginform.pass) {
                  //使用VUex的$stoer管理控制登录

                  this.$store.commit("login", {
                    name: this.loginform.name,
                    ID: this.loginform.pass,
                  });
                  this.$router.push("/xc");

                  //以下使用缓存方法
                  // ses.setItem("data", res[index].token);
                  // this.$parent.$data.userTitle = res[index].usertitle;
                  //验证成功进入首页
                  // this.startHacking("登录成功！");
                  //跳转到首页
                } else {
                  alert("序列号不正确");
                }
              }
            })
            .catch((err) => {
              alert("服务器错繁忙，请重试！");
            });
        }
      }
    },
    //方法
    open() {
      this.$alert("为了维护绿色网络，该通道已被关闭", "温馨提示", {
        confirmButtonText: "确定",
        callback: (action) => {
          // this.$message({
          // type: "info",
          // message: `action: ${action}`,
          //  });
        },
      });
    },
    //获取序列号
    listinfo() {
      axios
        .get("http://www.liulongbin.top:3005/api/getprodlist")
        .then((res) => {
          if (res.data.status === 0) {
            //console.log(res.data.message);
            this.list = res.data.message;
            //  console.log(this.list);
          }
        })
        .catch((res) => {
          alert("服务器错繁忙，请重试！");
        });
    },
    //切换序列号界面
    list1() {
      this.faly = 3;
      this.listinfo();
    },
    //用户注册
    zc() {
      if (this.loginform.name === "" || this.loginform.psaaword === "") {
        alert("信息必填");
      } else {
        axios
          .post("http://www.liulongbin.top:3005/api/addproduct", {
            name: this.loginform.name,
          })
          .then((res) => {
            //console.log(res.data.status);
            if (res.data.status === 0) {
              alert("注册成功");

              this.faly = 2;
            } else {
              alert(res.data.message);
            }
          })
          .catch((res) => {
            alert("服务器错繁忙，请重试！");
          });
      }
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0px;
  padding: 0px;
}
.el-form-item {
  margin-top: 30px;
}
a {
  text-decoration: none;
}
#app {
  width: 100%;
  height: calc(100vh);
  //background-image: url("../img/a.png");
  background-size: cover;
  .info {
    width: 500px;
    height: 500px;
    opacity: 0.8;
    background-color: white;
    position: fixed;
    top: 200px;
    right: 300px;
    border-radius: 10px;
    // border: 2px solid pink;
  }
  .form_tab {
    width: 400px;
    height: 400px;
    line-height: 400px;
    margin: 0 auto;
    margin-top: 50px;
  }
}
.btn {
  position: relative;
  top: 30px;
  left: 50px;
}
</style>