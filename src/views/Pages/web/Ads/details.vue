<template>
    <div>
        <section class="categories py-md-5 py-4">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div
                        class="d-md-flex align-items-center justify-content-between"
                        >
                        <router-link
                        :to="{ name: 'web.ads.index' }"
                        class="blue-text"
                        ><i class="fas fa-long-arrow-alt-left"></i>
                        Back</router-link
                        >
                        <div class="d-sm-flex justify-content-end text-end">
                            <!-- <div class="text-end mt-3 mt-md-0">
                                <p class="mb-0 medium">Featured : 5 Days</p>
                                <p class="mb-0 medium">Valid Till : May 05, 2021 </p>
                            </div> -->

                            <div class="text-end mt-3 mt-md-0">
                                <button class="site-btn ms-3 mt-3 mt-md-0 px-4"
                                @click="featureAds()"
                                >
                                Feature Request
                            </button>

                        </div>

                        <button
                        class="site-btn ms-3 mt-3 mt-md-0 px-4"
                        @click="markInActive()"
                        >
                        Mark
                        {{ (data.status === "1" || data.status === 1) ? "Inactive" : "Active" }}
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
        </button>
    </div>
</div>
</div>
<div class="col-lg-7 my-3">
    <carousel
    :key="updatedcarousel"
    :nav="false"
    :autoHeight="false"
    :autoplay="true"
    :loop="true"
    :responsive="{
        1440: { items: 1, nav: false },
        1024: { items: 1, nav: false },
        768: { items: 1, nav: false },
        320: { items: 1, nav: false },
    }"
    >
    <div
    class="item"
    v-for="(images, index) in data.sec_image"
    >
    <img
    :src="`${base_url}/assets/upload/advertisement/${images.images}`"
    alt=""
    class="img-fluid car-bg"
    />
</div>
</carousel>

<div
class="owl-carousel car-carousel-2 owl-theme"
:key="updatedcarousel"
></div>
</div>
<div class="col-lg-5">
    <div class="row">
        <div
        class="col-6 my-3"
        v-for="(images, index) in data.sec_image"
        >
        <img
        :src="`${base_url}/assets/upload/advertisement/${images.images}`"
        alt=""
        class="img-fluid car-inner"
        />
    </div>
</div>
</div>
<div class="col-12 mt-3">
    <div
    class="d-md-flex align-items-center justify-content-between"
    >
    <h1 class="order-md-1 order-2">{{ data?.make?.name }}</h1>
    <div class="order-md-2 text-end order-1">
        <span class="d-green-tag">{{
            (data.status === "1" || data.status === 1) ? "Active" : "In-Active"
        }}</span>
        <p class="p-lg mt-3 mb-0 medium l-grey-text">
            {{ formatDate(data.created_at) }}
        </p>
    </div>
</div>
<div
class="d-md-flex mt-3 align-items-center justify-content-between"
>
<div class="d-flex align-items-center">
    <i
    class="p-xl fas fa-map-marker-alt red-text"
    ></i>
    <p class="p-lg l-grey-text mb-0 mx-3">
       {{data?.zip_code}}
    </p>
    <span class="red-tag p-xl">{{
        data?.year
    }}</span>
</div>
<h1>
    ${{data.price}}
</h1>
</div>
<div>
    <span class="blue-tag p-xl mt-3 me-3"
    >{{ data.mileage }} KM</span
    >
    <span class="blue-tag p-lg mt-3 me-3">{{
        data.engine_type
    }}</span>
    <span class="blue-tag p-lg mt-3 me-3">{{
        data.engine_capacity
    }} cc</span>
    <span class="blue-tag p-lg mt-3">{{
        data.transition_type
    }}</span>
</div>
<p class="p-xl red-text mb-2 mt-3">
    {{ data.user.first_name }}
</p>
<div class="d-flex align-items-center">
    <!-- <i class="fas p-lg fa-star yellow-text"></i>
    <i class="fas p-lg fa-star yellow-text"></i>
    <i class="fas p-lg fa-star yellow-text"></i>
    <i class="fas p-lg fa-star yellow-text"></i>
    <i class="fas p-lg fa-star yellow-text"></i>
    <a
    href="rating-reviews.php"
    class="p-md l-grey-text ms-3"
    >245 reviews</a
    > -->
</div>
<div
class="d-md-flex align-items-center justify-content-between"
>

