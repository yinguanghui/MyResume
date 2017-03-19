import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Skill from '../components/Skill'
import MyProject from '../components/MyProject'
import Contact from '../components/Contact'
Vue.use(Router)

export default new Router({
  routes: [
    {
    name:'Home',
  	path: '/Home',
  	component: Home
},
{	
	name:'Skill',
  	path: '/Skill',
  	component: Skill
},
{	
	name:'MyProject',
  	path: '/MyProject',
  	component: MyProject
},
{
	name:'ContactMe',
  	path: '/Contact',
  	component: Contact
},
{
	  path: '*',
	  redirect: '/Home'
}
  ]
})
