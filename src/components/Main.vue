<template lang="pug">
.main
	v-expansion-panels(tile flat v-model="panels" multiple inset name="main")
		v-expansion-panel(value="0")
			v-expansion-panel-header
				.blockhd.rel Основные файлы
				v-tooltip( top )
					template(v-slot:activator="{ on }")
						v-btn(icon v-on="on" @click.stop="toggleAll" small).test
							v-icon mdi-unfold-more-horizontal
					span Свернуть/развернуть все
		v-expansion-panel(value="1")
			v-expansion-panel-header
				.blockhd.rel Ссылка на документы
		v-expansion-panel(value="2")
			v-expansion-panel-header
				.blockhd.rel Связанные карточки
		v-expansion-panel(value="3")
			v-expansion-panel-header
				.blockhd.rel Мои задания
</template>

<script>

export default {
	data: () => ({
		
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
.test {
	flex-shrink: 1;
	margin-right: .8rem;
	margin-top: -1rem;
	margin-bottom: -1rem;
}
</style>
