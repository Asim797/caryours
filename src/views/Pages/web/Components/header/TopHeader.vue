<template>
    <!-- header starts here -->
    <header>
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-xxl-10 col-xl-11 col-12">
                    <nav class="navbar py-4 navbar-expand-xl navbar-light">
                        <a class="navbar-brand" href="index.php"
                            ><img
                                :src="`${base_url}/assets/web/images/logo.png`"
                                alt=""
                                class="img-fluid site-logo"
                        /></a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul
                                class="navbar-nav align-items-xl-center ms-auto"
                            >
                                <li class="nav-item mx-lg-2">
                                    <a
                                        class="nav-link active"
                                        aria-current="page"
                                        href="index.php"
                                        >Home</a
                                    >
                                </li>
                                <li class="nav-item mx-lg-2">
                                    <router-link
                                        class="nav-link"
                                        :to="{ name: 'web.home.aboutUs' }"
                                        >About Us</router-link
                                    >
                                </li>
                                <li class="nav-item mx-lg-2">
                                    <router-link
                                        class="nav-link"
                                        :to="{ name: 'web.home.category' }"
                                        >Ads Listing</router-link
                                    >
                                </li>
                                <li
                                    class="nav-item mx-lg-2"
                                    v-if="isLoggedIn()"
                                >
                                    <router-link
                                        class="nav-link"
                                        :to="{ name: 'web.ads.create' }"
                                        >Post Ad</router-link
                                    >
                                </li>
                                <li class="nav-item mx-lg-2">
                                    <router-link
                                        class="nav-link"
                                        :to="{ name: 'web.home.contactUs' }"
                                        >Contact Us</router-link
                                    >
                                </li>
                                <!-- <li class="nav-item mx-lg-2">
                                    <div class="nav-search">
                                        <button
                                            class="transparent-btn d-xxl-none d-xl-block d-none"
                                        >
                                            <i
                                                class="fas fa-search red-text p-lg"
                                            ></i>
                                        </button>
                                        <div class="search-bar">
                                            <input
                                                type="text"
                                                class="site-input"
                                                placeholder="Search"
                                            />
                                            <button class="transparent-btn">
                                                <i
                                                    class="fas fa-search red-text"
                                                ></i>
                                            </button>
                                        </div>
                                    </div>
                                </li> -->
                                <li
                                    class="nav-item mx-lg-2"
                                    v-if="!isLoggedIn()"
                                >
                                    <router-link
                                        :to="{ name: 'web.auth.login' }"
                                    >
                                        <button class="site-btn red-btn">
                                            <i class="far fa-user"></i> Login
                                        </button>
                                    </router-link>
                                </li>
                                <li
                                    class="nav-item mx-lg-2"
                                    v-if="!isLoggedIn()"
                                >
                                    <router-link
                                        :to="{ name: 'web.auth.register' }"
                                    >
                                        <button class="site-btn">
                                            <i class="far fa-user"></i> Sign Up
                                        </button>
                                    </router-link>
                                </li>
                            </ul>

                            <ul
                                v-if="isLoggedIn()"
                                class="navbar-nav flex-row align-items-center ms-auto"
                            >
                                <li class="nav-item">
                                    <div class="dropdown cart-drop">
                                        <button
                                            class="cart-toggle transparent-btn d-flex align-items-center my-accountt"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <div
                                                class="position-relative d-inline-block"
                                            >
                                                <i
                                                    class="far fa-bell p-lg blue-text"
                                                ></i>
                                                <span class="noti-span">3</span>
                                            </div>
                                        </button>
                                        <ul
                                            class="dropdown-menu notification-div"
                                            ss-container
                                            aria-labelledby="dropdownMenuButton1"
                                        >
                                            <p class="p-xl bold">
                                                Notifications
                                            </p>
                                            <div class="d-flex align-items-start mt-3" v-for="notification in notifications">
                                                <div class="flex-shrink-0">
                                                    <i
                                                        class="far p-lg fa-bell blue-text"
                                                    ></i>
                                                </div>
                                                <div class="flex-grow-1 ms-2">
                                                    <p
                                                        class="p-xs mb-0 l-grey-text"
                                                    >
                                                       {{ notification?.title }}
                                                    </p>
                                                    <p
                                                        class="p-sm mb-0 medium blue-text"
                                                    >
                                                        {{notification?.created_at}}
                                                    </p>
                                                </div>
                                            </div>
                                            <a
                                                href="javascript:void(0)"
                                                class="blue-text medium p-xs"
                                                >View All</a
                                            >
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-item mx-3">
                                    <div class="dropdown cart-drop">
                                        <button
                                            class="cart-toggle transparent-btn d-flex align-items-center my-accountt"
                                            type="button"
                                            id="dropdownMenuButton12"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img
                                                v-if="
                                                    user.image ==
                                                    `${base_url}/assets/upload/user`
                                                "
                                                :src="`${base_url}/assets/web/images/profile-pic.png`"
                                                class="img-fluid profile-pic-header"
                                            />
                                            <img
                                                :src="user.image"
                                                alt=""
                                                class="img-fluid profile-pic-header"
                                                v-else
                                            />
                                            <!-- <img :src="`${base_url}/assets/web/images/user-icon.png`" alt="" class="img-fluid"> -->
                                            <i
                                                class="fas fa-caret-down p-lg blue-text ms-2"
                                            ></i>
                                        </button>
                                        <ul
                                            class="dropdown-menu profile-div"
                                            aria-labelledby="dropdownMenuButton12"
                                        >
                                            <li class="py-2 border-bottom">
                                                <router-link
                                                    :to="{
                                                        name: 'web.user.profile',
                                                    }"
                                                    class="dropdown-item d-flex align-items-center"
                                                >
                                                    <div class="profile-icon">
                                                        <img
                                                            :src="`${base_url}/assets/web/images/profile-icon-1.png`"
                                                            alt=""
                                                            class="img-fluid me-2"
                                                        />
                                                    </div>
                                                    View Profile
                                                </router-link>
                                            </li>
                                            <li class="py-2 border-bottom">
                                                <router-link
                                                    :to="{
                                                        name: 'web.ads.index',
                                                    }"
                                                    class="dropdown-item d-flex align-items-center"
                                                >
                                                    <div class="profile-icon">
                                                        <img
                                                            :src="`${base_url}/assets/web/images/profile-icon-2.png`"
                                                            alt=""
                                                            class="img-fluid me-2"
                                                        />
                                                    </div>
                                                    My Ads
                                                </router-link>
                                            </li>
                                            <li class="py-2 border-bottom">
                                                <router-link
                                                    :to='{name: "web.ads.whislist"}'
                                                    class="dropdown-item d-flex align-items-center"
                                                >
                                                    <div class="profile-icon">
                                                        <img
                                                            :src="`${base_url}/assets/web/images/profile-icon-3.png`"
                                                            alt=""
                                                            class="img-fluid me-2"
                                                        />
                                                    </div>
                                                    Saved Ads
                                                </router-link>
                                            </li>
                                            <li class="py-2">
                                                <a
                                                    class="dropdown-item d-flex align-items-center"
                                                    data-bs-toggle="modal"
                                                    data-bs-target=".logOut"
                                                    @click="logout()"
                                                >
                                                    <div class="profile-icon">
                                                        <img
                                                            :src="`${base_url}/assets/web/images/profile-icon-1.png`"
                                                            alt=""
                                                            class="img-fluid me-2"
                                                        />
                                                    </div>
                                                    Log Out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <!-- header ends here -->
