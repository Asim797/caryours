<template>
    <div>
        <section class="login">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-8 col-md-10 col-12">
                        <h1 class="text-center">Sign In</h1>
                        <ValidationObserver
                            ref="loginObserver"
                            v-slot="{ handleSubmit }"
                        >
                            <form @submit.prevent="handleSubmit(login)">
                                <ValidationProvider
                                    tag="div"
                                    name="Email"
                                    rules="required|email"
                                    v-slot="{ errors }"
                                >
                                    <label for="" class="site-label mb-2 mt-3"
                                        >Email Address
                                        <span class="red-text">*</span></label
                                    >
                                    <input
                                        type="email"
                                        placeholder="Enter Email"
                                        v-model="form.email"
                                        class="site-input"
                                    />
                                    <span class="text-danger">{{
                                        errors[0]
                                    }}</span>
                                </ValidationProvider>
                                <ValidationProvider
                                    tag="div"
                                    name="Password"
                                    rules="required"
                                    v-slot="{ errors }"
                                >
                                    <label for="" class="site-label mb-2 mt-3"
                                        >Password
                                        <span class="red-text">*</span></label
                                    >
                                    <div class="position-relative">
                                        <input
                                            v-model="form.password"
                                            :type="passwordEye"
                                            placeholder="Enter Password"
                                            class="site-input enter-input"
                                        />
                                        <i
                                            :class="passwordClass"
                                            @click="
                                                togglePasswordEye(
                                                    'passwordEye',
                                                    'passwordClass'
                                                )
                                            "
                                        ></i>
                                    </div>
                                    <span class="text-danger">{{
                                        errors[0]
                                    }}</span>
                                </ValidationProvider>

                                <div class="text-end mt-2">
                                    <router-link
                                        :to="{
                                            name: 'web.passwordRecovery.email',
                                        }"
                                        class="site-label red-text"
                                        >Forgot Password ?</router-link
                                    >
                                </div>
                                <div class="text-center mt-4">
                                    <button
                                        type="submit"
                                        class="site-btn mt-lg-4 mt-3 px-5"
                                    >
                                        Login
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
                                                        fill="#fff"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </i>
                                    </button>
                                    <p class="mt-3 mb-0 p-md l-grey-text">
                                        Or Sign In With
                                    </p>
                                </div>
                                <div
                                    class="d-flex align-items-center justify-content-center"
                                >
                                    <a href="#_" class="d-inline-block mt-3"
                                        ><img
                                            src="images/fb.png"
                                            alt=""
                                            class="img-fluid"
                                    /></a>
                                    <a
                                        href="#_"
                                        class="d-inline-block mt-3 mx-3"
                                        ><img
                                            src="images/google.png"
                                            alt=""
                                            class="img-fluid"
                                    /></a>
                                    <a href="#_" class="d-inline-block mt-3"
                                        ><img
                                            src="images/apple.png"
                                            alt=""
                                            class="img-fluid"
                                    /></a>
                                </div>
                                <div
                                    class="d-flex mt-3 justify-content-center align-items-center"
                                >
                                    <p class="mb-0 p-md">
                                        Don't have an account?
                                    </p>
                                    <router-link
                                        :to="{ name: 'web.auth.register' }"
                                        class="ms-1 d-inline-block blue-text"
                                        >Sign Up
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
    </div>
</template>
<script>
const SiteFooter = () =>
    import("@views/Pages/web/Components/footer/site-footer.vue");

export default {
    data() {
        return {
            passwordClass: "far right-icon current-icon fa-eye-slash",
            passwordEye: "password",
            response: {},
            form: {
                email: "",
                password: "",
                role: "user",
            },
        };
    },
    components: {
        SiteFooter,
    },
    methods: {
        togglePasswordEye(passwordVar, classVar) {
            this[passwordVar] =
                this[passwordVar] == "password" ? "text" : "password";
            this[classVar] =
                this[passwordVar] == "password"
                    ? "far right-icon current-icon fa-eye-slash"
                    : "far right-icon current-icon fa-eye";
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
                    localStorage.setItem("userType", "web");
                    localStorage.setItem("siteManager", "web");
                    localStorage.setItem("access-token", data.token);
                    localStorage.setItem("name", data.first_name);
                    localStorage.setItem("id", data.id);
                    localStorage.setItem("image", data.image);
                    self.$router.push({ name: "web.home.index" });
                    setTimeout(function () {
                        window.location.reload();
                    }, 500);
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
