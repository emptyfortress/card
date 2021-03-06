import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Folder from '@/components/Folder'
import Task from '@/components/Task'
import Doc from '@/components/Doc'
import Doc1 from '@/components/Doc1'
import Doc2 from '@/components/Doc2'
import Doc3 from '@/components/Doc3'
import Doc4 from '@/components/Doc4'
import Doc5 from '@/components/Doc5'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/task',
		name: 'task',
		component: Task,
		props: {
			maincolor: 'taskcolor'
		},
	},
	{
		path: '/doc',
		name: 'doc',
		component: Doc,
		props: {
			maincolor: 'docolor'
		},
	},
	{
		path: '/doc1',
		name: 'doc1',
		component: Doc1,
		props: {
			maincolor: 'docolor'
		},
	},
	{
		path: '/doc2',
		name: 'doc2',
		component: Doc2,
		props: {
			maincolor: 'docolor'
		},
	},
	{
		path: '/doc3',
		name: 'doc3',
		component: Doc3,
		props: {
			maincolor: 'docolor'
		},
	},
	{
		path: '/doc4',
		name: 'doc4',
		component: Doc4,
		props: {
			maincolor: 'docolor'
		},
	},
	{
		path: '/doc5',
		name: 'doc5',
		component: Doc5,
		props: {
			maincolor: 'docolor'
		},
	},
	{
		path: '/folder',
		name: 'folder',
		component: Folder,
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