<div class="d-flex align-items-center mt-lg-4 mt-3">
    <button class="action-btn-sm me-2">
        <i
        ><svg
        id="print"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 43.344 43.346"
        >
        <path
        id="Path_145"
        data-name="Path 145"
        d="M37.606,11.248V1.125H7.988V11.248a7.233,7.233,0,0,0-6.863,7.215V35.8h6.14v-2.89H4.015V18.463a4.34,4.34,0,0,1,4.334-4.334h28.9a4.34,4.34,0,0,1,4.334,4.334V32.911H37.606V35.8h6.863V18.463A7.233,7.233,0,0,0,37.606,11.248Zm-2.89-.009H10.878V4.015h23.84Z"
        transform="translate(-1.125 -1.125)"
        fill="#0586f4"
        />
        <path
        id="Path_146"
        data-name="Path 146"
        d="M27.844,14.063h2.89v2.89h-2.89Z"
        transform="translate(6.471 2.553)"
        fill="#0586f4"
        />
        <path
        id="Path_147"
        data-name="Path 147"
        d="M8.955,18.563H5.344v2.89H8.957V39.513H33.519V21.453h3.613v-2.89ZM30.628,36.624H11.845V21.453H30.628Z"
        transform="translate(0.074 3.832)"
        fill="#0586f4"
        />
    </svg>
</i>
</button>
<a  :href="`https://www.facebook.com/sharer/sharer.php?u=${base_url}/site-manager/web/category/ads/${this.$route.params.id}`" class="action-btn-sm me-2">
    <i class="fas fa-share p-md"></i>
</a>

</div>
</div>
</div>
<div class="col-12 my-lg-5 my-md-4 my-3">
    <hr class="grey-line" />
</div>
<div class="col-12 mb-3">
    <h2>Seller Details</h2>
    <div class="row">
        <div class="col-md-4 my-3">
            <label for="" class="p-md bold">Name</label>
            <p class="l-grey-text mb-0 medium p-md">
                {{ data?.user?.first_name }}
            </p>
        </div>
        <div class="col-md-4 my-3">
            <label for="" class="p-md bold"
            >Contact Number</label
            >
            <p class="l-grey-text mb-0 medium p-md">
                {{ data?.user?.phone_number }}
            </p>
        </div>
        <div class="col-md-4 my-3">
            <label for="" class="p-md bold">Email</label>
            <p class="l-grey-text mb-0 medium p-md">
                {{ data?.user?.email }}
            </p>
        </div>
    </div>
    <button
    class="site-btn mt-3 px-3"
    data-bs-toggle="modal"
    data-bs-target=".getFinance"
    >
    Get Car Financing
    <i class="ms-2">
    <svg
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
</button>
</div>
<div class="col-12 my-lg-5 my-md-4 my-3">
    <hr class="grey-line" />
</div>
<div class="col-12 mb-3">
    <div
    class="d-sm-flex align-items-center justify-content-between"
    >
    <h2>Car Details</h2>
    <img
    :src="`${base_url}/assets/web/images/tm.png`"
    alt=""
    class="img-fluid mt-sm-0 mt-3"
    />
</div>
</div>
<div class="col-12 mt-lg-3">
    <div class="row">
        <div
        class="col-xxl col-xl-4 col-md-4 py-3 col-sm-6 border-right border-bottom"
        >
        <div
        class="d-flex justify-content-center align-items-center"
        >
        <div class="flex shrink-0">
            <img
            :src="`${base_url}/assets/web/images/car-details-icon-1.png`"
            alt=""
            class="img-fluid"
            />
        </div>
        <div class="flex-grow-1 ms-3">
            <p class="p-md mb-0 bold">Make</p>
            <p class="p-md mb-0 medium l-grey-text">
                {{ data?.make?.name }}
            </p>
        </div>
    </div>
</div>
<div
class="col-xxl col-xl-4 col-md-4 py-3 col-sm-6 border-right border-bottom"
>
<div
class="d-flex justify-content-center align-items-center"
>
<div class="flex shrink-0">
    <img
    :src="`${base_url}/assets/web/images/car-details-icon-2.png`"
    alt=""
    class="img-fluid"
    />
</div>
<div class="flex-grow-1 ms-3">
    <p class="p-md mb-0 bold">Model</p>
    <p class="p-md mb-0 medium l-grey-text">
        {{ data?.model?.name }}
    </p>
