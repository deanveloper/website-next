<template>
	<div class="page-base64">
		<h1>Word Counter</h1>
		<div class="content-container">
			<TextBox v-model="text" class="word-counter" inputClass="word-counter-input" />
			<div class="stat-container">
				<DataDisplay class="stat">
					<template #header>lines</template>
					<template #data>{{lines}}</template>
				</DataDisplay>
				<DataDisplay class="stat">
					<template #header>words</template>
					<template #data>{{words}}</template>
				</DataDisplay>
				<DataDisplay class="stat">
					<template #header>letters</template>
					<template #data>{{letters}}</template>
				</DataDisplay>
				<DataDisplay class="stat">
					<template #header>chars</template>
					<template #data>{{characters}}</template>
				</DataDisplay>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TextBox from "../components/TextBox.vue";
import DataDisplay from "../components/wordcount/DataDisplay.vue";

@Component({
	components: { TextBox, DataDisplay },
})
export default class WordCounter extends Vue {
	public text: string = "";

	get lines(): number {
		return this.text === "" ? 0 : this.text.split("\n").length;
	}
	get words(): number {
		return this.text.match(/(^|\p{Z})+.*?(\p{L}|\p{N})+/mgu)?.length ?? 0;
	}
	get letters(): number {
		return this.text.match(/\p{L}/mgu)?.length ?? 0;
	}
	get characters(): number {
		return this.text.match(/\p{Any}/mgu)?.length ?? 0;
	}
}
</script>

<style scoped lang="scss">

.content-container {
	width: 750px;
	max-width: 100%;

	box-sizing: border-box;
	display: inline-block;
}

.word-counter {
	width: 100%;
	margin-bottom: 10px;
}

::v-deep .word-counter-input {
	height: 500px;
	max-height: 50vh
}

.stat-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
}

.stat {
	margin: 10px;
}
</style>