<template>
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row">
                    <div class="col-12 px-xl-4 pt-xl-2">
                        <div class="card mb-sm-5 mx-2">
                            <div class="card-content collapse show">
                                <div class="card-dashboard">
                                    <div class="row">
                                        <div class="col-12">
                                            <router-link
                                                :to="{
                                                    name: 'admin.account.index',
                                                }"
                                            >
                                                <i
                                                    class="fas fa-chevron-left back-arrow mr-1"
                                                ></i>
                                            </router-link>
                                            <h5
                                                class="main-heading d-inline-block"
                                            >
                                                Edit Profile
                                            </h5>
                                        </div>
                                    </div>
                                    <div class="white-div mt-3 py-5 pl-lg-5">
                                        <ValidationObserver
                                            v-slot="{ handleSubmit }"
                                        >
                                            <form
                                                ref="ProfileForm"
                                                @submit.prevent="
                                                    handleSubmit(update)
                                                "
                                            >
                                                <div class="row">
                                                    <div class="col-lg-3">
                                                        <div
                                                            class="white-div px-0 pt-0 pb-lg-5"
                                                        >
                                                            <ul class="pro-nav">
                                                                <li
                                                                    class="userrr"
                                                                >
                                                                    User
                                                                    Information
                                                                    <i
                                                                        class="fas fa-angle-down"
                                                                    ></i>
                                                                </li>
                                                                <li
                                                                    class="active-userrr"
                                                                >
                                                                    <router-link
                                                                        :to="{
                                                                            name: 'admin.account.index',
                                                                        }"
                                                                        >Account</router-link
                                                                    >
                                                                    <i
                                                                        class="fas fa-angle-right"
                                                                    ></i>
                                                                </li>
                                                                <li
                                                                    class="new-pwdd"
                                                                >
                                                                    <router-link
                                                                        :to="{
                                                                            name: 'admin.account.password',
                                                                        }"
                                                                        >New
                                                                        Password</router-link
                                                                    >
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-9">
                                                        <h6 class="account-h6">
                                                            Account
                                                        </h6>
                                                        <div class="row">
                                                            <div
                                                                class="col-lg-3 mt-1"
                                                            >
                                                                <label
                                                                    for=""
                                                                    class="all-label semi-bold"
                                                                    >First
                                                                    Name:</label
                                                                >
                                                            </div>
                                                            <div
                                                                class="col-lg-4 mt-1"
                                                            >
                                                                <ValidationProvider
                                                                    name="first name"
                                                                    rules="required"
                                                                    v-slot="{
                                                                        errors,
                                                                    }"
                                                                >
                                                                    <input
                                                                        type="text"
                                                                        v-model="
                                                                            editProfile.first_name
                                                                        "
                                                                        name="first_name"
                                                                        class="all-input w-100"
                                                                    />
                                                                    <span
                                                                        class="text-danger"
                                                                        >{{
                                                                            errors[0]
                                                                        }}</span
                                                                    >
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div
                                                                class="col-lg-3 mt-1"
                                                            >
                                                                <label
                                                                    for=""
                                                                    class="all-label semi-bold"
                                                                    >Last
                                                                    Name:</label
                                                                >
                                                            </div>
                                                            <div
                                                                class="col-lg-4 mt-1"
                                                            >
                                                                <ValidationProvider
                                                                    name="last name"
                                                                    rules="required"
                                                                    v-slot="{
                                                                        errors,
                                                                    }"
                                                                >
                                                                    <input
                                                                        type="text"
                                                                        v-model="
                                                                            editProfile.last_name
                                                                        "
                                                                        name="last_name"
                                                                        class="all-input w-100"
                                                                    />
                                                                    <span
                                                                        class="text-danger"
                                                                        >{{
                                                                            errors[0]
                                                                        }}</span
                                                                    >
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div
                                                                class="col-lg-3 mt-1"
                                                            >
                                                                <label
                                                                    for=""
                                                                    class="all-label semi-bold"
                                                                    >Email:</label
                                                                >
                                                            </div>
                                                            <div
                                                                class="col-lg-4 mt-1"
                                                            >
                                                                <p
                                                                    class="label-value"
                                                                >
                                                                    {{
                                                                        editProfile.email
                                                                    }}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="mt-2">
                                                            <button
                                                                type="submit"
                                                                class="site-btn d-inline-block"
                                                            >
                                                                Update
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </ValidationObserver>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
    data() {
        return {
            first_name: "",
            last_name: "",
            editProfile: {},
        };
    },
    async created() {
        await this.getProfile();
    },
    computed: {
        ...mapState("admin", ["admin"]),
    },
    methods: {
        ...mapActions("admin", ["store", "get"]),
        async update() {
            const config = {
                headers: {
                    "content-type": "multipart/form-data",
                },
            };
            let fd = new FormData(this.$refs.ProfileForm);
            this.buildFormData(fd, this.form);
            let params = {
                route: "api/auth/profile",
                method: "POST",
                data: fd,
            };
            try {
                let { data } = await this.store(params);

                if (data.data) {
                    this.$snotify.success(data.message);
                    Vue.prototype.$user = data.user;
                    this.$router.push({ name: "admin.account.index" });
                } else {
                    data.data.message.forEach((errMsg) => {
                        this.$snotify.error(errMsg, "Error");
                    });
                }
            } catch (e) {
                if (e.response) {
                    this.$refs.adminObserver.setErrors(e.response.data.errors);
                }
                // statements
                console.log(e);
            }
        },
        async getProfile() {
            this.editProfile = (
                await axios.get("/api/auth/getProfile")
            ).data.data;
            localStorage.setItem("image", this.editProfile.image);
            this.saveBaseFiles = this.editProfile.image;
            console.log(this.editProfile);
        },
    },
};
</script>
