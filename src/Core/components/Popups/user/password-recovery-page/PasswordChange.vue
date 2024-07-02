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
                                <div class="form-group position-relative mt-4">
                                    <ValidationProvider
                                        name="Password"
                                        rules="required|confirmed:confirmation"
                                        v-slot="{ errors }"
                                    >
                                        <label
                                            for=""
                                            class="site-label mb-2 mt-3"
                                            >NEW PASSWORD*</label
                                        >
                                        <input
                                            name="password"
                                            v-model="password"
                                            :type="passwordEye"
                                            class="site-input"
                                            placeholder="Enter New Password"
                                        />
                                        <i
                                            class="far enter-icon right-icon"
                                            @click="
                                                togglePasswordEye(
                                                    'passwordEye',
                                                    'passwordClass'
                                                )
                                            "
                                            :class="passwordClass"
                                            aria-hidden="true"
                                        ></i>
                                        <span class="text-danger">{{
                                            errors[0]
                                        }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="form-group position-relative mt-4">
                                    <ValidationProvider
                                        name="confirmation"
                                        rules="required"
                                        vid="confirmation"
                                        v-slot="{ errors }"
                                    >
                                        <label
                                            for=""
                                            class="site-label mb-2 mt-3"
                                            >CONFIRM PASSWORD*</label
                                        >
                                        <input
                                            v-model="confirmation"
                                            :type="passwordEyeConfirmation"
                                            class="site-input"
                                            placeholder="Confirm Password"
                                        />
                                        <i
                                            class="far enter-icon right-icon"
                                            @click="
                                                togglePasswordEye(
                                                    'passwordEyeConfirmation',
                                                    'passwordClassConfirmation'
                                                )
                                            "
                                            :class="passwordClassConfirmation"
                                            aria-hidden="true"
                                        ></i>
                                        <span class="text-danger">{{
                                            errors[0]
                                        }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="text-center mt-lg-5 mt-4">
                                    <button
                                        class="site-btn mt-lg-4 mt-3 px-5"
                                        type="submit"
                                    >
                                        Update<i class="ms-2"
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
                                        >>Back to Login<i class="ms-2"
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
        <!-- Login -->
        <!-- Modal -->
        <!-- <div class="modal fade" id="pwd-update" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content site-modal">
            <i class="fas fa-times close modal-close" data-dismiss="modal" aria-label="Close"></i>
            <div class="text-center">
                <img :src="`${base_url}/assets/web/images/tick.png`" alt="">
                <p class="modal-text pt-5">Password Updated Successfully!</p>
                <div class="modal-btn-div">
                    <a class="general-btn d-inline-block" href="#_" data-dismiss="modal" aria-label="Close">Ok</a>
                </div>
            </div>
        </div>
    </div>
</div> -->
    </div>
</template>

<script>
const SiteFooter = () =>
    import("@views/Pages/web/Components/footer/site-footer.vue");

export default {
    data() {
        return {
            passwordClass: "far enter-icon right-icon fa-eye",
            passwordEye: "password",
            passwordEyeConfirmation: "password",
            passwordClassConfirmation: "far enter-icon right-icon fa-eye",
            password: "",
            confirmation: "",
            response: {},
        };
    },
    components: {
        SiteFooter,
    },

    created() {
        let email = localStorage.getItem("email");
        if (!email) {
            this.$snotify.error(
                "Please Follow step by step to change new password",
                "Forbidden!"
            );
            this.$router.push({ name: "admin.passwordRecovery.email" });
        }
    },
    methods: {
        togglePasswordEye(passwordVar, classVar) {
            this[passwordVar] =
                this[passwordVar] == "password" ? "text" : "password";
            this[classVar] =
                this[passwordVar] == "password"
                    ? "far enter-icon right-icon fa-eye"
                    : "far enter-icon right-icon fa-eye-slash";
        },
        async onSubmit(e) {
            try {
                let fd = new FormData();
                fd.append("code", localStorage.getItem("code"));
                fd.append("email", localStorage.getItem("email"));
                fd.append("password", this.password);
                fd.append("password_confirmation", this.confirmation);

                let response = await axios.post("/api/auth/new-password", fd);
                if (response.data.status) {
                    localStorage.removeItem("code");
                    localStorage.removeItem("email");
                    var self = this;
                    // this.$router.push({ name: "web.auth.login" });
                    this.$snotify.success(response.data.msg, "Updated!");
                } else {
                    this.$snotify.error(response.data.msg, "Oops!");
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
