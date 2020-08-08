<template>
	<header>
		<div class="pfp-container">
			<img class="profile-picture" />
		</div>
		<Navbar :links="links" />
	</header>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import Navbar from "./Navbar.vue";

@Component
export default class Header extends Vue {
	public links: Array<{ url: string; title: string; defClass?: string }> = [];
}
</script>