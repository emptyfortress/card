<template lang="pug">
.doc
	.fix.zg
		Zag
	.fix.but
		AppButtons(:color="maincolor")
	.fix.main  
		p основная.область
		p основная.область
		p основная.область
		p основная.область
		p основная.область
	.fix.attr
		p атрибуты
		p атрибуты


</template>

<script>
import Zag from '@/components/Zag'
import AppButtons from '@/components/AppButtons'


export default {
	props: {
		maincolor: {
			type: String,
			default: 'dark'
		}
	},
	components: {
		Zag,
		AppButtons,
	},

	data () {
		return {
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.doc {
	margin-bottom: 5rem;
	display: grid;
	gap: 2rem;
	grid-template-columns: repeat(8, 1fr);
	/* @media (max-width: 960px) { */
	/* 	gap: 1rem; */
	/* } */
	> div {
		background: #ccc;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.fix {
		background: none;
		display: block;
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
			grid-column: 7/9;
			grid-row: 2/3;
		}
		@media (max-width: 960px) {
			grid-column: 1/9;
			grid-row: 2/3;
		}
	}
	.main {
		grid-column: span 6;
		grid-row: span 2;
		/* height: 300px; */
		@media (max-width: 960px) {
			grid-column: 1/6;
		}
		@media (max-width: 800px) {
			grid-column: 1/9;
		}
	}
	.attr {
		grid-column: 7/9;
		/* height: 200px; */
		@media (max-width: 960px) {
			grid-column: 6/9;
		}
		@media (max-width: 800px) {
			grid-column: 1/9;
		}
	}
}
</style>
