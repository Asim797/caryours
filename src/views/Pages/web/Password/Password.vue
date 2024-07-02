<template>
    <section class="login-box">
        <div class="login">
            <h4>Password Recovery</h4>
            <ValidationObserver
                v-if="tokenErrorMsg == ''"
                ref="form"
                v-slot="{ handleSubmit }"
            >
                <form ref="newPassword" @submit.prevent="handleSubmit(submit)">
                    <ValidationProvider
                        tag="div"
                        name="New password"
                        rules="required|confirmed:password_confirmation"
                        v-slot="{ errors }"
                        class="form-group"
                    >
                        <label for="exampleInputEmail1">
                            <small>New password</small></label
                        >
                        <input
                            type="password"
                            v-model="password"
                            class="form-control"
                            name="password"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter password"
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider
                        tag="div"
                        vid="password_confirmation"
                        name="Confirm new password"
                        rules="required"
                        v-slot="{ errors }"
                        class="form-group"
                    >
                        <label for="exampleInputEmail1">
                            <small> Confirm new password</small></label
                        >
                        <input
                            type="password"
                            name="password_confirmation"
                            v-model="confirm_password"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Retype password"
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <button type="submit" class="btn btn-block green-button">
                        UPDATE
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
            password: "",
            confirm_password: "",
            errorMessage: "",
            message: "",
            tokenErrorMsg: "",
        };
    },
    async beforeCreate() {
        try {
            let email = localStorage.getItem("email");
            let code = localStorage.getItem("code");
            let res = await axios.post(
                route("password.token", { token: code }),
                { email }
            );
        } catch (e) {
            if (e.response) {
                this.tokenErrorMsg = e.response.data.msg;
            }
        }
    },
    methods: {
        changeVerificationType() {
            if (this.verifyType == "email") {
                this.verifyType = "phone";
            } else {
                this.verifyType = "email";
            }
        },
        async submit(e) {
            let fd = new FormData(this.$refs.newPassword);
            fd.append("token", localStorage.getItem("code"));
            fd.append("email", localStorage.getItem("email"));
            let response = await axios.post(route("password.update"), fd);
            if (response.data.status) {
                localStorage.removeItem("code");
                localStorage.removeItem("email");
                var self = this;
                this.$router.replace({ name: "web.auth.login" });
                this.$snotify.success(response.data.msg, "Updated!");
            } else {
                this.$snotify.error(response.data.msg, "Oops!");
            }
        },
    },
};
</script>
