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
                                                        name: 'admin.feedback.index',
                                                    }"
                                                    ><i
                                                        class="fas black-text fa-angle-left"
                                                    ></i
                                                ></router-link>
                                                Feedback Details
                                            </h2>
                                        </div>
                                    </div>
                                    <div class="white-div mt-1 p-md-2 p-1">
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
                                                                feedback.first_name +
                                                                ' ' +
                                                                feedback.last_name
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
                                                                feedback.email
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6 mt-1">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Subject:</label
                                                        >
                                                    </div>
                                                    <div class="col-6 mt-1">
                                                        <input
                                                            type="text"
                                                            disabled
                                                            class="label-value"
                                                            :value="
                                                                feedback.subject
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6 mt-1">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Date
                                                            Submitted:</label
                                                        >
                                                    </div>
                                                    <div class="col-6 mt-1">
                                                        <input
                                                            type="text"
                                                            disabled
                                                            class="label-value"
                                                            :value="
                                                                formatDate(
                                                                    feedback.created_at
                                                                )
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6 mt-1">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Message:</label
                                                        >
                                                    </div>
                                                    <div class="col-6 mt-1">
                                                        <p
                                                            class="mb-0 label-value"
                                                        >
                                                            {{
                                                                feedback.message
                                                            }}
                                                        </p>
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
        ...mapState("admin", ["feedback"]),
    },
    created() {
        this.fetch();
    },
    methods: {
        ...mapActions("admin", ["getAll"]),
        async fetch() {
            let { type, status } = this.$route.params;
            let params = {
                route: `api/feedback/show/${this.$route.params.id}`,
                mutation: "SET_FEEDBACK",
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
