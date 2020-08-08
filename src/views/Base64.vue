<template>
	<div class="page-base64">
		<div class="boxes">
			<TextBox><h1>a</h1></TextBox>
			<TextBox><h1>b</h1></TextBox>
		</div>
		<div class="encoding">

		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TextBox from "../components/TextBox.vue";

@Component({
	components: { TextBox }
})
export default class Base64 extends Vue {}
</script>

<style scoped lang="scss">
.page-base64 {
	
}
.boxes {
	display: flex;
	justify-content: space-evenly;
}
</style>