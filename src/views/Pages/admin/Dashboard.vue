<template>
    <!-- <div class="app-content content dashboard"> -->
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-content collapse show">
                                <div class="card-dashboard">
                                    <div class="row">
                                        <div class="col-12">
                                            <h2 class="mt-1">Dashboard</h2>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div
                                                    class="col-xl-4 mt-1 col-md-6"
                                                >
                                                    <div class="dash-card mb-0">
                                                        <div
                                                            class="d-sm-flex mt-1 align-items-center justify-content-between"
                                                        >
                                                            <div>
                                                                <h3
                                                                    class="card-number"
                                                                >
                                                                    {{
                                                                        home.totalAds
                                                                    }}
                                                                </h3>
                                                                <h5
                                                                    class="card-heading"
                                                                >
                                                                    Total Ads
                                                                </h5>
                                                            </div>
                                                            <i
                                                                class="fas fa-chart-bar dash-card-icon"
                                                            ></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="col-xl-4 mt-1 col-md-6"
                                                >
                                                    <div class="dash-card mb-0">
                                                        <div
                                                            class="d-sm-flex mt-1 align-items-center justify-content-between"
                                                        >
                                                            <div>
                                                                <h3
                                                                    class="card-number"
                                                                >
                                                                    {{
                                                                        home.totalRegisterUser
                                                                    }}
                                                                </h3>
                                                                <h5
                                                                    class="card-heading"
                                                                >
                                                                    Total Users
                                                                </h5>
                                                            </div>
                                                            <i
                                                                class="fas fa-users dash-card-icon"
                                                            ></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="col-xl-4 mt-1 col-md-6"
                                                >
                                                    <div class="dash-card mb-0">
                                                        <div
                                                            class="d-sm-flex mt-1 align-items-center justify-content-between"
                                                        >
                                                            <div>
                                                                <h3
                                                                    class="card-number"
                                                                >
                                                                    {{
                                                                        home.totalUsers
                                                                    }}
                                                                </h3>
                                                                <h5
                                                                    class="card-heading"
                                                                >
                                                                    New Users
                                                                </h5>
                                                            </div>
                                                            <i
                                                                class="fas fa-users dash-card-icon"
                                                            ></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row align-items-center">
                                        <div class="col-lg-6 mt-2">
                                            <h3 class="sub-heading p-0 my-0">
                                                Users Analytics
                                            </h3>
                                        </div>
                                        <div
                                            class="offset-lg-3 col-lg-3 text-right mt-2"
                                        >
                                            <div class="form-field">
                                                <select
                                                    class="site-input"
                                                    v-model="selectedYear"
                                                >
                                                    <option
                                                        v-for="year in years"
                                                        :value="year"
                                                    >
                                                        {{ year }}
                                                    </option>
                                                </select>
                                                <i
                                                    class="fa fa-chevron-down right-icon select-drop"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <bar-chart
                                                v-if="loaded"
                                                chart:render="check"
                                                :chartData="chartData"
                                                :options="options"
                                            ></bar-chart>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12 mt-2">
                                            <h3 class="sub-heading p-0 my-0">
                                                New Users
                                            </h3>
                                            <div
                                                class="maain-tabble table-responsive"
                                            >
                                                <table
                                                    class="table table-striped table-bordered zero-configuration"
                                                >
                                                    <thead>
                                                        <tr>
                                                            <th>S No</th>
                                                            <th>Full Name</th>
                                                            <th>
                                                                Date Registered
                                                            </th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr
                                                            v-for="(
                                                                user, index
                                                            ) in home.recentUsers"
                                                            :key="index"
                                                        >
                                                            <td>{{ index }}</td>
                                                            <td>
                                                                {{
                                                                    user.first_name +
                                                                    " " +
                                                                    user.last_name
                                                                }}
                                                            </td>
                                                            <td>
                                                                {{
                                                                    formatDate(
                                                                        user.created_at
                                                                    )
                                                                }}
                                                            </td>
                                                            <td>
                                                                {{
                                                                    user.status
                                                                        ? "Active"
                                                                        : "Inactive"
                                                                }}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <!-- <div class="col-lg-6 mt-lg-2 mt-1">
                      <div class="dash-card">
                        <h5>Ads</h5>
                        <div class="text-center">
                          <img :src="`${base_url}/assets/admin/images/graph-circle.PNG`" alt="" class="img-fluid mt-2">
                        </div>
                      </div>
                    </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <!-- </div> -->
</template>
<script>
import { mapActions, mapState } from "vuex";
import BarChart from "./BarChart.js";
import allMonths from "@core/months.js";

export default {
    components: {
        BarChart,
    },
    data() {
        return {
            selectedYear: "2022",
            months: [],
            totalUsers: 0,
            notificationLogs: {},
            loaded: true,
            dashboard: {},
            loadedPage: true,
            chartData: {
                labels: allMonths,
                datasets: [
                    {
                        label: "Users per Month",
                        data: [],
                        backgroundColor: ["#F14669"],
                        borderColor: ["#F14669"],
                        borderWidth: 0.5,
                        minBarLength: 2,
                    },
                ],
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            },
            chartOptionsBar: {
                xAxis: {
                    data: [...allMonths],
                },
                yAxis: {
                    type: "value",
                },
                series: [
                    {
                        type: "bar",
                        data: [10, 10],
                    },
                ],
            },
        };
    },
    computed: {
        ...mapState("admin", ["home"]),
        years: () => {
            let today = new Date();
            let currentYear = today.getFullYear();
            let last10Years = new Date(
                today.setFullYear(today.getFullYear() - 5)
            ).getFullYear();
            let years = [];
            for (var i = currentYear; i >= last10Years; i--) {
                years.push(i);
            }
            return years;
        },
    },
    created() {
        let self = this;
        this.fetch().then((res) => {
            // console.log(res.data.months);
            /*self.$refs.chart.delegateMethod('setOption', {
                series: [{
                    type: 'bar',
                    data: res.data.months,
                }]
              }, false);*/
            // console.log();
            self.loaded = true;
        });
    },
    beforeMount() {
        // console.log(this.home);
    },
    watch: {
        search(val, oldVal) {
            this.fetch();
        },
        selectedYear() {
            this.fetch();
        },
        chartData(val) {
            alert();
        },
    },
    methods: {
        ...mapActions("admin", ["getAll"]),
        check() {
            alert();
        },
        async fetch() {
            this.loaded = false;
            let params = {
                route: "api/adminDashboardStatic",
                mutation: "SET_HOME_DATA",
                variable: "data",
                data: {
                    year: this.selectedYear,
                },
            };
            let { data } = await this.getAll(params);
            //this.months = data.data.months;
            this.chartData.datasets[0].data = this.home.graphdata;
            this.chartData.datasets[0].backgroundColor = "#F14669";
            this.loaded = true;
            //this.chartData.datasets[0].data = this.months;
            return data;
        },
    },
};
</script>