</div>
</div>
</div>
<div
class="col-xxl col-xl-4 col-md-4 py-3 col-sm-6 border-right border-bottom"
>
<div
class="d-flex justify-content-center align-items-center"
>
<div class="flex shrink-0">
    <img
    :src="`${base_url}/assets/web/images/car-details-icon-3.png`"
    alt=""
    class="img-fluid"
    />
</div>

</div>
</div>
<div
class="col-xxl col-xl-4 col-md-4 py-3 col-sm-6 border-right border-bottom"
>
<div
class="d-flex justify-content-center align-items-center"
>
<div class="flex shrink-0">
    <img
    :src="`${base_url}/assets/web/images/car-details-icon-4.png`"
    alt=""
    class="img-fluid"
    />
</div>
<div class="flex-grow-1 ms-3">
    <p class="p-md mb-0 bold">
        Engine Capacity
    </p>
    <p class="p-md mb-0 medium l-grey-text">
        {{ data.engine_capacity }}cc
    </p>
</div>
</div>
</div>
<div
class="col-xxl col-xl-4 col-md-4 py-3 col-sm-6 border-bottom"
>
<div
class="d-flex justify-content-center align-items-center"
>
<div class="flex shrink-0">
    <img
    :src="`${base_url}/assets/web/images/car-details-icon-5.png`"
    alt=""
    class="img-fluid"
    />
</div>
<div class="flex-grow-1 ms-3">
    <p class="p-md mb-0 bold">Color</p>
    <p class="p-md mb-0 medium l-grey-text">
        {{ data.color }}
    </p>
</div>
</div>
</div>
</div>
<div class="row">
    <div
    class="col-xxl col-xl-4 col-md-4 py-3 col-sm-6 border-right"
    >
    <div
    class="d-flex justify-content-center align-items-center"
    >
    <div class="flex shrink-0">
        <img
        :src="`${base_url}/assets/web/images/car-details-icon-6.png`"
        alt=""
        class="img-fluid"
        />
    </div>
    <div class="flex-grow-1 ms-3">
        <p class="p-md mb-0 bold">Year</p>
        <p class="p-md mb-0 medium l-grey-text">
            {{ data?.year }}
        </p>
    </div>
</div>
</div>
<div
class="col-xxl col-xl-4 col-md-4 py-3 col-sm-6 border-right"
>
<div
class="d-flex justify-content-center align-items-center"
>
<div class="flex shrink-0">
    <img
    :src="`${base_url}/assets/web/images/car-details-icon-7.png`"
    alt=""
    class="img-fluid"
    />
</div>
<div class="flex-grow-1 ms-3">
    <p class="p-md mb-0 bold">Mileage</p>
    <p class="p-md mb-0 medium l-grey-text">
        {{ data.mileage }} Km
    </p>
</div>
</div>
</div>
<div
class="col-xxl col-xl-4 col-md-4 py-3 col-sm-6 border-right"
>
<div
class="d-flex justify-content-center align-items-center"
>
<div class="flex shrink-0">
    <img
    :src="`${base_url}/assets/web/images/car-details-icon-8.png`"
    alt=""
    class="img-fluid"
    />
</div>
<div class="flex-grow-1 ms-3">
    <p class="p-md mb-0 bold">
        Engine Type
    </p>
    <p class="p-md mb-0 medium l-grey-text">
        {{ data.engine_type }}
    </p>
</div>
</div>
</div>
<div
class="col-xxl col-xl-4 col-md-4 py-3 col-sm-6 border-right"
>
<div
class="d-flex justify-content-center align-items-center"
>
<div class="flex shrink-0">
    <img
    :src="`${base_url}/assets/web/images/car-details-icon-9.png`"
    alt=""
    class="img-fluid"
    />
</div>
<div class="flex-grow-1 ms-3">
    <p class="p-md mb-0 bold">Body Type</p>
    <p class="p-md mb-0 medium l-grey-text">
        {{ data.body_type }}
    </p>
</div>
</div>
</div>
<div
class="col-xxl col-xl-4 col-md-4 py-3 col-sm-6"
>
<div
class="d-flex justify-content-center align-items-center"
>
<div class="flex shrink-0">
    <img
    :src="`${base_url}/assets/web/images/car-details-icon-10.png`"
    alt=""
    class="img-fluid"
    />
</div>
<div class="flex-grow-1 ms-3">
    <p class="p-md mb-0 bold">
        Transition Type
    </p>
    <p class="p-md mb-0 medium l-grey-text">
        {{ data.transition_type }}
    </p>
