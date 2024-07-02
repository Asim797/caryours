<template>
    <div>
        <section class="categories py-md-5 py-4">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-xl-3 my-3">
                        <div class="filter-card">
                            <p class="p-xl bold">Vehicle</p>
                            <router-link v-if="isLoggedIn()" :to="{name: 'web.ads.create'}" class="site-btn l-blue-btn w-100">
                                Create New listing
                            </router-link>
                            <!-- <p class="p-xl mt-3 mb-2 bold">Search</p>
                            <div class="search-bar w-100">
                                <input
                                type="text"
                                class="site-input"
                                v-model="search"
                                @change="fetch()"
                                placeholder="Search"
                                />
                                <button class="transparent-btn">
                                    <i class="fas fa-search red-text"></i>
                                </button>
                            </div> -->
                            <div
                            class="d-flex align-items-center justify-content-between"
                            >
                            <p class="p-xl mt-3 mb-0 bold">Filter Ads</p>
                            <a onclick="window.location.reload()" class="red-text mt-3 d-inline-flex"
                            >Clear All</a
                            >
                        </div>
                        <hr class="grey-line" />
                        <ul
                        class="nav category-tabs nav-tabs"
                        id="myTab"
                        role="tablist"
                        >
                        <li class="nav-item" role="presentation">
                            <button
                            class="nav-link"
                            id="home-tab"
                            type="button"
                            aria-controls="home"
                            aria-selected="true"
                            @click="adType('new')"
                            >
                            New Cars
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button
                        class="nav-link"
                        id="profile-tab"
                        type="button"
                        aria-controls="profile"
                        aria-selected="false"
                        @click="adType('used')"
                        >
                        Used Cars
                    </button>
                </li>
            </ul>
            <p class="semi-bold mt-3">Make</p>
            <label class="semi-bold mt-3 mb-1"
            >Make*</label
            >
            <select
            name="make"
            v-model="formData.make"
            @change="models(formData.make)"
            class="site-input"
            >
            <option value="" selected disabled>Enter Make</option>
            <option
            v-for="model in make"
            :value="model.id"
            >
            {{ model.name }}
        </option>
    </select>

    <hr class="grey-line" />
    <label class="semi-bold mt-3 mb-1"
    >Model*</label
    >
    <select
    @change="filterModelData()"
    name=""
    v-model="formData.model"
    class="site-input"
    >
    <option value="" selected disabled>
        Enter Model
    </option>
    <option
    v-for="model in models3"
    :value="model.id"
    >
    {{ model.name }}
</option>
</select>
    <hr class="grey-line" />
    <label class="semi-bold mb-2">Transition</label>
    <select
    name=""
    id=""
    v-model="transition"
    @change="fetch()"
    class="site-input"
    >
    <option value="" selected disabled>
        Transaction Type
    </option>
    <option value="automatic">Automatic</option>
    <option value="manual">Manual</option>
</select>

<hr class="grey-line" />
    <label class="semi-bold mt-3 mb-1"
    >Color*</label
    >
    <select
    name=""
    v-model="formData.color"
    class="site-input"
    >
    <option value="" selected disabled>
        Enter color
    </option>
    <option
    v-for="color in colors"
    :value="color"
    >
    {{ color }}
</option>
</select>

<hr class="grey-line" />
<p class="semi-bold mt-3">Engine Type</p>
<div class="mt-3">

    <select
    name=""
    v-model="formData.engine_type"
    class="site-input"
    >
    <option value="" selected>
        select engine_type
    </option>
    <option value="Gas/Petrol">
        Gas / Petrol
    </option>
    <option value="Hybrid">
        Hybrid
    </option>
    <option value="Diesel">
        Diesel
    </option>
</select>
</div>
<hr class="grey-line" />
<p class="semi-bold mt-3">Mileage</p>
<div
class="accordion filter-box-sm"
id="accordionExample"
>
<div class="accordion-item">
    <h2
    class="accordion-header"
    id="headingOne"
    >
    <button
    class="accordion-button"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#collapseOne"
    aria-expanded="true"
    aria-controls="collapseOne"
    >
    Select
