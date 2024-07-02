<template>
    <div>
        <section class="login">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-center">My Profile</h1>
                    </div>
                    <div class="col-lg-3 col-md-4 my-3">
                        <img
                            v-if="
                                user.image == `${base_url}/assets/upload/user`
                            "
                            :src="`${base_url}/assets/web/images/user-icon.png`"
                            alt=""
                            class="img-fluid profile-pic"
                        />
                        <img
                            :src="user.image"
                            alt=""
                            class="img-fluid profile-pic"
                            v-else
                        />
                    </div>
                    <div class="col-md-8 col-lg-9">
                        <div class="row">
                            <div class="col-sm-6 my-3">
                                <label class="p-md bold">First Name</label>
                                <p class="profile-lbl-value">
                                    {{ user.first_name }}
                                </p>
                            </div>

                            <div class="col-sm-6 my-3">
                                <label class="p-md bold">Last Name</label>
                                <p class="profile-lbl-value">
                                    {{ user.last_name }}
                                </p>
                            </div>
                            <div class="col-sm-6 my-3">
                                <label class="p-md bold">Phone Number</label>
                                <p class="profile-lbl-value">
                                    {{ user.phone_number }}
                                </p>
                            </div>
                            <div class="col-sm-6 my-3">
                                <label class="p-md bold">Email Address</label>
                                <p class="profile-lbl-value">
                                    {{ user.email }}
                                </p>
                            </div>
                            <div class="col-sm-6 my-3">
                                <label class="p-md bold">Postal/Zipcode</label>
                                <p class="profile-lbl-value">
                                    {{ user.zip_code }}
                                </p>
                            </div>
                        </div>
                        <div class="d-sm-flex align-items-center mt-lg-3">
                            <div class="text-center mt-lg-5 mt-4 mr-2">
                                <router-link
                                    :to="{ name: 'web.user.editProfile' }"
                                    class="site-btn mt-lg-4 mt-3 px-5"
                                >
                                    Edit Profile
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
                                </router-link>
                            </div>
                            <div class="text-center mt-lg-5 ml-3">
                                <button
                                    data-bs-target=".changePassword"
                                    data-bs-toggle="modal"
                                    class="site-btn white-btn mt-lg-4 me-sm-2 mt-3 px-4"
                                >
                                    Change Password
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
                                                    fill="#0586F4"
                                                />
                                            </g>
                                        </svg>
                                    </i>
                                </button>
                                <change-password-modal></change-password-modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <site-footer></site-footer>
    </div>
</template>

<script>
const ChangePasswordModal = () => import("./ChangePassword.vue");
const SiteFooter = () =>
    import("@views/Pages/web/Components/footer/site-footer.vue");

import { mapState, mapActions } from "vuex";

export default {
    data() {
        return {
            date: "",
            stores: {},
            categories: {},
            category_id: undefined,
            search: "",
        };
    },
    components: {
        ChangePasswordModal,
        SiteFooter
    },
    computed: {
        ...mapState("store", ["user"]),
    },
    created() {
        this.fetch();
        //this.fetchCategory();
    },

    methods: {
        ...mapActions("store", ["getAll"]),
        async fetch() {
            let { type, status } = this.$route.params;
            let params = {
                route: `api/auth/getProfile`,
                mutation: "set_user",
                variable: "data",
            };
            let { data } = await this.getAll(params);
            this.stores = data.data;
        },
    },
};
</script>
