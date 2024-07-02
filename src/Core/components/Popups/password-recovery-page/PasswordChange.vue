<template>
    <section class="login-bg">
        <div class="container position-relative">
            <div class="login-card">
                <div class="row">
                    <div class="col-lg-6 login-right-col mx-auto">
                        <div class="login-right-content">
                            <div class="text-center">
                                <img
                                    src="images/logo.png"
                                    alt=""
                                    class="img-fluid login-logo"
                                />
                                <h3 class="mt-1 login-haeding mb-0">
                                    Forget Password
                                </h3>
                                <p class="mt-1 mb-3">Create a new password</p>
                            </div>
                            <ValidationObserver v-slot="{ handleSubmit }">
                                <form
                                    ref="newPassword"
                                    @submit.prevent="handleSubmit(onSubmit)"
                                >
                                    <label for="" class="all-lbl"
                                        >New Password<span class="red"
                                            >*</span
                                        ></label
                                    >
                                    <div class="form-field">
                                        <ValidationProvider
                                            name="Password"
                                            rules="required|confirmed:confirmation"
                                            v-slot="{ errors }"
                                        >
                                            <i
                                                class="left-icon fas fa-lock left-icon-2"
                                            ></i>
                                            <input
                                                name="password"
                                                v-model="password"
                                                :type="passwordEye"
                                                class="site-input right-icon enter-input"
                                                placeholder="Enter New Password"
                                            />
                                            <i
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
                                    <label for="" class="all-lbl"
                                        >Confirm Password<span class="red"
                                            >*</span
                                        ></label
                                    >
                                    <div class="form-field">
                                        <ValidationProvider
                                            name="confirmation"
                                            rules="required"
                                            vid="confirmation"
                                            v-slot="{ errors }"
                                        >
                                            <i
                                                class="left-icon fas fa-lock left-icon-2"
                                            ></i>
                                            <input
                                                v-model="confirmation"
                                                :type="passwordEyeConfirmation"
                                                class="site-input right-icon confirm-input"
                                                placeholder="Confirm Password"
                                                name=""
                                                id=""
                                            />
                                            <i
                                                @click="
                                                    togglePasswordEye(
                                                        'passwordEyeConfirmation',
                                                        'passwordClassConfirmation'
                                                    )
                                                "
                                                :class="
                                                    passwordClassConfirmation
                                                "
                                                aria-hidden="true"
                                            ></i>
                                            <span class="text-danger">{{
                                                errors[0]
                                            }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="text-center mt-3">
                                        <button
                                            class="site-btn w-100"
                                            type="submit"
                                        >
                                            Update
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
            passwordClass: "fa-eye",
            passwordEye: "password",
            passwordEyeConfirmation: "password",
            passwordClassConfirmation: "fa-eye",
            password: "",
            confirmation: "",
        };
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
                this[passwordVar] == "password" ? "fa-eye" : "fa-eye-slash";
        },
        async onSubmit(e) {
            let fd = new FormData(this.$refs.newPassword);
            fd.append("code", localStorage.getItem("code"));
            let response = await axios.post("/api/auth/new-password", fd);
            if (response.data.status) {
                localStorage.removeItem("code");
                localStorage.removeItem("email");
                var self = this;
                this.$router.push({ name: "admin.auth.login" });
                this.$snotify.success(response.data.msg, "Updated!");
            } else {
                this.$snotify.error(response.data.msg, "Oops!");
            }
        },
    },
};
</script>
