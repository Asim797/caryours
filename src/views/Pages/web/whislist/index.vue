<template>
    <div>
        <section class="categories py-md-5 py-4">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <h2 class="text-center mb-lg-3">Saved Ads</h2>
                        <div class="row">
                            <div
                                v-for="(ads, index) of advertisement.data"
                                class="col-xl-4 col-md-6 my-3"
                            >
                                <div class="featured-card">
                                    <button
                                        class="fav-btn"
                                        @click="removeWhislist(ads.ads.id)"
                                    >
                                        <i class="fas fa-heart blue-text"></i>
                                    </button>
                                    <div class="featured-img">
                                        <img
                                            :src="`${ads.ads.primary_image}`"
                                            alt=""
                                            class="img-fluid wow slideInRight"
                                            data-wow-duration="0.3s"
                                            data-wow-delay="0.4s"
                                            style="
                                                visibility: visible;
                                                animation-duration: 0.3s;
                                                animation-delay: 0.4s;
                                                animation-name: slideInRight;
                                            "
                                        />
                                    </div>
                                    <div
                                        class="featured-inner wow fadeInUp"
                                        data-wow-duration="0.2s"
                                        data-wow-delay="0.3s"
                                        style="
                                            visibility: visible;
                                            animation-duration: 0.2s;
                                            animation-delay: 0.3s;
                                            animation-name: fadeInUp;
                                        "
                                    >
                                        <p class="p-lg mb-0">
                                            {{ ads?.ads?.make }}
                                        </p>
                                        <div
                                            class="d-flex align-items-center justify-content-between"
                                        >
                                            <div class="d-flex mt-2">
                                                <i
                                                    class="fas fa-star review-star"
                                                ></i>
                                                <i
                                                    class="fas fa-star review-star"
                                                ></i>
                                                <i
                                                    class="fas fa-star review-star"
                                                ></i>
                                                <i
                                                    class="fas fa-star review-star"
                                                ></i>
                                                <i
                                                    class="fas fa-star review-star"
                                                ></i>
                                            </div>
                                            <span class="ad-tag mt-2"
                                                >{{ ads?.ads?.user?.ads_count }} Ads</span
                                            >
                                        </div>
                                        <p class="mb-0 l-grey-text mt-2 medium">
                                            {{ ads.ads.name }}
                                        </p>
                                        <hr />
                                        <router-link
                                            class="medium"
                                            :to="{
                                                name: 'web.home.category_detail',
                                                params: { id: ads.ads.id },
                                            }"
                                            >View More
                                            <i class="ms-2"
                                                ><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="13.5"
                                                    height="13.849"
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
                                                            fill="#0586f4"
                                                        ></path>
                                                    </g>
                                                </svg>
                                            </i>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            v-if="advertisement.total == 0"
                            class="text-center"
                        >
                            <h2>No Data Found!</h2>
                        </div>
                        <nav aria-label="Page navigation example">
                            <pagination
                                :data="advertisement"
                                @pagination-change-page="fetch"
                            ></pagination>
                        </nav>
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
    data() {
        return {
            advertisement: undefined,
            date: "",
            from: "",
            to: "",
            status: 1,
            dateFilterCounter: 0,
            search: "",
            transition: "",
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
            //let {status} = this.$route.params;
            let params = {
                route: "api/whislist",
                data: {
                    page,
                    status: this.status,
                    from: this.from,
                    to: this.to,
                    search: this.search,
                    entries: this.entries,
                    transition: this.transition,
                },
            };
            let { data } = await this.getAll(params);
            this.advertisement = data.data;
            if (page != 1) {
                this.addRouteQuery({ page });
            } else {
                this.addRouteQuery({});
            }
        },

        async removeWhislist(ads_id) {
            let params = {
                route: `api/whislist/removeFromWhislist`,
                data: {
                    ads_id: ads_id,
                },
            };

            let response = await axios.post(params.route, params.data);
            if (response.data.status == 200) {
                this.$snotify.success(response.data.message);
                setTimeout(function () {
                        window.location.reload();
                    }, 2000);
                this.$router.push({ name: "web.ads.whislist" });
            } else {
                this.$snotify.error(response.data.message);
            }
        },
    },
};
</script>
