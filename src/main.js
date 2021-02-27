import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
import router from './router'

Vue.use(vuetify)

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyBlB2qMAYBTAJdO1sEpZqjzy0gg3vHUaUs",
  authDomain: "bestellsystem-web.firebaseapp.com",
  projectId: "bestellsystem-web",
  storageBucket: "bestellsystem-web.appspot.com",
  messagingSenderId: "553896700602",
  appId: "1:553896700602:web:13f3f0c51c77baef237083"
};

firebase.initializeApp(configOptions);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
