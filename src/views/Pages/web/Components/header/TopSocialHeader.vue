<template>
    <section class="top-bar">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-11 mx-auto">
                    <div class="row">
                        <div class="col-lg-2 text-lg-left text-center">
                            <router-link
                                :to="{ name: 'web.home.index' }"
                                class="navbar-brand"
                            >
                                <img
                                    :src="`${base_url}/assets/web/images/logo.png`"
                                    alt=""
                                    loading="lazy"
                                    class="img-fluid"
                                />
                            </router-link>
                        </div>
                        <div
                            class="col-lg-2 my-lg-auto mt-3 text-lg-left text-center"
                        >
                            <a href="mailto: abc@xyz.com" class="top-contact"
                                ><i class="fas fa-envelope mr-2"></i
                                >abc@xyz.com</a
                            >
                        </div>
                        <div
                            class="col-lg-2 my-lg-auto mt-3 text-lg-left text-center"
                        >
                            <a class="top-contact" href="tel: 12345678"
                                ><i class="fas fa-phone-alt mr-2"></i
                                >12345678</a
                            >
                        </div>
                        <div
                            class="col-lg-3 my-lg-auto mt-3 text-lg-left text-center"
                        >
                            <div class="d-flex align-items-center">
                                <div class="email-container2">
                                    <i class="fas fa-search top-search"></i>
                                    <input
                                        class="input-field2"
                                        type="email"
                                        name="email"
                                    />
                                </div>
                                <button class="d-inline-block icon22 ml-2">
                                    SEARCH
                                </button>
                            </div>
                        </div>

                        <div
                            class="col-lg-3 my-lg-auto mt-3 text-lg-left text-center"
                            v-if="isShowing"
                        >
                            <div
                                class="d-flex align-items-center justify-content-center"
                            >
                                <div class="dropdown top-login-bell">
                                    <button
                                        class="btn dropdown-toggle d-flex align-items-center"
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <img
                                            :src="`${base_url}/assets/web/images/noti-bell.png`"
                                            class="mr-2"
                                        />
                                    </button>
                                    <div
                                        class="dropdown-menu not-drp-dwn"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <a class="drp-noti d-block">
                                            <div
                                                class="d-flex align-items-start"
                                            >
                                                <img
                                                    :src="`${base_url}/assets/web/images/notification.png`"
                                                    alt=""
                                                    class="mr-2"
                                                />
                                                <div>
                                                    <bell-notification></bell-notification>
                                                </div>
                                            </div>
                                        </a>
                                        <hr />
                                        <div class="mt-2">
                                            <a class="d-block view-all-noti"
                                                >View All</a
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="dropdown top-login-user">
                                    <button
                                        class="btn dropdown-toggle d-flex align-items-center"
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <img
                                            :src="`${base_url}/assets/web/images/user-img.png`"
                                            class="mr-2"
                                            v-if="
                                                user.image ==
                                                `${base_url}/assets/upload/user`
                                            "
                                        />
                                        <img
                                            :src="user.image"
                                            class="mr-2"
                                            v-else
                                        />{{ user.first_name }}
                                    </button>
                                    <div
                                        class="dropdown-menu"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <router-link
                                            :to="{ name: 'web.user.profile' }"
                                            class="dropdown-item"
                                            >Profile</router-link
                                        >
                                        <router-link
                                            :to="{
                                                name: 'web.user.paymentLog.index',
                                            }"
                                            class="dropdown-item"
                                            >Payment Logs</router-link
                                        >
                                        <router-link
                                            :to="{
                                                name: 'web.user.advertisements.index',
                                            }"
                                            class="dropdown-item"
                                            >Ads Logs</router-link
                                        >
                                        <router-link
                                            :to="{
                                                name: 'web.user.clientGrowth.index',
                                            }"
                                            class="dropdown-item"
                                            >Client Growth Pass</router-link
                                        >
                                        <a
                                            class="dropdown-item"
                                            href="javascript:void(0)"
                                            @click="logout"
                                            >Logout</a
                                        >
                                    </div>
                                </div>

                                <!-- <a href="#_"><img :src="`${base_url}/assets/web/images/toggle-menu.png`" alt="" class="ml-2"></a> -->
                            </div>
                        </div>

                        <div
                            class="col-lg-2 my-lg-auto mt-3 text-lg-left text-center"
                            v-else
                        >
                            <div
                                class="d-flex align-items-center justify-content-center"
                            >
                                <router-link
                                    :to="{ name: 'web.auth.login' }"
                                    class="d-inline-block top-login"
                                    >Login</router-link
                                >
                                <span class="mx-1">|</span>
                                <router-link
                                    :to="{ name: 'web.auth.register' }"
                                    class="d-inline-block top-register"
                                    >Register</router-link
                                >
                                <!-- <a ><img :src="`${base_url}/assets/web/images/toggle-menu.png`" alt="" class="ml-2"></a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
const BellNotification = () => import("../../Notification/Index.vue");
import { mapState, mapActions } from "vuex";
export default {
    components: {
        BellNotification,
    },
    data() {
        return {
            base_url: base_url,
            user: {},
            isShowing: false,
            categoryProjects: [],
        };
    },
    created() {
        this.getProfile();
    },
    mounted() {
        this.$nextTick(() => {
            var links = document.querySelectorAll(
                ".collapse.navbar-collapse ul li"
            );
            links.forEach(function (element) {
                element.addEventListener("click", function (e) {
                    e.preventDefault();
                    links.forEach(function (element) {
                        element.classList.remove("active");
                    });
                    this.classList.add("active");
                });
            });
        });
    },
    methods: {
        ...mapActions("store", ["getAll"]),
        isLoggedIn() {
            return (
                localStorage.getItem("access-token") &&
                localStorage.getItem("userType") === "web" &&
                localStorage.getItem("siteManager") === "web"
            );
        },
        async logout() {
            let response = await axios.post("api/auth/logout");
            if (response.data) {
                this.isLogin = false;
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("userType");
                localStorage.removeItem("auth-id");
                localStorage.removeItem("id");
                localStorage.removeItem("access-token");
                localStorage.removeItem("isLogin");
                localStorage.removeItem("message");
                localStorage.removeItem("name");
                localStorage.removeItem("siteManager");
                localStorage.removeItem("image");
                this.$snotify.success("Logout Successfully");
                let self = this;
                this.$router.push({ name: "web.home.index" });
                setTimeout(function () {
                    window.location.reload();
                }, 2000);
            } else {
                this.$snotify.error("Something went wrong");
            }
        },
        async getProfile() {
            let id = localStorage.getItem("id");
            let response = await axios.get("/api/auth/getProfile", {
                params: { id: id },
            });
            if (response.data) {
                this.user = response.data.data;
                if (response.status != 401) {
                    this.isShowing = true;
                }
            } else {
                this.$snotify.error(response.data.message);
            }
        },
    },
};
</script>
