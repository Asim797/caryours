<template>
    <!-- Footer -->
    <footer class="page-footer font-small blue pt-4">
        <!-- Footer Links -->
        <div class="container text-center text-md-left">
            <!-- Grid row -->
            <div class="row">
                <!-- Grid column -->
                <div class="col-md-6 mt-md-0 mt-3">
                    <!-- Content -->
                    <img src="assets/images/green-logo.png" alt="" />
                    <p>
                        Lorem ipsumamet, consectetur adipiscing elit, do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim
                    </p>
                    <div class="footer-social-icon">
                        <a href="#">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-google-plus-g"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <!-- Grid column -->
                <hr class="clearfix w-100 d-md-none pb-3" />
                <!-- Grid column -->
                <div class="col-md-3 mb-md-0 mb-3">
                    <!-- Links -->
                    <h3 class="text-uppercase">QUICK LINK</h3>
                    <ul class="list-unstyled">
                        <li>
                            <router-link
                                @click="window.scrollTo(0, 0)"
                                :to="{ name: 'web.home' }"
                                >Home</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                @click="window.scrollTo(0, 0)"
                                :to="{ name: 'web.about' }"
                                >About</router-link
                            >
                        </li>
                        <li>
                            <router-link :to="{ name: 'web.contact' }"
                                >Contact Us</router-link
                            >
                        </li>
                    </ul>
                </div>
                <!-- Grid column -->
                <!-- Grid column -->
                <div class="col-md-3 mb-md-0 mb-3">
                    <!-- Links -->
                    <h3 class="text-uppercase">NEWSLETTER</h3>
                    <p>Subscribe to our newsletter for all the latest news.</p>
                    <br />
                    <div class="input-group mb-3 footer-bubmit-btn">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Enter email here"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                        />
                        <div class="input-group-append">
                            <button
                                class="btn btn-outline-secondary"
                                type="button"
                                id="button-addon2"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Grid column -->
            </div>
            <!-- Grid row -->
        </div>
        <!-- Footer Links -->
        <!-- Copyright -->
        <div class="footer-copyright text-center py-3">
            Copyright© 2020 Scnell By All Rights Reserved.
        </div>
        <!-- Copyright -->
    </footer>
    <!-- Footer -->
</template>
<script>
export default {};
</script>
