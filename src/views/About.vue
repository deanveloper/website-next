<template>
	<div class="page-about">
		<h1 class="header">dean bassett</h1>
		<h3 class="subheader">works at veeva systems</h3>
		<hr class="bar" />
		<section class="i-do games">
			you can find me playing
			<Tooltipper triggerClass="game-trigger">
				<template #trigger>overwatch</template>
				<template #tooltip>Dean#13801</template>
			</Tooltipper>,
			<Tooltipper triggerClass="game-trigger">
				<template #trigger>valorant</template>
				<template #tooltip>dean#dean</template>
			</Tooltipper>,
			<Tooltipper triggerClass="game-trigger">
				<template #trigger>osu!</template>
				<template #tooltip>deanveloper</template>
			</Tooltipper>, and
			<Tooltipper triggerClass="game-trigger">
				<template #trigger>minecraft</template>
				<template #tooltip>deanveloper</template>
			</Tooltipper>
		</section>
		<section class="i-do social">
			i also hang out on
			<a class="social-link" target="_blank" href="https://twitter.com/deanveloper">twitter</a>,
			<a class="social-link" target="_blank" href="https://www.byte.co/@deanb">byte</a>,
			<a class="social-link" target="_blank" href="https://www.tiktok.com/@deanveloper">tiktok</a>,
			<a class="social-link" target="_blank" href="https://instagram.com/deanveloper">instagram</a>,
			<a class="social-link" target="_blank" href="https://discord.gg/a9p7Jpm">discord</a>, and
			<a class="social-link" target="_blank" href="https://www.twitch.tv/deanveloper">twitch</a>
		</section>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Tooltipper from "../components/Tooltipper.vue";

@Component({components: {Tooltipper} })
export default class About extends Vue {
}
</script>

<style scoped lang="scss">
.page-about {
	text-align: left;
}

.header {
	margin: 0;
	color: var(--base-color);
	font-size: 80px;
}

.bar {
	border: 0;
	border-bottom: 1px solid grey;
}

.i-do {
	font-size: 32px;
	font-weight: 400;
	margin-top: 40px;
}

::v-deep .game-trigger {
	cursor: pointer;
	
	color: var(--highlight-color);
}

.social-link {
	text-decoration: none;

	color: var(--highlight-color);
}
</style>