<template lang="pug">
.attr
	v-expansion-panels(tile flat v-model="one")
		v-expansion-panel(value="0")
			v-expansion-panel-header
				.blockhd.rel Информация
			v-expansion-panel-content
				.section
					template(v-for="item in attributes")
						.label {{ item.label }}:
						.value 
							v-icon(small v-if="item.icon") mdi-calendar
							|{{ item.value }}

</template>

<script>

export default {
	data: () => ({
		one: null,
		attributes: [
			{ id:  0, label: 'Вид СЗ', value: 'СЗ общая' },
			{ id:  1, label: 'Рег. №', value: '16-1' },
			{ id:  2, label: 'Дата рег.', value: '16.06.20', icon: true },
			{ id:  3, label: 'Автор докум.', value: 'Макарова О.Л.' },
			{ id:  4, label: 'Подразд.', value: '16 ОАП - Отдел автомазации проектированияи инф.технологий' },
			{ id:  5, label: 'Тема', value: 'О создании рабочей группы' },
			{ id:  6, label: 'Подписывает', value: 'Лебедской-Тамбиев М.А.' },
			{ id:  7, label: 'Примеч.', value: 'Макет карточки' },
			{ id:  8, label: 'Исполнители', value: 'Агаева И.' },
			{ id:  9, label: 'Дата испол.', value: '18.06.20', icon: true },
			{ id: 10, label: 'В отделы', value: 'ОАП, ТО' },
			{ id: 11, label: 'Предв. №', value: '96-2020' },
			{ id: 12, label: 'Дата созд.', value: '16.06.2020 19:25' },
			{ id: 13, label: 'Создал', value: 'Сергиенко К.' },
		],
		
	}),
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.theme--light.v-expansion-panels .v-expansion-panel--active {
	border-radius: 5px;
}
.v-expansion-panel-header .blockhd {
	flex-grow: 1;
}
.section {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: .7rem .5rem;
	font-size: .85rem;
	line-height: 100%;
	@media (max-width: 800px) {
		font-size: 1rem;
		
	}
	.label {
		color: #777;
	}
	.value {
		color: $link;
		cursor: pointer;
		border-bottom: 1px dotted #fff;
		.v-icon {
			transform: translateY(-1px);
			margin-right: 5px;
		}
		&:hover {
			border-bottom: 1px dotted $link;
		}

	}
}
</style>

