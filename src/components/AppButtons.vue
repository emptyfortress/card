<template lang="pug">
.action
	v-btn(depressed :color="color" dark :block="block" ) На согласование
	v-btn(depressed color="blue-grey lighten-4" :block="block") На доработку
	v-btn(text :block="block" v-show="$vuetify.breakpoint.mdAndUp") Ещё
	v-btn(depressed color="blue-grey lighten-4" v-show="$vuetify.breakpoint.sm") В архив
	v-btn(outlined color="pink" v-show="$vuetify.breakpoint.sm") Удалить

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
			if (this.$vuetify.breakpoint.sm) {
				return false
			} else return true
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
