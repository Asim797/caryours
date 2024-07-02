import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './routes.js';

Vue.use(VueRouter)
const router = new VueRouter({
	mode: 'history',
	base : process.env.NODE_ENV == 'development' ? '/':'/',
	routes,
});

export default router;
