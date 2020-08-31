<template lang="pug">
.doc
	.fix.zg
		Zag
	.fix.but
		AppButtons(:color="maincolor")
	.fix.main
		Main
	.fix.attr
		Attributes

</template>

<script>
import Zag from '@/components/Zag'
import AppButtons from '@/components/AppButtons'
import Attributes from '@/components/Attributes'
import Main from '@/components/Main'



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
		Attributes,
		Main,
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
	grid-template-columns: repeat(14, 1fr);
	@media (max-width:1264px) {
		gap: 2rem 1rem;
	}
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
		grid-column: 1/11;
		@media (max-width: 1264px) {
			grid-column: 1/15;
		}
	}
	.but {
		grid-column: 11/15;
		@media (max-width: 1264px) {
			grid-column: 10/15;
			grid-row: 2/3;
		}
		@media (max-width: 960px) {
			grid-column: 1/15;
			grid-row: 2/3;
		}
	}
	.main {
		grid-column: 1/11;
		grid-row: span 2;
		@media (max-width: 1264px) {
			grid-column: 1/10;
		}
		@media (max-width: 960px) {
			grid-column: 1/10;
		}
		@media (max-width: 800px) {
			grid-column: 1/15;
		}
	}
	.attr {
		grid-column: 11/15;
		@media (max-width: 1264px) {
			grid-column: 10/15;
		}
		@media (max-width: 960px) {
			grid-column: 10/15;
		}
		@media (max-width: 800px) {
			grid-column: 1/15;
		}
	}
}
</style>