</button>
</h2>
<div
id="collapseOne"
class="accordion-collapse collapse show"
aria-labelledby="headingOne"
data-bs-parent="#accordionExample"
>
<div class="accordion-body pt-0">
    <div class="row border-bottom">
        <div
        class="col-6 py-2 border-right"
        >
        <input
        type="text"
        placeholder="To"
        v-model="formData.mileague_to"
        class="transparent-input"
        />
    </div>
    <div class="col-6 py-2">
        <input
        type="text"
        placeholder="From"
        v-model="formData.mileague_from"
        class="transparent-input"
        />
    </div>
</div>
<!-- <div class="row">
    <div class="col-12 px-0">
        <div class="btn-group d-block filter-sm-inner" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
            <label class="btn px-3 py-2 w-100" for="btnradio1">10,000 Km </label>
            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn px-3 py-2 w-100" for="btnradio2">20,000 Km </label>
            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
            <label class="btn px-3 py-2 w-100" for="btnradio3">30,000 Km </label>
        </div>
    </div>
</div> -->
</div>
</div>
</div>
</div>
<hr class="grey-line" />
<p class="semi-bold mt-3">Price Range</p>
<div
class="accordion filter-box-sm"
id="accordionExample2"
>
<div class="accordion-item">
    <h2
    class="accordion-header"
    id="headingTwo"
    >
    <button
    class="accordion-button"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#collapseTwo"
    aria-expanded="true"
    aria-controls="collapseTwo"
    >
    Select
