import meta from '../meta';

const admin = {
    layout: {
        fullPage: () => import('@views/Layout/admin/Admin.vue').then(m => m.default),
    },
    auth: {
        login: () => import('@views/Pages/admin/Auth/Login.vue'),
    },
    account: {
        index: () => import('@views/Pages/admin/Account/Index.vue'),
        edit: () => import('@views/Pages/admin/Account/Edit.vue'),
        password: () => import('@views/Pages/admin/Account/Password.vue'),
    },
    error404: () => import('@views/Pages/admin/Errors/404.vue'),
    dashboard: () => import('@views/Pages/admin/Dashboard.vue'),
    users: {
        index: () => import('@views/Pages/admin/User/index.vue'),
        block_index: () => import('@views/Pages/admin/User/block_index.vue'),
        create: () => import('@views/Pages/admin/User/create.vue'),
        view: () => import('@views/Pages/admin/User/Show.vue'),
        edit: () => import('@views/Pages/admin/User/edit.vue'),

    },
    advertisements: {
        index: () => import('@views/Pages/admin/Advertisements/index.vue'),
        show: () => import('@views/Pages/admin/Advertisements/show.vue'),
        features: {
            index: () => import('@views/Pages/admin/Advertisements/Features/index.vue'),
            show: () => import('@views/Pages/admin/Advertisements/Features/show.vue'),
        }
    },
    advertisement_form: {
        index: () => import('@views/Pages/admin/AdvertisementForm/index.vue'),
        show: () => import('@views/Pages/admin/AdvertisementForm/show.vue'),
    },
    reports: {
        index: () => import('@views/Pages/admin/Report/index.vue'),
        show: () => import('@views/Pages/admin/Report/show.vue'),
    },
    feedback: {
        index: () => import('@views/Pages/admin/Feedback/index.vue'),
        show: () => import('@views/Pages/admin/Feedback/show.vue'),
    },
    admins: {
        index: () => import('@views/Pages/admin/Admin/Index.vue'),
        create: () => import('@views/Pages/admin/Admin/Create.vue'),
        edit: () => import('@views/Pages/admin/Admin/Edit.vue'),
        show: () => import('@views/Pages/admin/Admin/Show.vue'),
    },
    notifications: {
        index: () => import('@views/Pages/admin/Notification/Index.vue'),
    },
};


const routes = {
    path: '/',
    components: {
        default: admin.layout.fullPage,
    },
    children: [
        {
            path: 'site-manager/admin/dashboard',
            component: admin.dashboard,
            name: 'admin.dashboard',
            meta: {...meta, requiresAuth: true, permission: null},
        },
        {
            path: 'site-manager/admin/advertisements',
            component: admin.advertisements.index,
            name: 'admin.advertisements.index',
            meta: {...meta, requiresAuth: true, permission: null},
        },
        {
            path: 'site-manager/admin/advertisements/show/:id',
            component: admin.advertisements.show,
            name: 'admin.advertisements.show',
            meta: {...meta, requiresAuth: true, permission: null},
        },

        {
            path: 'site-manager/admin/advertisements/feature',
            component: admin.advertisements.features.index,
            name: 'admin.advertisements.features.index',
            meta: {...meta, requiresAuth: true, permission: null},
        },
        {
            path: 'site-manager/admin/advertisements/feature/show/:id',
            component: admin.advertisements.features.show,
            name: 'admin.advertisements.features.show',
            meta: {...meta, requiresAuth: true, permission: null},
        },



        {
            path: 'site-manager/admin/advertisement-form',
            component: admin.advertisement_form.index,
            name: 'admin.advertisement_form.index',
            meta: {...meta, requiresAuth: true, permission: null},
        },
        {
            path: 'site-manager/admin/advertisement-form/show/:id',
            component: admin.advertisement_form.show,
            name: 'admin.advertisement_form.show',
            meta: {...meta, requiresAuth: true, permission: null},
        },
        {
            path: 'site-manager/admin/reports',
            component: admin.reports.index,
            name: 'admin.reports.index',
            meta: {...meta, requiresAuth: true, permission: null},
        },
        {
            path: 'site-manager/admin/reports/show/:id',
            component: admin.reports.show,
            name: 'admin.reports.show',
            meta: {...meta, requiresAuth: true, permission: null},
        },
        {
            path: 'site-manager/admin/feedback',
            component: admin.feedback.index,
            name: 'admin.feedback.index',
            meta: {...meta, requiresAuth: true, permission: null},
        },
        {
            path: 'site-manager/admin/feedback/show/:id',
            component: admin.feedback.show,
            name: 'admin.feedback.show',
            meta: {...meta, requiresAuth: true, permission: null},
        },
        {
            path: 'site-manager/admin/account',
            component: admin.account.index,
            name: 'admin.account.index',
            meta: {...meta, requiresAuth: true, permission: null},
        },
        {
            path: 'site-manager/admin/account/edit',
            component: admin.account.edit,
            name: 'admin.account.edit',
            meta: {...meta, requiresAuth: true, permission: null},
        },
        {
            path: 'site-manager/admin/account/password/change',
            component: admin.account.password,
            name: 'admin.account.password',
            meta: {...meta, requiresAuth: true, permission: null},
        },
        {
            path: 'site-manager/admin/users/',
            component: admin.users.index,
            name: 'admin.users.index',
            meta: {...meta, requiresAuth: true, permission: 'admin.users'},
        },
        {
            path: 'site-manager/admin/block/users/',
            component: admin.users.block_index,
            name: 'admin.users.block_index',
            meta: {...meta, requiresAuth: true, permission: null},
        },
        {
            path: 'site-manager/admin/users/create',
            component: admin.users.create,
            name: 'admin.users.create',
            meta: {...meta, requiresAuth: true, permission: 'admin.users'},
        },
        {
            path: 'site-manager/admin/users/view/:id',
            component: admin.users.view,
            name: 'admin.users.view',
            meta: {...meta, requiresAuth: true, permission: 'admin.users'},
        },
        {
            path: 'site-manager/admin/users/edit/:id',
            component: admin.users.edit,
            name: 'admin.users.edit',
            meta: {...meta, requiresAuth: true, permission: 'admin.users'},
        },

        {
            path: 'site-manager/admin/user/:type/:user/:status?',
            component: admin.users.show,
            name: 'admin.users.show',
            meta: {...meta, requiresAuth: true, permission: 'admin.users'},
        },
        {
            path: 'notifications',
            component: admin.notifications.index,
            name: 'admin.notifications.index',
            meta: {...meta, requiresAuth: true, permission: null}
        },
        // {
        //     path: '404',
        //     name: 'admin.404',
        //     component: admin.error404,
        //     meta: {...meta, requiresAuth: true, permission: null},
        // },
        // {
        //     path: '*',
        //     redirect: {name: 'admin.404', permission: null}
        // },

    ],
}

export default routes;
