<template>
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
                            <li><router-link :to="{name:'web.home.contactUs'}">Contact Us</router-link></li>
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
</template>
