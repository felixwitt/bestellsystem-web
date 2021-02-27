import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/LoginView'
import HomepageView from '../views/HomepageView'
import ArticleView from '../views/ArticleView'
import AccountView from '../views/AccountView'
import PasswordView from '../views/ChangePassword'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        { path: '/login', component: Login },
        { path: '/order/new', component: HomepageView },
        { path: '/article', component: ArticleView },
        { path: '/account/settings/profile', component: AccountView },
        { path: '/account/settings/password', component: PasswordView },
        { path: '/', component: HomepageView },
    ]
});

export default router;