</button>
</h2>
<div
id="collapseTwo"
class="accordion-collapse"
aria-labelledby="headingTwo"
data-bs-parent="#accordionExample2"
>
<div class="accordion-body">
    <div class="row border-bottom">
        <div
        class="col-6 py-2 border-right"
        >
            <select
                    name=""
                    v-model="formData.price_to"
                    class="site-input"
            >
                <option value="" selected disabled>
                    To
                </option>
                <option value="5000">$5,000</option>
                <option value="6000">$6,000</option>
                <option value="7000">$7,000</option>
                <option value="8000">$8,000</option>
                <option value="9000">$9,000</option>
                <option value="10000">$10,000</option>
                <option value="11000">$11,000</option>
                <option value="12000">$12,000</option>
                <option value="13000">$13,000</option>
                <option value="14000">$14,000</option>
                <option value="15000">$15,000</option>
                <option value="16000">$16,000</option>
                <option value="17000">$17,000</option>
                <option value="18000">$18,000</option>
                <option value="19000">$19,000</option>
                <option value="20000">$20,000</option>
                <option value="21000">$21,000</option>
                <option value="22000">$22,000</option>
                <option value="23000">$23,000</option>
                <option value="24000">$24,000</option>
                <option value="25000">$25,000</option>
                <option value="26000">$26,000</option>
                <option value="27000">$27,000</option>
                <option value="28000">$28,000</option>
                <option value="29000">$29,000</option>
                <option value="30000">$30,000</option>
                <option value="31000">$31,000</option>
                <option value="32000">$32,000</option>
                <option value="33000">$33,000</option>
                <option value="34000">$34,000</option>
                <option value="35000">$35,000</option>
                <option value="36000">$36,000</option>
                <option value="37000">$37,000</option>
                <option value="38000">$38,000</option>
                <option value="39000">$39,000</option>
                <option value="40000">$40,000</option>
                <option value="41000">$41,000</option>
                <option value="42000">$42,000</option>
                <option value="43000">$43,000</option>
                <option value="44000">$44,000</option>
                <option value="45000">$45,000</option>
                <option value="46000">$46,000</option>
                <option value="47000">$47,000</option>
                <option value="48000">$48,000</option>
                <option value="49000">$49,000</option>
                <option value="50000">$50,000</option>
                <option value="51000">$51,000</option>
                <option value="52000">$52,000</option>
                <option value="53000">$53,000</option>
                <option value="54000">$54,000</option>
                <option value="55000">$55,000</option>
                <option value="56000">$56,000</option>
                <option value="57000">$57,000</option>
                <option value="58000">$58,000</option>
                <option value="59000">$59,000</option>
                <option value="60000">$60,000</option>
                <option value="61000">$61,000</option>
                <option value="62000">$62,000</option>
                <option value="63000">$63,000</option>
                <option value="64000">$64,000</option>
                <option value="65000">$65,000</option>
                <option value="66000">$66,000</option>
                <option value="67000">$67,000</option>
                <option value="68000">$68,000</option>
                <option value="69000">$69,000</option>
                <option value="70000">$70,000</option>
                <option value="71000">$71,000</option>
                <option value="72000">$72,000</option>
                <option value="73000">$73,000</option>
                <option value="74000">$74,000</option>
                <option value="75000">$75,000</option>
                <option value="76000">$76,000</option>
                <option value="77000">$77,000</option>
                <option value="78000">$78,000</option>
                <option value="79000">$79,000</option>
                <option value="80000">$80,000</option>
                <option value="81000">$81,000</option>
                <option value="82000">$82,000</option>
                <option value="83000">$83,000</option>
                <option value="84000">$84,000</option>
                <option value="85000">$85,000</option>
                <option value="86000">$86,000</option>
                <option value="87000">$87,000</option>
                <option value="88000">$88,000</option>
                <option value="89000">$89,000</option>
                <option value="90000">$90,000</option>
                <option value="91000">$91,000</option>
                <option value="92000">$92,000</option>
                <option value="93000">$93,000</option>
                <option value="94000">$94,000</option>
                <option value="95000">$95,000</option>
                <option value="96000">$96,000</option>
                <option value="97000">$97,000</option>
                <option value="98000">$98,000</option>
                <option value="99000">$99,000</option>
                <option value="100000">$100,000</option>
            </select>
    </div>
    <div class="col-6 py-2">
        <select
                name=""
                v-model="formData.price_from"
                class="site-input"
        >
            <option value="" selected disabled>
                To
            </option>
            <option value="5000">$5,000</option>
            <option value="6000">$6,000</option>
            <option value="7000">$7,000</option>
            <option value="8000">$8,000</option>
            <option value="9000">$9,000</option>
            <option value="10000">$10,000</option>
            <option value="11000">$11,000</option>
            <option value="12000">$12,000</option>
            <option value="13000">$13,000</option>
            <option value="14000">$14,000</option>
            <option value="15000">$15,000</option>
            <option value="16000">$16,000</option>
            <option value="17000">$17,000</option>
            <option value="18000">$18,000</option>
            <option value="19000">$19,000</option>
            <option value="20000">$20,000</option>
            <option value="21000">$21,000</option>
            <option value="22000">$22,000</option>
            <option value="23000">$23,000</option>
            <option value="24000">$24,000</option>
            <option value="25000">$25,000</option>
            <option value="26000">$26,000</option>
            <option value="27000">$27,000</option>
            <option value="28000">$28,000</option>
            <option value="29000">$29,000</option>
            <option value="30000">$30,000</option>
            <option value="31000">$31,000</option>
            <option value="32000">$32,000</option>
            <option value="33000">$33,000</option>
            <option value="34000">$34,000</option>
            <option value="35000">$35,000</option>
            <option value="36000">$36,000</option>
            <option value="37000">$37,000</option>
            <option value="38000">$38,000</option>
            <option value="39000">$39,000</option>
            <option value="40000">$40,000</option>
            <option value="41000">$41,000</option>
            <option value="42000">$42,000</option>
            <option value="43000">$43,000</option>
            <option value="44000">$44,000</option>
            <option value="45000">$45,000</option>
            <option value="46000">$46,000</option>
            <option value="47000">$47,000</option>
            <option value="48000">$48,000</option>
            <option value="49000">$49,000</option>
            <option value="50000">$50,000</option>
            <option value="51000">$51,000</option>
            <option value="52000">$52,000</option>
            <option value="53000">$53,000</option>
            <option value="54000">$54,000</option>
            <option value="55000">$55,000</option>
            <option value="56000">$56,000</option>
            <option value="57000">$57,000</option>
            <option value="58000">$58,000</option>
            <option value="59000">$59,000</option>
            <option value="60000">$60,000</option>
            <option value="61000">$61,000</option>
            <option value="62000">$62,000</option>
            <option value="63000">$63,000</option>
            <option value="64000">$64,000</option>
            <option value="65000">$65,000</option>
            <option value="66000">$66,000</option>
            <option value="67000">$67,000</option>
            <option value="68000">$68,000</option>
            <option value="69000">$69,000</option>
            <option value="70000">$70,000</option>
            <option value="71000">$71,000</option>
            <option value="72000">$72,000</option>
            <option value="73000">$73,000</option>
            <option value="74000">$74,000</option>
            <option value="75000">$75,000</option>
            <option value="76000">$76,000</option>
            <option value="77000">$77,000</option>
            <option value="78000">$78,000</option>
            <option value="79000">$79,000</option>
            <option value="80000">$80,000</option>
            <option value="81000">$81,000</option>
            <option value="82000">$82,000</option>
            <option value="83000">$83,000</option>
            <option value="84000">$84,000</option>
            <option value="85000">$85,000</option>
            <option value="86000">$86,000</option>
            <option value="87000">$87,000</option>
            <option value="88000">$88,000</option>
            <option value="89000">$89,000</option>
            <option value="90000">$90,000</option>
            <option value="91000">$91,000</option>
            <option value="92000">$92,000</option>
            <option value="93000">$93,000</option>
            <option value="94000">$94,000</option>
            <option value="95000">$95,000</option>
            <option value="96000">$96,000</option>
            <option value="97000">$97,000</option>
            <option value="98000">$98,000</option>
            <option value="99000">$99,000</option>
            <option value="100000">$100,000</option>
        </select>
    </div>
