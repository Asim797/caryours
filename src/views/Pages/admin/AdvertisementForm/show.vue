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
                                                        name: 'admin.advertisement_form.index',
                                                    }"
                                                    ><i
                                                        class="fas black-text fa-angle-left"
                                                    ></i></router-link
                                                >Advertisment Details
                                            </h2>
                                        </div>
                                    </div>
                                    <div class="white-div mt-1 p-md-2 p-1">
                                        <h3>User Details</h3>
                                        <div class="row">
                                            <div class="col-xl-7 col-lg-9">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Full Name:</label
                                                        >
                                                    </div>
                                                    <div class="col-6">
                                                        <input
                                                            type="text"
                                                            disabled
                                                            class="label-value"
                                                            :value="
                                                                advertisement_form.full_name
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6 mt-1">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Email
                                                            Address:</label
                                                        >
                                                    </div>
                                                    <div class="col-6 mt-1">
                                                        <input
                                                            type="text"
                                                            disabled
                                                            class="label-value"
                                                            :value="
                                                                advertisement_form
                                                                    .user.email
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="white-div mt-1 p-md-2 p-1">
                                        <h3>Form Details</h3>
                                        <div class="row">
                                            <div class="col-xl-7 col-lg-9">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Full Name:</label
                                                        >
                                                    </div>
                                                    <div class="col-6">
                                                        <input
                                                            type="text"
                                                            disabled
                                                            class="label-value"
                                                            :value="
                                                                advertisement_form.full_name
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
                                                                advertisement_form.number
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6 mt-1">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Address:</label
                                                        >
                                                    </div>
                                                    <div class="col-6 mt-1">
                                                        <input
                                                            type="text"
                                                            disabled
                                                            class="label-value"
                                                            :value="
                                                                advertisement_form.address
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6 mt-1">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Postal/Zip code
                                                            :</label
                                                        >
                                                    </div>
                                                    <div class="col-6 mt-1">
                                                        <input
                                                            type="text"
                                                            disabled
                                                            class="label-value"
                                                            :value="
                                                                advertisement_form.zip_code
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6 mt-1">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Service you
                                                            need:</label
                                                        >
                                                    </div>
                                                    <div class="col-6 mt-1">
                                                        <input
                                                                type="text"
                                                                disabled
                                                                class="label-value"
                                                                :value="
                                                                advertisement_form?.service_you_need
                                                            "
                                                        />
                                                    </div>
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
import { mapActions, mapState } from "vuex";

export default {
    computed: {
        ...mapState("admin", ["advertisement_form"]),
    },
    created() {
        this.fetch();
    },
    methods: {
        ...mapActions("admin", ["getAll"]),
        async fetch() {
            let { type, status } = this.$route.params;
            let params = {
                route: `api/advertisement-forms/show/${this.$route.params.id}`,
                mutation: "SET_ADVERTISEMENT_FORM",
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
