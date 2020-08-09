<template>
	<nav class="navbar">
		<NavbarElem
			:key="link.title"
			v-for="link in links"
			:link="link.url"
		>{{link.name}}</NavbarElem>
	</nav>
</template>

<script lang="ts">
import NavbarElem from "./NavbarElem.vue";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({ components: { NavbarElem } })
export default class Navbar extends Vue {
	@Prop()
	public links!: Array<{ url: string; name: string; defClass?: string }>;
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
</style>