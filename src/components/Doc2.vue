<template lang="pug">
.doc
	div.zg  заголовок
	div.but  кнопки действий
	div.main  основная.область
	div.attr атрибуты

</template>

<script>

export default {
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
	gap: .5rem;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: repeat (min-content, auto);
	> div {
		background: #ccc;
		min-height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.zg {
		grid-column: 1/7;
		@media (max-width: 1264px) {
			grid-column: span 8;
		}
	}
	.but {
		grid-column: 7/9;
		@media (max-width: 1264px) {
			grid-column: 1/9;
			grid-row: 2/3;
		}
	}
	.main {
		grid-column: 1/7;
		grid-row: span 2;
		height: 300px;
		@media (max-width: 960px) {
			grid-column: 1/6;
		}
		@media (max-width: 800px) {
			grid-column: 1/9;
		}
	}
	.attr {
		grid-column: 7/9;
		grid-row: span 2;
		@media (max-width: 960px) {
			grid-column: 6/9;
		}
		@media (max-width: 800px) {
			grid-column: 1/9;
		}
	}
}
</style>
