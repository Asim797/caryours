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
                                                Add User
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
                                                        ref="UserForm"
                                                        @submit.prevent="
                                                            handleSubmit(create)
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
                                                                name="First name"
                                                                rules="required"
                                                                v-slot="{
                                                                    errors,
                                                                }"
                                                            >
                                                                <input
                                                                    type="text"
                                                                    name="first_name"
                                                                    v-model="
                                                                        first_name
                                                                    "
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
                                                                    name="last_name"
                                                                    v-model="
                                                                        last_name
                                                                    "
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
                                                                    name="email"
                                                                    v-model="
                                                                        email
                                                                    "
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
                                                                    name="phone_number"
                                                                    v-model="
                                                                        phone_number
                                                                    "
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
                                                                >Postal/Zip
                                                                code<span
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
                                                                    name="zip_code"
                                                                    v-model="
                                                                        zip_code
                                                                    "
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
                                                                <ValidationProvider
                                                                    name="password"
                                                                    rules="required"
                                                                    v-slot="{
                                                                        errors,
                                                                    }"
                                                                >
                                                                    <input
                                                                        :type="
                                                                            passwordEye
                                                                        "
                                                                        name="password"
                                                                        v-model="
                                                                            password
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
                                                                    <span
                                                                        class="text-danger"
                                                                        >{{
                                                                            errors[0]
                                                                        }}</span
                                                                    >
                                                                </ValidationProvider>
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
                                                                <ValidationProvider
                                                                    name="password confirmation"
                                                                    rules="required"
                                                                    v-slot="{
                                                                        errors,
                                                                    }"
                                                                >
                                                                    <input
                                                                        :type="
                                                                            passwordConfirmEye
                                                                        "
                                                                        name="password_confirmation"
                                                                        v-model="
                                                                            password_confirmation
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
                                                                    <span
                                                                        class="text-danger"
                                                                        >{{
                                                                            errors[0]
                                                                        }}</span
                                                                    >
                                                                </ValidationProvider>
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
                                                                v-model="status"
                                                                class="site-input dash-input px-1 mt-1"
                                                            >
                                                                <option
                                                                    value="1"
                                                                    selected
                                                                >
                                                                    Active
                                                                </option>
                                                                <option
                                                                    value="0"
                                                                >
                                                                    Inactive
                                                                </option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            <button
                                                                class="site-btn mt-2"
                                                                type="submit"
                                                            >
                                                                Add
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
import { mapActions, mapState } from "vuex";

export default {
    computed: {
        ...mapState("admin", ["users", "search", "entries"]),
    },
    data() {
        return {
            first_name: "",
            last_name: "",
            phone_number: "",
            email: "",
            zip_code: "",
            password: "",
            password_confirmation: "",
            passwordClass: "far fa-eye-slash confirm-icon right-icon",
            passwordEye: "password",
            passwordConfirmClass: "far fa-eye-slash confirm-icon right-icon",
            passwordConfirmEye: "password",
            role: "user",
        };
    },
    methods: {
        ...mapActions("admin", ["store", "get"]),
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
        async create() {
            let fd = new FormData(this.$refs.UserForm);
            //fd.append('_method', 'PUT');
            this.buildFormData(fd, this.form);
            let params = {
                route: "api/auth/user/register",
                method: "POST",
                data: fd,
            };
            try {
                let result = await this.store(params);

                if (result.data.data) {
                    this.$snotify.success(
                        "User created successfully",
                        "Success"
                    );
                    this.$router.push({ name: "admin.users.index" });
                } else {
                    result.data.message.forEach((errMsg) => {
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
    },
};
</script>
