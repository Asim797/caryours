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
                                                        name: 'admin.reports.index',
                                                    }"
                                                    ><i
                                                        class="fas black-text fa-angle-left"
                                                    ></i
                                                ></router-link>
                                                Report Details
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
                                                            >Reported By:</label
                                                        >
                                                    </div>
                                                    <div class="col-6">
                                                        <input
                                                            type="text"
                                                            disabled
                                                            class="label-value"
                                                            :value="
                                                                report
                                                                    .reported_by
                                                                    .first_name
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6 mt-1">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Reported
                                                            For:</label
                                                        >
                                                    </div>
                                                    <div class="col-6 mt-1">
                                                        <input
                                                            type="text"
                                                            disabled
                                                            class="label-value"
                                                            :value="
                                                                report
                                                                    .reported_to
                                                                    .first_name
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6 mt-1">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Reporting
                                                            Date:</label
                                                        >
                                                    </div>
                                                    <div class="col-6 mt-1">
                                                        <input
                                                            type="text"
                                                            disabled
                                                            class="label-value"
                                                            :value="
                                                                formatDate(
                                                                    report.created_at
                                                                )
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="white-div mt-1 p-md-2 p-1">
                                        <div class="row">
                                            <div class="col-xl-7 col-lg-9">
                                                <label
                                                    for=""
                                                    class="dash-label semi-bold"
                                                    >Report Reason:</label
                                                >
                                                <p class="mb-0 p-sm medium">
                                                    {{ report.reason }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-2 text-center">
                                        <button
                                            class="site-btn px-2"
                                            data-toggle="modal"
                                            data-target=".takeAction"
                                        >
                                            Take Actions
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!-- Modal -->
        <div
            class="modal fade takeAction"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content admin-modal">
                    <i
                        class="fas fa-times close modal-close"
                        data-dismiss="modal"
                        aria-label="Close"
                    ></i>
                    <div class="text-center mb-1">
                        <h3 class="modal-heading-2 mb-0 mt-1">
                            System Message
                        </h3>
                    </div>
                    <ValidationObserver v-slot="{ handleSubmit }">
                        <form
                            ref="updateForm"
                            @submit.prevent="handleSubmit(update)"
                        >
                            <p class="black-text mt-1 mb-0">
                                <input
                                    type="checkbox"
                                    id="stopover7"
                                    name="ad_status"
                                />
                                <label for="stopover7" class="bordered mb-0"
                                    >Mark Ad inactive</label
                                >
                            </p>
                            <p class="black-text mt-1 mb-0">
                                <input
                                    type="checkbox"
                                    id="stopover8"
                                    name="seller_status"
                                />
                                <label for="stopover8" class="bordered mb-0"
                                    >Mark Seller inactive</label
                                >
                            </p>
                            <div class="text-center mt-1">
                                <button
                                    type="submit"
                                    class="px-2 py-1 site-btn mt-1"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </ValidationObserver>
                </div>
            </div>
        </div>
        <!-- End Modal -->
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
    computed: {
        ...mapState("admin", ["report"]),
    },
    created() {
        this.fetch();
    },
    methods: {
        ...mapActions("admin", ["getAll"]),
        async fetch() {
            let { type, status } = this.$route.params;
            let params = {
                route: `api/reports/show/${this.$route.params.id}`,
                mutation: "SET_REPORT",
                variable: "data",
            };
            let { data } = await this.getAll(params);

            if (page != 1) {
                this.addRouteQuery({ page });
            } else {
                this.addRouteQuery({});
            }
        },
        async update() {
            try {
                let data = new FormData(this.$refs.updateForm);

                let result = await axios.post(
                    `api/auth/ad/inactive/${this.$route.params.id}`,
                    data
                );
                if (result.data.data) {
                    this.$snotify.success(
                        "Ad status updated successfully",
                        "Success"
                    );
                    $(".takeAction").modal("hide");
                    this.$router.push({ name: "admin.reports.index" });
                } else {
                    this.$snotify.error("Error occur updating ad", "Error");
                }
            } catch (e) {
                console.log(e);
            }
        },
    },
};
</script>
