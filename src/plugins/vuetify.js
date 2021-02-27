import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: "#D32F2F",
                secondary: "#D32F2F",
                accent: "#D32F2F",
                error: "#f51916",
                warning: "#ff8818",
                info: "#9FA8DA",
                success: "#4caf50"
            },
            dark: {
                primary: "#D32F2F",
                secondary: "#D32F2F",
                accent: "#D32F2F",
                error: "#f51916",
                warning: "#ff8818",
                info: "#9FA8DA",
                success: "#4caf50"
            }
        }
    },
});
