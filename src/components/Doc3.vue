<template lang="pug">
.doc
	.fix.zg
		Zag
	div.but  кнопки действий
	div.main  основная область
	div.attr атрибуты

</template>

<script>
import Zag from '@/components/Zag'

export default {
	props: {
		maincolor: {
			type: String,
			default: 'dark'
		}
	},
	data () {
		return {
		}
	},
	components: {
		Zag,
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.doc {
	margin-bottom: 5rem;
	display: grid;
	gap: .5rem;
	grid-template-columns: repeat(8, 1fr);
	> div {
		background: #ccc;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.fix {
		background: none;
		display: block;
		position: relative;
	}
	.zg {
		grid-column: span 6;
		@media (max-width: 1264px) {
			grid-column: span 8;
		}
	}
	.but {
		grid-column: span 2;
		@media (max-width: 1264px) {
			grid-column: 1/9;
			grid-row: 2/3;
			min-height: 50px;
		}
	}
	.main {
		grid-column: span 6;
		grid-row: span 2;
		height: 300px;
		@media (max-width: 900px) {
			grid-column: 1/6;
		}
		@media (max-width: 800px) {
			grid-column: 1/9;
		}
	}
	.attr {
		min-height: 50px;
		grid-column: 7/9;
		grid-row: span 2;
		@media (max-width: 900px) {
			grid-column: 6/9;
		}
		@media (max-width: 800px) {
			grid-column: 1/9;
		}
	}
}
</style>
