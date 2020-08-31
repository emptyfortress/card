<template lang="pug">
.files
	v-simple-table(dense).filetable1
		tbody
			tr
				td
					i.icon-check
					.name Согласование служебной записки
			tr
				td
					i.icon-check
					.name Подписание служебной записки
			tr
				td
					v-icon.play mdi-play-circle-outline
					.name Отправка СЗ на согласование
				//- td Связано с
				//- td(width="30").px-0
				//- 	v-btn(small icon @click.stop="")
				//- 		v-icon mdi-dots-vertical


</template>

<script>

export default {
	data () {
		return {
		}
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.plus {
	position: absolute;
	bottom: -.5rem;
	right: 1rem;
}

.filetable1 td {
	font-size: 1.0rem;
}

.name {
	display: inline;
	margin-left: .8rem;
	cursor: pointer;
	color: $link;
}
.play {
	font-size: 1.2rem;
	color: #999;
}
i.icon-check {
	color: green;
}

</style>
