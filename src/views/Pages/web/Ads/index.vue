<template>
    <div>
        <section class="categories py-md-5 py-4">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="text-center">My Ads</h2>
                        <div class="text-end mt-2">
                            <router-link
                                class="site-btn red-btn px-4"
                                :to="{ name: 'web.ads.feature' }"
                                >Featured Ads
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
                    </div>
                    <div
                        class="col-xl-7 mt-2 mx-auto col-lg-7 col-md-8 col-sm-10 col-12"
                    >
                        <ul
                            class="nav nav-tabs table-tabs"
                            id="myTab"
                            role="tablist"
                        >
                            <li class="nav-item" role="presentation">
                                <button
                                    class="nav-link"
                                    :class="{ 'active': $route.params.status === '1' || !$route.params.status}"
                                    id="home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#home"
                                    type="button"
                                    role="tab"
                                    aria-controls="home"
                                    aria-selected="true"
                                    @click="setStatus(1)"
                                >
                                    Active
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button
                                    class="nav-link"
                                    :class="{ 'active': $route.params.status === '0'  }"
                                    id="profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="profile"
                                    aria-selected="false"
                                    @click="setStatus(0)"
                                >
                                    Inactive
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 mt-3">
                        <div class="tab-content" id="myTabContent">
                            <div
                                class="tab-pane fade show active"
                                id="home"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                            >
                                <div class="row align-items-end">
                                    <div class="col-lg-5">
                                        <div class="row">
                                            <div class="col-12">
                                                <label
                                                    for=""
                                                    class="p-md semi-bold"
                                                    >Sort By:</label
                                                >
                                            </div>
                                            <div class="col-md-6 my-3">
                                                <label for="">From</label>
                                                <input
                                                    v-model="from"
                                                    type="date"
                                                    class="site-input"
                                                />
                                            </div>
                                            <div class="col-md-6 my-3">
                                                <label for="">To</label>
                                                <input
                                                    v-model="to"
                                                    type="date"
                                                    class="site-input"
                                                    @change="fetch()"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-4 mb-3 ms-auto">

                                    </div>
                                </div>
                                <div class="row align-items-center">


                                </div>
                                <div class="row">
                                    <div class="col-12 mt-3">
                                        <div class="table-responsive">
                                            <table class="table custom-table">
                                                <thead>
                                                    <tr>
                                                        <th>S.No</th>
                                                        <th>Register Number</th>
                                                        <th>Car Mileague</th>
                                                        <th>DATE</th>
                                                        <th>PRICE</th>
                                                        <th>STATUS</th>
                                                        <th>ACTIONS</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr
                                                        v-for="(
                                                            ad, index
                                                        ) in advertisements.data"
                                                        :key="index"
                                                    >
                                                        <td>
                                                            {{
                                                                serialNumber(
                                                                    "advertisements",
                                                                    index
                                                                )
                                                            }}
                                                        </td>
                                                        <td>
                                                            {{
                                                                ad.registration_number
                                                            }}
                                                        </td>
                                                        <td>
                                                            {{
                                                                ad.mileage
                                                                    ? ad.mileage
                                                                    : 0
                                                            }}
                                                        </td>
                                                        <td>
                                                            {{
                                                                formatDate(
                                                                    ad.created_at
                                                                )
                                                            }}
                                                        </td>
                                                        <td>${{ ad.price }}</td>
                                                        <td>
                                                            {{
                                                                ad.status
                                                                    ? "Active"
                                                                    : "Inactive"
                                                            }}
                                                        </td>
                                                        <td>
                                                            <router-link
                                                                :to="{
                                                                    name: 'web.ads.detials',
                                                                    params: {
                                                                        id: ad.id,
                                                                    },
                                                                }"
                                                                class="site-btn px-4"
                                                                >View
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
                                                                            ></path>
                                                                        </g>
                                                                    </svg>
                                                                </i>
                                                            </router-link>
                                                        </td>
                                                    </tr>
                                                    <no-record
                                                        tag="tr"
                                                        :colspan="9"
                                                        :data="
                                                            advertisements.data
                                                        "
                                                        class="col-md-3"
                                                    ></no-record>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div
                                            class="d-lg-flex align-items-center justify-content-between"
                                        >
                                        <template>
                                                        <pagination
                                                            class="float-right"
                                                            :data="advertisements"
                                                            @pagination-change-page="
                                                                fetch
                                                            "
                                                        ></pagination>
                                                    </template>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="tab-pane fade"
                                id="profile"
                                role="tabpanel"
                                aria-labelledby="profile-tab"
                            >
                                <div class="row align-items-end">
                                    <div class="col-lg-5">
                                        <div class="row">
                                            <div class="col-12">
                                                <label
                                                    for=""
                                                    class="p-md semi-bold"
                                                    >Sort By:</label
                                                >
                                            </div>
                                            <div class="col-md-6 my-3">
                                                <label for="">From</label>
                                                <input
                                                    v-model="from"
                                                    type="date"
                                                    class="site-input"
                                                />
                                            </div>
                                            <div class="col-md-6 my-3">
                                                <label for="">To</label>
                                                <input
                                                v-model="to"
                                                    type="date"
                                                    class="site-input"
                                                    @change="fetch()"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="row">
                                    <div class="col-12 mt-3">
                                        <div class="table-responsive">
                                            <table class="table custom-table">
                                                <thead>
                                                    <tr>
                                                        <th>S .No</th>
                                                        <th>Ad Id</th>
                                                        <th>Title</th>
                                                        <th>Date</th>
                                                        <th>Price</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr
                                                        v-for="(
                                                            ad, index
                                                        ) in advertisements.data"
                                                        :key="index"
                                                    >
                                                        <td>
                                                            {{
                                                                serialNumber(
                                                                    "advertisements",
                                                                    index
                                                                )
                                                            }}
                                                        </td>
                                                        <td>
                                                            {{
                                                                ad.registration_number
                                                            }}
                                                        </td>
                                                        <td>
                                                            {{
                                                                ad.mileage
                                                                    ? ad.mileage
                                                                    : 0
                                                            }}
                                                        </td>
                                                        <td>
                                                            {{
                                                                formatDate(
                                                                    ad.created_at
                                                                )
                                                            }}
                                                        </td>
                                                        <td>${{ ad.price }}</td>
                                                        <td>
                                                            {{
                                                                ad.status  === 1
                                                                    ? "Active"
                                                                    : "Inactive"
                                                            }}
                                                        </td>
                                                        <td>
                                                            <router-link
                                                                :to="{
                                                                    name: 'web.ads.detials',
                                                                    params: {
                                                                        id: ad.id,
                                                                    },
                                                                }"
                                                                class="site-btn px-4"
                                                                >View
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
                                                                            ></path>
                                                                        </g>
                                                                    </svg>
                                                                </i>
                                                            </router-link>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div
                                            class="d-lg-flex align-items-center justify-content-between"
                                        >
                                        <template>
                                                        <pagination
                                                            class="float-right"
                                                            :data="advertisements"
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
        </section>

        <!-- testimonials section starts here -->
        <site-footer></site-footer>
        <!-- testimonials section ends here -->
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
const SiteFooter = () =>
    import("@views/Pages/web/Components/footer/site-footer.vue");
export default {
    components: {
        SiteFooter,
    },
    computed: {
        ...mapState("admin", [
            "advertisements",
            "inactive_advertisements",
            "search",
            "entries",
        ]),
    },
    data() {
        return {
            date: "",
            from: "",
            to: "",
            status: 1,
            dateFilterCounter: 0,
        };
    },
    created() {
        let { page } = this.$route.query;
        if(this.$route.params.status){
            this.setStatus(this.$route.params.status)
        }
        this.fetch(page);
        this.fetchInActiveAdvertisements(page);
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
            let params = {
                route: "api/advertisements/user",
                mutation: "SET_ADVERTISEMENTS",
                variable: "data",
                data: {
                    page,
                    status: this.status,
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
        setStatus(status) {
            this.status = status;
            this.fetch();
        },
        async fetchInActiveAdvertisements(page = 1) {
            let { status } = this.$route.params;
            let params = {
                route: "api/advertisements/user",
                mutation: "SET_INACTIVE_ADVERTISEMENTS",
                variable: "data",
                data: {
                    page,
                    status: 0,
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
