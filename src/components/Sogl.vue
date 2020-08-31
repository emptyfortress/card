<template lang="pug">
.sog
	slot
</template>

<script>

export default {
	data: () => ({
		
	}),
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.sog {
	width: 100%;
	height: 500px;
	background: #ccc;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	font-size: 2.0rem;
	color: #fff;
}
</style>
