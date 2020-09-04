<template lang="pug">
div
	h2 I am slot
	slot(name="header")
	slot(v-bind:one="{one, user, test}")

</template>

<script>

export default {
	data: () => ({
		one: 5,
		user: {
			name: 'fuck',
			lastname: 'you',
		}
	}),
	methods: {
		test () {
			alert('from child')
		},
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

</style>
