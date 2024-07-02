<template>
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row">
                    <div class="col-12">
                        <div class="card mt-3 mx-2">
                            <div class="card-content collapse show">
                                <div class="card-dashboard">
                                    <div class="row">
                                        <div class="col-12">
                                            <h2>
                                                <router-link
                                                    :to="{
                                                        name: 'admin.users.index',
                                                    }"
                                                    ><i
                                                        class="fas black-text fa-angle-left"
                                                    ></i
                                                ></router-link>
                                                Edit User
                                            </h2>
                                        </div>
                                    </div>
                                    <div
                                        class="white-div mt-1 px-md-2 px-1 py-2"
                                    >
                                        <div class="row">
                                            <div
                                                class="col-xl-6 col-lg-9 col-12"
                                            >
                                                <ValidationObserver
                                                    v-slot="{ handleSubmit }"
                                                >
                                                    <form
                                                        ref="UserEditForm"
                                                        @submit.prevent="
                                                            handleSubmit(update)
                                                        "
                                                    >
                                                        <div>
                                                            <label
                                                                for=""
                                                                class="dash-label mb-0"
                                                                >First Name<span
                                                                    class="red-text"
                                                                    >*</span
                                                                >:</label
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
                                                                        user.first_name
                                                                    "
                                                                    name="first_name"
                                                                    placeholder="Enter First Name"
                                                                    class="px-1 mt-1 site-input dash-input"
                                                                />
                                                                <span
                                                                    class="text-danger"
                                                                    >{{
                                                                        errors[0]
                                                                    }}</span
                                                                >
                                                            </ValidationProvider>
                                                        </div>
                                                        <div>
                                                            <label
                                                                for=""
                                                                class="dash-label mt-2 mb-0"
                                                                >Last Name<span
                                                                    class="red-text"
                                                                    >*</span
                                                                >:</label
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
                                                                        user.last_name
                                                                    "
                                                                    name="last_name"
                                                                    placeholder="Enter Last Name"
                                                                    class="px-1 mt-1 site-input dash-input"
                                                                />
                                                                <span
                                                                    class="text-danger"
                                                                    >{{
                                                                        errors[0]
                                                                    }}</span
                                                                >
                                                            </ValidationProvider>
                                                        </div>
                                                        <div>
                                                            <label
                                                                for=""
                                                                class="dash-label mt-2 mb-0"
                                                                >Email<span
                                                                    class="red-text"
                                                                    >*</span
                                                                >:</label
                                                            >
                                                            <ValidationProvider
                                                                name="email"
                                                                rules="required"
                                                                v-slot="{
                                                                    errors,
                                                                }"
                                                            >
                                                                <input
                                                                    type="email"
                                                                    v-model="
                                                                        user.email
                                                                    "
                                                                    name="email"
                                                                    placeholder="Enter Email"
                                                                    class="px-1 mt-1 site-input dash-input"
                                                                />
                                                                <span
                                                                    class="text-danger"
                                                                    >{{
                                                                        errors[0]
                                                                    }}</span
                                                                >
                                                            </ValidationProvider>
                                                        </div>
                                                        <div>
                                                            <label
                                                                for=""
                                                                class="dash-label mt-2 mb-0"
                                                                >Contact
                                                                Number<span
                                                                    class="red-text"
                                                                    >*</span
                                                                >:</label
                                                            >
                                                            <ValidationProvider
                                                                name="phone number"
                                                                rules="required"
                                                                v-slot="{
                                                                    errors,
                                                                }"
                                                            >
                                                                <input
                                                                    type="text"
                                                                    v-model="
                                                                        user.phone_number
                                                                    "
                                                                    name="phone_number"
                                                                    placeholder="Enter Contact Number"
                                                                    class="px-1 mt-1 site-input dash-input"
                                                                />
                                                                <span
                                                                    class="text-danger"
                                                                    >{{
                                                                        errors[0]
                                                                    }}</span
                                                                >
                                                            </ValidationProvider>
                                                        </div>
                                                        <div>
                                                            <label
                                                                for=""
                                                                class="dash-label mt-2 mb-0"
                                                                >Zip Code<span
                                                                    class="red-text"
                                                                    >*</span
                                                                >:</label
                                                            >
                                                            <ValidationProvider
                                                                name="zip code"
                                                                rules="required"
                                                                v-slot="{
                                                                    errors,
                                                                }"
                                                            >
                                                                <input
                                                                    type="text"
                                                                    v-model="
                                                                        user.zip_code
                                                                    "
                                                                    name="zip_code"
                                                                    placeholder="Enter Zip Code"
                                                                    class="px-1 mt-1 site-input dash-input"
                                                                />
                                                                <span
                                                                    class="text-danger"
                                                                    >{{
                                                                        errors[0]
                                                                    }}</span
                                                                >
                                                            </ValidationProvider>
                                                        </div>
                                                        <div>
                                                            <label
                                                                for=""
                                                                class="dash-label mt-2 mb-0"
                                                                >Enter
                                                                Password<span
                                                                    class="red-text"
                                                                    >*</span
                                                                >:</label
                                                            >
                                                            <div
                                                                class="form-field mb-0"
                                                            >
                                                                <!-- <ValidationProvider v-slot="{errors}"
                                                            name="password" rules="required"> -->
                                                                <input
                                                                    :type="
                                                                        passwordEye
                                                                    "
                                                                    name="password"
                                                                    v-model="
                                                                        user.password
                                                                    "
                                                                    class="pl-1 site-input right-icon enter-input"
                                                                    placeholder="Enter Password"
                                                                />
                                                                <i
                                                                    @click="
                                                                        togglePasswordEye(
                                                                            'passwordEye',
                                                                            'passwordClass'
                                                                        )
                                                                    "
                                                                    :class="
                                                                        passwordClass
                                                                    "
                                                                    aria-hidden="true"
                                                                ></i>
                                                                <!-- <div class="text-danger">{{ errors[0] }}</div>
                                                        </ValidationProvider> -->
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label
                                                                for=""
                                                                class="dash-label mt-2 mb-0"
                                                                >Confirm
                                                                Password<span
                                                                    class="red-text"
                                                                    >*</span
                                                                >:</label
                                                            >
                                                            <div
                                                                class="form-field mb-0"
                                                            >
                                                                <!-- <ValidationProvider v-slot="{errors}"
                                                            name="password confirmation" rules="required"> -->
                                                                <input
                                                                    :type="
                                                                        passwordConfirmEye
                                                                    "
                                                                    name="password_confirmation"
                                                                    v-model="
                                                                        user.password_confirmation
                                                                    "
                                                                    class="pl-1 site-input right-icon confirm-input"
                                                                    placeholder="Confirm Password"
                                                                />
                                                                <i
                                                                    @click="
                                                                        togglePasswordConfirmEye(
                                                                            'passwordConfirmEye',
                                                                            'passwordConfirmClass'
                                                                        )
                                                                    "
                                                                    :class="
                                                                        passwordConfirmClass
                                                                    "
                                                                    aria-hidden="true"
                                                                ></i>
                                                                <!-- <div class="text-danger">{{ errors[0] }}</div>
                                                        </ValidationProvider> -->
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label
                                                                for=""
                                                                class="dash-label mt-2 mb-0"
                                                                >Status<span
                                                                    class="red-text"
                                                                    >*</span
                                                                >:</label
                                                            >
                                                            <select
                                                                name="status"
                                                                v-model="
                                                                    user.selectedStatus
                                                                "
                                                                class="site-input dash-input px-1 mt-1"
                                                            >
                                                                <option
                                                                    :value="0"
                                                                    :selected="
                                                                        0 ==
                                                                        user.selectedStatus
                                                                    "
                                                                >
                                                                    Inactive
                                                                </option>
                                                                <option
                                                                    :value="1"
                                                                    :selected="
                                                                        1 ==
                                                                        user.selectedStatus
                                                                    "
                                                                >
                                                                    Active
                                                                </option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            <button
                                                                class="site-btn mt-2"
                                                                type="submit"
                                                            >
                                                                Update
                                                            </button>
                                                        </div>
                                                    </form>
                                                </ValidationObserver>
                                            </div>
                                        </div>
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
import { mapState, mapActions } from "vuex";

