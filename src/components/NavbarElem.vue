<template>
	<div :class="outerClass">
		<router-link :to="link">
			<div :class="innerClass">
				<slot></slot>
			</div>
		</router-link>
	</div>
</template>

<script lang="ts">
import "reflect-metadata";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class NavbarElem extends Vue {
	@Prop({ required: true })
	public link!: string;

	@Prop({default: "navbar-item-outer"})
	public outerClass!: string;

	@Prop({default: "navbar-item-inner"})
	public innerClass!: string;
}
</script>

<style scoped lang="scss">
.navbar-item-outer {
	height: 100%;
	margin: 0 2px;
}

.navbar-item-inner {
	display: flex;
	align-items: center;

	padding: 0 50px;
	font-size: 16px;

	position: relative;
	height: 100%;

	background: red;
}
</style>