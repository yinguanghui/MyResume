<template>
	<div>
		<div class = "header-bar">
			<x-header>{{$route.name}}</x-header>
		</div>
		<div class = "container">
			<h3 class = "contact-user">我的邮箱:427851618@qq.com</h3>
			<h3 class = "contact-user">我的GitHub地址:<br>www.github.com/yinguanghui</h3>
			<h3 class = "contact-user">给我留言</h3>
			<group>
      			<x-input placeholder="标题" v-model="title"></x-input>
      			<x-textarea :max="200" name="description" placeholder="内容" v-model="message"></x-textarea>
    		</group>
    		<x-button plain type="primary" style="width: 90%;margin: 20px auto;" v-on:click = "addMessage">submit</x-button>
		</div>
	</div>
</template>
<script>
	import { XHeader,Group,XInput,XTextarea,XButton } from 'vux'
	export default {
		components:{
			XHeader,
			Group,
			XInput,
			XTextarea,
			XButton
		},
		data(){
			return {
					title:'',
					message:''	
			}
		},
		methods:{
			addMessage(){
				console.log(1)
			}
		}
	}
</script>
<style>
	.contact-user{
		width: 90%;
		margin: 0 auto;
		padding: 20px 0;
	}
</style>