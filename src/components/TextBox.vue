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
	color: var(--default-text-color);
}

.text-box-input {
	box-sizing: border-box;

	box-shadow: 3px 3px var(--trim-color);
	outline: 0;

	color: var(--default-text-color);
	background-color: var(--large-edit-component-bg);
	
	padding: 10px;

	border-radius: 10px;
    resize: none;

	width: 100%;
}
</style>