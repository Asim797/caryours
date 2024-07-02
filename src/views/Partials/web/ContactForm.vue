<template>
    <section class="help-form">
        <div class="white-rectangle">
            <img src="assets/images/Layer 7.png" alt="" />
        </div>
        <div class="container">
            <div class="for-bg">
                <div class="row">
                    <div class="col-md-6">
                        <h1>
                            Need Any Kind <br />
                            of Help?
                        </h1>
                        <br />
                        <span
                            >12390 Dummy Ct, Lehigh <br />
                            Acres FL 12336-790,</span
                        >
                        <br />
                        <br />
                        <span
                            >Phone:
                            <span class="text-green">+1 123 456 7890</span>
                        </span>
                        <br />
                        <span
                            >Email:
                            <span class="text-green"> info@scnell.com</span>
                        </span>
                        <br />
                    </div>
                    <div class="col-md-6">
                        <ValidationObserver
                            ref="contactObserver"
                            v-slot="{ handleSubmit }"
                        >
                            <form
                                ref="contactForm"
                                @submit.prevent="handleSubmit(submit)"
                            >
                                <ValidationProvider
                                    rules="required"
                                    tag="div"
                                    name="Name"
                                    v-slot="{ errors }"
                                    class="form-group"
                                >
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="name"
                                        name="name"
                                        id="Name"
                                        aria-describedby="emailHelp"
                                        placeholder="Name"
                                    />
                                    <div class="text-danger">
                                        {{ errors[0] }}
                                    </div>
                                </ValidationProvider>
                                <ValidationProvider
                                    rules="required|email"
                                    tag="div"
                                    name="Email"
                                    v-slot="{ errors }"
                                    class="form-group"
                                >
                                    <input
                                        type="email"
                                        name="email"
                                        class="form-control"
                                        v-model="email"
                                        id="Email"
                                        aria-describedby="emailHelp"
                                        placeholder="Email"
                                    />
                                    <div class="text-danger">
                                        {{ errors[0] }}
                                    </div>
                                </ValidationProvider>
                                <ValidationProvider
                                    rules="required"
                                    tag="div"
                                    name="Subject"
                                    v-slot="{ errors }"
                                    class="form-group"
                                >
                                    <input
                                        type="text"
                                        name="subject"
                                        v-model="subject"
                                        class="form-control"
                                        id="Subject"
                                        aria-describedby="emailHelp"
                                        placeholder="Subject"
                                    />
                                    <div class="text-danger">
                                        {{ errors[0] }}
                                    </div>
                                </ValidationProvider>
                                <ValidationProvider
                                    rules="required"
                                    tag="div"
                                    name="Message"
                                    v-slot="{ errors }"
                                    class="form-group"
                                >
                                    <textarea
                                        class="form-control"
                                        v-model="message"
                                        name="message"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        placeholder="Message"
                                    ></textarea>
                                    <div class="text-danger">
                                        {{ errors[0] }}
                                    </div>
                                </ValidationProvider>
                                <button type="submit" class="green-button">
                                    Send Message &nbsp;
                                    <i class="fas fa-arrow-right"></i>
                                </button>
                            </form>
                        </ValidationObserver>
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
            name: "",
            email: "",
            subject: "",
            message: "",
        };
    },
    methods: {
        async submit() {
            let fd = new FormData(this.$refs.contactForm);

            let response = await axios.post(route("app.contact-us"), fd);
            if (response.data.status) {
                this.$snotify.success(response.data.msg);
                this.name = this.email = this.message = this.subject = "";
                this.$refs.contactObserver.reset();
            } else {
                this.$snotify.error(response.data.msg);
            }
        },
    },
};
</script>
