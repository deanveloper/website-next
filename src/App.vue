<template>
	<div id="app">
		<div class="background">
			<div class="bg-text">{{bgText}}</div>
		</div>
		<Navbar :links="links" />
		<main class="page-container">
			<router-view class="page"/>
		</main>
	</div>
</template>

<script lang="ts">
import 'vue-router';
import { Component, Vue } from "vue-property-decorator";
import Navbar from "./components/Navbar.vue";

@Component({
	components: { Navbar },
})
export default class App extends Vue {
	public links: Array<{ name: string; url: string; defClass?: string }> = [];

	public bgText: string = "beans".repeat(2000);

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

:root {
	--background-bg: #0b0a0c;
	--background-fg: #09080a;

	--page-bg: #17141b;

	--large-edit-component-bg: #11111b;
	--static-component-bg: #48485c;

	--base-color: rgb(255, 145, 0);
	--base-color-inactive: rgba(225, 145, 0, 0.2);
	--base-color-almost: rgba(225, 145, 0, 0.5);
	--base-color-active: rgba(225, 145, 0);

	--header-color: rgb(245, 200, 141);
	--subheader-color: rgb(170, 113, 48);
	--highlight-color: rgb(250, 185, 100);

	--trim-color: rgb(56, 41, 26);
}

html,
body {
	padding: 0;
	margin: 0;
}

.page-container {
	padding: 75px 0px;
}

#app {
	position: relative;
	margin: 0;

	font-family: Roboto, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;

	width: 100%;
}

.header {
	color: var(--header-color);
	font-family: Recursive, Helvetica, sans-serif;;
}

.subheader {
	margin-top: 0;
	color: var(--subheader-color);
}

.page {
	max-width: 90%;
	width: 1000px;
	margin: auto;

	box-sizing: border-box;
	padding: 30px;
	
	background-color: var(--page-bg);
	color: white;
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
	position: absolute;
	height: 100%;
	min-height: 100vh;
	width: 100%;
	overflow: hidden;

	user-select: none;
	z-index: -1;
}

.bg-text {

	width: 125%;

	background: var(--background-bg);
	color: var(--background-fg);

	font-family: mazeletter;
	text-align: left;
	font-size: 100px;
	line-height: 101px;
	font-weight: bold;
	word-break: break-all;
}
</style>
