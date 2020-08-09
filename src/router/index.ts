import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Base64 from "../views/Base64.vue";
import WordCounter from "../views/WordCounter.vue";

Vue.use(VueRouter);

const routes = [
	{
		name: "about",
		path: "/",
		component: About,
	},
	{
		name: "base64",
		path: "/base64",
		component: Base64,
	},
	{
		name: "word count",
		path: "/wordcounter",
		component: WordCounter,
	},
];

const router = new VueRouter({
	routes,
	mode: "history"
});

export default router;
