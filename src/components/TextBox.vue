<template>
	<div class="text-box-container">
		<div><slot></slot></div>
		<textarea :class="[inputClass, `text-box-input`]" v-model="inputVal" />
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class TextBox extends Vue {

	@Prop()
	title?: string;

	@Prop({default: ""})
	value!: string;

	@Prop()
	inputClass?: string;

	get inputVal(): string {
		return this.value;
	}

	set inputVal(newVal: string) {
		this.$emit('input', newVal);
	}
}

</script>

<style scoped lang="scss">
.text-box-container {
	display: inline-block;
	color: white;
}

.text-box-input {
	box-sizing: border-box;

	box-shadow: 3px 3px rgba(255, 165, 0, 1);
	outline: 0;

	background-color: white;
	padding: 10px;

	border-radius: 10px;
    resize: none;

	width: 100%;
}
</style>