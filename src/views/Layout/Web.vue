<template>
    <div>
        <Navbar>
            <template v-if="$route.name != 'web.home'" slot="slider">
                <inner-slider></inner-slider>
            </template>
        </Navbar>
        <router-view></router-view>
        <contact-form />
        <web-footer />
        <vue-snotify></vue-snotify>
    </div>
</template>
<script>
const InnerSlider = () => import("@views/Partials/web/InnerSlider.vue");
const Navbar = () => import("@views/Partials/web/Navbar.vue");
const WebFooter = () => import("@views/Partials/web/Footer.vue");
const ContactForm = () => import("@views/Partials/web/ContactForm.vue");
import { mapMutations, mapActions } from "vuex";
export default {
    components: {
        Navbar,
        WebFooter,
        ContactForm,
        InnerSlider,
    },
    created() {},
    methods: {
        ...mapActions("web", ["getAll"]),
        ...mapMutations("web", [
            "SET_BELL_NOTIFICATIONS",
            "PUSH_BELL_NOTIFICATIONS",
        ]),
        async fetch() {
            let { status } = this.$route.params;
            let params = {
                route: route("web.notification.bell"),
                mutation: "SET_BELL_NOTIFICATIONS",
                variable: "data",
                data: {},
            };
            let { data } = await this.getAll(params);
        },
    },
    mounted() {
        if (this.$user) {
            Echo.private("App.Models." + this.$user.id).notification(
                (notification) => {
                    // console.log();
                    // this.fetch();
                    this.PUSH_BELL_NOTIFICATIONS(notification);
                }
            );
        }
    },
};
</script>
