<template>
    <div>
        <ValidationObserver v-slot="{ handleSubmit }">
            <form
                ref="profileUpdate"
                @submit.prevent="handleSubmit(updateProfile)"
                class="px-lg-5"
            >
                <section class="login">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h1 class="text-center">Edit Profile</h1>
                            </div>

                            <div class="col-lg-3 col-md-4 my-3">
                                <div class="profile-pic">
                                    <img v-if="url" :src="`${url}`"
                                        class="img-fluid profile-pic" />
                                    <img
                                        v-else-if="
                                            user.image ==
                                            `${base_url}/assets/upload/user`
                                        "
                                        :src="`${base_url}/assets/web/images/profile-pic.png`"
                                        class="img-fluid"
                                    />
                                    <img
                                        :src="user.image"
                                        alt=""
                                        class="img-fluid profile-pic"
                                        v-else
                                    />
                                    <label for="upload-dp" class="camera-btn"
                                        ><i class="fas fa-camera"></i
                                    ></label>

                                    <div class="d-none">
                                        <input
                                            type="file"
                                            name="pic"
                                            @change="onFileChange"
                                            accept=".gif,.jpg,.png,.tif|image/*"
                                            id="upload-dp"
                                        />
                                        <!-- <input type="submit"> -->
                                    </div>
                                </div>
                                <!-- <input type="file" @change="onFileChange" name="pic"
                                        accept=".gif,.jpg,.png,.tif|image/*" id="upfile"> -->
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-sm-6 my-3">
                                        <ValidationProvider
                                            tag="div"
                                            name="first name"
                                            rules="required"
                                            v-slot="{ errors }"
                                        >
                                            <label for="" class="p-md bold"
                                                >First Name*</label
                                            >
                                            <input
                                                type="text"
                                                class="site-input"
                                                name="first_name"
                                                v-model="user.first_name"
                                                placeholder="Enter First Name"
                                            />
                                            <span class="text-danger">{{
                                                errors[0]
                                            }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-sm-6 my-3">
                                        <ValidationProvider
                                            tag="div"
                                            name="first name"
                                            rules="required"
                                            v-slot="{ errors }"
                                        >
                                            <label for="" class="p-md bold"
                                                >Last Name*</label
                                            >
                                            <input
                                                type="text"
                                                name="last_name"
                                                v-model="user.last_name"
                                                class="site-input"
                                                placeholder="Enter Last Name"
                                            />
                                            <span class="text-danger">{{
                                                errors[0]
                                            }}</span>
                                        </ValidationProvider>
                                    </div>

                                    <div class="col-sm-6 my-3">
                                        <label for="" class="p-md bold"
                                            >Email Address</label
                                        >
                                        <p class="profile-lbl-value">
                                            {{ user.email }}
                                        </p>
                                    </div>

                                    <div class="col-sm-6 my-3">
                                        <label for="" class="p-md bold"
                                            >Phone Numbers*</label
                                        >
                                        <input
                                            type="tel"
                                            name="phone_number"
                                            v-model="user.phone_number"
                                            v-mask="'+ 1 (###) ###-####'"
                                            class="site-input"
                                            placeholder="Enter Phone Number"
                                        />
                                    </div>

                                    <div class="col-sm-6 my-3">
                                        <label for="" class="p-md bold"
                                            >Postal/Zipcode</label
                                        >
                                        <input
                                            type="text"
                                            name="zip_code"
                                            maxlength="5"
                                            v-model="user.zip_code"
                                            placeholder="Enter DOB"
                                            class="site-input"
                                        />
                                    </div>
                                    <div class="text-center mt-lg-5 mt-4 mr-2">
                                        <button
                                            class="site-btn mt-lg-4 mt-3 px-5"
                                        >
                                            Update<i class="ms-2"
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
                </section>
            </form>
        </ValidationObserver>
        <site-footer></site-footer>
    </div>
</template>
<script>
const ChangePasswordModal = () => import("./ChangePassword.vue");
const SiteFooter = () =>
    import("@views/Pages/web/Components/footer/site-footer.vue");

import { mapState, mapActions } from "vuex";

export default {
    data() {
        return {
            date: "",
            croppieImage: "",
            cropped: null,
            // stores: {},
            categories: {},
            category_id: undefined,
            search: "",
            saveSecFiles: [],
            saveBaseFiles: [],
            saveSecFilesId: [],
            url: null,
        };
    },
    components: {
        ChangePasswordModal,
        SiteFooter
    },
    computed: {
        ...mapState("store", ["user"]),
    },
    created() {
        // this.fetch();
        // this.cropped = this.user.image;
    },

    methods: {
        ...mapActions("store", ["getAll", "store"]),
        // async fetch() {
        //     let {type, status} = this.$route.params;
        //     let params = {
        //         route: `api/auth/getProfile`,
        //         mutation: 'set_user',
        //         variable: 'data',
        //     };
        //     let {data} = await this.getAll(params);
        //     this.stores = data.data;

        // },

        croppie(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;

            var reader = new FileReader();
            reader.onload = (e) => {
                this.$refs.croppieRef.bind({
                    url: e.target.result,
                });
            };
            $("#cropImagePop").modal("show");
            reader.readAsDataURL(files[0]);
        },
        crop() {
            // Options can be updated.
            // Current option will return a base64 version of the uploaded image with a size of 600px X 450px.
            let options = {
                type: "base64",
                size: { width: 150, height: 200 },
                format: "jpeg",
            };
            this.$refs.croppieRef.result(options, (output) => {
                this.cropped = this.croppieImage = output;
                $("#cropImagePop").modal("hide");
                console.log(this.croppieImage);
            });
        },
        async updateProfile() {
            let fd = new FormData(this.$refs.profileUpdate);
            fd.append("image", this.croppieImage);
            let params = {
                route: "api/auth/profile/update",
                method: "POST",
                data: fd,
            };
            try {
                let { data } = await this.store(params);
                if (data.status) {
                    this.$snotify.success(data.message);
                    let self = this;
                    setTimeout(function () {
                        self.$router.push({ name: "web.user.profile" });
                        //window.location.reload();
                    }, 2000);
                } else {
                    this.$snotify.error("something went wrong");
                }
            } catch (e) {
                if (e.response) {
                    this.$refs.adminObserver.setErrors(e.response.data.errors);
                }
                // statements
                console.log(e);
            }
        },
        onFileChange(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
        },
    },
};
</script>
