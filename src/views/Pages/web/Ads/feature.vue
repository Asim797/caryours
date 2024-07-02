<template>
    <div>
        <section class="categories py-md-5 py-4">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <a href="my-ads.php" class="blue-text"
                            ><i class="fas fa-long-arrow-alt-left"></i> Back</a
                        >
                        <h2 class="text-center">Feature Ads</h2>
                    </div>
                    <div class="col-12 mt-3">
                        <div class="row align-items-end">
                            <div class="col-lg-5">
                                <div class="row">
                                    <div class="col-12">
                                        <label for="" class="p-md semi-bold"
                                            >Sort By:</label
                                        >
                                    </div>
                                    <div class="col-md-6 my-3">
                                        <label for="">From</label>
                                        <input v-model="from" type="date" class="site-input" />
                                    </div>
                                    <div class="col-md-6 my-3">
                                        <label for="">To</label>
                                        <input v-model="to" type="date" class="site-input"  @change="fetch()" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 mb-3 ms-auto">
                                
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
                                                <th>Feature Days</th>
                                                <!-- <th>Valid Till</th> -->
                                                <!-- <th>Price</th> -->
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(ads,index) of advertisement_features.data ">
                                                <td>{{index}}</td>
                                                <td>{{ads.ads.id}}</td>
                                                <td>{{ads.user.first_name}}</td>
                                                <td>{{formatDate(ads.created_at)}}</td>
                                                <td>{{ads.status}}</td>
                                                <!-- <td>N/A</td>
                                                <td>$24000</td> -->
                                                <td v-if="ads?.ads?.status == 1" class="green-text">
                                                    Active
                                                </td>
                                                <td v-if="ads?.ads?.status == 0" class="red-text">
                                                    In-Active
                                                </td>

                                                <td>
                                                    <router-link
                                                                :to="{
                                                                    name: 'web.ads.featuresDetials',
                                                                    params: {
                                                                        id: ads.ads.id,
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
                                                                    />
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
                                                            :data="advertisement_features"
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
            "advertisement_features",
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
        this.fetch(page);
    },
    watch: {
        search(val, oldVal) {
            this.fetch();
        },
    },
    methods: {
        ...mapActions("admin", ["getAll"]),

        async fetch(page = 1) {
            //let {status} = this.$route.params;
            let params = {
                route: "api/advertisements/features",
                mutation: "SET_ADVERTISEMENTS_FEATURE",
                variable: "data",
                data: {
                    entries: this.entries,
                    from: this.from,
                    to: this.to,
                },
            };
            let { data } = await this.getAll(params);
            if (page != 1) {
                this.addRouteQuery({ page });
            } else {
                this.addRouteQuery({});
            }
        },
    }
};
</script>
