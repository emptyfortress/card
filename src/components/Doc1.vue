<template lang="pug">
.doc
	.fix.zg
		Zag
	.fix.but
		AppButtons(:color="maincolor")
	.tabs.fix
		.tab(:class="{'active' : tab === 1}" @click="tab = 1") Главная
		.tab(:class="{'active' : tab === 2}" @click="tab = 2") Ход согласования
		.tab(:class="{'active' : tab === 3}" @click="tab = 3") Ход исполнения

	.fix.main
		transition(name="fade" mode="out-in")
			Main(v-if="tab === 1")
	.fix.attr
		transition(name="fade" mode="out-in")
			Attributes(v-if="tab === 1")
	.fix.sogl
		transition(name="fade" mode="out-in")
			Attributes(v-if="tab === 2")

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
		grid-column: 1/11;
		@media (max-width: 1264px) {
			grid-column: 1/15;
		}
	}
	.but {
		grid-column: 11/15;
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
		}
	}

	.main {
		grid-column: 1/11;
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

	.sogl {
		grid-column: 1/15;
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
