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
                                        <div class="col-lg-6">
                                            <h2>Reports</h2>
                                        </div>
                                    </div>
                                    <div class="mt-2 p-0">
                                        <div class="row">
                                            <div class="user-listing-top">
                                                <div
                                                    class="row align-items-end d-flex mb-4"
                                                >
                                                    <div
                                                        class="col-md-6 mt-2 sort-datepicker"
                                                    >
                                                        <div
                                                            class="d-sm-flex align-items-center"
                                                        >
                                                            <label class=""
                                                                >Sort by:</label
                                                            >
                                                            <div
                                                                class="input-wrap mr-0 mr-sm-2 mb-2 mb-sm-0"
                                                            >
                                                                <flat-pickr
                                                                    v-model="
                                                                        from
                                                                    "
                                                                    name="date"
                                                                    class="site-input border gj-textbox-md"
                                                                    placeholder="Select a date"
                                                                ></flat-pickr>
                                                            </div>
                                                            <div
                                                                class="input-wrap"
                                                            >
                                                                <flat-pickr
                                                                    v-model="to"
                                                                    name="date"
                                                                    class="site-input border gj-textbox-md"
                                                                    placeholder="Select a date"
                                                                ></flat-pickr>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 mt-2">
                                                        <button
                                                            @click="
                                                                taskDateFilter()
                                                            "
                                                            type="button"
                                                            class="general-btn d-inline-block"
                                                        >
                                                            APPLY/CLEAR
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div
                                                    class="maain-tabble table-responsive"
                                                >
                                                    <table-search></table-search>
                                                    <table
                                                        class="table table-striped table-bordered zero-configuration"
                                                    >
                                                        <thead>
                                                            <tr>
                                                                <th>S.No</th>
                                                                <th>AD ID</th>
                                                                <th>
                                                                    REPORTED BY
                                                                </th>
                                                                <th>
                                                                    REPORTED TO
                                                                </th>
                                                                <th>
                                                                    REPORTING
                                                                    DATE
                                                                </th>
                                                                <th>ACTIONS</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr
                                                                v-for="(
                                                                    report,
                                                                    index
                                                                ) in reports.data"
                                                                :key="index"
                                                            >
                                                                <td>
                                                                    {{
                                                                        serialNumber(
                                                                            "reports",
                                                                            index
                                                                        )
                                                                    }}
                                                                </td>
                                                                <td>
                                                                    {{
                                                                        report
                                                                            .advertisement
                                                                            .id
                                                                    }}
                                                                </td>
                                                                <td>
                                                                    {{
                                                                        report
                                                                            .reported_by
                                                                            .first_name
                                                                    }}
                                                                </td>
                                                                <td>
                                                                    {{
                                                                        report
                                                                            .reported_to
                                                                            .first_name
                                                                    }}
                                                                </td>
                                                                <td>
                                                                    {{
                                                                        formatDate(
                                                                            report.created_at
                                                                        )
                                                                    }}
                                                                </td>
                                                                <td>
                                                                    <div
                                                                        class="btn-group mr-1 mb-1"
                                                                    >
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-drop-table btn-sm"
                                                                            data-toggle="dropdown"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <i
                                                                                class="fa fa-ellipsis-v"
                                                                            ></i>
                                                                        </button>
                                                                        <div
                                                                            class="dropdown-menu dropdown-menu-right"
                                                                            x-placement="bottom-start"
                                                                            style="
                                                                                position: absolute;
                                                                                transform: translate3d(
                                                                                    4px,
                                                                                    23px,
                                                                                    0px
                                                                                );
                                                                                top: 0px;
                                                                                left: 0px;
                                                                                will-change: transform;
                                                                            "
                                                                        >
                                                                            <router-link
                                                                                class="dropdown-item"
                                                                                :to="{
                                                                                    name: 'admin.reports.show',
                                                                                    params: {
                                                                                        id: report.id,
                                                                                    },
                                                                                }"
                                                                            >
                                                                                <i
                                                                                    class="fa fa-eye"
                                                                                ></i
                                                                                >VIEW
                                                                            </router-link>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <no-record
                                                                tag="tr"
                                                                :colspan="9"
                                                                :data="
                                                                    reports.data
                                                                "
                                                                class="col-md-3"
                                                            ></no-record>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <pagination
                                                            :data="reports"
                                                            @pagination-change-page="
                                                                fetch
                                                            "
                                                        ></pagination>
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
        ...mapState("admin", ["reports", "search", "entries"]),
    },
    data() {
        return {
            date: "",
            from: "",
            to: "",
            dateFilterCounter: 0,
        };
    },
    created() {
        let { page } = this.$route.query;
        this.fetch(page);
    },
    watch: {
        search(val, oldVal) {
            this.fetch();
        },
    },
    methods: {
        ...mapActions("admin", ["getAll"]),
        taskDateFilter() {
            if (
                this.from !== "" &&
                this.to !== "" &&
                this.dateFilterCounter % 2 == 0
            ) {
                this.fetch();
            } else {
                this.from = "";
                this.to = "";
                this.fetch();
            }

            this.dateFilterCounter++;
        },
        async fetch(page = 1) {
            let { status } = this.$route.params;
            let params = {
                route: "api/reports",
                mutation: "SET_REPORTS",
                variable: "data",
                data: {
                    page,
                    status,
                    from: this.from,
                    to: this.to,
                    search: this.search,
                    entries: this.entries,
                },
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
