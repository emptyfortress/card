import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				docolor: '#0095da',
				taskcolor: '#6DAE50',
				dark: '#2C4159',
				link: '#0077CE'
			}
		}
	}
});
