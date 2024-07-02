<template>
    <div>
        <section class="categories py-md-5 py-4">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <a href="#_" class="blue-text"
                        ><i class="fas fa-long-arrow-alt-left"></i> Back</a
                        >
                    </div>
                    <div class="col-lg-4 my-3">
                        <div class="filter-card">
                            <p class="p-xl bold mb-0">Post Ad</p>
                            <form-wizard @onComplete="onComplete">
                                <tab-content title="" :selected="true">
                                    <div class="form-group">
                                        <label for="" class="semi-bold mt-3"
                                        >Please enter your registration
                                        number</label
                                        >
                                        <input
                                        type="text"
                                        placeholder="Enter Registration Number"
                                        v-model="
                                        formData.registration_number
                                        "
                                        class="site-input mt-1"
                                        :class="
                                        hasError('registration_number')
                                        ? 'is-invalid'
                                        : ''
                                        "
                                        />
                                        <div
                                        v-if="
                                        hasError('registration_number')
                                        "
                                        class="invalid-feedback"
                                        >
                                        <div
                                        class="error"
                                        v-if="
                                        !$v.formData
                                        .registration_number
                                        .required
                                        "
                                        >
                                        register number is required.
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="" class="semi-bold mt-3"
                                >Please enter car Mileage</label
                                >
                                <input
                                type="text"
                                placeholder="Enter Car Mileage"
                                v-model="formData.mileague"
                                class="site-input mt-1"
                                :class="
                                hasError('mileague')
                                ? 'is-invalid'
                                : ''
                                "
                                />
                                <div
                                v-if="hasError('mileague')"
                                class="invalid-feedback"
                                >
                                <div
                                class="error"
                                v-if="
                                !$v.formData.mileague
                                .required
                                "
                                >
                                mileague is required.
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="" class="semi-bold mt-3"
                        >Please enter car video review
                        URL</label
                        >
                        <input
                        type="url"
                        placeholder="Enter car video review URL"
                        v-model="formData.review_url"
                        class="site-input mt-1"
                        :class="
                        hasError('review_url')
                        ? 'is-invalid'
                        : ''
                        "
                        />
                        <div
                        v-if="hasError('review_url')"
                        class="invalid-feedback"
                        >
                        <div
                        class="error"
                        v-if="
                        !$v.formData.review_url
                        .required
                        "
                        >
                        review url is required.
                    </div>
                </div>
            </div>

            <p
            class="p-md semi-bold blue-text mt-3 mb-0 bold"
            >
            Please provide the following details
        </p>
        <label class="semi-bold mt-3 mb-1"
        >Base Image</label
        >

        <div
        class="col-lg-3 col-md-6 mt-1"
        v-for="(
        image, index
        ) in base64CoverImages"
        :key="`imagecover${index}`"
        >
        <div class="position-relative">
            <img
            :src="image"
            :alt="`image ${index}`"
            class="img-fluid w-100"
            />
            <!-- <img src="images/image-delete.png" alt="" class="img-fluid w-100"> -->
            <button class="btn delete-img-btn">
                <i
                class="fas fa-times red-text"
                @click="
                removeCoverImage(index)
                "
                ></i>
            </button>
        </div>
    </div>

    <div class="col-12 mt-3">
        <div
        id="yourBtn"
        class="mt-2 upload-card"
        >
        <div class="form-group">
            <label
            for="file"
            class="blue-text cursor-pointer mt-2 medium p-md"
            >Upload Base Image</label
            >
            <input
            type="file"
            id="file"
            class="d-none"
            @change="coverImageChange"
            multiple
            :class="
            hasError('coverImage')
            ? 'is-invalid'
            : ''
            "
            />
            <div
            v-if="
            hasError('coverImage')
            "
            class="invalid-feedback"
            >
            <div
            class="error"
            v-if="
            !$v.formData
            .coverImage
            .required
            "
            >
            base image is required.
        </div>
    </div>
