<template>
	placeholder
	<div v-for="(v, i) in d" :key="i">
		<div v-for="(v, i) in v" :key="i">{{ i }}:{{ v.toFixed(2) }}ms</div>
	</div>
</template>

<script>
import '../../src/main.js'

export default {
	mounted() {
		let i = setInterval(() => {
			if (window.d) {
				this.d = window.d
				clearInterval(i)
			}
		}, 500)
	},
	data() {
		return {
			d: {
				net: [],
				performance: [],
			},
		}
	},
}
</script>

<style></style>
