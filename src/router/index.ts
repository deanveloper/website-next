import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Base64 from "../views/Base64.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "about",
		component: About,
	},
	{
		path: "/base64",
		name: "base64",
		component: Base64,
	},
];

const router = new VueRouter({
	routes,
	mode: "history"
});

export default router;