</div>
</div>
</div>
</div>
</div>
<div class="col-12 mt-lg-3">
    <div
    class="d-md-flex justify-content-between align-items-center"
    >
    <div
    class="red-tag py-3 px-3 d-sm-inline-flex align-items-center"
    >
    <div class="flex-shrink-0 pe-sm-3">
        <img
        :src="`${base_url}/assets/web/images/youtube.png`"
        alt=""
        class="img-fluid"
        />
    </div>
    <div
    class="flex-grow-1 ps-sm-3 mt-2 mt-sm-0 border-left"
    >
    <p class="p-md mb-0 semi-bold black-text">
        Watch review on Youtube
    </p>
    <a :href="data.review_url" target="_blank" class="red-text p-lg"
    >{{ data.review_url }} review</a
    >
</div>
</div>
<img
:src="`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${base_url}/site-manager/web/category/ads/${this.$route.params.id}`"
alt=""
class="img-fluid mt-3 mt-md-0"
/>
</div>
</div>
<div class="col-12 my-lg-5 my-md-4 my-3">
    <hr class="grey-line" />
</div>
<div class="col-12">
    <h2>Overview</h2>
    <p class="p-md l-grey-text">{{ data.overview }}</p>
</div>
<div class="col-12 my-lg-5 my-md-4 my-3">
    <hr class="grey-line" />
</div>
<!-- <div class="col-12">
    <h2>Vehicle History Report</h2>
    <div
    class="d-lg-flex align-items-center justify-content-between mt-3"
    >
    <div>
        <div class="d-sm-flex">
            <p class="black-text mt-2 mb-0">
                <input
                type="checkbox"
                id="stopover16"
                name="radio-group-5"
                />
                <label
                for="stopover16"
                class="bordered mb-0"
                >No Accident or Damage
                Reported</label
                >
            </p>
            <p class="black-text mt-2 ms-sm-4 mb-0">
                <input
                type="checkbox"
                id="stopover17"
                checked
                name="radio-group-5"
                />
                <label
                for="stopover17"
                class="bordered mb-0"
                >One Owner</label
                >
            </p>
        </div>
        <a
        href="#_"
        class="p-lg blue-text d-inline-block mt-3"
        >View the Free CARFAX Report</a
        >
    </div>
    <img
    src="images/carfax.png"
    alt=""
    class="img-fluid mt-2"
    />
</div>
</div> -->
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
import carousel from "vue-owl-carousel";

export default {
    components: {
        SiteFooter,
        carousel,
    },
    data() {
        return {
            data: {},
            updatedcarousel: 0,
        };
    },

    created() {
        this.fetch();
    },
    methods: {
        ...mapActions("admin", ["getAll"]),
        async fetch() {
            let params = {
                route: `api/advertisements/show/${this.$route.params.id}`,
            };
            let { data } = await this.getAll(params);
            this.data = data.data;
            this.updatedcarousel++;
        },
        isLoggedIn() {
            return (
            localStorage.getItem("access-token") &&
            localStorage.getItem("userType") === "web" &&
            localStorage.getItem("siteManager") === "web"
            );
        },
        async markInActive() {
            const status = (this.data.status === "1" || this.data.status === 1) ? 0 : 1;
            let params = {
                route: `api/advertisements/status/${this.$route.params.id}/${status}`,
            };

            let response = await axios.post(params.route);
            if (response.data.status == 200) {
                this.$snotify.success(response.data.message);
                this.$router.push({ name: "web.ads.index",
                    params:{
                        status: status
                    } });
                setTimeout(function(){
                    location.reload()
                }, 10);
            } else {
                this.$snotify.error(response.data.message);
            }
        },

        async featureAds(){
            let params = {
                route: `api/advertisements/adsFeatures/${this.$route.params.id}`,
            };

            let response = await axios.get(params.route);
            if (response.data.status == 200) {
                this.$snotify.success(response.data.message);
                this.$router.push({ name: "web.ads.index" });
            } else {
                this.$snotify.error(response.data.message);
            }
        },

        async addWhislist(ads_id) {
            let params = {
                route: `api/whislist/store`,
                data: {
                    ads_id: ads_id,
                },
            };

            let response = await axios.post(params.route, params.data);
            if (response.data.status == 200) {
                this.$snotify.success(response.data.message);
                this.$router.push({ name: "web.home.category_detail" });
            } else {
                this.$snotify.error(response.data.message);
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
                this.$router.push({ name: "web.home.category_detail" });
            } else {
                this.$snotify.error(response.data.message);
            }
        },
    },
};
</script>