export default {
    computed: {
        ...mapState("admin", ["blog", "search", "entries"]),
    },
    data() {
        return {
            user: {
                first_name: "",
                last_name: "",
                email: "",
                phone_number: "",
                zip_code: "",
                password: "",
                password_confirmation: "",
                selectedStatus: "",
            },
            passwordClass: "far fa-eye-slash confirm-icon right-icon",
            passwordEye: "password",
            passwordConfirmClass: "far fa-eye-slash confirm-icon right-icon",
            passwordConfirmEye: "password",
            date: "",
        };
    },
    created() {
        this.fetch();
    },
    watch: {
        search: function (val, oldVal) {
            this.fetch();
        },
        entries: function (val, oldVal) {
            this.fetch();
        },
    },
    methods: {
        ...mapActions("admin", ["getAll"]),
        togglePasswordEye(passwordVar, classVar) {
            this[passwordVar] =
                this[passwordVar] == "password" ? "text" : "password";
            this[classVar] =
                this[passwordVar] == "password"
                    ? "far fa-eye-slash confirm-icon right-icon"
                    : "far fa-eye confirm-icon right-icon";
        },
        togglePasswordConfirmEye(passwordVar, classVar) {
            this[passwordVar] =
                this[passwordVar] == "password" ? "text" : "password";
            this[classVar] =
                this[passwordVar] == "password"
                    ? "far fa-eye-slash confirm-icon right-icon"
                    : "far fa-eye confirm-icon right-icon";
        },
        async fetch() {
            let { type, status } = this.$route.params;
            let params = {
                route: `api/auth/user/show/${this.$route.params.id}`,
                mutation: "SET_USER",
                variable: "data",
            };
            let { data } = await this.getAll(params);
            this.user.first_name = data.data.first_name;
            this.user.last_name = data.data.last_name;
            this.user.email = data.data.email;
            this.user.phone_number = data.data.phone_number;
            this.user.zip_code = data.data.zip_code;
            this.user.selectedStatus = data.data.status;

            this.addRouteQuery({});
        },

        async update() {
            try {
                let data = new FormData(this.$refs.UserEditForm);

                let result = await axios.post(
                    `api/auth/user/update/${this.$route.params.id}`,
                    data
                );
                if (result.data.data) {
                    this.$snotify.success(
                        "User updated successfully",
                        "Success"
                    );
                    this.$router.push({ name: "admin.users.index" });
                } else {
                    result.data.message.forEach((errMsg) => {
                        this.$snotify.error(errMsg, "Error");
                    });
                }
            } catch (e) {
                console.log(e);
            }
        },
    },
};
</script>