</div>
<!--  -->
</div>
</div>
</div>
</div>
<hr class="grey-line" />
<p class="semi-bold mt-3">Body Type</p>
<div class="mt-3">
    <select
    name=""
    v-model="formData.body_type"
    class="site-input"
    >
    <option value="" selected disabled>
        select body_type
    </option>
    <option value="convertible">
        Convertible
    </option>
    <option value="sedan">
        Sedan
    </option>
    <option value="wagon">
        Wagon
    </option>
</select>
</div>
<div
class="d-flex justify-content-center align-items-center mt-3"
>
<button  @click="fetch()"
class="site-btn white-btn mt-lg-4 me-2 mt-3 px-3"
>
Apply Filter
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
fill="#0586F4"
/>
</g>
</svg>
</i>
</button>

</div>
</div>
</div>
<div class="col-lg-8 col-xl-9">
    <div class="tab-content" id="myTabContent">
        <div
        class="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
        >
        <div class="row">
            <div class="col-12 my-3">
                <h4>Ads Listings</h4>
                <div
                class="d-flex align-items-center flex-wrap"
                >

            </div>
        </div>
            <div
        v-for="(
        ads, index
        ) of advertisement.data"
        class="col-xl-4 col-md-6 my-3"
        >
        <div class="featured-card">
            <button
            v-if="isLoggedIn() && ads.is_wishlisted === false"
            class="fav-btn"
            @click="addWhislist(ads.id)"
            >
            <i class="far fa-heart blue-text" ></i>
        </button>
        <router-link  :to="{name: 'web.auth.login'}" v-else-if="!isLoggedIn()"
        class="fav-btn"
        >
        <i class="fas fa-heart blue-text" ></i>
    </router-link>
    <button v-else-if="isLoggedIn() && ads.is_wishlisted === true"
    class="fav-btn"
    @click="removeWhislist(ads.id)"
    >
    <i class="fas fa-heart blue-text" ></i>
</button>

<div class="featured-img">
    <img
    :src="`${ads.primary_image}`"
    alt=""
    class="img-fluid wow slideInRight"
    data-wow-duration="0.3s"
    data-wow-delay="0.5s"
    style="
    visibility: visible;
    animation-duration: 0.3s;
    animation-delay: 0.5s;
    animation-name: slideInRight;
    "
    />
