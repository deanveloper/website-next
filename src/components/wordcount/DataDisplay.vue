<template>
	<div class="dd-base">
		<div class="dd-header"><slot name="header" /></div>
		<div class="dd-data"><slot name="data" /></div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DataDisplay extends Vue {

}
</script>

<style lang="scss" scoped>
.dd-base {
	display: inline-block;
	padding: 10px 15px;
	border-radius: 10px;

	background-color: var(--static-component-bg);

	box-shadow: 3px 3px var(--trim-color);
}

.dd-header {
	font-weight: bold;
}

</style>
