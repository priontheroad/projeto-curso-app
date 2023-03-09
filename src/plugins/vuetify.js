import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css';


import pt from 'vuetify/lib/locale/pt';

Vuetify.config.silent = true;
Vue.use(Vuetify);

const vuetify = new Vuetify({
    icons: {
        iconfont: 'mdi'
    },
    lang: {
        locales: { pt },
        current: 'pt'
    },
    theme: {
        themes: {
            light: {
                primary: '#2D5071',
                secondary: '#0098DA',
                accent: '#FF9900',
                error: '#D93021',
                warning: '#FFC400',
                success: '#1DBF53',
                info: '#17C3E6'
            }
        }
    }
})

export default vuetify
