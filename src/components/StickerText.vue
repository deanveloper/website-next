<template>
	<div class="sticker-text">
		<div v-for="lines">
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class TextBox extends Vue {

	@Prop()
	public text: string = "";

	@Prop({required: true})
	public width: string = "100%";

	public lines: string[] = [];
}

</script>

<style scoped lang="scss">
.text-box-container {

}
</style>