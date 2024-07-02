<template>
    <div>
        <div
            class="modal fade changePassword"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content" style="text-align: left">
                    <div class="text-end">
                        <button
                            type="button"
                            class="transparent-btn close-btn"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-body pt-0 pb-5">
                        <h2>
                            Change <br />
                            Password
                        </h2>
                        <ValidationObserver
                            ref="observer"
                            v-slot="{ handleSubmit }"
                        >
                            <form
                                ref="PasswordForm"
                                @submit.prevent="handleSubmit(update)"
                            >
                                <ValidationProvider
                                    tag="div"
                                    name="Current Password"
                                    rules="required"
                                    vid="current_password"
                                    v-slot="{ errors }"
                                >
                                    <label for="" class="p-md mt-3 semi-bold"
                                        >Existing Password</label
                                    >
                                    <div class="position-relative mt-2">
                                        <input
                                            :type="passwordEye"
                                            v-model="form.current_password"
                                            placeholder="Enter Existing Password"
                                            class="site-input current-input"
                                        />
                                        <i
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
                                <ValidationProvider
                                    tag="div"
                                    name="New Password"
                                    rules="required|confirmed:confirmation"
                                    v-slot="{ errors }"
                                >
                                    <label for="" class="p-md mt-3 semi-bold"
                                        >New Password</label
                                    >
                                    <div class="position-relative mt-2">
                                        <input
                                            v-model="form.password"
                                            :type="passwordNewEye"
                                            placeholder="Enter New Password"
                                            class="site-input enter-input"
                                        />
                                        <i
                                            :class="passwordNewClass"
                                            @click="
                                                togglePasswordEye(
                                                    'passwordNewEye',
                                                    'passwordNewClass'
                                                )
                                            "
                                        ></i>
                                        <!-- <i class="fa fa-eye" aria-hidden="true" ></i> -->
                                    </div>

                                    <span class="text-danger">{{
                                        errors[0]
                                    }}</span>
                                </ValidationProvider>

                                <ValidationProvider
                                    tag="div"
                                    name="confirmation"
                                    rules="required"
                                    vid="confirmation"
                                    v-slot="{ errors }"
                                >
                                    <label for="" class="p-md mt-3 semi-bold"
                                        >Confirm Password</label
                                    >
                                    <div class="position-relative mt-2">
                                        <input
                                            v-model="form.password_confirmation"
                                            :type="passwordConfirmEye"
                                            placeholder="Confirm Password"
                                            class="site-input confirm-input"
                                        />
                                        <i
                                            @click="
                                                togglePasswordEye(
                                                    'passwordConfirmEye',
                                                    'passwordConfirmClass'
                                                )
                                            "
                                            :class="passwordConfirmClass"
                                        ></i>
                                    </div>

                                    <span class="text-danger">{{
                                        errors[0]
                                    }}</span>
                                </ValidationProvider>

                                <button
                                    class="site-btn mt-4 px-5"
                                    type="button"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    Submit
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
                                                />
                                            </g>
                                        </svg>
                                    </i>
                                </button>
                            </form>
                        </ValidationObserver>
                    </div>
                </div>
            </div>
        </div>
        <!-- Login -->
        <!-- <section class="login">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 mx-auto">
                <h2 class="main-heading mb-lg-4 mb-2">Update Password</h2>
                <div class="card-div">
                    <ValidationObserver ref="observer" v-slot="{handleSubmit}">
                        <form ref="PasswordForm" @submit.prevent="handleSubmit(update)">
                            <div class="form-group position-relative mt-4">
                                <label for="" class="all-label">Current Password*</label>
                                <ValidationProvider tag="div" name="Current Password" rules="required"
                                vid="current_password" v-slot="{errors}">
                                <input :type="passwordEye" v-model="form.current_password"
                                class="w-100 all-input enter-input-3 pwd-inputtt"
                                placeholder="Enter Current Password">
                                <button type="button"
                                @click="togglePasswordEye('current_password')"
                                class="view-btn position-absolute"><i class="fa fa-eye" aria-hidden="true"></i></button>
                                <span class="text-danger">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group position-relative mt-4">
                            <label for="" class="all-label">NEW PASSWORD*</label>
                            <ValidationProvider tag="div" name="New Password"
                            rules="required|confirmed:confirmation" v-slot="{errors}">
                            <input v-model="form.password" :type="passwordNewEye"
                            class="w-100 all-input enter-input pwd-inputtt" placeholder="Enter New Password">
                            <button type="button"
                            @click="togglePasswordEye('password')"
                            class="view-btn position-absolute"><i class="fa fa-eye" aria-hidden="true"></i></button>
                            <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="form-group position-relative mt-4">
                        <label for="" class="all-label">CONFIRM PASSWORD*</label>
                        <ValidationProvider tag="div" name="confirmation" rules="required"
                        vid="confirmation" v-slot="{errors}">
                        <input v-model="form.password_confirmation"
                        :type="passwordConfirmEye" class="w-100 all-input enter-input-2 pwd-inputtt"
                        placeholder="Enter Confirm Password">
                        <button type="button"
                        @click="togglePasswordEye('passwordConfirmEye','passwordConfirmClass')"
                        class="view-btn position-absolute">
                        <i class="fa fa-eye" aria-hidden="true"></i></button>
                        <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="text-center mt-lg-5 mt-4">
                    <button type="submit" class="general-btn">Update</button>
                </div>
            </form>
        </ValidationObserver>
    </div>
</div>
</div>
</div>
</section> -->
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
    data() {
        return {
            passwordClass: "far right-icon current-icon fa-eye-slash",
            passwordNewClass: "far right-icon current-icon fa-eye-slash",
            passwordConfirmClass: "far right-icon current-icon fa-eye-slash",
            passwordEye: "password",
            passwordNewEye: "password",
            passwordConfirmEye: "password",
            form: {},
            current_password: "",
            password: "",
            password_confirmation: "",
        };
    },
    methods: {
        ...mapActions("admin", ["store", "get"]),
        togglePasswordEye(passwordVar, classVar) {
            this[passwordVar] =
                this[passwordVar] == "password" ? "text" : "password";
            this[classVar] =
                this[passwordVar] == "password"
                    ? "far right-icon current-icon fa-eye-slash"
                    : "far right-icon current-icon fa-eye";
        },
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
                    this.$router.push({ name: "web.home" });
                } else {
                    this.$snotify.error("something went wrong");
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
