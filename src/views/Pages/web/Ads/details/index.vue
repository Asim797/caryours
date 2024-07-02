<template>
    <div>
        <section class="categories py-md-5 py-4">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <a href="categories.php" class="blue-text">
                            <em class="fas fa-long-arrow-alt-left"></em> Back</a>
                        </div>
                        <div class="col-lg-8 my-3">
                            <div class="filter-card px-4">
                                <p class="p-lg bold mb-0">Preview</p>
                                <div class="preview-card">
                                    <div class="row">
                                        <div class="col-lg-7 my-3 p-0 ">
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
                                                class="img-fluid"
                                                />
                                            </div>
                                        </carousel>

                                        <!-- <div class="car-wrapper">
                                            <div class="d-flex car-inner-wrapper align-items-center px-4">
                                                <img src="images/car-inner-1.png" alt="" class="img-fluid me-2">
                                            </div>
                                        </div> -->
                                    </div>
                                    <div class="col-lg-5 my-3 preview-right">
                                        <p class="p-xl bold">Toyota Highlander</p>
                                        <div class="d-md-flex mt-3 align-items-center justify-content-between">
                                            <div class="d-flex align-items-center">
                                                <em class="fas fa-map-marker-alt red-text"></em>
                                                <p class="l-grey-text mb-0 mx-3">New York, USA</p>
                                                <span class="red-tag">{{data?.year}}</span>
                                            </div>
                                        </div>
                                        <p class="p-xl mb-0 bold">${{data?.price}}</p>
                                        <div class="d-flex flex-wrap">
                                            <span class="blue-tag p-xxs mt-1 me-1">{{data?.mileage}} KM</span>
                                            <span class="blue-tag p-xxs mt-1 me-1">{{data?.engine_type}}</span>
                                            <span class="blue-tag p-xxs mt-1 me-1">{{data?.engine_capacity}} CC</span>
                                            <span class="blue-tag p-xxs mt-1">{{data?.transition_type}}</span>
                                        </div>
                                        <p class="l-grey-text mt-3 medium">{{data?.make?.name}}</p>
                                        <p class="l-grey-text medium">{{data?.model?.name}}</p>
                                        <p class="l-grey-text medium">{{data?.year}}</p>
                                        <p class="l-grey-text medium">{{data?.mileage}} Km</p>

                                        <p class="l-grey-text medium">{{data?.engine_type}}</p>
                                        <p class="l-grey-text medium">{{data?.engine_capacity}} CC</p>
                                        <p class="l-grey-text medium">{{data?.body_type}}</p>
                                        <p class="l-grey-text medium">{{data?.overview}}</p>
                                        <button class="site-btn grey-btn w-100 mt-2 px-3">Message
                                            <em class="ms-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12.3" viewBox="0 0 13.5 13.849">
                                                <g id="arrow-bottom-right" transform="translate(-3.429)">
                                                    <path id="Path_1" data-name="Path 1" d="M12.065,20.61l1.873,1.873,8.98-9.328v6.068h2.647V8.635H14.976v2.647h6.07l-8.98,9.328Z" transform="translate(-8.636 -8.635)" fill="#fff" />
                                                </g>
                                            </svg>
                                        </em>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <site-footer></site-footer>
</div>
</template>
<script>
import { mapActions } from "vuex";
const SiteFooter = () =>
import("@views/Pages/web/Components/footer/site-footer.vue");
import carousel from "vue-owl-carousel";
import MoneyFormat from "vue-money-format";

export default {
    components: {
        SiteFooter,
        carousel,
        MoneyFormat,
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
    },
};
</script>
