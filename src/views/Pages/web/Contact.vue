<template>
    <div>
        <section class="login">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-9 col-lg-10 col-12">
                        <h1 class="text-center">Contact Us</h1>
                    </div>
                </div>
                <ValidationObserver v-slot="{ handleSubmit }">
                    <form
                        ref="ContactFormData"
                        @submit.prevent="handleSubmit(sendContactForm)"
                    >
                        <div class="row">
                            <div class="col-lg-6">
                                <label class="site-label mb-2 mt-3"
                                    >FIRST NAME
                                    <span class="red-text">*</span></label
                                >
                                <ValidationProvider
                                    tag="div"
                                    name="first name"
                                    rules="required"
                                    v-slot="{ errors }"
                                >
                                    <input
                                        type="text"
                                        v-model="first_name"
                                        name="first_name"
                                        class="site-input"
                                        placeholder="Enter First Name"
                                    />
                                    <span class="text-danger">{{
                                        errors[0]
                                    }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-lg-6 mt-lg-0 mt-4">
                                <label class="site-label mb-2 mt-3"
                                    >LAST NAME
                                    <span class="red-text">*</span></label
                                >
                                <ValidationProvider
                                    tag="div"
                                    name="last name"
                                    rules="required"
                                    v-slot="{ errors }"
                                >
                                    <input
                                        type="text"
                                        v-model="last_name"
                                        name="last_name"
                                        class="site-input"
                                        placeholder="Enter Last Name"
                                    />
                                    <span class="text-danger">{{
                                        errors[0]
                                    }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-12 mt-4">
                                <label class="site-label mb-2 mt-3"
                                    >Email Address
                                    <span class="red-text">*</span></label
                                >
                                <ValidationProvider
                                    tag="div"
                                    name="email"
                                    rules="required"
                                    v-slot="{ errors }"
                                >
                                    <input
                                        type="email"
                                        v-model="email"
                                        name="email"
                                        class="site-input"
                                        placeholder="Enter Email Address"
                                    />
                                    <span class="text-danger">{{
                                        errors[0]
                                    }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-12 mt-4">
                                <label class="site-label mb-2 mt-3"
                                    >Subject<span class="red-text"
                                        >*</span
                                    ></label
                                >
                                <ValidationProvider
                                    tag="div"
                                    name="subject"
                                    rules="required"
                                    v-slot="{ errors }"
                                >
                                    <input
                                        type="text"
                                        v-model="subject"
                                        name="subject"
                                        class="site-input"
                                        placeholder="Enter Subject"
                                    />
                                    <span class="text-danger">{{
                                        errors[0]
                                    }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-12 mt-4">
                                <label class="site-label mb-2 mt-3"
                                    >Description<span class="red-text"
                                        >*</span
                                    ></label
                                >
                                <ValidationProvider
                                    tag="div"
                                    name="message"
                                    rules="required"
                                    v-slot="{ errors }"
                                >
                                    <textarea
                                        v-model="message"
                                        name="message"
                                        rows="8"
                                        class="site-input"
                                        placeholder="Enter Description"
                                    ></textarea>
                                    <span class="text-danger">{{
                                        errors[0]
                                    }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="col-12 text-center mt-lg-5 mt-4">
                                <button
                                    type="submit"
                                    class="site-btn mt-lg-4 mt-3 px-5"
                                >
                                    Send Message<i class="ms-2"
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
                        </div>
                    </form>
                </ValidationObserver>
            </div>
        </section>
       <site-footer></site-footer>
    </div>
</template>

<script>
const SiteFooter = () =>
    import("@views/Pages/web/Components/footer/site-footer.vue");

export default {
    components: {
        SiteFooter,
    },
    data() {
        return {
            first_name: "",
            last_name: "",
            email: "",
            subject: "",
            message: "",
        };
    },
    methods: {
        async sendContactForm() {
            let fd = new FormData(this.$refs.ContactFormData);
            let response = await axios.post("api/contactUs", fd);
            if (response.data.status == "success") {
                var data = response.data.data;
                this.$snotify.success(response.data.message);
                window.location.reload();
            } else {
                this.$snotify.error(response.data.message);
            }
        },
    },
};
</script>
