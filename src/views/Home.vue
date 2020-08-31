<template lang="pug">
.home
	div
		.zag home
		.tt Здесь дашборд

</template>

<script>
// @ is an alias to /src

export default {
	name: 'Home',
	components: {
	}
}
</script>

<style scoped lang="scss">
.home {
	display: flex;
	height: 70vh;
	justify-content: center;
	align-items: center;
	background: #cecece;
	> div {
		text-align: center;
	}
}

</style>
