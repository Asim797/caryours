<template>
    <div>
        <section class="login">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-8 col-md-10 col-12">
                        <h1 class="text-center">Forgot Password</h1>
                        <ValidationObserver v-slot="{ handleSubmit }">
                            <form
                                ref="forgotEmail"
                                @submit.prevent="handleSubmit(submit)"
                            >
                                <ValidationProvider
                                    tag="div"
                                    name="email"
                                    rules="required|email"
                                    v-slot="{ errors }"
                                >
                                    <label for="" class="site-label mb-2 mt-3"
                                        >EMAIL ADDRESS*</label
                                    >
                                    <input
                                        name="email"
                                        v-model="email"
                                        type="email"
                                        class="site-input"
                                        placeholder="Enter Email Address"
                                    />
                                    <span class="text-danger">{{
                                        errors[0]
                                    }}</span>
                                </ValidationProvider>
                                <div class="text-center mt-lg-5 mt-4">
                                    <button
                                        type="submit"
                                        class="site-btn mt-lg-4 mt-3 px-5"
                                    >
                                        Continue<i class="ms-2"
                                            ><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12.3"
                                                viewBox="0 0 13.5 13.849"
                                            >
                                                <g
                                                    id="arrow-bottom-right"
                                                    transform="translate(-3.429)"
                                                >
                                                    <path
                                                        id="Path_1"
                                                        data-name="Path 1"
                                                        d="M12.065,20.61l1.873,1.873,8.98-9.328v6.068h2.647V8.635H14.976v2.647h6.07l-8.98,9.328Z"
                                                        transform="translate(-8.636 -8.635)"
                                                        fill="#fff"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </i>
                                    </button>
                                </div>
                                <div class="text-center mt-lg-5 mt-4">
                                    <router-link
                                        :to="{ name: 'web.auth.login' }"
                                        class="d-inline-block footer-back"
                                        >Back to Login
                                        <i class="ms-2"
                                            ><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12.3"
                                                viewBox="0 0 13.5 13.849"
                                            >
                                                <g
                                                    id="arrow-bottom-right"
                                                    transform="translate(-3.429)"
                                                >
                                                    <path
                                                        id="Path_1"
                                                        data-name="Path 1"
                                                        d="M12.065,20.61l1.873,1.873,8.98-9.328v6.068h2.647V8.635H14.976v2.647h6.07l-8.98,9.328Z"
                                                        transform="translate(-8.636 -8.635)"
                                                        fill="#0586F4"
                                                    ></path>
                                                </g>
                                            </svg> </i
                                    ></router-link>
                                </div>
                            </form>
                        </ValidationObserver>
                    </div>
                </div>
            </div>
        </section>

        <!-- testimonials section starts here -->
        <site-footer></site-footer>
        <!-- testimonials section ends here -->

        <!-- testimonials section ends here -->
    </div>
</template>
<script>
const SiteFooter = () =>
    import("@views/Pages/web/Components/footer/site-footer.vue");

export default {
    data() {
        return {
            email: "",
            response: {},
        };
    },
    components: {
        SiteFooter,
    },
    methods: {
        async submit(e) {
            let fd = new FormData(this.$refs.forgotEmail);
            try {
                let response = await axios.post("/api/auth/send/email", fd);
                if (response.data.data) {
                    localStorage.setItem("email", this.email);
                    this.$router.push({
                        name: "web.passwordRecovery.codeVerify",
                    });
                    this.$snotify.success(response.data.message);
                } else {
                    this.$snotify.error(response.data.message);
                }
            } catch (e) {
                if (e.response) {
                    this.response = e.response.data;
                }
                console.log(e);
            }
        },
    },
};
</script>
