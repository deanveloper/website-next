<template>
	<div class="page-base64">
		<h1 class="header">base64 converter</h1>
		<div class="boxes">
			<TextBox v-model="text" inputClass="taller-box" class="tbox-wrapper">
				<h2 class="subheader lowmargin">text</h2>
			</TextBox>
			<TextBox v-model="base64" inputClass="taller-box" class="tbox-wrapper">
				<h2 class="subheader lowmargin">base64</h2>
			</TextBox>
		</div>
		<div class="error">{{errorStr}}</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TextBox from "../components/TextBox.vue";

@Component({
	components: { TextBox },
})
export default class Base64 extends Vue {
	public error: string = "";
	public base64: string = "";

	get errorStr(): string {
		// the random code point is disappointed emoji
		const disappoint = String.fromCodePoint(0x1f61e);
		return this.error ? `${disappoint} ${this.error} ${disappoint}` : "";
	}

	get text() {
		let bin: string;
		try {
			bin = atob(this.base64);
		} catch (err) {
			this.error = "invalid base64";
			return "";
		}

		let text: string;
		try {
			text = this.bytesToUTF16(bin);
		} catch (err) {
			this.error = err.message;
			return "";
		}
		this.error = "";
		return text;
	}

	set text(val) {
		try {
			this.base64 = btoa(this.utf16toBytes(val));
		} catch (err) {
			this.error = err.message;
			this.base64 = "";
			return;
		}
		this.error = "";
	}

	// converts UTF16 to bytes.
	utf16toBytes(str: string): string {
		const codeUnits = new Uint16Array(str.length);
		for (let i = 0; i < codeUnits.length; i++) {
			codeUnits[i] = str.charCodeAt(i);
		}
		return String.fromCharCode(...new Uint8Array(codeUnits.buffer));
	}

	// converts bytes to UTF16.
	bytesToUTF16(str: string): string {
		const bytes = new Uint8Array(str.length);
		for (let i = 0; i < bytes.length; i++) {
			bytes[i] = str.charCodeAt(i);
		}
		return String.fromCharCode(...new Uint16Array(bytes.buffer));
	}
}
</script>

<style scoped lang="scss">

.boxes {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin-top: 50px;
}

.tbox-wrapper {
	width: 300px;
	margin: 0 20px;
}

::v-deep .taller-box {
	height: 100px;
}

.lowmargin {
	margin-bottom: 10px;
}

.error {
	color: red;
	margin-bottom: 50px;
}
</style>