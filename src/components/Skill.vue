<template>
<div class = "container">
	<div class = "header-bar">
		<x-header>{{$route.name}}</x-header>
	</div>
	<div v-for = 'item in items'>
	<card>
      	<div slot="content" class="card-padding">
        <p class="skill-detail" style="color:#999;padding:20px 0;font-size: 18px">{{item.skill}}</p>
        <p class="skill-detail">
        	<x-progress :percent="item.skillPercent"></x-progress>
        </p>
        <p class="skill-detail">{{item.skillType}}</p>
      	</div>
    </card>	
	</div>
</div>
	
</template>
<script>
import { XHeader, Divider,Card,XProgress} from 'vux'

export default {
	data(){
		return {
			items:[
				{
					skill:'HTML5,CSS3,Javascript',
					skillPercent: 70,
					skillType:'熟悉'
				},
				{
					skill:'Bootsrap,JQuery',
					skillPercent: 70,
					skillType:'熟悉'
				},
				{
					skill:'Vuejs,Webpack,Sass',
					skillPercent: 60,
					skillType:'熟悉'
				},
				{
					skill:'Ajax,Json,Http协议',
					skillPercent: 70,
					skillType:'熟悉'
				},
				{
					skill:'W3C标准,Web语义化,前端性能优化',
					skillPercent: 80,
					skillType:'熟悉'
				},
				{
					skill:'团队协作,沟通能力',
					skillPercent: 80,
					skillType:'优秀'
				}
				]
		}
	},
  components: {
    XHeader,
    Divider,
    Card,
    XProgress
  }
}

</script>
<style>
	.skill-detail{
		font-size:14px;
		line-height:1.2;
		width: 90%;
		margin: 0 auto;
		padding-bottom:10px; 
	}
</style>