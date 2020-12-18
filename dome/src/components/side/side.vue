<template>
  <div id="side">
    <ul>
      <li>
        <a href="#"> <span> 数据中心 </span> <span> 暂无通知 </span> </a>
      </li>
      <li>
        <a href="#"> <span> 公告中心 </span> <span> 暂无通知 </span> </a>
      </li>
      <li>
        <a href="#"> <span> 工单中心 </span> <span> 暂无通知 </span> </a>
      </li>
      <li>
        <a href="#"> <span> 客户中心 </span> <span> 暂无通知 </span> </a>
      </li>
      <li>
        <a href="#"> <span> 聊天中心 </span> <span> 暂无通知 </span> </a>
      </li>
      <li>
        <a href="#"> <span> 服务中心 </span> <span> 暂无通知 </span> </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.addi();
  },
  methods: {
    addi() {
      for (var i = 0; i < document.querySelectorAll("li").length; i++) {
        document.querySelectorAll("li")[i].style.transitionDelay =
          i * 0.5 + "s";
      }
    },
  },
};
</script>

<style lang="less"  scoped>
* {
  margin: 0px;
  padding: 0px;
}

#side {
  width: 145px;
  height: 0 auto;
  background-color: transparent;
  position: fixed;
  top: 200px;
  right: 0px;

  li {
    position: relative;
    left: 72px;
    width: 170px;
    height: 30px;
    border-bottom: 2px solid rgb(73, 149, 235);
    background-color: transparent;
    transition: 0.5s;
    transition-delay: 0s;
    list-style: none;
    font-size: 15px;
  }
  a {
    text-decoration: none;
    text-align: center;
    line-height: 30px;
    color: white;
  }
  span {
    line-height: 30px;
    margin: 0 auto;
    text-align: center;
  }
  span:nth-child(1) {
    width: 80px;
    height: 30px;
    background-color: transparent;
    padding-left: 5px;
    padding-right: 5px;
  }
  span:nth-child(2) {
    width: 20px;
    height: 30px;
    background-color: transparent;
    padding-left: 5px;
    padding-right: 5px;
  }
}
#side:hover li {
  left: 0;
  border: 1px solid pink;
  border-radius: 10px;
}
</style>

