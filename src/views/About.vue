<template>
	<div class="page-about">
		<h1 class="name">dean bassett</h1>
		<h3 class="job">works at veeva systems</h3>
		<hr class="bar" />
		<section class="i-do games">
			you can find me playing
			<Tooltipper style="color: #F0CB11" triggerClass="game-trigger">
				<template #trigger>overwatch</template>
				<template #tooltip>Dean#13801</template>
			</Tooltipper>,
			<Tooltipper style="color: #FE2D51" triggerClass="game-trigger">
				<template #trigger>valorant</template>
				<template #tooltip>dean#dean</template>
			</Tooltipper>,
			<Tooltipper style="color: #E7679F" triggerClass="game-trigger">
				<template #trigger>osu!</template>
				<template #tooltip>deanveloper</template>
			</Tooltipper>, and
			<Tooltipper style="color: #71B245" triggerClass="game-trigger">
				<template #trigger>minecraft</template>
				<template #tooltip>deanveloper</template>
			</Tooltipper>
		</section>
		<section class="i-do social">
			i also hang out on
			<a class="social-link twitter" target="_blank" href="https://twitter.com/deanveloper">twitter</a>,
			<a class="social-link byte" target="_blank" href="https://www.byte.co/@deanb">byte</a>,
			<a class="social-link tiktok" target="_blank" href="https://www.tiktok.com/@deanveloper">tiktok</a>,
			<a class="social-link instagram" target="_blank" href="https://instagram.com/deanveloper">instagram</a>,
			<a class="social-link discord" target="_blank" href="https://discord.gg/a9p7Jpm">discord</a>, and
			<a class="social-link twitch" target="_blank" href="https://www.twitch.tv/deanveloper">twitch</a>
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

<style lang="scss">

.game-trigger {
	cursor: pointer;
}

</style>

<style scoped lang="scss">
.page-about {
	text-align: left;
}

.bar {
	border: 0;
	border-bottom: 1px solid grey;
}

.name {
	margin: 0;
	color: rgb(255, 145, 0);
	font-size: 80px;
}

.job {
	margin-top: 0;
	color: #AAA;
}

.i-do {
	font-size: 32px;
	font-weight: 400;
	margin-top: 40px;
}
.social-link {
	text-decoration: none;
}

.twitter {
	color: #23A1EF
}

.byte {
	color: #9a45b4;
}

.instagram {
	background: radial-gradient(circle at 20% 150%, #fcee58 0%, #fce921 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);

	-webkit-background-clip: text;
	background-clip: text;
	
	color: transparent;
}

.tiktok {
	color: white;
	filter: drop-shadow(-2px -2px #c2063565) drop-shadow(2px 2px #04ffea80);
}

.discord {
	color: #6F85D0;
}

.twitch {
	color: #9048F9;
}
</style>