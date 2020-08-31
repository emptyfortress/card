<template lang="pug">
.mainzag
	.top
		.num Служебная записка
		.status Подготовка
	.zag СЗ общая 16-1 16.06.2020 О создании рабочей группы
	.attr Автор: Иванова И.С. (секретарь) | Срок до: 12.05.2020

</template>

<script>

export default {
	data: () => ({
	//
	})
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.mainzag {
	/* border-bottom: 1px solid $blue-grey; */
}
.top {
	display: flex;
	justify-content: space-between;
	color: #666;
	@media (max-width: 600px) {
		display: block;
	}
}
.num {
	font-size: 1.1rem;
}
.status {
	font-size: 1.0rem;
	white-space: nowrap;
	letter-spacing: .5rem;
	text-transform: uppercase;
}
.zag {
	font-size: 1.5rem;
	line-height: 120%;
	margin: .5rem 0;
	color: #333;
}
.attr {
	color: #666;
	font-size: 0.9rem;
}
</style>
