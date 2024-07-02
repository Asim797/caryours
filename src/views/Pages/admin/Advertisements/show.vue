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
                                                        name: 'admin.advertisement.index',
                                                    }"
                                                    ><i
                                                        class="fas black-text fa-angle-left"
                                                    ></i></router-link
                                                >Ad Details
                                            </h2>
                                        </div>
                                    </div>
                                    <div
                                        class="d-sm-flex align-items-center justify-content-between"
                                    >
                                        <div>
                                            <p class="mb-0 medium">
                                                Status:
                                                <span
                                                    v-if="
                                                        advertisement.status ==
                                                        1
                                                    "
                                                    class="green-text"
                                                    >Active</span
                                                ><span
                                                    v-else-if="
                                                        advertisement.status ==
                                                        0
                                                    "
                                                    class="red-text"
                                                    >Inactive</span
                                                >
                                            </p>
                                            <p class="mb-0 medium">
                                                Date:
                                                <span class="semi-bold">{{
                                                    formatDate(
                                                        advertisement.created_at
                                                    )
                                                }}</span>
                                            </p>
                                        </div>
                                        <button
                                            v-if="advertisement.status == 1"
                                            class="site-btn mt-sm-0 mt-1 px-2"
                                            @click="markInActive()"
                                        >
                                            Mark Inactive
                                        </button>
                                    </div>
                                    <div class="white-div mt-1 p-md-2 p-1">
                                        <div class="row">
                                            <div class="col-12">
                                                <h3 class="text-center">
                                                    Car ABC
                                                </h3>
                                                <carousel
                                                    :key="updatedcarousel"
                                                    :nav="false"
                                                    :autoHeight="false"
                                                    :autoplay="true"
                                                    :loop="true"
                                                    :responsive="{
                                                        1440: {
                                                            items: 1,
                                                            nav: false,
                                                        },
                                                        1024: {
                                                            items: 1,
                                                            nav: false,
                                                        },
                                                        768: {
                                                            items: 1,
                                                            nav: false,
                                                        },
                                                        320: {
                                                            items: 1,
                                                            nav: false,
                                                        },
                                                    }"
                                                >
                                                    <div
                                                        class="item"
                                                        v-for="(
                                                            images, index
                                                        ) in advertisement.sec_image"
                                                    >
                                                        <img
                                                            :src="`${base_url}/assets/upload/advertisement/${images.images}`"
                                                            alt=""
                                                            class="img-fluid car-bg"
                                                        />
                                                    </div>
                                                </carousel>

                                                <div
                                                    class="d-flex flex-wrap flex-xl-nowrap align-items-center justify-content-center"
                                                >
                                                    <span
                                                        class="ad-tag mt-1 mr-1"
                                                        >{{
                                                            advertisement.make
                                                        }}</span
                                                    >
                                                    <span
                                                        class="ad-tag mt-1 mr-1"
                                                        >{{
                                                            advertisement.mileage
                                                        }}</span
                                                    >
                                                    <span
                                                        class="ad-tag mt-1 mr-1"
                                                        >{{
                                                            advertisement.engine_type
                                                        }}</span
                                                    >
                                                    <span class="ad-tag mt-1">{{
                                                        advertisement.transition_type
                                                    }}</span>
                                                </div>
                                                <div
                                                    class="d-md-flex justify-content-between mt-1 align-items-center"
                                                >
                                                    <span
                                                        class="price-tag mt-1 px-2"
                                                        >${{
                                                            advertisement.price
                                                        }}</span
                                                    >
                                                    <div class="mt-1">
                                                        <p
                                                            class="mb-0 semi-bold"
                                                        >
                                                            By Seller
                                                            {{
                                                                advertisement
                                                                    .user
                                                                    .first_name
                                                            }}
                                                        </p>
                                                        <div class="d-flex">
                                                            <i
                                                                class="fas yellow-text fa-star"
                                                            ></i>
                                                            <i
                                                                class="fas yellow-text fa-star"
                                                            ></i>
                                                            <i
                                                                class="fas yellow-text fa-star"
                                                            ></i>
                                                            <i
                                                                class="fas yellow-text fa-star"
                                                            ></i>
                                                            <i
                                                                class="far yellow-text fa-star"
                                                            ></i>
                                                        </div>
                                                    </div>
                                                    <button
                                                        class="site-btn mt-1"
                                                    >
                                                        Seller Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 class="my-2">Car Details</h3>
                                    <div class="white-div p-md-2 p-1">
                                        <div class="row">
                                            <div class="col-xl-7 col-lg-9">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Make:</label
                                                        >
                                                    </div>
                                                    <div class="col-6">
                                                        <input
                                                            type="text"
                                                            disabled
                                                            class="label-value"
                                                            :value="
                                                                advertisement.make
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6 mt-1">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Model:</label
                                                        >
                                                    </div>
                                                    <div class="col-6 mt-1">
                                                        <input
                                                            type="text"
                                                            disabled
                                                            class="label-value"
                                                            :value="
                                                                advertisement.model
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6 mt-1">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Version:</label
                                                        >
                                                    </div>
                                                    <div class="col-6 mt-1">
                                                        <input
                                                            type="text"
                                                            disabled
                                                            class="label-value"
                                                            :value="
                                                                advertisement.version
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6 mt-1">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Engine Capacity
                                                            :</label
                                                        >
                                                    </div>
                                                    <div class="col-6 mt-1">
                                                        <input
                                                            type="text"
                                                            disabled
                                                            class="label-value"
                                                            :value="
                                                                advertisement.engine_capacity
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6 mt-1">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Color:</label
                                                        >
                                                    </div>
                                                    <div class="col-6 mt-1">
                                                        <input
                                                            type="text"
                                                            disabled
                                                            class="label-value"
                                                            :value="
                                                                advertisement.color
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6 mt-1">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Year:</label
                                                        >
                                                    </div>
                                                    <div class="col-6 mt-1">
                                                        <input
                                                            type="text"
                                                            disabled
                                                            class="label-value"
                                                            :value="
                                                                advertisement.model
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6 mt-1">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Mileage:</label
                                                        >
                                                    </div>
                                                    <div class="col-6 mt-1">
                                                        <input
                                                            type="text"
                                                            disabled
                                                            class="label-value"
                                                            :value="
                                                                advertisement.mileage
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6 mt-1">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Engine Type:</label
                                                        >
                                                    </div>
                                                    <div class="col-6 mt-1">
                                                        <input
                                                            type="text"
                                                            disabled
                                                            class="label-value"
                                                            :value="
                                                                advertisement.engine_type
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6 mt-1">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Body Type:</label
                                                        >
                                                    </div>
                                                    <div class="col-6 mt-1">
                                                        <input
                                                            type="text"
                                                            disabled
                                                            class="label-value"
                                                            :value="
                                                                advertisement.body_type
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6 mt-1">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Transition
                                                            Type:</label
                                                        >
                                                    </div>
                                                    <div class="col-6 mt-1">
                                                        <input
                                                            type="text"
                                                            disabled
                                                            class="label-value"
                                                            :value="
                                                                advertisement.transition_type
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6 mt-1">
                                                        <label
                                                            for=""
                                                            class="all-label semi-bold"
                                                            >Watch review on
                                                            Youtube:</label
                                                        >
                                                    </div>
                                                    <div class="col-6 mt-1">
                                                        <a
                                                            href="#_"
                                                            class="blue-text"
                                                            >{{
                                                                advertisement.review_url
                                                            }}</a
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="d-sm-flex mt-1 align-items-center justify-content-between"
                                    >
                                        <h3 class="mt-1 mb-0">Overview</h3>
                                        <button class="site-btn mt-1 px-1">
                                            Print Car Details
                                        </button>
                                    </div>
                                    <div class="white-div p-md-2 mt-2 p-1">
                                        <p class="mb-0 p-md medium">
                                            {{ advertisement.overview }}
                                        </p>
                                    </div>
                                    <h3 class="my-2">Vehicle History Report</h3>
                                    <div class="white-div p-md-2 mt-2 p-1">
                                        <p class="black-text mb-0">
                                            <input
                                                type="checkbox"
                                                id="stopover"
                                                name="radio-group"
                                            />
                                            <label
                                                for="stopover"
                                                class="bordered mb-0"
                                                >No Accident or Damage
                                                Reported</label
                                            >
                                        </p>
                                        <p class="black-text mt-1 mb-0">
                                            <input
                                                type="checkbox"
                                                id="stopover2"
                                                name="radio-group"
                                            />
                                            <label
                                                for="stopover2"
                                                class="bordered mb-0"
                                                >One Owner</label
                                            >
                                        </p>
                                        <a class="blue-text mt-1 d-inline-block"
                                            >View the Free CARFAX Report</a
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
import { mapActions, mapState } from "vuex";
import carousel from "vue-owl-carousel";
export default {
    components: {
        carousel,
    },
    data() {
        return {
            data: {},
            updatedcarousel: 0,
        };
    },
    computed: {
        ...mapState("admin", ["advertisement"]),
    },
    created() {
        this.fetch();
    },
    methods: {
        ...mapActions("admin", ["getAll"]),
        async fetch() {
            let { type, status } = this.$route.params;
            let params = {
                route: `api/advertisements/show/${this.$route.params.id}`,
                mutation: "SET_ADVERTISEMENT",
                variable: "data",
            };
            let { data } = await this.getAll(params);
            this.updatedcarousel++;
            if (page != 1) {
                this.addRouteQuery({ page });
            } else {
                this.addRouteQuery({});
            }
        },
        async markInActive() {
            const status = 0;
            let params = {
                route: `api/advertisements/status/${this.$route.params.id}/${status}`,
            };

            let response = await axios.post(params.route);
            if (response.data.status == 200) {
                this.$snotify.success(response.data.message);
            } else {
                this.$snotify.error(response.data.message);
            }
        },
    },
};
</script>
