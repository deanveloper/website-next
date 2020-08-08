<template>
	<div class="text-box-container">
		<div><slot></slot></div>
		<input :class="[inputClass, `text-box-input`]" v-model="inputVal">
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

	@Prop({default: ""})
	inputClass!: string;

	get inputVal() {
		return this.value;
	}

	set inputVal(newVal) {
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
	box-shadow: 3px 3px rgba(255, 165, 0, 1);
	outline: 0;

	background-color: white;
	padding: 15px;

	border-radius: 10px;
}
</style>