</div>

<span class="mx-auto"
>(Upload Upto 1 Photo)</span
>
</div>
<div
style="
height: 0px;
width: 0px;
overflow: hidden;
"
>
<input
id="upfile"
type="file"
value="upload"
onchange="sub(this)"
/>
</div>
</div>
<label class="semi-bold mt-3 mb-1"
>Primary Image</label
>
<div class="row" >
    <div v-for="(image, index) in base64Images"
    :key="`image${index}`"
    class="col-lg-3 col-md-6 mt-1"

    >
    <div class="position-relative">
        <img
        :src="image"
        :alt="`image1 ${index}`"
        class="img-fluid w-100"
        style="height: 58px;"
        />
        <!-- <img src="images/image-delete.png" alt="" class="img-fluid w-100"> -->
        <button class="btn delete-img-btn">
            <i
            class="fas fa-times red-text"
            @click="removeImage(index)"
            ></i>
        </button>
    </div>
</div>
</div>

<div class="col-12 mt-3">
    <div
    id="yourBtn"
    class="mt-2 upload-card"
    >
    <div class="form-group">
        <label
        for="file2"
        class="blue-text cursor-pointer mt-2 medium p-md"
        >Upload Images</label
        >
        <input
        type="file"
        id="file2"
        class="d-none"
        @change="imageChange"
        multiple
        :class="
        hasError('secFiles')
        ? 'is-invalid'
        : ''
        "
        />
        <div
        v-if="hasError('secFiles')"
        class="invalid-feedback"
        >
        <div
        class="error"
        v-if="
        !$v.formData
        .secFiles
        .required
        "
        >
        secondary image is
        required.
    </div>
</div>
</div>

<span class="mx-auto"
>(Upload Upto 4 Photos)</span
>
</div>
<div
style="
height: 0px;
width: 0px;
overflow: hidden;
"
>
<input
id="upfile"
type="file"
value="upload"
onchange="sub(this)"
/>
</div>
</div>

<div class="form-group">
    <label class="semi-bold mt-3 mb-1"
    >Make*</label
    >
    <select
    name="make"
    v-model="formData.make"
    @change="models(formData.make)"
    class="site-input"
    :class="
    hasError('make')
    ? 'is-invalid'
    : ''
    "
    >
    <option value="">Select Make</option>
    <option
    v-for="model in make"
    :value="model.id"
    >
    {{ model.name }}
</option>
</select>

<div
v-if="hasError('make')"
class="invalid-feedback"
>
<div
class="error"
v-if="
!$v.formData.make.required
"
>
make model is required.
</div>
</div>
</div>

<div class="form-group">
    <label class="semi-bold mt-3 mb-1"
    >Model*</label
    >
    <select
    @change="filterModelData()"
    name=""
    v-model="formData.model"
    class="site-input"
    :class="
    hasError('model')
    ? 'is-invalid'
    : ''
    "
    >
    <option value="">
        Select Model
    </option>
    <option
    v-for="model in models3"
    :value="model.id"
    >
    {{ model.name }}
</option>
</select>
<div
v-if="hasError('model')"
class="invalid-feedback"
>
<div
class="error"
v-if="
!$v.formData.model.required
"
>
model is required.
</div>
</div>
</div>

<div class="form-group">
    <label class="semi-bold mt-3 mb-1"
    >Model Years*</label
    >
    <select
    name=""
    v-model="formData.model_year"
    class="site-input"
    :class="
    hasError('model')
    ? 'is-invalid'
    : ''
    "
    >
    <option value="">
        Enter Model
    </option>
    <option
    v-for="year in years"
    :value="year"
    >
    {{ year }}
</option>
</select>
<div
v-if="hasError('model')"
class="invalid-feedback"
>
<div
class="error"
v-if="
!$v.formData.model.required
"
>
model is required.
</div>
</div>
</div>



