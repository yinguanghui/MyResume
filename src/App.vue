<template>
  <div id="app">
  	<router-view></router-view>
  	<footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from './components/FooterBar'
export default {
  name: 'app',
  components:{
    "footer-bar":FooterBar
  },
  methods:{
  	
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
.center{
	text-align: center;
}
.header-bar{
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 500;
}
body {
  background-color: #fbf9fe;
}
</style>
