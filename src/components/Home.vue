<template>
  <div>
    <div class = "vux-demo">
      <div class = "home-header">
        <img src="../assets/user.jpg" class = "home-user-img">
        <h4 class="home-user-name">尹光辉</h4>
      </div>
    </div>
    <div class = "container">
      <div>
        <divider>我的个人信息</divider>
        <Group>
          <Cell title = "学历" value = "本科"></Cell>
          <Cell title = "毕业院校" value = "湖南警察学院"></Cell>
          <Cell title = "专业" value = "信息安全"></Cell>
          <Cell title = "年龄" value = "23"></Cell>
          <Cell title = "婚否" value = "否"></Cell>
          <Cell title = "意向岗位" value = "web前端"></Cell>
          <Cell title = "意向地区" value = "深圳"></Cell>
          <Cell title = "手机号码" value = "18390852419"></Cell>
          <Cell title = "Email" value = "427851618@qq.com"></Cell>
        </Group>
      </div>
  </div>
  </div>
</template>

<script>
import { Group, Cell,Card,Divider } from 'vux'

export default {
  components: {
    Group,
    Cell,
    Card,
    Divider
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
  background: #35495e;
  padding: 20px 0;
}
.home-user-img {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
.home-user-name{
  color: #fff;
}
.container{
  padding: 50px 0;
}
</style>
