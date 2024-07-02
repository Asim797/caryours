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
                                            <h5
                                                class="main-heading d-inline-block"
                                            >
                                                Profile
                                            </h5>
                                        </div>
                                    </div>
                                    <div class="white-div mt-3 py-5 pl-lg-5">
                                        <div class="row">
                                            <div class="col-lg-3">
                                                <div
                                                    class="white-div px-0 pt-0 pb-lg-5"
                                                >
                                                    <ul class="pro-nav">
                                                        <li class="userrr">
                                                            User Information
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
                                                        <li class="new-pwdd">
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
                                                    <div class="col-lg-3 mt-1">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >First Name:</label
                                                        >
                                                    </div>
                                                    <div class="col-lg-4 mt-1">
                                                        <p class="label-value">
                                                            {{
                                                                editProfile.first_name
                                                            }}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-3 mt-1">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Last Name:</label
                                                        >
                                                    </div>
                                                    <div class="col-lg-4 mt-1">
                                                        <p class="label-value">
                                                            {{
                                                                editProfile.last_name
                                                            }}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-3 mt-1">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Email:</label
                                                        >
                                                    </div>
                                                    <div class="col-lg-4 mt-1">
                                                        <p class="label-value">
                                                            {{
                                                                editProfile.email
                                                            }}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="mt-2">
                                                    <router-link
                                                        :to="{
                                                            name: 'admin.account.edit',
                                                            params: {
                                                                id: editProfile.id,
                                                            },
                                                        }"
                                                        class="site-btn d-inline-block"
                                                        >Edit</router-link
                                                    >
                                                </div>
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
const PasswordModal = () => import("./PasswordModal.vue");
import { mapActions, mapState } from "vuex";

export default {
    data() {
        return {
            editProfile: {},
            saveBaseFiles: [],
        };
    },
    computed: {
        ...mapState("admin", ["users", "search", "entries"]),
    },
    components: {
        PasswordModal,
    },
    async created() {
        await this.getProfile();
    },
    methods: {
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
