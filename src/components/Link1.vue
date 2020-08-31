<template lang="pug">
.files
	v-simple-table.filetable1
		tbody
			tr
				td
					i.icon-card
					.name C:\Users\Docsvision1\Материалы
				td Связано с
				td(width="30").px-0
					v-btn(small icon @click.stop="")
						v-icon mdi-dots-vertical


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

</style>