<div class="form-group">
    <label class="semi-bold mt-3 mb-1"
    >Transmission Type*</label
    >
    <select
    name=""
    v-model="formData.transition_type"
    class="site-input"
    :class="
    hasError('transition_type')
    ? 'is-invalid'
    : ''
    "
    >
    <option value="" selected disabled>
        select transition type
    </option>
    <option value="Automatic">
        Automatic
    </option>
    <option value="Manual">
        Manual
    </option>
</select>
<div
v-if="hasError('transition_type')"
class="invalid-feedback"
>
<div
class="error"
v-if="
!$v.formData.transition_type
.required
"
>
version model is required.
</div>
</div>
</div>

<div class="form-group">
    <label class="semi-bold mt-3"
    >Engine Type*</label
    >
    <select
    name=""
    v-model="formData.engine_type"
    class="site-input"
    :class="
    hasError('engine_type')
    ? 'is-invalid'
    : ''
    "
    >
    <option value="" selected disabled>
        select engine type
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
    <div
    v-if="hasError('engine_type')"
    class="invalid-feedback"
    >
    <div
    class="error"
    v-if="
    !$v.formData.engine_type
    .required
    "
    >
    engine type is required.
</div>
</div>
</div>
</tab-content>

<tab-content title="">
    <div class="form-group">
        <label class="semi-bold mt-3"
        >Engine Capacity*</label
        >
        <input
        type="text"
        v-model="formData.engine_capacity"
        class="site-input mt-1"
        :class="
        hasError('engine_capacity')
        ? 'is-invalid'
        : ''
        "
        />
        <div
        v-if="hasError('engine_capacity')"
        class="invalid-feedback"
        >
        <div
        class="error"
        v-if="
        !$v.formData.engine_capacity
        .required
        "
        >
        engine type is required.
    </div>
</div>
</div>

<div class="form-group">
    <label class="semi-bold mt-3"
    >Body Type*</label
    >
    <select
    name=""
    v-model="formData.body_type"
    class="site-input"
    :class="
    hasError('body_type')
    ? 'is-invalid'
    : ''
    "
    >
    <option value="" selected disabled>
        select body type
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
    <div
    v-if="hasError('body_type')"
    class="invalid-feedback"
    >
    <div
    class="error"
    v-if="
    !$v.formData.body_type
    .required
    "
    >
    engine type is required.
</div>
</div>
</div>

<div class="form-group">
    <label class="semi-bold mt-3"
    >Color*</label
    >

    <select
    name=""
    v-model="formData.color"
    class="site-input"
    :class="
    hasError('color')
    ? 'is-invalid'
    : ''
    "
    >
    <option value="" selected disabled>
        select color
    </option>
    <option v-for="color in colors" :value="color">
        {{color}}
    </option>

</select>




    <div
    v-if="hasError('color')"
    class="invalid-feedback"
    >
    <div
    class="error"
    v-if="
    !$v.formData.color.required
    "
    >
    engine type is required.
</div>
</div>
</div>

<div class="form-group">
    <label class="semi-bold mt-3"
    >Price*</label
    >
    <input
    type="text"
    v-model="formData.price"
    class="site-input mt-1"
    :class="
    hasError('price')
    ? 'is-invalid'
    : ''
    "
    />
    <div
    v-if="hasError('price')"
    class="invalid-feedback"
    >
    <div
    class="error"
    v-if="
    !$v.formData.price.required
    "
    >
    engine type is required.
</div>
</div>
</div>
<div class="form-group">
    <label class="semi-bold mt-3"
    >zip code*</label
    >
    <input
    type="text"
    maxlength="5"
    v-model="formData.zip_code"
    class="site-input mt-1"
    :class="
    hasError('zip_code')
    ? 'is-invalid'
    : ''
    "
    />
    <div
    v-if="hasError('zip_code')"
    class="invalid-feedback"
    >
    <div
    class="error"
    v-if="
    !$v.formData.zip_code
    .required
    "
    >
    zip code is required.
