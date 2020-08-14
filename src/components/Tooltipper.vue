<template>
	<div class="tt-wrapper">
		<div
			ref="trigger"
			:class="[`tt-trigger`, triggerClass]"
			@focus="triggerFocused = true"
			@blur="triggerFocused = false"
			tabindex="0"
		>
			<slot name="trigger"></slot>
		</div>
		<transition name="fade">
			<div
				v-if="shouldShowTooltip"
				ref="tooltip"
				:class="classes"
				:style="{left: Math.round(leftPx) + `px`}"
				@mouseenter="tooltipHovering = true"
				@mouseleave="tooltipHovering = false"
				@focus="tooltipFocused = true"
				@blur="tooltipFocused = false"
				tabindex="-1"
			>
				<slot name="tooltip"></slot>
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Ref, Watch } from "vue-property-decorator";

@Component
export default class TextBox extends Vue {
	@Prop({ default: "" })
	public triggerClass!: string;

	@Prop({ default: "" })
	public tooltipClass!: string;

	@Ref()
	readonly trigger?: HTMLDivElement;

	@Ref()
	readonly tooltip?: HTMLDivElement;

	public leftPx: number = 0;

	public triggerFocused: boolean = false;
	public tooltipFocused: boolean = false;
	public tooltipHovering: boolean = false;

	get shouldShowTooltip(): boolean {
		return this.triggerFocused || this.tooltipFocused || this.tooltipHovering;
	}

	@Watch('triggerFocused')
	@Watch('tooltipFocused')
	@Watch('tooltipHovering')
	public updateLeftPx() {
		requestAnimationFrame(() => {
			if (this.shouldShowTooltip) {
				this.leftPx = (this.trigger?.offsetWidth ?? 0) / 2 - (this.tooltip?.offsetWidth ?? 0) / 2
			}
		});
	}

	public get classes() {
		return {
			"tt-tooltip": true,
			[`${this.tooltipClass}`]: true,
			"tt-tooltip-active": this.shouldShowTooltip,
			[`${this.tooltipClass}-active`]: this.tooltipClass && this.shouldShowTooltip,
		};
	}
}
</script>

<style scoped lang="scss">
.tt-wrapper {
	display: inline-block;
	position: relative;
}
.tt-trigger {
	display: inline-block;

	transition: border 0.25s;
	&:focus {
		outline: 0;
	}
}
.tt-tooltip {
	position: absolute;
	top: 100%;
	padding: 5px;
	border-radius: 5px;
	border: 1px solid gray;
	background: var(--background-bg);
	font-size: 16px;

	z-index: 10;
	&:focus {
		outline: 0;
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.25s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>