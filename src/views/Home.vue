<template>
	<div class="home">
		
	</div>
</template>

<script lang="ts">
import HelloWorld from "../components/HelloWorld.vue";
import { Vue, Component } from "vue-property-decorator";

@Component({ components: { HelloWorld } })
export default class Home extends Vue {}
</script>

<style scoped>
.home {
	
}
</style>