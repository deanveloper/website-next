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

	background-color: gray;

	box-shadow: 3px 3px rgba(255, 165, 0, 1);
}

.dd-header {
	font-weight: bold;
}

</style>