</div>
</div>
</div>

<div class="form-group">
    <label class="semi-bold mt-3"
    >Ad Type*</label
    >
    <select
    name=""
    v-model="formData.ad_type"
    class="site-input"
    :class="
    hasError('ad_type')
    ? 'is-invalid'
    : ''
    "
    >
    <option value="" selected disabled>
        select ad type
    </option>
    <option value="new">
        New Ad
    </option>
    <option value="used">
        Old Ad
    </option>

</select>
    <div
    v-if="hasError('ad_type')"
    class="invalid-feedback"
    >
    <div
    class="error"
    v-if="
    !$v.formData.ad_type
    .required
    "
    >
    ads type is required.
</div>
</div>
</div>
<div class="form-group">
    <label class="semi-bold mt-3"
    >Overview*</label
    >
    <textarea
    type="text"
    v-model="formData.overview"
    class="site-input mt-1"
    :class="
    hasError('overview')
    ? 'is-invalid'
    : ''
    "
    ></textarea>
    <div
    v-if="hasError('overview')"
    class="invalid-feedback"
    >
    <div
    class="error"
    v-if="
    !$v.formData.overview
    .required
    "
    >
    engine type is required.
</div>
</div>
</div>
</tab-content>

<!-- <button type="submit" class="site-btn w-100 mt-lg-5 mt-3 px-3">Next
    <i class="ms-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12.3" viewBox="0 0 13.5 13.849">
        <g id="arrow-bottom-right" transform="translate(-3.429)">
            <path id="Path_1" data-name="Path 1" d="M12.065,20.61l1.873,1.873,8.98-9.328v6.068h2.647V8.635H14.976v2.647h6.07l-8.98,9.328Z" transform="translate(-8.636 -8.635)" fill="#fff" />
        </g>
    </svg>
</i>
</button> -->
</form-wizard>
<div class="text-center mt-3">
    <a
    href="#_"
    class="blue-text semi-bold"
    data-bs-toggle="modal"
    data-bs-target=".carAdvertise"
    >Advertis your car with us</a
    >
</div>