</template>

<script>
import { mapState, mapActions } from "vuex";
import BellNotification from "../../../../../Core/components/UserBellNotification.vue";
export default {
    components: {
        BellNotification,
    },
    computed: {
        ...mapState("store", ["user"]),
    },
    data() {
        return {
            isShowing: false,
            categoryProjects: {},
            notifications: [],
        };
    },
    created() {
        this.fetch();
        this.all_notifications();
        //this.getCategoryProjects();
    },
    mounted() {},
    methods: {
        ...mapActions("store", ["getAll", "store"]),
        isLoggedIn() {
            return (
                localStorage.getItem("access-token") &&
                localStorage.getItem("userType") === "web" &&
                localStorage.getItem("siteManager") === "web"
            );
        },
        async all_notifications() {
            let params = {
                route: `api/notification/user`,
            };
            let { data } = await this.getAll(params);
            this.notifications = data;
        },
        async fetch() {
            let { type, status } = this.$route.params;
            let params = {
                route: `api/auth/getProfile`,
                mutation: "set_user",
                variable: "data",
            };
            let { data } = await this.getAll(params);
            this.stores = data.data;
        },
        async getCategoryProjects() {
            let id = localStorage.getItem("id");
            let response = await axios.get("/api/web/categoryProjects");
            if (response.data) {
                this.isShowing = true;
                this.categoryProjects = response.data.data;
                // this.user  = response.data.data
                // if(response.status != 401){
                //     this.isShowing = true;
                // }
            } else {
                this.$snotify.error(response.data.message);
            }
        },
        async logout() {
            await axios.post("admin/auth/logout");
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("userType");
            localStorage.removeItem("auth-id");
            localStorage.removeItem("access-token");
            this.$snotify.success("Logout Successfully");
            let self = this;
            setTimeout(function () {
                self.$router.push({ name: "web.home.index" });
                window.location.reload();
            }, 2000);
        },
    },
};
</script>
