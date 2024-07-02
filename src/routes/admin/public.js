
import meta from '../meta';
const admin = {
    layout: {
        fullPage: () => import('@views/Layout/admin/Full-page.vue').then(m => m.default),
    },
    auth: {
        login: () => import('@views/Pages/admin/Auth/Login.vue'),
    },
    account: {
        index : ()=> import('@views/Pages/admin/Account/Index.vue'),
        edit : ()=> import('@views/Pages/admin/Account/Edit.vue'),
        password : ()=> import('@views/Pages/admin/Account/Password.vue'),
    },
    // error404 : ()=> import('@views/Pages/admin/Errors/404.vue'),
    dashboard : ()=> import('@views/Pages/admin/Dashboard.vue'),
    users : {

        show : ()=> import('@views/Pages/admin/User/Show.vue'),
        logs : ()=> import('@views/Pages/admin/User/Logs.vue'),
    },
    passwordRecovery:{
        email: () => import('@core/components/Popups/password-recovery-page/Email.vue'),
        codeVerify: () => import('@core/components/Popups/password-recovery-page/CodeVerify.vue'),
        changePassword: () => import('@core/components/Popups/password-recovery-page/PasswordChange.vue'),
    }
};


const routes = {
        path: '/',
        components: {
            default: admin.layout.fullPage,
        },
        children: [
            {
                path: 'site-manager/admin/login',
                component: admin.auth.login,
                name: 'admin.auth.login',
                meta: { ...meta, loggedInCan: false },
            },
            {
                path: 'site-manager/admin/email',
                component: admin.passwordRecovery.email,
                name: 'admin.passwordRecovery.email',
                meta: { ...meta, loggedInCan: false },
            },
            {
                path: 'site-manager/admin/code/verify',
                component: admin.passwordRecovery.codeVerify,
                name: 'admin.passwordRecovery.codeVerify',
                meta: { ...meta, loggedInCan: false },
            },
            {
                path: 'site-manager/admin/change-password',
                component: admin.passwordRecovery.changePassword,
                name: 'admin.passwordRecovery.changePassword',
                meta: { ...meta, loggedInCan: false },
            },


        ],
    }

    export default routes;
