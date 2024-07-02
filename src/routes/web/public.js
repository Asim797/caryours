import meta from '../meta';

const web = {
    layout: {
        fullPage: () => import('@views/Layout/web/Full-page.vue').then(m => m.default),
    },

    home: {
        index: () => import('@views/Pages/web/Home.vue'),
        aboutUs: () => import('@views/Pages/web/About.vue'),
        contact: () => import('@views/Pages/web/Contact.vue'),
        category: () => import('@views/Pages/web/category/index.vue'),
        category_detail: () =>  import('@views/Pages/web/category/ads_details.vue'),
    },
    auth: {
        login: () => import('@views/Pages/web/Auth/Login.vue'),
        register: () => import('@views/Pages/web/Auth/Register/register.vue'),
    },
    account: {
        index: () => import('@views/Pages/admin/Account/Index.vue'),
        edit: () => import('@views/Pages/admin/Account/Edit.vue'),
        password: () => import('@views/Pages/admin/Account/Password.vue'),
    },
    error404: () => import('@views/Pages/web/Errors/404.vue'),
    dashboard: () => import('@views/Pages/web/Home.vue'),
    users: {

        show: () => import('@views/Pages/admin/User/Show.vue'),
        logs: () => import('@views/Pages/admin/User/Logs.vue'),
    },
    passwordRecovery: {
        email: () => import('@core/components/Popups/user/password-recovery-page/Email.vue'),
        codeVerify: () => import('@core/components/Popups/user/password-recovery-page/CodeVerify.vue'),
        changePassword: () => import('@core/components/Popups/user/password-recovery-page/PasswordChange.vue'),
    },
    loan:{
        index: () => import('@views/Pages/web/loan.vue')
    }
};


const routes = {
    path: '/',
    components: {
        default: web.layout.fullPage,
    },
    children: [
        {
            path: 'site-manager/web/login',
            component: web.auth.login,
            name: 'web.auth.login',
            meta: {...meta, loggedInCan: false},
        },
        {
            path: 'site-manager/web/register',
            component: web.auth.register,
            name: 'web.auth.register',
            meta: {...meta, loggedInCan: true},
        },
        {
            path: 'site-manager/web/home',
            component: web.home.index,
            name: 'web.home.index',
            meta: {...meta, loggedInCan: true},
        },
        {
            path: 'site-manager/web/email',
            component: web.passwordRecovery.email,
            name: 'web.passwordRecovery.email',
            meta: { ...meta, loggedInCan: false },
        },
        {
            path: 'site-manager/web/code/verify',
            component: web.passwordRecovery.codeVerify,
            name: 'web.passwordRecovery.codeVerify',
            meta: { ...meta, loggedInCan: false },
        },
        {
            path: 'site-manager/web/change-password',
            component: web.passwordRecovery.changePassword,
            name: 'web.passwordRecovery.changePassword',
            meta: { ...meta, loggedInCan: false },
        },
        {
            path: 'site-manager/web/about-us',
            component: web.home.aboutUs,
            name: 'web.home.aboutUs',
            meta: { ...meta, loggedInCan: false },
        },
        {
            path: 'site-manager/web/contact-us',
            component: web.home.contact,
            name: 'web.home.contactUs',
            meta: { ...meta, loggedInCan: false },
        },



        {
            path: 'site-manager/web/category',
            component: web.home.category,
            name: 'web.home.category',
            meta: { ...meta, loggedInCan: false },
        },

        {
            path: 'site-manager/web/category/ads/:id',
            component: web.home.category_detail,
            name: 'web.home.category_detail',
            meta: { ...meta, loggedInCan: false },
        },

        {
            path: 'site-manager/web/loan-application',
            component: web.loan.index,
            name: 'web.loan.index',
            meta: { ...meta, loggedInCan: false },
        },


    ],
}

export default routes;
