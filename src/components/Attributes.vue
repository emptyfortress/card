<template lang="pug">
.attr
	v-expansion-panels(tile flat v-model="one" name="attr")
		v-expansion-panel
			v-expansion-panel-header
				.blockhd.rel Информация
			v-expansion-panel-content
				.section
					template(v-for="item in attributes")
						.label {{ item.label }}:
						.value {{ item.value }}

</template>

<script>

export default {
	data: () => ({
		one: [0],
		attributes: [
			{ id: 0, label: 'Вид СЗ', value: 'СЗ общая' },
			{ id: 0, label: 'Рег. №', value: '16-1' },
			{ id: 0, label: 'Дата рег.', value: '16.06.20' },
			{ id: 0, label: 'Автор докум.', value: 'Макарова О.Л.' },
			{ id: 0, label: 'Подразд.', value: '16 ОАП - Отдел автомазации проектированияи инф.технологий' },
			{ id: 0, label: 'Тема', value: 'О создании рабочей группы' },
			{ id: 0, label: 'Подписывает', value: 'Лебедской-Тамбиев М.А.' },
			{ id: 0, label: 'Примеч.', value: 'Макет карточки' },
			{ id: 0, label: 'Исполнители', value: 'Агаева И.' },
			{ id: 0, label: 'Дата испол.', value: '18.06.20' },
			{ id: 0, label: 'В отделы', value: 'ОАП, ТО' },
			{ id: 0, label: 'Предв. №', value: '96-2020' },
			{ id: 0, label: 'Дата созд.', value: '16.06.2020 19:25' },
			{ id: 0, label: 'Создал', value: 'Сергиенко К.' },
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
	.label {
		color: #777;
	}
	.value {
		color: $link;
	}
}
</style>

