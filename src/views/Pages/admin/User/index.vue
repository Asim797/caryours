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
                                            <h2>Users</h2>
                                        </div>
                                        <div
                                            class="col-lg-6 text-right mt-lg-0 mt-1"
                                        >
                                            <router-link
                                                :to="{
                                                    name: 'admin.users.create',
                                                }"
                                                class="site-btn"
                                                >Add New</router-link
                                            >
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
                                                    <user-table></user-table>
                                                    <template>
                                                        <pagination
                                                            class="float-right"
                                                            :data="users"
                                                            @pagination-change-page="
                                                                fetch
                                                            "
                                                        ></pagination>
                                                    </template>
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
const UserTable = () => import("./components/UserTable.vue");
import { mapActions, mapState } from "vuex";

export default {
    computed: {
        ...mapState("admin", ["users", "search", "entries"]),
    },
    data() {
        return {
            date: "",
            from: "",
            to: "",
            dateFilterCounter: 0,
        };
    },
    components: {
        UserTable,
    },
    created() {
        let { page } = this.$route.query;
        this.fetch(page);
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
            let { type, status } = this.$route.params;
            let params = {
                route: "api/auth/users",
                mutation: "SET_USERS",
                variable: "data",
                data: {
                    page,
                    type,
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
