<template>
	<div id="app">
		<div class="background" v-html="bgWord"></div>
		<Navbar :links="links" />
		<router-view />
	</div>
</template>

<script lang="ts">
import 'vue-router';
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar.vue";

@Component({
	components: { HelloWorld, Navbar },
})
export default class App extends Vue {
	public links: Array<{ name: string; url: string; defClass?: string }> = [];

	public bgWord: string = "beans"
		.split("")
		.join("&ZeroWidthSpace;")
		.concat("&ZeroWidthSpace;")
		.repeat(2000);

	created() {
		this.links = this!.$router!.options!.routes!.map((route) => {
			return {
				name: route.name ?? "",
				url: route.path ?? "",
			};
		});
	}
}
</script>

<style lang="scss">
html,
body {
	padding: 0;
	margin: 0;

	background: #111;
}

#app {
	margin-top: 0;

	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

@font-face {
	font-family: mazeletter;

	src: url("./assets/mazeletter-path.eot");

	src: url("./assets/mazeletter-path.eot") format("embedded-opentype"),
		url("./assets/mazeletter-path.woff") format("woff"),
		url("./assets/mazeletter-path.woff2") format("woff2"),
		url("./assets/mazeletter-path.ttf") format("truetype"),
		url("./assets/mazeletter-path.svg") format("svg");

	font-weight: normal;
	font-style: normal;
}

.background {
	position: fixed;
	width: 125%;
	z-index: -1;
	user-select: none;

	font-family: mazeletter;
	text-align: left;
	font-size: 100px;
	line-height: 101px;

	background: #050505;
	color: #020202;

	font-weight: bold;
}
</style>
