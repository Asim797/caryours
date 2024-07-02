<template>
    <div>
        <!-- Login -->
        <section class="login">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-8 col-md-10 col-12">
                        <h1 class="text-center">Forgot Password</h1>

                        <ValidationObserver v-slot="{ handleSubmit }">
                            <form
                                ref="validateCode"
                                @submit.prevent="handleSubmit(onSubmit)"
                            >
                                <validationProvider
                                    name="code"
                                    rules="required"
                                    v-slot="{ errors }"
                                >
                                    <label for="" class="site-label mb-2 mt-3"
                                        >VERIFICATION CODE*</label
                                    >
                                    <input
                                        name="code"
                                        v-model="code"
                                        type="text"
                                        class="site-input"
                                        placeholder="Enter Verification Code"
                                    />
                                    <span class="text-danger">{{
                                        errors[0]
                                    }}</span>
                                </validationProvider>
                                <div class="row">
                                    <div class="col-12 text-right">
                                        <button
                                            :disabled="isSending"
                                            @click="onResend()"
                                            type="button"
                                            class="site-label red-text"
                                        >
                                            {{
                                                isSending
                                                    ? "Resending Code"
                                                    : "Resend Code"
                                            }}
                                        </button>
                                    </div>
                                </div>
                                <div class="text-center mt-4">
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
                                        >Back to Login<i class="ms-2"
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
    </div>
</template>
<script>
const SiteFooter = () =>
    import("@views/Pages/web/Components/footer/site-footer.vue");

export default {
    data() {
        return {
            isSending: false,
            code: "",
            email: "",
        };
    },

    components: {
        SiteFooter,
    },
    created() {
        // let email = localStorage.getItem('email');
        // if (!email) {
        //     this.$snotify.error('Please Follow the first step & verify your email', 'Forbidden!');
        //     this.$router.push({ name: 'ForgetPassword'});
        // }
    },
    methods: {
        async onResend(e) {
            let fd = new FormData();
            fd.append("email", localStorage.getItem("email"));
            if (!this.isSending) {
                this.isSending = true;
                let response = await axios.post("/api/auth/send/email", fd);
                if (response.data.data) {
                    let self = this;
                    this.isSending = false;
                    setTimeout(function () {
                        self.$snotify.success(response.data.message);
                    }, 1000);
                } else {
                    this.$snotify.error(response.data.message);
                }
            } else {
                this.$snotify.error("already sending", "Please Wait!");
            }
        },
        async onSubmit(e) {
            let fd = new FormData(this.$refs.validateCode);
            let response = await axios.post("/api/auth/verify/code", fd);
            if (response.data.data) {
                localStorage.setItem("code", this.code);
                var self = this;
                this.$router.push({
                    name: "web.passwordRecovery.changePassword",
                });
                this.$snotify.success(response.data.message, "Verified");
            } else {
                this.$snotify.error(response.data.message, "Invalid Code");
            }
        },
    },
};
</script>
