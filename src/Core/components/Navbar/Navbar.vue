<template>
    <nav
        class="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-light navbar-border"
    >
        <div class="navbar-wrapper">
            <div class="navbar-header">
                <ul class="nav navbar-nav flex-row">
                    <li class="nav-item mobile-menu d-md-none mr-auto">
                        <a
                            class="nav-link nav-menu-main menu-toggle hidden-xs"
                            href="javascript:void(0)"
                        >
                            <i class="ft-menu font-large-1"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="navbar-brand site-logo mt-lg-2 mt-md-3 mt-1"
                            :to="{ name: 'admin.dashboard' }"
                        >
                            <img
                                class="brand-logo img-fluid"
                                alt="stack admin logo"
                                :src="`${base_url}/assets/admin/images/logo.png`"
                            />
                        </router-link>
                    </li>
                    <li class="nav-item d-md-none">
                        <a
                            class="nav-link open-navbar-container"
                            data-toggle="collapse"
                            data-target="#navbar-mobile"
                        >
                            <i class="fa fa-ellipsis-v"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="navbar-container content">
                <div class="collapse navbar-collapse" id="navbar-mobile">
                    <ul class="nav navbar-nav mr-auto float-left"></ul>
                    <ul class="nav navbar-nav float-right">
                        <bell-notification></bell-notification>
                        <li class="dropdown dropdown-user nav-item">
                            <a
                                class="dropdown-toggle nav-link dropdown-user-link"
                                href="javascript:void(0)"
                                data-toggle="dropdown"
                            >
                                <span class="avatar avatar-online">
                                    <img
                                        :src="`${base_url}/assets/admin/images/img-placeholder.png`"
                                        alt="avatar"
                                /></span>
                                <span class="user-name">{{
                                    $user.first_name
                                }}</span>
                            </a>

                            <div class="dropdown-menu dropdown-menu-right">
                                <li>
                                    <router-link
                                        class="dropdown-item text-left"
                                        :to="{ name: 'admin.account.index' }"
                                        ><i class="fas fa-user-circle"></i>My
                                        Profile
                                    </router-link>
                                </li>
                                <div class="dropdown-divider"></div>
                                <a
                                    class="dropdown-item"
                                    data-toggle="modal"
                                    @click="logout()"
                                    href="#logoutmodal"
                                    ><i class="fa fa-power-off"></i>Logout</a
                                >
                            </div>
                        </li>

                        <li
                            @click="toggleMenu"
                            class="nav-item d-none d-md-block"
                        >
                            <a
                                class="nav-link nav-menu-main menu-toggle hidden-xs"
                                href="javascript:void(0)"
                                ><i class="ft-menu"></i
                            ></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <!-- ////////////////////////////////////////////////////////////////////////////-->
</template>
<script>
const BellNotification = () => import("@core/components/BellNotification.vue");
export default {
    components: {
        BellNotification,
    },
    methods: {
        toggleMenu() {
            let classes = document.body.classList;
            if (_.includes(classes, "menu-expanded")) {
                classes.remove("menu-expanded");
                classes.add("menu-collapsed");
            } else {
                classes.add("menu-expanded");
                classes.remove("menu-collapsed");
            }
        },
        async logout() {
            await axios.post("admin/auth/logout");
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("userType");
            localStorage.removeItem("auth-id");
            localStorage.removeItem("access-token");
            localStorage.removeItem("name");
            localStorage.removeItem("image");
            this.$snotify.success("Logout Successfully");
            let self = this;
            setTimeout(function () {
                self.$router.push({ name: "admin.auth.login" });
                window.location.reload();
            }, 2000);
        },
    },
};
</script>
