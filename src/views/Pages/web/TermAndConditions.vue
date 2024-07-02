<template>
    <div>
        <!-- banner -->
        <section>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-11 mx-auto">
                        <div class="row">
                            <div class="col-12 position-relative">
                                <img
                                    :src="`${base_url}/assets/web/images/top-banner.png`"
                                    alt=""
                                    class="img-fluid w-100 banner-img"
                                />
                                <div class="banner-text">
                                    <h1>ZARNNS</h1>
                                    <h2>
                                        DISCOVER INVESTING OPPORTUNITY WITH US
                                    </h2>
                                    <p class="mt-2">
                                        Lorem Ipsum is simply dummy text of the
                                        printing anddummy<br />
                                        text of the printing s make a type
                                        specimen book.
                                    </p>
                                    <a class="general-btn d-inline-block mt-3"
                                        >Start Investing Here</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- banner -->
        <!-- What -->
        <section class="what chhose-plan">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h2 class="main-heading">Terms & Conditions</h2>
                        <hr />
                    </div>
                    <div class="col-12">
                        <p class="main-para mt-lg-5 mt-3">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been theLorem
                            Ipsum is simply dummy text of the printing s make a
                            Ipsum is simply dummy text of thetype specimen
                            book.Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has
                            been theLorem Ipsum is simply dummy text of the
                            printing s make a Ipsum is simply dummy text of
                            thetype specimen book.
                        </p>
                        <p class="main-para mt-2">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been theLorem
                            Ipsum is simply dummy text of the printing s make a
                            Ipsum is simply dummy text of thetype specimen book.
                        </p>
                        <p class="main-para mt-2">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been theLorem
                            Ipsum is simply dummy text of the printing s make a
                            Ipsum is simply dummy text of thetype specimen book.
                        </p>
                        <p class="main-para mt-2">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been theLorem
                            Ipsum is simply dummy text of the printing s make a
                            Ipsum is simply dummy text of thetype specimen book.
                        </p>
                        <p class="main-para mt-2">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been theLorem
                            Ipsum is simply dummy text of the printing s make a
                            Ipsum is simply dummy text of thetype specimen book.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!-- What -->
        <!-- Modal -->
        <div
            class="modal fade"
            id="payment"
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
                        <h2 class="main-heading">Payment Details</h2>
                    </div>
                    <h6 class="cost mt-3">Cost: €220</h6>
                    <p class="add-credit mt-3">
                        <img
                            :src="`${base_url}/assets/web/images/radio-btn.png`"
                            alt=""
                            class="mr-1"
                        /><img
                            :src="`${base_url}/assets/web/images/pay.png`"
                            alt=""
                            class="mr-1"
                        />Add a Credit or Debit Card
                    </p>
                    <label for="" class="modal-label mt-3 mb-1"
                        >Card Number*</label
                    >
                    <input
                        type="text"
                        class="modal-input w-100"
                        placeholder="Card Number"
                    />
                    <div class="row">
                        <div class="col-lg-6">
                            <label for="" class="modal-label mt-3 mb-1"
                                >Expiry Date*</label
                            >
                            <input
                                type="text"
                                class="modal-input w-100"
                                placeholder="Enter Expiry Date"
                            />
                        </div>
                        <div class="col-lg-6">
                            <label for="" class="modal-label mt-3 mb-1"
                                >Security Code*</label
                            >
                            <input
                                type="text"
                                class="modal-input w-100"
                                placeholder="Enter Security Code"
                            />
                        </div>
                    </div>
                    <label for="" class="modal-label mt-3 mb-1"
                        >Card Holder Name*</label
                    >
                    <input
                        type="text"
                        class="modal-input w-100"
                        placeholder="Card Holder Name"
                    />

                    <div class="modal-btn-div text-center">
                        <button
                            type="button"
                            class="general-btn"
                            data-dismiss="modal"
                            aria-label="Close"
                            data-toggle="modal"
                            data-target="#payment-success"
                        >
                            Make Payment
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <!-- Modal -->
        <div
            class="modal fade"
            id="payment-success"
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
                            :src="`${base_url}/assets/web/images/tick.png`"
                            alt=""
                        />
                        <p class="modal-text pt-5">
                            Your Payment Has Been Done Successfully
                        </p>
                        <div class="modal-btn-div">
                            <a
                                class="general-btn d-inline-block"
                                href="#_"
                                data-dismiss="modal"
                                aria-label="Close"
                                >Ok</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <!-- Modal -->
        <div
            class="modal fade"
            id="payment-invalid"
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
                            :src="`${base_url}/assets/web/images/i.png`"
                            alt=""
                        />
                        <p class="modal-text pt-5">Payment Error</p>
                        <p class="modal-text mt-2">
                            Insufficient Account Balance
                        </p>
                        <div class="modal-btn-div">
                            <a
                                class="general-btn d-inline-block"
                                href="#_"
                                data-dismiss="modal"
                                aria-label="Close"
                                >Ok</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <!-- Modal -->
        <div
            class="modal fade"
            id="payment-invalid-card"
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
                            :src="`${base_url}/assets/web/images/i.png`"
                            alt=""
                        />
                        <p class="modal-text pt-5">Payment Error</p>
                        <p class="modal-text mt-2">Invalid Card Details</p>
                        <div class="modal-btn-div">
                            <a
                                class="general-btn d-inline-block"
                                href="#_"
                                data-dismiss="modal"
                                aria-label="Close"
                                >Ok</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <!-- Modal -->
        <div
            class="modal fade"
            id="payment-invalid-card-expired"
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
                            :src="`${base_url}/assets/web/images/i.png`"
                            alt=""
                        />
                        <p class="modal-text pt-5">Payment Error</p>
                        <p class="modal-text mt-2">Your Card Has Expired</p>
                        <div class="modal-btn-div">
                            <a
                                class="general-btn d-inline-block"
                                href="#_"
                                data-dismiss="modal"
                                aria-label="Close"
                                >Ok</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
    </div>

    <!--    <section class="recipes about-us py-4 py-md-5">-->
    <!--        <div class="container">-->
    <!--            <h3 class="text-center">Terms & conditions</h3>-->
    <!--            <div class="row">-->
    <!--                <div class="col-lg-12">-->
    <!--                    <center><img :src="`${base_url}/assets/web/images/story.png`" alt="" class="img-fluid"></center>-->
    <!--                </div>-->
    <!--                <div class="col-lg-4 mt-lg-1 mt-3">-->
    <!--                   &lt;!&ndash;  <img :src="`${base_url}/assets/web/images/about-2.png`" alt="" class="img-fluid w-100"> &ndash;&gt;-->
    <!--                   &lt;!&ndash;  <div class="row mt-lg-4 mt-3">-->
    <!--                        <div class="col-6">-->
    <!--                            <img :src="`${base_url}/assets/web/images/about-3.png`" alt="" class="img-fluid w-100">-->
    <!--                        </div>-->
    <!--                        <div class="col-6">-->
    <!--                            <img :src="`${base_url}/assets/web/images/about-4.png`" alt="" class="img-fluid w-100">-->
    <!--                        </div>-->
    <!--                    </div> &ndash;&gt;-->
    <!--                </div>-->
    <!--                <div class="col-12 mt-4">-->

    <!--                    <h2>Hello and welcome to the home of One Yummy Mummy!</h2>-->

    <!--               -->

    <!--                    <p class="mb-0 black-text">-->
    <!--                        I am Jolene Cox, award-winning food blogger and bestselling cookbook author.-->
    <!--                        For the past 20 years, I have been developing and perfecting family recipes designed to take the stresses and strains out of everyday cooking. -->
    <!--                    </p>-->

    <!--                    <p class="mb-0 black-text">-->
    <!--                        I believe that the heart of the home lies firmly in the kitchen and I am passionate about encouraging kids to get hands on with cooking that will excite and inspire their taste buds and teach them skills for life.-->
    <!--                    </p>-->
    <!--                    <p class="mb-0 black-text">-->
    <!--                        Over the last five years, I have pioneered a home cooking movement across the nation by founding the Homecooks Ireland Facebook group, launching a bestselling cookbook, initiating a school’s cookery programme for parents, hosting summer cooking camps for kids and giving online cooking workshops. My mission has always remained the same: to make home cooking the new convenience food.-->
    <!--                    </p>-->
    <!--                    <p class="mb-0 black-text">-->
    <!--                        With the right recipes up our sleeve, we can make home cooking easy, accessible and fun. And this is what motivates the One Yummy Mummy Family Cooking Club - a space for you to enjoy new recipes, store your favourites, take inspiration and interact with a like-minded community.-->
    <!--                    </p>-->

    <!--                  &lt;!&ndash;   <p class="mb-0 black-text"> Hey lovelies-->
    <!--                    I am Jolene Cox, an Award-winning cookbook Author, and have been developing Family Recipes for over 20 years.</p>-->
    <!--                    <p class="mb-0 black-text">“We are on a mission to make home cooking the new convenience”</p>-->
    <!--                    <p class="mb-0 black-text">-->
    <!--                        Did you know that cooking that main meal every evening can be the most stressful time of a parent’s day?-->
    <!--                    We have all been there, walked into the kitchen and stood in front of presses full of ingredients, and felt totally uninspired to cook Dinner.</p>-->
    <!--                    <p class="mb-0 black-text">-->
    <!--                    Maybe heard a voice from the other room shout “What’s for dinner MAM ?” and felt like grabbing the takeaway menu or running to the freezer.</p>-->
    <!--                    <p class="mb-0 black-text">-->
    <!--                        As I said we have all been there!-->
    <!--                        One Yummy Mummy Family food made easy is Cookbook filled the 105 delicious recipes using everyday ingredients that you will cook again and again from my kitchen to yours.-->
    <!--                    </p>-->
    <!--                    <p class="mb-0 black-text">-->
    <!--                        We are also extremely passionate about getting kids into the kitchen, with the help of my 7-year-old Lil’s all recipes are developed with the idea of making the kitchen the heart of the home, building life skills, and a family bond.-->
    <!--                    </p>-->
    <!--                    <p class="mb-0 black-text">-->
    <!--                        We have run non for profit cooking camps for children and a very successful cooking programme for parents.-->
    <!--                    </p>-->
    <!--                    <p class="mb-0 black-text">-->
    <!--                        This was before all the restrictions came into place this year and all our actual cooking classes came to an abrupt stop.-->
    <!--                    So with that in mind, we are developing our online Family cooking Hub which is due to launch in January.</p>-->
    <!--                    <p class="mb-0 black-text">-->
    <!--                        We are so excited to have just opened a little online shop and thank you to everyone who has supported our little Irish Family business so far!-->
    <!--                    </p>-->
    <!--                    <p class="mb-0 black-text">-->
    <!--                        You can buy signed copies of our best selling cookbook Here -->
    <!--                    </p>-->
    <!--                    <p class="mb-0 black-text">-->
    <!--                        Christmas Eve baking packs for kids Here-->
    <!--                    </p>-->
    <!--                    <p class="mb-0 black-text">-->
    <!--                        You can follow our cooking adventures on Instagram Here-->
    <!--                    </p>-->
    <!--                    <p class="mb-0 black-text">-->
    <!--                        We have a Facebook cooking group Here :-->
    <!--                    </p>-->
    <!--                    <p class="mb-0 black-text">-->
    <!--                        You will find loads of free recipes Here -->
    <!--                    </p>-->
    <!--                    Thank you So much for reading and supporting Jolene and Lil’s xxx &ndash;&gt;-->

    <!--                </div>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </section>-->
</template>
<script></script>
