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
                                        <div
                                            class="col-12 d-flex align-items-center"
                                        >
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
                                                Profile
                                            </h5>
                                        </div>
                                    </div>
                                    <ValidationObserver
                                        ref="observer"
                                        v-slot="{ handleSubmit }"
                                    >
                                        <form
                                            ref="PasswordForm"
                                            @submit.prevent="
                                                handleSubmit(update)
                                            "
                                        >
                                            <div
                                                class="white-div mt-3 py-5 pl-lg-5"
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
                                                                    class="new-pwdd"
                                                                >
                                                                    <router-link
                                                                        :to="{
                                                                            name: 'admin.account.index',
                                                                        }"
                                                                        >Account</router-link
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="active-userrr"
                                                                >
                                                                    <router-link
                                                                        :to="{
                                                                            name: 'admin.account.password',
                                                                        }"
                                                                        >New
                                                                        Password</router-link
                                                                    >
                                                                    <i
                                                                        class="fas fa-angle-right"
                                                                    ></i>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-9">
                                                        <h6 class="account-h6">
                                                            Change Password
                                                        </h6>
                                                        <div class="row">
                                                            <div
                                                                class="col-lg-3 mt-1"
                                                            >
                                                                <label
                                                                    for=""
                                                                    class="all-label semi-bold"
                                                                    >Current
                                                                    Password:</label
                                                                >
                                                            </div>
                                                            <div
                                                                class="col-lg-4 mt-1"
                                                            >
                                                                <div
                                                                    class="form-field site-field mb-0"
                                                                >
                                                                    <ValidationProvider
                                                                        v-slot="{
                                                                            errors,
                                                                        }"
                                                                        tag="div"
                                                                        name="current password"
                                                                        rules="required"
                                                                        vid="current_password"
                                                                    >
                                                                        <input
                                                                            type="password"
                                                                            ref="current_password"
                                                                            v-model="
                                                                                form.current_password
                                                                            "
                                                                            class="dash-input p-1 pr-3 right-icon confirm-input"
                                                                        />
                                                                        <button
                                                                            type="button"
                                                                            @click="
                                                                                togglePasswordType(
                                                                                    'current_password'
                                                                                )
                                                                            "
                                                                            class="position-absolute pwdButton"
                                                                        >
                                                                            <i
                                                                                class="fa fa-eye"
                                                                            ></i>
                                                                        </button>
                                                                        <div
                                                                            class="text-danger"
                                                                        >
                                                                            {{
                                                                                errors[0]
                                                                            }}
                                                                        </div>
                                                                    </ValidationProvider>
                                                                    <!-- <i class="far fa-eye-slash confirm-icon right-icon" aria-hidden="true"></i> -->
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div
                                                                class="col-lg-3 mt-1"
                                                            >
                                                                <label
                                                                    for=""
                                                                    class="all-label semi-bold"
                                                                    >New
                                                                    Password:</label
                                                                >
                                                            </div>
                                                            <div
                                                                class="col-lg-4 mt-1"
                                                            >
                                                                <div
                                                                    class="form-field site-field mb-0"
                                                                >
                                                                    <ValidationProvider
                                                                        v-slot="{
                                                                            errors,
                                                                        }"
                                                                        tag="div"
                                                                        name="password"
                                                                        rules="required"
                                                                        vid="password"
                                                                    >
                                                                        <input
                                                                            type="password"
                                                                            ref="password"
                                                                            v-model="
                                                                                form.password
                                                                            "
                                                                            class="dash-input p-1 pr-3 right-icon enter-input"
                                                                        />
                                                                        <button
                                                                            type="button"
                                                                            @click="
                                                                                togglePasswordType(
                                                                                    'password'
                                                                                )
                                                                            "
                                                                            class="position-absolute pwdButton"
                                                                        >
                                                                            <i
                                                                                class="fa fa-eye"
                                                                            ></i>
                                                                        </button>
                                                                        <div
                                                                            class="text-danger"
                                                                        >
                                                                            {{
                                                                                errors[0]
                                                                            }}
                                                                        </div>
                                                                    </ValidationProvider>
                                                                    <!-- <i class="far fa-eye-slash enter-icon right-icon" aria-hidden="true"></i> -->
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div
                                                                class="col-lg-3 mt-1"
                                                            >
                                                                <label
                                                                    for=""
                                                                    class="all-label semi-bold"
                                                                    >Confirm
                                                                    Password:</label
                                                                >
                                                            </div>
                                                            <div
                                                                class="col-lg-4 mt-1"
                                                            >
                                                                <div
                                                                    class="form-field site-field mb-0"
                                                                >
                                                                    <ValidationProvider
                                                                        v-slot="{
                                                                            errors,
                                                                        }"
                                                                        tag="div"
                                                                        name="confirm password"
                                                                        rules="required"
                                                                        vid="password_confirmation"
                                                                    >
                                                                        <input
                                                                            type="password"
                                                                            ref="password_confirmation"
                                                                            v-model="
                                                                                form.password_confirmation
                                                                            "
                                                                            class="dash-input p-1 pr-3 right-icon enter-input-2"
                                                                        />
                                                                        <button
                                                                            type="button"
                                                                            @click="
                                                                                togglePasswordType(
                                                                                    'password_confirmation'
                                                                                )
                                                                            "
                                                                            class="position-absolute pwdButton"
                                                                        >
                                                                            <i
                                                                                class="fa fa-eye"
                                                                            ></i>
                                                                        </button>
                                                                        <div
                                                                            class="text-danger"
                                                                        >
                                                                            {{
                                                                                errors[0]
                                                                            }}
                                                                        </div>
                                                                    </ValidationProvider>
                                                                    <!-- <i class="far fa-eye-slash enter-icon-2 right-icon" aria-hidden="true"></i> -->
                                                                </div>
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
                                            </div>
                                        </form>
                                    </ValidationObserver>
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
            form: {},
            current_password: "",
            password: "",
            password_confirmation: "",
        };
    },
    methods: {
        ...mapActions("admin", ["store", "get"]),
        async update() {
            let fd = new FormData(this.$refs.PasswordForm);
            //fd.append('_method', 'PUT');
            this.buildFormData(fd, this.form);
            let params = {
                route: "api/auth/changePassword",
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
                    // data.message.forEach(errMsg => {
                    this.$snotify.error(data.message, "Error");
                    // });
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
