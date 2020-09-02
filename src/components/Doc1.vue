<template lang="pug">
.doc
	.fix.zg
		Zag
	.fix.but
		AppButtons(:color="maincolor")
	.fix.tabs.mt-3
		.tab(:class="{'active' : tab === 1}" @click="tab = 1") Главная
		.tab(:class="{'active' : tab === 2}" @click="tab = 2") Ход согласования
		.tab(:class="{'active' : tab === 3}" @click="tab = 3") Ход исполнения

	.fix.main
		transition(name="fade" mode="out-in")
			Main(v-show="tab === 1")
	.fix.attr
		transition(name="fade" mode="out-in")
			Attributes(v-show="tab === 1 && !$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm")
	.fix.sogl
		transition(name="fade" mode="out-in")
			Sogl(v-show="tab === 2") Ход согласования
	.fix.sogl
		transition(name="fade" mode="out-in")
			Sogl(v-show="tab === 3") Ход исполнения

</template>

<script>
import Zag from '@/components/Zag'
import AppButtons from '@/components/AppButtons'
import Attributes from '@/components/Attributes'
import Main from '@/components/Main'
import Sogl from '@/components/Sogl'



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
		Sogl,
	},

	data () {
		return {
			tab: 1,
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.doc {
	margin-bottom: 5rem;
	display: grid;
	gap: 1rem 2rem;
	grid-template-columns: repeat(14, 1fr);
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
		grid-column: 1/12;
		@media (max-width: 1264px) {
			grid-column: 1/15;
		}
	}
	.but {
		grid-column: 12/15;
		grid-row: 1/3;
		@media (max-width: 1264px) {
			grid-column: 1/15;
			grid-row: 2/3;
		}
		@media (max-width: 960px) {
			grid-column: 1/15;
			grid-row: 2/3;
		}
	}
	.tabs {
		grid-column: 1/11;
		border-top: 1px solid #ccc;
		display: flex;
		justify-content: flex-start;
		@media (max-width: 1264px) {
			grid-column: 1/15;
			grid-row: 3/4;
		}
	}

	.main {
		grid-column: 1/10;
		grid-row: 3/5;
		@media (max-width: 1264px) {
			grid-column: 1/10;
			grid-row: 4/5;
		}
		@media (max-width: 960px) {
			grid-column: 1/15;
		}
		@media (max-width: 800px) {
			grid-column: 1/15;
		}
	}
	.attr {
		grid-column: 10/15;
		grid-row: 3/5;
		@media (max-width: 1264px) {
			grid-column: 10/15;
			grid-row: 4/5;
		}
		@media (max-width: 960px) {
			display: none;
			/* grid-column: 10/15; */
		}
		/* @media (max-width: 800px) { */
		/* 	grid-column: 1/15; */
		/* 	grid-row: 5/6; */
		/* } */
	}
	.sogl {
		grid-column: 1/15;
		grid-row: 3/5;
		@media (max-width: 1264px) {
			grid-row: 4/5;
		}
	}
}
.tab {
	text-transform: uppercase;
	padding: .4rem 1rem;
	cursor: pointer;
	color: #666;
	transition: .2s ease all;
	border-top: 2px solid transparent;
	&:hover {
		background: #dedede;
	}
	&.active {
		font-weight: 500;
		border-top: 2px solid black;
	}
}
</style>
