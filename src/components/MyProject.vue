<template>
<div class="container">
	<div class = "header-bar">
		<x-header>{{$route.name}}</x-header>
	</div>
	<divider>工作经历</divider>
	<div v-for = 'company in companys'>
	<card>
      	<div slot="content" class="card-padding">
        <p class="skill-detail" style="color:#999;padding:20px 0;font-size: 16px">{{company.name}}<br>{{company.time}}</p>
        <p class="skill-detail" v-for = '(val,index) in company.job'>
        	{{index + 1}}.{{company.job[index]}}
        </p>
    </div>
    </card>	
	</div>
	<divider>项目经验</divider>
	<div v-for = 'item in projects'>
	<card>
      	<div slot="content" class="card-padding">
        <p class="skill-detail" style="color:#999;padding:20px 0;font-size: 16px">{{item.name}}<br>{{item.time}}</p>
        <p class="skill-detail">所属公司:{{item.projectCompany}}</p>
        <p class="skill-detail">{{item.projectDuty}}</p>
        <p class="skill-detail">{{item.projectDetail}}</p>
        <p class="skill-detail">{{item.projectSummed}}</p>
        
    </div>
    </card>	
	</div>
</div>
</template>
<script>
	import { XHeader,Divider,Card} from 'vux'
	export default {
		components: {
    		XHeader,
    		Divider,
    		Card
  			},
  		data(){
  			return {
  				companys:[
  				{
  					name:'长沙奇牛电子商务有限公司',
  					time:'2015/07~2016/05',
  					job:['参与公司的销售平台PC端以及移动端的开发，根据业务需求，对公司产品进行升级与维护。',
  						'协调开发、设计资源，推动项目进度，保证产品质量，打磨细节体验',
  						'参与用户需求分析并提出行之有效的建议。'
  					]
  				},
  				{
  					name:'湖南医电园网络科技有限公司',
  					time:'2016/06~2017/03',
  					job:[
  						'参与公司的销售平台（Web APP）以及微信营销小游戏的开发，根据业务需求，对公司产品进行升级与维护。',
  						'协调开发、设计资源，推动项目进度，保证产品质量，打磨细节体验',
  						'参与用户需求分析并提出行之有效的建议。'
  					]
  				}
  				],
  				projects:[{
  					name:'奇牛微客',
  					projectCompany:'长沙奇牛电子商务有限公司',
  					time:'2015/12~2016/3',
  					projectDetail:'项目描述:这是一个微信自媒体的Web APP项目，该项目主要功能模块分为个人中心、文章推荐、商品推荐、收入明细、合伙人、购物车、订单信息等。页面采用Html5,CSS3,zepto等技术，后台使用后台使用PHP, Apache ,Myspl 的MVC架构。',
					projectSummed:'项目总结:第一次实际参与项目开发，将自己学到的知识与实际开发结合，发现了很多学习中没注意到的事情。如移动端的性能问题，IOS与Android的微信内核差异等，让自己受益良多。',
  					projectDuty:'责任描述:本人在此项目中，主要负责开发出符合公司要求的Web APP静态页面，并实现动态交互。处理不同屏幕的适配性问题，开发出符合大部分移动端屏幕分辨率的页面。协调开发、设计资源，推动项目进度，保证产品质量，打磨细节体验。参与用户需求分析与讨论，并提出行之有效的建议。'
					},
					{
  					name:'医电园网络商城',
  					projectCompany:'湖南医电园网络科技有限公司',
  					time:'2016/6~2016/8',
  					projectDetail:'项目描述:该项目主要功能模块分为首页商品展示、医疗耗材、医疗器械、医疗设备、用户管理、企业用户系统、购物车、新闻模块、积分商城、限时抢购、监管系统、对账系统等。页面采用Html 5,CSS3, JQuery等技术，后台使用PHP, Apache ,Myspl 的MVC架构。',
					projectSummed:'项目总结:独立开发PC端网络商城，对PC端应用的开发有了实际操作经验，对处理浏览器兼容问题有了自己的体会，认识到了自己基础的不足，明确了自己的学习方向。',
  					projectDuty:'责任描述:在此项目中，本人参与了用户需求分析与静态界面的交互设计工作，主要负责整个前端界面的开发，并确保其在主流浏览器上的视觉统一性。'
					},
					{
  					name:'医电园手机商城&微信商城',
  					projectCompany:'湖南医电园网络科技有限公司',
  					time:'2016/9~2016/12',
  					projectDetail:'项目描述:这是一个医疗器械类的网络商城项目，该项目的主要功能模块分为首页商品展示、商品分类、购物车、个人中心、商品信息、发票系统、积分系统、订单信息等，页面采用Html 5,CSS3, JQuery等技术，后台使用PHP, Apache ,Myspl 的MVC架构。实现了在移动端的视觉统一性，达成了公司的需求。',
					projectSummed:'项目总结:认识到了移动端性能优化的重要性，例如：对变量的缓存，对DOM对象的缓存，移除空事件处理程序，释放内存等等。',
  					projectDuty:'责任描述:在此项目中，本人参与了用户需求分析与静态界面的交互设计工作，主要负责整个前端界面的开发，做好移动端的不同分辨率的适配，并确保其在手机主流浏览器上的视觉统一性。'
					}
  					]
  			}
  		}
	}
</script>
<style></style>