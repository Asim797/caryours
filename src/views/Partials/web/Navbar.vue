<template>
    <section
        :class="[{ 'main-page-slider-about-us': $route.name !== 'web.home' }]"
    >
        <div class="for-nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <router-link
                        class="navbar-brand"
                        :to="{ name: 'web.home' }"
                    >
                        <img src="assets/images/logo.png" alt="" />
                    </router-link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <links>
                            <template
                                slot="owner-links"
                                v-if="$user !== null && !isEmployee"
                            >
                                <li class="nav-item text-center">
                                    <router-link
                                        class="nav-link"
                                        :to="{ name: 'web.properties.index' }"
                                    >
                                        <template
                                            v-if="
                                                $route.name != 'web.home' &&
                                                $user
                                            "
                                        >
                                            <i class="fas fa-building"></i>
                                            <br />
                                        </template>
                                        My Properties</router-link
                                    >
                                </li>
                                <li class="nav-item text-center">
                                    <router-link
                                        class="nav-link"
                                        :to="{ name: 'web.employees.index' }"
                                    >
                                        <template
                                            v-if="
                                                $route.name != 'web.home' &&
                                                $user
                                            "
                                        >
                                            <i class="fas fa-users"></i>
                                            <br />
                                        </template>
                                        My Employees</router-link
                                    >
                                </li>
                                <li class="nav-item text-center">
                                    <router-link
                                        class="nav-link"
                                        :to="{
                                            name: 'web.tasks.board',
                                            params: {
                                                type: 'calendar',
                                            },
                                        }"
                                    >
                                        <template
                                            v-if="
                                                $route.name != 'web.home' &&
                                                $user
                                            "
                                        >
                                            <i class="fas fa-calendar-alt"></i>
                                            <br />
                                        </template>
                                        Calendar
                                    </router-link>
                                </li>
                            </template>
                            <template v-if="isEmployee && $user.owner_id">
                                <li class="nav-item">
                                    <router-link
                                        class="nav-link"
                                        :to="{
                                            name: 'web.tasks.board',
                                            params: {
                                                type: 'calendar',
                                            },
                                        }"
                                    >
                                        <i class="fas fa-calendar-alt"></i>
                                        <br
                                            v-if="
                                                $route.name != 'web.home' &&
                                                $user
                                            "
                                        />
                                        Assigned Tasks
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link
                                        class="nav-link"
                                        :to="{ name: 'web.tasks.index' }"
                                    >
                                        <i class="fas fa-briefcase"></i>
                                        <br
                                            v-if="
                                                $route.name != 'web.home' &&
                                                $user
                                            "
                                        />Task Log
                                    </router-link>
                                </li>
                            </template>
                            <li class="nav-item text-center">
                                <router-link
                                    class="nav-link text-white"
                                    :to="{ name: 'web.contact' }"
                                >
                                    <template
                                        v-if="
                                            $route.name != 'web.home' && $user
                                        "
                                    >
                                        <i class="fas fa-phone-alt"></i>
                                        <br />
                                    </template>
                                    Contact us</router-link
                                >
                            </li>
                            <bell-notification
                                v-if="shouldShown"
                            ></bell-notification>
                        </links>
                        <div class="left-nav">
                            <login-links v-if="!$user"></login-links>
                            <profile-links v-else></profile-links>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <slot name="slider"></slot>
    </section>
</template>
<script>
const Links = () => import("@views/Partials/web/navigation/Links.vue");
const BellNotification = () =>
    import("@views/Partials/web/navigation/BellNotification.vue");
const LoginLinks = () =>
    import("@views/Partials/web/navigation/LoginLinks.vue");
const ProfileLinks = () =>
    import("@views/Partials/web/navigation/ProfileLinks.vue");
export default {
    components: {
        Links,
        BellNotification,
        ProfileLinks,
        LoginLinks,
    },
    computed: {
        shouldShown() {
            if (!this.$user) return false;

            if (this.isEmployee && !this.$user.owner_id) {
                return false;
            } else {
                return true;
            }
        },
    },
};
</script>
