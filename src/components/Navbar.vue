<template>
	<nav :class="defClass">
		<NavbarElem
			:key="link.title"
			v-for="link in links"
			:link="link.url"
			:outerClass="elemOuterClass"
			:innerClass="elemInnerClass"
		>{{link.name}}</NavbarElem>
	</nav>
</template>

<script lang="ts">
import "reflect-metadata";
import NavbarElem from "./NavbarElem.vue";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({ components: { NavbarElem } })
export default class Navbar extends Vue {
	@Prop()
	public links!: Array<{ url: string; name: string; defClass?: string }>;

	@Prop({ default: "navbar" })
	public defClass!: string;

	@Prop()
	public elemOuterClass!: string;

	@Prop()
	public elemInnerClass!: string;
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

	background: lightgray;
}
</style>