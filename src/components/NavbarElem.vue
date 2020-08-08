<template>
	<router-link :to="link" tag="div" class="navbar-item" exact-active-class="navbar-item-exact">
		<slot></slot>
	</router-link>
</template>

<script lang="ts">
import "reflect-metadata";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class NavbarElem extends Vue {
	@Prop({ required: true })
	public link!: string;
}
</script>

<style scoped lang="scss">
.navbar-item {
	box-sizing: border-box;

	display: flex;
	align-items: center;

	position: relative;
	height: 100%;
	padding: 0 30px;
	margin: 0 2px;
	font-size: 16px;

	color: rgba(255, 165, 0, 1.0);
	
	cursor: pointer;
	user-select: none;

	transition: border-bottom 0.25s;
	border-bottom: 3px solid rgba(255, 165, 0, 0.1);
	&:hover {
		border-bottom: 3px solid rgba(255, 165, 0, 0.2);
	}
	&.navbar-item-exact {
		border-bottom: 3px solid rgba(255, 165, 0, 0.8);
	}
}
</style>