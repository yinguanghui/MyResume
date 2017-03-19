<template>
  <div class = "fixed footer-bar">
      <tabbar>
      <tabbar-item :selected ='$route.name == "Home"' link="/Home">
        <span slot="label">主页</span>
      </tabbar-item>
      <tabbar-item :selected ='$route.name == "Skill"' link="./Skill">
        <span slot="label">我的技能</span>
      </tabbar-item>
      <tabbar-item :selected ='$route.name == "MyProject"' link="./MyProject">
        <span slot="label">工作经历</span>
      </tabbar-item>
      <tabbar-item :selected ='$route.name == "ContactMy"' link="./Contact">
        <span slot="label">联系我</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  data(){
    return {
      
    }
  },
  components: {
    Tabbar,
    TabbarItem,
  }
}
</script>
<style>
  .footer-bar{
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 500;
  }
  .Relative{
    position: relative;
  }
</style>