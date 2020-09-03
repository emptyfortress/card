<template lang="pug">
.attr
	v-expansion-panels(tile flat v-model="one" )
		v-expansion-panel(value="0" )
			v-expansion-panel-header
				.blockhd.rel Информация
			v-expansion-panel-content
				.section(v-if="grid")
					template(v-for="item in attributes")

						template(v-if="item.id === 2 || item.id === 14 || item.id === 18")
							.label(:class="item.clas") {{ item.label }}:
							v-menu(v-model="item.date" :close-on-content-click="true" :nudge-right="40" transition="scale-transition" offset-y min-width="290px").value
								template(v-slot:activator="{ on, attrs }")
									.value(v-bind="attrs" v-on="on")
										v-icon(small) mdi-calendar
										|{{ item.value }}
								v-date-picker(v-model="item.value")

						template(v-if="item.id === 13")
							.label(:class="item.clas") {{ item.label }}:
							.value {{ item.value[0] }}<br>{{ item.value[1] }}<br>{{ item.value[2] }}

						template(v-if="item.id !== 2 && item.id !== 13 && item.id !== 14 && item.id !== 18")
							.label(:class="item.clas") {{ item.label }}:
							.value.rel(:contenteditable="item.edit") {{ item.value }}
							.check(v-if="item.id === 12")
								|<span>&#9886;</span> По договорной деятельности<br>
								|<span>&#9886;</span> Конфиденциально<br>

				.new(v-else v-for="item in attributes")
					.label(:class="item.clas") {{ item.label }}:
					.value(v-if="item.id === 13")
						v-icon(small v-if="item.icon") mdi-calendar
						|{{ item.value[0] }}<br>{{ item.value[1] }}<br>{{ item.value[2] }}
					.value(v-else)
						v-icon(small v-if="item.icon") mdi-calendar
						|{{ item.value }}
						.check(v-if="item.id === 12")
							|<span>&#9886;</span> По договорной деятельности<br>
							|<span>&#9886;</span> Конфиденциально<br>
				v-btn(text x-small @click.stop="grid = !grid" color="#aaa").mt-5 switch

</template>

<script>

export default {
	data: () => ({
		one: 0,
		items: ['one', 'two', 'three'],
		grid: true,
		attributes: [
			{ id:  0, label: 'Вид СЗ', value: 'СЗ на предоставление доступа', list: false },
			{ id:  1, label: 'Рег. №', value: '16-8', edit: true },
			{ id:  2, label: 'Дата рег.', value: '2020-09-09', icon: true, date: false },
			{ id:  3, label: 'Автор докум.', value: 'Макарова Е.В.' },
			{ id:  4, label: 'Тел. автора', value: '8 904 230-45-32', edit: true },
			{ id:  5, label: 'Подразд.', value: '16 ОАП - Отдел автомазации проектированияи инф.технологий' },
			{ id:  6, label: 'Тема', value: 'О создании рабочей группы', edit: true  },
			{ id:  7, label: 'Подписывает', value: 'Лебедской-Тамбиев М.А.' },
			{ id:  8, label: 'ГИП', value: 'dv3_ГИП, Юзер3' },
			{ id:  9, label: 'Примечание', value: 'Макет карточки макет карточки макет карточки', edit: true  },
			{ id: 10, label: 'Проект', value: 'Проект А', edit: true  },
			{ id: 11, label: 'Приоритет', value: 'средний' },
			{ id: 12, label: 'Тип документации', value: 'Нестандартизированное оборудование' },
			{ id: 13, label: 'Исполнители', value: ['Агаева И.', 'Петрова С.', 'Булочкина К.']},
			{ id: 14, label: 'Дата испол.', value: '2020-09-09', icon: true, date: false },
			{ id: 15, label: 'Копия', value: 'Павленикова А.Г.', },
			{ id: 16, label: 'В отделы', value: 'ОАП, ТО' },
			{ id: 17, label: 'Предв. №', value: '96-2020' },
			{ id: 18, label: 'Дата созд.', value: '2020-09-09', icon: true, date: false },
			{ id: 19, label: 'Создал', value: 'Сергиенко К.' },
		],
	}),

}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

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
		&:focus {
			border: none;
			outline: 1px dotted $link;
			padding: 3px;
			color: black;
		}
	}
}
.check {
	color: #666;
	margin-top: .5rem;
	grid-column: span 2;
	span {
		font-size: 1.0rem;
		margin-right: .3rem;
	}
}
.new {
	display: flex;
	font-size: 0.85rem;
	line-height: 100%;
	margin-bottom: 7px;
	.label {
		color: #777;
		margin-right: .5rem;
	}
	.value {
		color: $link;
		cursor: pointer;
		border-bottom: 1px dotted #fff;
		&:hover {
			border-bottom: 1px dotted $link;
		}
	} 
	.check {
		flex: 1 1 100%;
	}
}
.test {
	transition: .3s ease all;
	position: absolute;
	top: 10px;
	left: 50px;
	width: 100px;
	height: 50px;
	background: red;
}
</style>

