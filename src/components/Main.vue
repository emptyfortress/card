<template lang="pug">
.main
	v-expansion-panels(tile flat v-model="panels" multiple inset name="main")
		v-expansion-panel(value="0")
			v-expansion-panel-header
				.blockhd Основные файлы (3)
				v-tooltip( top )
					template(v-slot:activator="{ on }")
						v-btn(icon v-on="on" @click.stop="toggleAll" small).test
							v-icon mdi-unfold-more-horizontal
					span Свернуть/развернуть все
				.plus(@click.stop="")
					i.icon-folder-o
				.scan(@click.stop="")
					i.icon-plus

			v-expansion-panel-content
				Files

		v-expansion-panel(value="1")
			v-expansion-panel-header
				.blockhd.rel Ссылка на документы (1)
				.plus(@click.stop="")
					i.icon-settings
				.scan(@click.stop="")
					i.icon-plus
			v-expansion-panel-content
				Link
				
		v-expansion-panel(value="2")
			v-expansion-panel-header
				.blockhd.rel Связанные карточки (1)
				.plus(@click.stop="")
					i.icon-settings
				.scan(@click.stop="")
					i.icon-plus
			v-expansion-panel-content
				Link1

		v-expansion-panel(value="3")
			v-expansion-panel-header
				.blockhd.rel Мои задания (3)
			v-expansion-panel-content
				Tasks
		Attr(v-if="$vuetify.breakpoint.smAndDown")
</template>

<script>
import Files from '@/components/Files'
import Link from '@/components/Link'
import Link1 from '@/components/Link1'
import Tasks from '@/components/Tasks'
import Attr from '@/components/Attr'



export default {
	data: () => ({
		panels: [0]
	}),
	components: {
		Files,
		Link,
		Link1,
		Tasks,
		Attr,
	},
	methods: {
		toggleAll () {
			if (!this.expanded) {
				this.expanded = true
				this.panels = [0, 1, 2, 3, 4]
			} else {
				this.expanded = false
				this.panels = []
			}
		},
		openAll () {
			this.panels = [0, 1, 2, 3, 4, 5, 6]
		},
		closeAll () {
			this.panels = []
		}
	},

}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.v-expansion-panel-header .blockhd {
	flex-grow: 1;
}
.test {
	flex-shrink: 1;
	margin-right: .8rem;
	margin-top: -1rem;
	margin-bottom: -1rem;
}
.plus {
	margin-right: .5rem;
}
.plus, .scan {
	color: #777;
}
</style>
