<template>
    <div>
        <section class="login">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-9 col-lg-10 col-12">
                        <h1 class="text-center">Sign Up</h1>
                        <ValidationObserver
                            ref="loginObserver"
                            v-slot="{ handleSubmit }"
                        >
                            <form @submit.prevent="handleSubmit(register)">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <ValidationProvider
                                            tag="div"
                                            name="first_name"
                                            rules="required"
                                            v-slot="{ errors }"
                                        >
                                            <label
                                                for=""
                                                class="site-label mb-2 mt-3"
                                                >First Name
                                                <span class="red-text"
                                                    >*</span
                                                ></label
                                            >
                                            <input
                                                type="text"
                                                placeholder="Enter First Name"
                                                class="site-input"
                                                v-model="form.first_name"
                                            />
                                            <span class="text-danger">{{
                                                errors[0]
                                            }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-lg-6">
                                        <ValidationProvider
                                            tag="div"
                                            name="last_name"
                                            rules="required"
                                            v-slot="{ errors }"
                                        >
                                            <label
                                                for=""
                                                class="site-label mb-2 mt-3"
                                                >Last Name
                                                <span class="red-text"
                                                    >*</span
                                                ></label
                                            >
                                            <input
                                                type="text"
                                                placeholder="Enter Last Name"
                                                class="site-input"
                                                v-model="form.last_name"
                                            />
                                            <span class="text-danger">{{
                                                errors[0]
                                            }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-lg-6">
                                        <ValidationProvider
                                            tag="div"
                                            name="email"
                                            rules="required|email"
                                            v-slot="{ errors }"
                                        >
                                            <label
                                                for=""
                                                class="site-label mb-2 mt-3"
                                                >Email Address
                                                <span class="red-text"
                                                    >*</span
                                                ></label
                                            >
                                            <input
                                                type="email"
                                                placeholder="Enter Email"
                                                class="site-input"
                                                v-model="form.email"
                                            />
                                            <span class="text-danger">{{
                                                errors[0]
                                            }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-lg-6">
                                        <label
                                            for=""
                                            class="site-label mb-2 mt-3"
                                            >Phone Number
                                            <span class="red-text"
                                                >*</span
                                            ></label
                                        >
                                        <input
                                            type="tel"
                                            v-model="form.phone_number"
                                             v-mask="'+ 1 (###) ###-####'"
                                            name="phone"
                                            id="phone"
                                            data-error="Please enter a requested format - ex. 888 888-8888"
                                            value=""
                                            placeholder=""
                                        />
                                    </div>
                                    <div class="col-12">
                                        <label
                                            for=""
                                            class="site-label mb-2 mt-3"
                                            >Postal/Zip Code
                                            <span class="red-text"
                                                >*</span
                                            ></label
                                        >
                                        <input
                                            type="number"
                                            maxlength="5"
                                            v-model="form.zip_code"
                                            placeholder="Enter Postal/Zip Code"
                                            class="site-input enter-input"
                                        />
                                    </div>
                                    <div class="col-lg-6">
                                        <ValidationProvider
                                            tag="div"
                                            name="password"
                                            rules="required"
                                            v-slot="{ errors }"
                                        >
                                            <label
                                                for=""
                                                class="site-label mb-2 mt-3"
                                                >Password
                                                <span class="red-text"
                                                    >*</span
                                                ></label
                                            >
                                            <div class="position-relative">
                                                <input
                                                    :type="passwordEye"
                                                    placeholder="Enter Password"
                                                    class="site-input enter-input"
                                                    v-model="form.password"
                                                />
                                                <i
                                                    class="far fa-eye enter-icon right-icon"
                                                    @click="
                                                        togglePasswordEye(
                                                            'passwordEye',
                                                            'passwordClass'
                                                        )
                                                    "
                                                    :class="passwordClass"
                                                ></i>
                                            </div>
                                            <span class="text-danger">{{
                                                errors[0]
                                            }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-lg-6">
                                        <ValidationProvider
                                            tag="div"
                                            name="confirmed"
                                            rules="required"
                                            v-slot="{ errors }"
                                        >
                                            <label
                                                for=""
                                                class="site-label mb-2 mt-3"
                                                >Confirm Password
                                                <span class="red-text"
                                                    >*</span
                                                ></label
                                            >
                                            <div class="position-relative">
                                                <input
                                                    :type="passwordConfiremEye"
                                                    v-model="form.confirmed"
                                                    placeholder="Confirm Password"
                                                    class="site-input confirm-input"
                                                />
                                                <i
                                                    class="far fa-eye enter-icon right-icon"
                                                    @click="
                                                        togglePasswordEye(
                                                            'passwordConfiremEye',
                                                            'passwordConfirmClass'
                                                        )
                                                    "
                                                    :class="
                                                        passwordConfirmClass
                                                    "
                                                ></i>
                                            </div>
                                            <span class="text-danger">{{
                                                errors[0]
                                            }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <div class="text-center mt-4">
                                    <button
                                        type="submit"
                                        class="site-btn mt-lg-4 mt-3 px-5"
                                    >
                                        Sign Up
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
                                </div>
                                <div
                                    class="d-flex mt-3 justify-content-center align-items-center"
                                >
                                    <p class="mb-0 p-md">
                                        Already have an account?
                                    </p>
                                    <a
                                        href="login.php"
                                        class="ms-1 d-inline-block blue-text"
                                        >Sign In
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
                                    ></a>
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
    import {mask} from 'vue-the-mask'
export default {
    directives: {mask},
    data() {
        return {
            passwordClass: "far enter-icon right-icon fa-eye-slash",
            passwordConfirmClass: "far enter-icon right-icon fa-eye-slash",
            passwordEye: "password",
            passwordConfirmEye: "password",
            passwordConfiremEye: "password",
            response: {},
            form: {
                first_name: "",
                last_name: "",
                email: "",
                zip_code: "",
                phone_number: "",
                password: "",
                confirmed: "",
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
                    ? "far enter-icon right-icon fa-eye-slash"
                    : "far enter-icon right-icon fa-eye";
        },
        async register(e) {
            let fd = new FormData();
            this.buildFormData(fd, this.form);
            try {
                let response = await axios.post("api/auth/register", fd);
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
