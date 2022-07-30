<template>
	placeholder
	<div v-for="(v, i) in d" :key="i">
		<div v-for="(v, i) in v" :key="i">{{ i }}:{{ v.toFixed(2) }}ms</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			d: {
				net: { 1: 1 },
				performance: { 2: 2 },
			},
		}
	},
}
</script>

<style></style>