<div class="modal fade carAdvertise" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="text-end">
          <button type="button" class="transparent-btn close-btn" data-bs-dismiss="modal" aria-label="Close"><i class="fas fa-times"></i></button>
        </div>
        <div class="modal-body pt-0 pb-5">
          <h2>Get your car <br> advertise with us !</h2>

            <label for="" class="p-md mt-3 semi-bold">Name</label>
            <input type="text" placeholder="Enter Name" v-model="advertismentForm.name" class="site-input mt-2">
            <label for="" class="p-md mt-3 semi-bold">Number</label>
            <input type="text" placeholder="Enter Number" v-model="advertismentForm.number" class="site-input mt-2">
            <label for="" class="p-md mt-3 semi-bold">Address</label>
            <input type="text" placeholder="Enter Address" v-model="advertismentForm.address" class="site-input mt-2">
            <label for="" class="p-md mt-3 semi-bold">Postal/Zipcode</label>
            <input type="number" placeholder="Enter Postal/Zipcode" v-model="advertismentForm.zipCode" class="site-input mt-2">
            <label for="" class="p-md mt-3 semi-bold">Services You Need</label>
            <div class="mt-3">
              <p class="black-text mb-0">
                <input type="radio"  id="service1" v-model="advertismentForm.serviceYouNeed" value="Car inspection" name="services">
                <label for="service1" class="bordered mb-0">Car Inspection</label>
              </p>
              <p class="black-text mt-2 mb-0">
                <input type="radio" v-model="advertismentForm.serviceYouNeed" id="service2" value="picture" name="services">
                <label for="service2" class="bordered mb-0">Pictures</label>
              </p>
              <p class="black-text mt-2 mb-0">
                <input type="radio" id="service3" v-model="advertismentForm.serviceYouNeed" value="video" name="services">
                <label for="service3" class="bordered mb-0">Video</label>
              </p>
            </div>
            <button class="site-btn mt-3 px-5" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target=".adError" @click="advertisementForm()">Submit
              <i class="ms-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12.3" viewBox="0 0 13.5 13.849">
                  <g id="arrow-bottom-right" transform="translate(-3.429)">
                    <path id="Path_1" data-name="Path 1" d="M12.065,20.61l1.873,1.873,8.98-9.328v6.068h2.647V8.635H14.976v2.647h6.07l-8.98,9.328Z" transform="translate(-8.636 -8.635)" fill="#fff" />
                  </g>
                </svg>
              </i>
            </button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div class="col-lg-8 my-3">
    <div class="filter-card px-4">
        <p class="p-lg bold mb-0">Preview</p>
        <div class="preview-card">
            <div class="row">
                <div class="col-lg-7 my-3 preview-left">
                    <p class="p-lg mb-2 bold">
                        Your Listing Preview
                    </p>
                    <p class="p-md mb-2 semi-bold">
                        As you Create your listing, you can
                        preview how it will appear to others
                    </p>
                </div>
                <div class="col-lg-5 my-3 preview-right">
                    <p class="p-xl bold">Title</p>
                    <p class="l-grey-text medium">
                        Registration Number:
                        <span style="color: black">{{
                            formData.registration_number
                        }}</span>
                    </p>
                    <p class="l-grey-text medium">
                        Car Mileage:
                        <span style="color: black">{{
                            formData.mileague
                        }}</span>
                    </p>
                    <p class="l-grey-text medium">
                        URL:
                        <span style="color: black">
                            <a :href="formData.review_url" target="_blank">
                                {{
                                    formData.review_url
                                }}
                            </a>
                        </span>


                    </p>
                    <p class="l-grey-text medium">
                        Price:
                        <span style="color: black">{{
                            formData.price
                        }}</span>
                    </p>
                    <p class="l-grey-text medium">
                        Make:
                        <span style="color: black">{{
                            make[formData.make-1]?.name
                        }}</span>
                    </p>

                    <p class="l-grey-text medium">
                        Model:
                        <span style="color: black">{{
                            formData.modelName
                        }}</span>
                    </p>
                    <button
                    class="site-btn grey-btn w-100 mt-lg-5 mt-3 px-3"
                    >
                    Message
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
</div>
</div>
</div>
</div>
</section>
<site-footer></site-footer>
</div>
</template>
<script>
const SiteFooter = () =>
import("@views/Pages/web/Components/footer/site-footer.vue");
import { FormWizard, TabContent, ValidationHelper } from "vue-step-wizard";
import "vue-step-wizard/dist/vue-step-wizard.css";
import { required } from "vuelidate/lib/validators";
import { email } from "vuelidate/lib/validators";
import { numeric } from "vuelidate/lib/validators";
export default {
    components: {
        FormWizard,
        TabContent,
    },
    mixins: [ValidationHelper],
    data() {
        return {
            formData: {
                registration_number: "",
                review_url: "",
                make: "",
                model: "",
                modelName: "",
                model_year: "",
                engine_type: "",
                engine_capacity: "",
                mileague: "",
                body_type: "",
                color: "",
                transition_type: "",
                overview: "",
                price: 0,
                zip_code: "",
                ad_type: "",
                secFiles: [],
                coverImage: [],
                videoFile: [],
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

            advertismentForm:{
                name: '',
                number: '',
                address: '',
                zipCode: '',
                serviceYouNeed: ''
            },
            validationRules: [
            {
                registration_number: { required },
                mileague: { required },
                coverImage: { required },
                secFiles: { required },
                make: { required },
                model: { required },
                engine_type: { required },
                review_url: { required },
            },
            {
                engine_capacity: { required },
                body_type: { required },
                price: { required },
                overview: { required },
                zip_code: { required },
                ad_type : { required },
            },
            { referral: { required }, terms: { required } },
            ],
            base64Images: [],
            base64CoverImages: [],
            base64Images1: [],
            base64VideoImage: [],
            models3: [],
            make: [],
        };
    },
    computed: {
        years: () => {
            let today = new Date();
            let currentYear = today.getFullYear();
            let last10Years = new Date(
            today.setFullYear(today.getFullYear() - 20)
            ).getFullYear();
            let years = [];
            for (var i = currentYear; i >= last10Years; i--) {
                years.push(i);
            }
            return years;
        },
    },
    created() {
        this.makes();
    },
    components: {
        SiteFooter,
    },
    methods: {
        async save() {
            try {
                let data = new FormData();

                for (const key in this.form) {
                    if (Array.isArray(this.form[key])) {
                        if (key == "secFiles") {
                            for (const fk in this.form[key]) {
                                data.append(`secFiles[]`, this.form[key][fk]);
                            }
                        } else if (key == "coverImage") {
                            for (const fk in this.form[key]) {
                                data.append(`coverImage[]`, this.form[key][fk]);
                            }
                        }
                    } else {
                        data.append(key, this.form[key]);
                    }
                }

                let result = await axios.post(
                `api/web/advertisement/create`,
                data
                );
                if (result.data.data) {
                    this.$snotify.success("Ad Created successfully", "Success");
                    this.$router.push({ name: "web.home.category_detail",
                        params: {
                            id: result.data.data.id
                        }
                    });
                } else {
                    this.$snotify.success("Error occur adding ad", "Error");
                }

                console.log(result.data.data.id);
            } catch (e) {
                console.log(e);
            }
        },
        async advertisementForm() {
            let result = await axios.post(
                `api/advertisement-forms/store`,
                this.advertismentForm
                );
                if (result.data.data) {
                    this.$snotify.success("Advertisement Form Send to admin successfully", "Success");
                } else {
                    this.$snotify.success("Error occur adding ad", "Error");
                }
        },
        filterModelData(){
            var md = this.models3.filter((el) =>
            {
                return el.id  ===  this.formData.model;
            }
            );
            this.formData.modelName = md[0]?.name;
        },
        async getCategory() {
            let response = await axios.get("/api/category");
            this.categories = response.data;
        },

        async makes() {
            let response = await axios.get("api/make");
            this.make = response.data.data;
        },
        async models(id) {
            let response = await axios.get(`api/model/${id}`);
            this.models3 = response.data.data;
        },

        imageChange(e) {
            Array.from(e.target.files).forEach((file) => {
                if (this.formData.secFiles.length === 4) {
                    this.$snotify.warning("Only 3 pictures can be uploaded");
                    return;
                }

                this.formData.secFiles.push(file);

                const reader = new FileReader();
                reader.onload = (e) => {
                    this.base64Images.push(e.target.result);
                };
                reader.readAsDataURL(file);
            });
        },
        coverImageChange(e) {
            Array.from(e.target.files).forEach((file) => {
                if (this.formData.coverImage.length === 1) {
                    this.$snotify.warning("Only 1 pictures can be uploaded");
                    return;
                }

                this.formData.coverImage.push(file);

                const reader = new FileReader();
                reader.onload = (e) => {
                    this.base64CoverImages.push(e.target.result);
                };
                reader.readAsDataURL(file);
            });
        },
        removeImage(index) {
            this.formData.secFiles.splice(index, 1);
            this.base64Images.splice(index, 1);
        },
        removeCoverImage(index) {
            this.formData.coverImage.splice(index, 1);
            this.base64CoverImages.splice(index, 1);
        },
        imageChange1(e) {
            Array.from(e.target.files).forEach((file) => {
                if (this.formData.baseFiles.length === 4) {
                    this.$snotify.warning("Only 1 pictures can be uploaded");
                    return;
                }

                this.formData.baseFiles.push(file);

                const reader = new FileReader();
                reader.onload = (e) => {
                    this.base64Images1.push(e.target.result);
                };
                reader.readAsDataURL(file);
            });
        },
        async onComplete() {
            try {
                let data = new FormData();

                for (const key in this.formData) {
                    if (Array.isArray(this.formData[key])) {
                        if (key == "secFiles") {
                            for (const fk in this.formData[key]) {
                                data.append(
                                `secFiles[]`,
                                this.formData[key][fk]
                                );
                            }
                        } else if (key == "coverImage") {
                            for (const fk in this.formData[key]) {
                                data.append(
                                `coverImage[]`,
                                this.formData[key][fk]
                                );
                            }
                        }
                    } else {
                        data.append(key, this.formData[key]);
                    }
                }

                let result = await axios.post(
                `api/web/advertisement/create`,
                data
                );
                if (result.data.data) {
                    this.$snotify.success("Ad Created successfully", "Success");
                    this.$router.push({ name: "web.home.category_detail",
                        params: {
                            id: result.data.data.id
                        }
                    });
                } else {
                    this.$snotify.success("Error occur adding ad", "Error");
                }

                console.log(result.data.data.id);
            } catch (e) {
                console.log(e);
            }
        },
        getVideoCover(file, seekTo = 0.0) {
            this.formData.videoFile.push(file);
            console.log("getting video cover for file: ", file);
            return new Promise((resolve, reject) => {
                // load the file to a video player
                const videoPlayer = document.createElement("video");
                videoPlayer.setAttribute("src", URL.createObjectURL(file));
                videoPlayer.load();
                videoPlayer.addEventListener("error", (ex) => {
                    reject("error when loading video file", ex);
                });
                // load metadata of the video to get video duration and dimensions
                videoPlayer.addEventListener("loadedmetadata", () => {
                    // seek to user defined timestamp (in seconds) if possible
                    if (videoPlayer.duration < seekTo) {
                        reject("video is too short.");
                        return;
                    }
                    // delay seeking or else 'seeked' event won't fire on Safari
                    setTimeout(() => {
                        videoPlayer.currentTime = seekTo;
                    }, 200);
                    // extract video thumbnail once seeking is complete
                    videoPlayer.addEventListener("seeked", () => {
                        console.log("video is now paused at %ss.", seekTo);
                        // define a canvas to have the same dimension as the video
                        const canvas = document.createElement("canvas");
                        canvas.width = videoPlayer.videoWidth;
                        canvas.height = videoPlayer.videoHeight;
                        // draw the video frame to canvas
                        const ctx = canvas.getContext("2d");
                        ctx.drawImage(
                        videoPlayer,
                        0,
                        0,
                        canvas.width,
                        canvas.height
                        );
                        // return the canvas image as a blob
                        ctx.canvas.toBlob(
                        (blob) => {
                            resolve(blob);
                        },
                        "image/jpeg",
                        0.75 /* quality */
                        );
                    });
                });
            });
        },
        async setFilePath(e) {
            try {
                let file = e.target.files[0];
                // get the frame at 1.5 seconds of the video file
                const cover = await this.getVideoCover(file, 0.5);
                // print out the result image blob

                //console.log(cover);
                var reader = new FileReader();
                reader.readAsDataURL(cover);
                reader.onload = (e) => {
                    var base64data = reader.result;
                    this.base64VideoImage.push(base64data);
                    console.log(base64data);
                };
            } catch (ex) {
                this.$snotify.error("ERROR: " + ex);
            }
        },
        removeImage1(index) {
            this.formData.baseFiles.splice(index, 1);
            this.base64Images1.splice(index, 1);
        },
        addGradient: function () {
            this.gradients.push(this.gradientObj());
        },
        removeGradient: function (sessionIndex) {
            this.gradients.splice(sessionIndex, 1);
        },
        gradientObj() {
            return { gradientName: "" };
        },
    },
};
</script>
