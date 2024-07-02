<template>
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row">
                    <div class="col-12">
                        <div class="card mt-sm-4 mx-2">
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
                                                User Details
                                            </h2>
                                        </div>
                                    </div>
                                    <div class="white-div mt-1 p-md-2 p-1">
                                        <div class="row">
                                            <div class="col-12 text-right">
                                                <p class="mb-0">
                                                    Status:
                                                    <span class="green-text">{{
                                                        user.status
                                                            ? "Active"
                                                            : "Inactive"
                                                    }}</span>
                                                </p>
                                            </div>
                                            <div
                                                class="col-xl-8 col-lg-10 media d-md-flex d-block"
                                            >
                                                <img
                                                    :src="`${base_url}/assets/admin/images/driver-profile.png`"
                                                    alt=""
                                                    class="user-img mr-2"
                                                />
                                                <div class="media-body ml-sm-1">
                                                    <div class="row mt-1">
                                                        <div class="col-6 mt-1">
                                                            <label
                                                                for=""
                                                                class="all-label semi-bold"
                                                                >First Name
                                                                :</label
                                                            >
                                                        </div>
                                                        <div class="col-6 mt-1">
                                                            <input
                                                                type="text"
                                                                disabled
                                                                class="label-value"
                                                                :value="
                                                                    user.first_name
                                                                "
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-6 mt-1">
                                                            <label
                                                                for=""
                                                                class="all-label semi-bold"
                                                                >Last Name
                                                                :</label
                                                            >
                                                        </div>
                                                        <div class="col-6 mt-1">
                                                            <input
                                                                type="text"
                                                                disabled
                                                                class="label-value"
                                                                :value="
                                                                    user.last_name
                                                                "
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-6 mt-1">
                                                            <label
                                                                for=""
                                                                class="all-label semi-bold"
                                                                >Email :</label
                                                            >
                                                        </div>
                                                        <div class="col-6 mt-1">
                                                            <input
                                                                type="text"
                                                                disabled
                                                                class="label-value"
                                                                :value="
                                                                    user.email
                                                                "
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-6 mt-1">
                                                            <label
                                                                for=""
                                                                class="all-label semi-bold"
                                                                >Phone :</label
                                                            >
                                                        </div>
                                                        <div class="col-6 mt-1">
                                                            <input
                                                                type="text"
                                                                disabled
                                                                class="label-value"
                                                                :value="
                                                                    user.phone_number
                                                                "
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-6 mt-1">
                                                            <label
                                                                for=""
                                                                class="all-label semi-bold"
                                                                >Zip Code
                                                                :</label
                                                            >
                                                        </div>
                                                        <div class="col-6 mt-1">
                                                            <input
                                                                type="text"
                                                                disabled
                                                                class="label-value"
                                                                :value="
                                                                    user.zip_code
                                                                "
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-6 mt-1">
                                                            <label
                                                                for=""
                                                                class="all-label semi-bold"
                                                                >Registration
                                                                Date :</label
                                                            >
                                                        </div>
                                                        <div class="col-6 mt-1">
                                                            <input
                                                                type="text"
                                                                disabled
                                                                class="label-value"
                                                                :value="
                                                                    formatDate(
                                                                        user.created_at
                                                                    )
                                                                "
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <router-link
                                            :to="{
                                                name: 'admin.users.edit',
                                                params: { id: user.id },
                                            }"
                                            class="site-btn mt-2"
                                            >Edit</router-link
                                        >
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
        ...mapState("admin", ["user", "search", "entries"]),
    },
    data() {
        return {
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
        async fetch() {
            let { type, status } = this.$route.params;
            let params = {
                route: `api/auth/user/show/${this.$route.params.id}`,
                mutation: "SET_USER",
                variable: "data",
            };
            let { data } = await this.getAll(params);

            if (page != 1) {
                this.addRouteQuery({ page });
            } else {
                this.addRouteQuery({});
            }
        },
    },
};
</script>
