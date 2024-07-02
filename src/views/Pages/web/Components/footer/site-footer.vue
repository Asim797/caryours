<template>
    <div>

        <section
class="pt-sm-5 testimonials pb-md-5 pb-3 pt-4 wow fadeInUp"
data-wow-duration="0.2s"
data-wow-delay="0.3s"
>
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-xxl-10 col-xl-11 col-12">
            <div class="testimonial-inner">
                <div class="row">
                    <div class="col-xl-11 col-12 mx-auto">
                        <div class="row align-items-center">
                            <div
                            class="col-lg-8 wow slideInLeft"
                            data-wow-duration="0.2s"
                            data-wow-delay="0.3s"
                            >
                            <h2>A New Way to Buy Used Cars</h2>
                            <p
                            class="p-xl mb-0 pr-xl-5 pr-lg-4"
                            >
                            Browse thousands of quality
                            pre-owned vehicles, each with a
                            low no-haggle price.
                        </p>
                    </div>
                    <div
                    class="col-lg-4 mt-3 text-end mt-lg-0"
                    >
                    <router-link
                                                :to="{name: 'web.home.category'}"
                    class="site-btn mt-lg-4 mt-3 px-5 wow slideInRight"
                    data-wow-duration="0.2s"
                    data-wow-delay="0.2s"
                    >
                    View All
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
</div>
</div>
<hr class="grey-line my-lg-5 my-sm-4 my-3" />
<div
class="footer wow fadeInUp"
data-wow-duration="0.2s"
data-wow-delay="0.3s"
>
 <!-- footer starts here -->
 <div class="row justify-content-center">
            <div class="col-xl-11 col-12">
                <div class="row">
                    <div class="col-xl-6 col-lg-5">
                        <a href="index.php"
                            ><img
                                :src="`${base_url}/assets/web/images/logo.png`"
                                alt=""
                                class="img-fluid site-logo"
                        /></a>
                        <ul class="social-icons mt-4">
                            <li>
                                <a href="#_"
                                    ><i class="fab fa-facebook-f"></i
                                ></a>
                            </li>
                            <li>
                                <a href="#_"
                                    ><i class="fab fa-instagram"></i
                                ></a>
                            </li>
                            <li>
                                <a href="#_"
                                    ><i class="fab fa-linkedin-in"></i
                                ></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-xl-6 col-lg-7 mt-3">
                        <ul class="footer-links d-sm-flex d-block">
                            <li><router-link :to="{name:'web.home.aboutUs'}">About Us</router-link></li>
                            <li><router-link :to="{name:'web.home.contact'}">Contact Us</router-link></li>
                            <li><router-link :to="{name:'web.home.index'}">Home</router-link></li>
                            <li><router-link :to="{name:'web.home.category'}">Ads Listing</router-link></li>
                        </ul>
                        <p class="p-md mt-4 mb-0">Copyright © 2022 CarsYours</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- footer ends here -->

        <!-- Modal -->
        <div
            class="modal fade"
            id="logout"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content site-modal">
                    <i
                        class="fas fa-times close modal-close"
                        data-dismiss="modal"
                        aria-label="Close"
                    ></i>
                    <div class="text-center">
                        <img
                            :src="`${base_url}/assets/web/images/question-mark.png`"
                            alt=""
                        />
                        <p class="modal-text pt-5">
                            Are You Sure You Want To Log Out ?
                        </p>
                        <div class="modal-btn-div">
                            <a class="general-btn d-inline-block">Yes</a>
                            <a
                                class="black-btn d-inline-block"
                                data-dismiss="modal"
                                aria-label="Close"
                                >No</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</div>
</div>
</div>
</div>
</section>




       
        <!-- Modal -->
        <!--footer end here-->
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentDate: new Date(),
        };
    },
};
</script>
