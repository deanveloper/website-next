<template>
	<nav class="navbar">
		<NavbarElem
			:key="link.title"
			v-for="link in links"
			:link="link.url"
		>{{link.name}}</NavbarElem>
		<div class="theme-switch" @click.capture.stop.prevent="themeSwitch">
			<span>theme</span>
			<Switches v-model="darkTheme" :color="switchColor" />
		</div>
	</nav>
</template>

<script lang="ts">
import NavbarElem from "./NavbarElem.vue";
import { Vue, Component, Prop } from "vue-property-decorator";
import Switches from 'vue-switches';

@Component({ components: { NavbarElem, Switches } })
export default class Navbar extends Vue {
	@Prop()
	public links!: Array<{ url: string; name: string; defClass?: string }>;

	public darkTheme = true;

	get switchColor() {
		return this.darkTheme ? "orange" : "default";
	}

	public created() {
		let mql = window.matchMedia("(prefers-color-scheme: light)");

		this.darkTheme = !mql.matches;
		mql.addEventListener("change", (ev) => {
			this.darkTheme = !ev.matches;
		});
	}

	public themeSwitch() {
		this.darkTheme = !this.darkTheme;

		this.$emit("theme-change", this.darkTheme ? "dark" : "light");
	}
}
</script>

<style lang="scss" scoped>
.navbar {
	position: relative;
	height: 50px;

	display: flex;
	align-items: center;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;

	background: var(--page-bg);
}

.theme-switch {
	position: absolute;
	right: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;

	font-size: 10px;
	cursor: pointer;
}

</style>