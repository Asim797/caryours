<template>
    <section class="login-box">
        <div class="login">
            <h4>Password Recovery</h4>
            <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
                <form
                    ref="validateCode"
                    @submit.prevent="handleSubmit(onSubmit)"
                >
                    <div class="form-group">
                        <label for="exampleInputEmail1">
                            <small> Enter Security Code</small> <br />
                            <small class="V-small">
                                Please check your email for code. Your code is 6
                                characters in Length</small
                            ></label
                        >
                        <ValidationProvider
                            name="Code"
                            tag="div"
                            rules="required"
                            v-slot="{ errors }"
                        >
                            <input
                                type="text"
                                v-model="code"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter Code"
                            />
                            <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <a
                        href="javascript:void(0)"
                        @click="onResend()"
                        class="forget-pasword"
                        >Didn't get a code?</a
                    >
                    <br />
                    <button type="submit" class="btn btn-block green-button">
                        CONTINUE
                    </button>
                    <div class="form-last-text">
                        <router-link
                            :to="{ name: 'web.auth.login' }"
                            class="sign-up-now-black"
                            ><i class="fas fa-arrow-left"></i> Back To Login
                        </router-link>
                    </div>
                </form>
            </ValidationObserver>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            isSending: false,
            code: "",
            // verifyType: 'email',
        };
    },
    created() {
        let email = localStorage.getItem("email");
        if (!email) {
            this.$snotify.error(
                "Please Follow the first step & verify your Email Address",
                "Forbidden!"
            );
            this.$router.push({ name: "web.password.email" });
        }
    },
    methods: {
        async onResend(e) {
            let fd = new FormData();
            fd.append("email", localStorage.getItem("email"));
            if (!this.isSending) {
                this.isSending = true;
                let response = await axios.post(route("password.email"), fd);
                if (response.data.status) {
                    let self = this;
                    this.isSending = false;
                    setTimeout(function () {
                        self.$snotify.success(response.data.msg);
                    }, 1000);
                } else {
                    this.$snotify.error(response.data.msg);
                }
            } else {
                this.$snotify.error("already sending", "Please Wait!");
            }
        },
        async onSubmit(e) {
            let fd = new FormData(this.$refs.validateCode);
            fd.append("code", this.code);

            let response = await axios.post(route("password.verify-code"), fd);
            if (response.data.status) {
                localStorage.setItem("code", this.code);
                var self = this;
                this.$router.push({ name: "web.password.new" });
                this.$snotify.success(response.data.msg, "Verified");
            } else {
                this.$snotify.error(response.data.msg, "Invalid Code");
            }
        },
    },
};
</script>
