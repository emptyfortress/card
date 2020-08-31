<template lang="pug">
.attr
	v-expansion-panels(tile flat v-model="one")
		Attr

</template>

<script>
import Attr from '@/components/Attr'



export default {
	data: () => ({
		one: null,
	}),
	components: {
		Attr
	}
}

</script>

<style scoped lang="scss">

</style>

