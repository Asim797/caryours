import meta from '../meta';

const web = {
    layout: {
        fullPage: () => import('@views/Layout/web/Full-page.vue').then(m => m.default),
    },
    user: {
        profile: () => import('@views/Pages/web/Auth/Profile.vue'),
        editProfile: () => import('@views/Pages/web/Auth/EditProfile.vue'),
        changePassword: () => import('@views/Pages/web/Auth/ChangePassword.vue'),
    },
    notifications: {
        index: () => import('@views/Pages/web/notifications.vue'),
    },
    ads:{
        create: () => import('@views/Pages/web/Ads/create.vue'),
        index: () => import('@views/Pages/web/Ads/index.vue'),
        feature: () => import('@views/Pages/web/Ads/feature.vue'),
        detials: () => import('@views/Pages/web/Ads/details.vue'),
        whislist: () => import('@views/Pages/web/whislist/index.vue'),
        featuresDetials: () => import('@views/Pages/web/Ads/featureDetails.vue'),
        detial: {
            detials: () => import('@views/Pages/web/Ads/details/index'),
        }
    }
};

const routes = {
    path: '/',
    components: {
        default: web.layout.fullPage,
    },
    children: [
        {
            path: '/site-manager/web/user/profile',
            component: web.user.profile,
            name: 'web.user.profile',
            meta: {...meta, requiresAuth: true},
        },
        {
            path: '/site-manager/web/user/profile/edit',
            component: web.user.editProfile,
            name: 'web.user.editProfile',
            meta: {...meta, requiresAuth: true},
        },
        {
            path: '/site-manager/web/user/change-password',
            component: web.user.changePassword,
            name: 'web.user.changePassword',
            meta: {...meta, requiresAuth: true},
        },
        {
            path: '/site-manager/web/notifications',
            component: web.notifications.index,
            name: 'web.notifications.index',
            meta: {...meta, requiresAuth: true},
        },
        {
            path: '/site-manager/web/ads/create',
            component: web.ads.create,
            name: 'web.ads.create',
            meta: {...meta, requiresAuth: true},
        },

        {
            path: '/site-manager/web/ads/index/:status?',
            component: web.ads.index,
            name: 'web.ads.index',
            meta: {...meta, requiresAuth: true},
        },

        {
            path: '/site-manager/web/ads/detail/:id',
            component: web.ads.detial.detials,
            name: 'web.ads.details.details',
            meta: {...meta, requiresAuth: true},
        },

        {
            path: '/site-manager/web/ads/feature',
            component: web.ads.feature,
            name: 'web.ads.feature',
            meta: {...meta, requiresAuth: true},
        },
        {
            path: '/site-manager/web/ads/whislist',
            component: web.ads.whislist,
            name: 'web.ads.whislist',
            meta: {...meta, requiresAuth: true},
        },


        {
            path: '/site-manager/web/ads/details/:id',
            component: web.ads.detials,
            name: 'web.ads.detials',
            meta: {...meta, requiresAuth: true},
        },
        {
            path: '/site-manager/web/ads/feature-details/:id',
            component: web.ads.featuresDetials,
            name: 'web.ads.featuresDetials',
            meta: {...meta, requiresAuth: true},
        },



    ],
}

export default routes;
