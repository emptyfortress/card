<template lang="pug">
.action
	v-btn(depressed :color="color" dark :block="block" ) На согласование
	v-btn(depressed color="blue-grey lighten-4"  :block="block" )
		i.icon-multi.mr-2
		|Лист согласования
	v-btn(depressed :color="color" dark  :block="block" ) Зарегистрировать
	v-btn(text :block="block" v-show="block") Ещё
	div
		v-btn(depressed small color="blue-grey lighten-4" v-show="!block") Создать на основании
		v-btn(depressed small color="blue-grey lighten-4" v-show="!block") Создать связанную карточку
		v-btn(depressed small color="blue-grey lighten-4" v-show="!block") Создать карточку со ссылкой


	//- v-btn(outlined color="pink" v-show="!block") Удалить

</template>

<script>

export default {
	props: ['color'],
	data () {
		return {
		}
	},
	computed: {
		block () {
			if (this.$vuetify.breakpoint.lg) {
				return true
			}  else if (this.$vuetify.breakpoint.xs) {
				return true
			}
			else return false
		},
	},

}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';
.action {
	.v-btn {
		margin-right: 4px;
		margin-bottom: 4px;
		/* width: 31%; */
	}

}

</style>
