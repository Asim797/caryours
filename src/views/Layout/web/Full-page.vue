<template>
    <div class="wrapper">
        <top-header></top-header>
        <router-view></router-view>
        <vue-snotify></vue-snotify>
    </div>
</template>

<script>
const TopSocialHeader = () =>
    import("@views/Pages/web/Components/header/TopSocialHeader.vue");
const TopHeader = () =>
    import("@views/Pages/web/Components/header/TopHeader.vue");

// const Admin = () => import('@views/Layout/admin/Admin.vue');
// const PasswordRecovery = () => import('@core/components/Popups/password-recovery/Popup.vue');

export default {
    components: {
        TopSocialHeader,
        TopHeader,
    },
};
</script>
