<template>
    <section class="login-bg">
        <div class="container position-relative">
            <div class="login-card">
                <div class="row">
                    <div class="col-lg-6 login-right-col mx-auto">
                        <div class="login-right-content">
                            <div class="text-center">
                                <img
                                    :src="`${base_url}/assets/admin/images/logo.png`"
                                    alt=""
                                    class="img-fluid login-logo"
                                />
                                <h3 class="mt-1 login-haeding mb-0">
                                    Forget Password
                                </h3>
                                <p class="mt-1 mb-3">
                                    Please Enter Verification Code
                                </p>
                            </div>
                            <ValidationObserver v-slot="{ handleSubmit }">
                                <form
                                    ref="validateCode"
                                    @submit.prevent="handleSubmit(onSubmit)"
                                >
                                    <label for="" class="all-lbl"
                                        >Verification Code<span class="red"
                                            >*</span
                                        ></label
                                    >
                                    <validationProvider
                                        name="code"
                                        rules="required"
                                        v-slot="{ errors }"
                                    >
                                        <input
                                            name="code"
                                            v-model="code"
                                            type="text"
                                            class="site-input pl-1"
                                            placeholder="Enter Verification Code"
                                        />
                                        <span class="text-danger">{{
                                            errors[0]
                                        }}</span>
                                    </validationProvider>
                                    <div class="text-right">
                                        <button
                                            :disabled="isSending"
                                            @click="onResend()"
                                            type="button"
                                            class="forgot-link"
                                        >
                                            Resend Code
                                        </button>
                                    </div>
                                    <div class="text-center mt-3">
                                        <button
                                            class="site-btn w-100"
                                            type="submit"
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </form>
                            </ValidationObserver>
                            <div class="mt-3 text-center">
                                <router-link
                                    :to="{ name: 'admin.autn.login' }"
                                    class="back-to-web"
                                    >Back to Login</router-link
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            isSending: false,
            code: "",
            email: "",
        };
    },
    created() {
        let email = localStorage.getItem("email");
        if (!email) {
            this.$snotify.error(
                "Please Follow the first step & verify your email",
                "Forbidden!"
            );
            this.$router.push({ name: "ForgetPassword" });
        }
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
                    name: "admin.passwordRecovery.changePassword",
                });
                this.$snotify.success(response.data.message, "Verified");
            } else {
                this.$snotify.error(response.data.message, "Invalid Code");
            }
        },
    },
};
</script>
