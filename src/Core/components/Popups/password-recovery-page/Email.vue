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
                                    Please Enter Your Email Address
                                </p>
                            </div>
                            <ValidationObserver v-slot="{ handleSubmit }">
                                <form
                                    ref="forgotEmail"
                                    @submit.prevent="handleSubmit(submit)"
                                >
                                    <label for="" class="all-lbl"
                                        >Email<span class="red">*</span></label
                                    >
                                    <div class="form-field">
                                        <validationProvider
                                            name="Email Address"
                                            rules="required|email"
                                            v-slot="{ errors }"
                                        >
                                            <i
                                                class="left-icon left-icon-1 fas fa-envelope"
                                            ></i>
                                            <input
                                                type="email"
                                                name="email"
                                                v-model="email"
                                                class="site-input"
                                                placeholder="Enter Email"
                                            />
                                            <span class="text-danger">{{
                                                errors[0]
                                            }}</span>
                                        </validationProvider>
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
            email: "",
        };
    },
    methods: {
        async submit(e) {
            let fd = new FormData(this.$refs.forgotEmail);
            let response = await axios.post("/api/auth/send/email", fd);
            if (response.data.data) {
                localStorage.setItem("email", this.email);
                this.$router.push({
                    name: "admin.passwordRecovery.codeVerify",
                });
                this.$snotify.success(response.data.message);
            } else {
                this.$snotify.error(response.data.message);
            }
        },
    },
};
</script>
