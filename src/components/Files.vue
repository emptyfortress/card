<template lang="pug">
.files
	//- .fls
	//- 	i.icon-skrepka
	//- 	span Прикрепить

	v-simple-table(:dense="dense").filetable
		thead
			tr
				th Имя
				th Версия
				th
		tbody
			tr(v-for="item in files" :key="item.name" :class="item.id === file ? 'act' : ''" @click="setFile(item.id)")
				td
					img(:src="iconPath(item.icon)")
					.name {{ item.name }}
				td {{ item.v }}
				td(width="30").px-0
					v-btn(small icon @click.stop="")
						v-icon mdi-dots-vertical
	.dense(@click="dense = !dense") small


</template>

<script>

export default {
	data () {
		return {
			// panel: 1,
			dense: false,
			panels: [0],
			files: [
				{ id: 0, icon: 'word', name: 'Договор с ООО Ромашка.doc', v: '1.1', cl: 'act' },
				{ id: 1, icon: 'word', name: 'Приложение к договору.doc', v: '1.0' },
				{ id: 2, icon: 'xls', name: 'Смета расходов.xls', v: '1.1' }
			],
			files1: [
				{ id: 3, icon: 'xls', name: 'Расчет цены.xls', v: '1.1' }
			]
		}
	},
	computed: {
		file () {
			return this.$store.getters.file
		}
	},
	methods: {
		setFile (e) {
			this.$store.commit('openInlinePreview')
			this.$store.commit('setOverlay', true)
			let that = this
			setTimeout(function () {
				that.$store.commit('setFile', e)
				that.$store.commit('setOverlay', false)
			}, 500)
		},
		iconPath (e) {
			if (e === 'word') {
				return require(`@/assets/img/files/file-ext-word.png`)
			} else if (e === 'xls') {
				return require(`@/assets/img/files/file-ext-excel.png`)
			}
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.plus {
	position: absolute;
	bottom: -.5rem;
	right: 1rem;
}

.filetable td {
	color: $link;
	img {
		vertical-align: middle;
		height: 22px;
	}
}
.filetable th {
	height: 26px;
}
.name {
	display: inline;
	margin-left: .8rem;
	cursor: pointer;
}
.act {
	background: #ddf0ff;
}

.fls {
	cursor: pointer;
	border: 3px dotted #666;
	border-radius: .7rem;
	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	/* margin-bottom: 1rem; */
	i {
		font-size: 1.6rem;
	}
	&:hover {
		background: #b7d2c0;
	}
}
.flhd {
	font-size: .7rem;
	text-transform: uppercase;
	font-weight: 600;
	color: $link;
	letter-spacing: 1px;
}
.theme--light.v-expansion-panels .nobdr.v-expansion-panel--active {
	border: none;
}
.theme--light.v-expansion-panels .nobdr.v-expansion-panel {
	border: none;
}
.filetable {
	/* margin-top: 1rem; */
}
.nobdr .v-expansion-panel-header--active {
	padding-bottom: 0;
}
.dense {
	/* margin-left: 3rem; */
	margin-top: .5rem;
	font-size: .8rem;
	color: $link;
	cursor: pointer;
}
.v-expansion-panel-header > *:not(.v-expansion-panel-header__icon).noflex {
		flex: 1 0 auto;
}
.norightmargin .v-expansion-panel-content__wrap {
	padding: 0 0 16px 24px;
}
</style>