</div>
<div
class="featured-inner wow fadeInUp"
data-wow-duration="0.4s"
data-wow-delay="0.6s"
style="
visibility: visible;
animation-duration: 0.4s;
animation-delay: 0.6s;
animation-name: fadeInUp;
"
>
<p class="p-lg mb-0">
    {{ ads?.make?.name }}
</p>
<div
class="d-flex align-items-center justify-content-between"
>
<!-- <div class="d-flex mt-2">
    <em class="fas fa-star review-star"></em>
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
</div> -->
<span class="ad-tag mt-2"
>{{ads?.user?.ads_count}} Ads</span
>
</div>
<p
class="mb-0 l-grey-text mt-2 medium"
>
{{ ads?.user?.first_name }} {{ads?.user?.last_name}}
</p>
<hr />
<router-link
class="medium"
:to="{
    name: 'web.home.category_detail',
    params: { id: ads.id },
}"
>View Details
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
            <h3 v-if="!advertisement.data || advertisement.data.length === 0" class="text-center">No Record Found</h3>

<div class="col-12 mt-4">
    <template>
        <pagination
        class="float-right"
        :data="advertisement"
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
            formData:{
                make: "",
                model: "",
                engine_type: "",
                body_type: "",
                mileague_to:"",
                mileague_from: "",
                price_from: "",
                price_to:"",
                color: "",
                ads_type: ""
            },
            colors:[
                'black',
                'blue',
                'brown',
                'gold',
                'grey',
                'green',
                'orange',
                'purple',
                'red',
                'silver',
                'white',
                'yellow'
            ],
            advertisement: undefined,
            date: "",
            from: "",
            to: "",
            zip_code: '',
            status: 1,
            dateFilterCounter: 0,
            search: "",
            transition: "",
            feature: null,
            models3: [],
            make: [],
        };
    },
    created() {
        let { page } = this.$route.query;
        this.fetch(page);
        this.makes();
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
        adType(type){
            this.formData.ads_type = type;
            this.fetch();
        },
        async fetch(page = 1) {
            this.feature = this.$route.query.feature;
            this.formData.make = (this.$route.query.make) ? this.$route.query.make: this.formData.make;
            this.formData.model = (this.$route.query.model) ? this.$route.query.model: this.formData.model;
            this.formData.price_to = (this.$route.query.price_to) ? this.$route.query.price_to: this.formData.price_to;
            this.formData.price_from = (this.$route.query.price_from) ? this.$route.query.price_from: this.formData.price_from;
            this.zip_code = (this.$route.query.zipCode) ? this.$route.query.zipCode: '';
            console.log(this.$route.query.make);
            let params = {
                route: "api/advertisements/adsCategory",
                data: {
                    page,
                    status: this.status,
                    from: this.from,
                    to: this.to,
                    feature: this.feature,
                    search: this.search,
                    entries: this.entries,
                    transition: this.transition,
                    price_to: this.formData.price_to,
                    price_from: this.formData.price_from,
                    mileague_from: this.formData.mileague_from,
                    mileague_to: this.formData.mileague_to,
                    make: this.formData.make,
                    model: this.formData.model,
                    body_type: this.formData.body_type,
                    engine_type: this.formData.engine_type,
                    zip_code: this.zip_code,
                    color: this.formData.color,
                    ads_type: this.formData.ads_type
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
        isLoggedIn() {
            return (
            localStorage.getItem("access-token") &&
            localStorage.getItem("userType") === "web" &&
            localStorage.getItem("siteManager") === "web"
            );
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
                setTimeout(function () {
                    window.location.reload();
                }, 2000);
                this.$router.push({ name: "web.home.category" });
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
                setTimeout(function () {
                    window.location.reload();
                }, 2000);
                this.$router.push({ name: "web.home.category" });
            } else {
                this.$snotify.error(response.data.message);
            }
        },


        async makes() {
            let response = await axios.get("api/make");
            this.make = response.data.data;
        },
        async models(id) {
            let response = await axios.get(`api/model/${id}`);
            this.models3 = response.data.data;
        },
    },
};
</script>
