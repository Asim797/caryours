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
                                <h3 class="mt-1 login-haeding mb-3">Log In</h3>
                            </div>
                            <ValidationObserver
                                ref="loginObserver"
                                v-slot="{ handleSubmit }"
                            >
                                <form @submit.prevent="handleSubmit(login)">
                                    <label for="" class="all-lbl"
                                        >Email<span class="red">*</span></label
                                    >
                                    <div class="col-12 form-group">
                                        <ValidationProvider
                                            tag="div"
                                            name="Email"
                                            rules="required|email"
                                            v-slot="{ errors }"
                                            class="form-field"
                                        >
                                            <i
                                                class="left-icon left-icon-1 fas fa-envelope"
                                            ></i>
                                            <input
                                                v-model="form.email"
                                                type="email"
                                                class="site-input"
                                                placeholder="Enter Email"
                                                name=""
                                                id=""
                                            />
                                            <span class="text-danger">{{
                                                errors[0]
                                            }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <label for="" class="all-lbl"
                                        >Password<span class="red"
                                            >*</span
                                        ></label
                                    >
                                    <div
                                        class="col-12 form-group position-relative"
                                    >
                                        <ValidationProvider
                                            tag="div"
                                            name="Password"
                                            rules="required"
                                            v-slot="{ errors }"
                                            class="form-field"
                                        >
                                            <i
                                                class="left-icon fas fa-lock left-icon-2"
                                            ></i>
                                            <input
                                                v-model="form.password"
                                                autocomplete="new-password"
                                                :type="passwordEye"
                                                class="site-input right-icon confirm-input"
                                                placeholder="Enter Password"
                                                name=""
                                                id=""
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
                                    <div class="text-right">
                                        <router-link
                                            :to="{
                                                name: 'admin.passwordRecovery.email',
                                            }"
                                            class="forgot-link"
                                            >Forgot Password ?</router-link
                                        >
                                    </div>
                                    <div class="text-center mt-3">
                                        <button
                                            type="submit"
                                            class="site-btn w-100"
                                        >
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </ValidationObserver>
                            <div class="mt-3 text-center">
                                <a class="back-to-web">Back to Website</a>
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
            passwordClass: "far fa-eye-slash confirm-icon right-icon",
            passwordEye: "password",
            response: {},
            form: {
                email: "",
                password: "",
                role: "admin",
            },
        };
    },
    methods: {
        togglePasswordEye(passwordVar, classVar) {
            this[passwordVar] =
                this[passwordVar] == "password" ? "text" : "password";
            this[classVar] =
                this[passwordVar] == "password"
                    ? "far fa-eye-slash confirm-icon right-icon"
                    : "far fa-eye confirm-icon right-icon";
        },
        async login(e) {
            let fd = new FormData();
            this.buildFormData(fd, this.form);
            try {
                let response = await axios.post("api/auth/login", fd);
                if (response.data.data) {
                    var data = response.data.data;
                    this.$snotify.success(response.data.message);
                    let self = this;
                    localStorage.setItem("isLoggedIn", "1");
                    localStorage.setItem("userType", "admin");
                    localStorage.setItem("access-token", data.token);
                    localStorage.setItem("name", data.first_name);
                    localStorage.setItem("image", data.image);
                    setTimeout(function () {
                        window.location.reload();
                        // self.$router.push({ name: 'admin.dashboard' });
                    }, 2000);
                } else {
                    this.$snotify.error(response.data.message);
                }
                this.response = {};
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
