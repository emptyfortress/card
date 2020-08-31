<template lang="pug">
.action
	v-btn(depressed :color="color" dark :block="block" ) На согласование
	v-btn(depressed color="blue-grey lighten-4" :block="block") На доработку
	v-btn(text :block="block" v-show="block") Ещё
	v-btn(depressed color="blue-grey lighten-4" v-show="!block") В архив
	v-btn(outlined color="pink" v-show="!block") Удалить

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
			} else return false
		},
	},

}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';
.action {
	.v-btn {
		margin-bottom: .25rem;
		margin-right: .25rem;
	}
}

</style>
