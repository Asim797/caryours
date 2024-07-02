<template>
    <section class="login-box">
        <div class="login">
            <h4>Password Recovery</h4>
            <ValidationObserver v-slot="{ handleSubmit }">
                <form ref="verify" @submit.prevent="handleSubmit(submit)">
                    <ValidationProvider
                        tag="div"
                        rules="required"
                        name="Email"
                        class="form-group"
                        v-slot="{ errors }"
                    >
                        <label for="exampleInputEmail1">Email</label>
                        <input
                            type="email"
                            v-model="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Your Email Address"
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
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
            email: "",
        };
    },
    methods: {
        async submit(e) {
            let response = await axios.post(route("password.email"), {
                email: this.email,
            });
            if (response.data.status) {
                localStorage.setItem("email", this.email);
                this.$router.push({ name: "web.password.code" });
                this.$snotify.success(response.data.msg);
            } else {
                this.$snotify.error(response.data.msg);
            }
        },
    },
};
</script>
