<template>
    <div>
        <!-- banner starts here -->
        <section class="banner">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-xxl-10 col-xl-11 col-12">
                        <div class="banner-inner">
                            <div class="row align-items-end">
                                <div class="col-lg-6 mt-3">
                                    <div
                                    class="banner-left me-lg-0 me-5 wow fadeIn"
                                    data-wow-duration="0.5s"
                                    data-wow-delay="1s"
                                    >
                                    <h2>
                                        Find Your Next
                                        <span
                                        class="red-text bottom-border"
                                        >
                                        Match</span
                                        >
                                    </h2>
                                    <p class="p-lg mb-0 mt-4">
                                        Find the right price, dealer and
                                        advice.
                                    </p>
                                        <div class="row">
                                            <div class="col-md-6 mt-3">
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
                                    </div>
                                    <div class="col-md-6 mt-3">
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
                            </div>
                            <div class="col-md-6 mt-3">
                                <label for=""
                                >Postcode</label
                                >
                                <input
                                maxlength="5"
                                v-model="formData.zipCode"
                                type="text"
                                placeholder="Enter here"
                                class="site-input"
                                />
                            </div>

                        <div class="col-md-6 mt-3">
                            <label for=""
                            >Price Range</label
                            >
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
<!--        <input-->
<!--        type="text"-->
<!--        placeholder="To"-->
<!--        v-model="formData.price_to"-->
<!--        class="transparent-input"-->
<!--        />-->
    </div>
    <div class="col-6 py-2">
        <select
                name=""
                v-model="formData.price_from"
                class="site-input"
        >
            <option value="" selected disabled>
                From
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
                    </div>
                </div>
                <button
                @click="filterData()"
                class="site-btn mt-lg-4 mt-3 px-5"
                >
                Search
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
<div class="col-lg-6 mt-3">
    <div
    class="owl-carousel banner-carousel owl-theme"
    >
    <div
    class="item wow slideInRight"
    data-wow-duration="0.5s"
    data-wow-delay="1s"
    >
    <img
    :src="`${base_url}/assets/web/images/banner-img.png`"
    alt=""
    class="img-fluid w-100 banner-img"
    />
</div>
<div class="item">
    <img
    :src="`${base_url}/assets/web/images/banner-img.png`"
    alt=""
    class="img-fluid w-100 banner-img"
    />
</div>
<div class="item">
    <img
    :src="`${base_url}/assets/web/images/banner-img.png`"
    alt=""
    class="img-fluid w-100 banner-img"
    />
</div>
</div>
</div>
</div>
<div
class="banner-overlay wow fadeIn"
data-wow-duration="0.5s"
data-wow-delay=".5s"
></div>
</div>
</div>
</div>
</div>
</section>
<!-- banner ends here -->

<!-- how it works section starts here -->
<section class="how-it-works py-md-5 py-4 text-center">
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-xxl-10 col-xl-11 col-12">
                <p
                class="p-lg mb-0 text-uppercase bold red-text wow fadeInLeft"
                data-wow-duration="0.5s"
                data-wow-delay=".5s"
                >
                How it Works
            </p>
            <h1
            class="mt-0 wow fadeInRight"
            data-wow-duration="0.5s"
            data-wow-delay="1s"
            >
            3 Simple Steps
        </h1>
        <div class="row">
            <div class="col-lg-4 col-md-6 mt-3">
                <div class="step-card">
                    <img
                    :src="`${base_url}/assets/web/images/step-1.png`"
                    alt=""
                    class="img-fluid wow fadeIn"
                    data-wow-duration="0.5s"
                    data-wow-delay="0.6s"
                    />
                    <p
                    class="p-lg mb-2 bold mt-3 wow fadeInLeft"
                    data-wow-duration="0.5s"
                    data-wow-delay="0.5s"
                    >
                    Shop Anywhere
                </p>
                <p
                class="p-md medium mb-2 grey-text wow fadeInRight"
                data-wow-duration="0.5s"
                data-wow-delay="0.5s"
                >
                Lorem ipsum dolor sit amet, consete tur
                sadipscing elitr, sed diam nonumy eirmod
                tempor.
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-6 mt-3">
        <div class="step-card">
            <img
            :src="`${base_url}/assets/web/images/step-2.png`"
            alt=""
            class="img-fluid wow fadeIn"
            data-wow-duration="0.5s"
            data-wow-delay="0.6s"
            />
            <p
            class="p-lg mb-2 bold mt-3 wow fadeInLeft"
            data-wow-duration="0.5s"
            data-wow-delay="0.5s"
            >
            Trust Rating
        </p>
        <p
        class="p-md medium mb-2 grey-text wow fadeInRight"
        data-wow-duration="0.5s"
        data-wow-delay="0.5s"
        >
        Lorem ipsum dolor sit amet, consete tur
        sadipscing elitr, sed diam nonumy eirmod
        tempor.
    </p>
</div>
</div>
<div class="col-lg-4 col-md-6 mt-3">
    <div class="step-card">
        <img
        :src="`${base_url}/assets/web/images/step-3.png`"
        alt=""
        class="img-fluid wow fadeIn"
        data-wow-duration="0.5s"
        data-wow-delay="0.6s"
        />
        <p
        class="p-lg mb-2 bold mt-3 wow fadeInLeft"
        data-wow-duration="0.5s"
        data-wow-delay="0.5s"
        >
        Save Money
    </p>
    <p
    class="p-md medium mb-2 grey-text wow fadeInRight"
    data-wow-duration="0.5s"
    data-wow-delay="0.5s"
    >
    Lorem ipsum dolor sit amet, consete tur
    sadipscing elitr, sed diam nonumy eirmod
    tempor.
</p>
</div>
</div>
</div>
<!-- <div class="row">
    <div class="col-lg-11 col-12 mx-auto mt-4">
        <div class="super-sale text-start wow flipInX" data-wow-duration="0.5s" data-wow-delay="0.6s">
            <div class="row align-items-center">
                <div class="col-xl-4 col-lg-5">
                    <h2>Super Sale</h2>
                    <h2 class="like-heading yellow-text">50%</h2>
                    <div class="countdown">
                        <div class="container-day">
                            <h3 class="day">-</h3>
                            <span>Day</span>
                        </div>
                        <div class="container-hour">
                            <h3 class="hour">-</h3>
                            <span>Hour</span>
                        </div>
                        <div class="container-minute">
                            <h3 class="minute">-</h3>
                            <span>Minute</span>
                        </div>
                        <div class="container-second">
                            <h3 class="second">-</h3>
                            <span>Second</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 col-lg-6 mt-lg-0 mt-3">
                    <h3>Flash Summer <br> <span class="yellow-text"> Sale </span> on new arrivals</h3>
                    <p class="mb-0 p-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                    <button class="site-btn white-btn mt-3">Read More <svg xmlns="http://www.w3.org/2000/svg" width="13.5" height="13.849" viewBox="0 0 13.5 13.849">
                        <g id="arrow-bottom-right" transform="translate(-3.429)">
                            <path id="Path_1" data-name="Path 1" d="M12.065,20.61l1.873,1.873,8.98-9.328v6.068h2.647V8.635H14.976v2.647h6.07l-8.98,9.328Z" transform="translate(-8.636 -8.635)" fill="#0586f4" />
                        </g>
                    </svg>
                </button>
            </div>
        </div>
        <img src="images/super-sale-img.png" alt="" class="img-fluid super-sale-img wow slideInRight" data-wow-duration="0.5s" data-wow-delay="3.5s">
    </div>
</div>
</div> -->
</div>
</div>
</div>
</section>
<!-- how it works section ends here -->

<!-- about carsyours section starts here -->
<section
class="about-carsyours wow fadeIn"
data-wow-duration="0.5s"
data-wow-delay="1s"
>
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-xxl-10 col-xl-11 col-12">
            <div class="about-cars-inner">
                <p
                class="red-text bold mb-0 p-lg wow fadeInLeft"
                data-wow-duration="0.5s"
                data-wow-delay="0.6s"
                >
                About Carsyours
            </p>
            <h1
            class="wow fadeInRight"
            data-wow-duration="0.5s"
            data-wow-delay="0.5s"
            >
            Who We Are
        </h1>
        <div class="row">
            <div class="col-xl-9 mx-auto col-lg-11 col-12">
                <p
                class="p-md mb-0 wow slideInRight"
                data-wow-duration="0.5s"
                data-wow-delay="0.6s"
                >
                Carsyours is a secure peer-to-peer
                (individual to individual) pre-owned
                cars marketplace platform that connects
                buyers, sellers and financing
                institutions on the same platform and
                saves thousands in transactional costs
                that occur at traditional used car
                dealerships and online dealerships.
            </p>
            <router-link
            :to="{name: 'web.home.aboutUs'}"
            class="site-btn mt-lg-4 mt-3 px-5 wow fadeInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.3s"
            >
            Know More
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
<div class="col-xl-10 mx-auto">
    <div class="about-cars-bottom">
        <div class="row">
            <div class="col-lg-6">
                <div
                class="cars-inner yellow-bg wow slideInLeft"
                data-wow-duration="0.5s"
                data-wow-delay=".5s"
                >
                <img
                :src="`${base_url}/assets/web/images/like-btn.png`"
                alt=""
                class="img-fluid wow fadeIn"
                data-wow-duration="0.5s"
                data-wow-delay="3s"
                />
                <h2
                class="like-heading mb-0 mt-2 black-text wow fadeInLeft"
                data-wow-duration="0.5s"
                data-wow-delay="3s"
                >
                +58k
            </h2>
            <p
            class="p-lg black-text my-0 bold wow fadeInRight"
            data-wow-duration="0.5s"
            data-wow-delay="3s"
            >
            Customer satisfaction is
            our #1 Goal
        </p>
    </div>
</div>
<div class="col-lg-6">
    <div
    class="cars-inner-blue wow slideInDown"
    data-wow-duration="0.5s"
    data-wow-delay="1s"
    >
    <img
    :src="`${base_url}/assets/web/images/carsyours-2.png`"
    alt=""
    class="img-fluid w-100"
    />
    <div
    class="cars-blue-overlay"
    ></div>
</div>
<div
class="cars-inner align-items-start text-start red-bg wow slideInRight"
data-wow-duration="0.5s"
data-wow-delay="0.6s"
>
<h2
class="wow fadeInLeft"
data-wow-duration="0.5s"
data-wow-delay="3s"
>
Choose From Close to a
Million Used Cars!
</h2>
<a
href="#_"
class="p-lg text-start wow fadeInRight"
data-wow-duration="0.5s"
data-wow-delay="3s"
>
Get Started
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
</svg> </i
></a>
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
<!-- about carsyours section ends here -->

<!-- top rated section starts here -->
<section class="top-rated">
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-xxl-10 col-xl-11 col-12">
                <div class="text-center">
                    <p
                    class="p-lg mb-0 red-text bold wow fadeInLeft"
                    data-wow-duration="0.5s"
                    data-wow-delay=".5s"
                    >
                    Top Rated
                </p>
                <h1
                class="wow fadeInRight"
                data-wow-duration="0.5s"
                data-wow-delay="1s"
                >
                Featured
            </h1>
        </div>
        <div class="row">

            <div  v-for="(
            ads, index
            ) of featureAds.data" class="col-xl-3 col-lg-4 col-md-6 mt-3">
            <div class="featured-card">
                <div class="featured-img">
                    <img
                    :src="`${ads.primary_image}`"
                    alt=""
                    class="img-fluid wow slideInRight"
                    data-wow-duration="0.5s"
                    data-wow-delay="0.3s"
                    style="
                    visibility: visible;
                    animation-duration: 0.5s;
                    animation-delay: 0.3s;
                    animation-name: slideInRight;
                    "
                    />
                </div>
                <div
                class="featured-inner wow fadeInUp"
                data-wow-duration="0.6s"
                data-wow-delay="0.4s"
                >
                <p class="p-lg mb-0">
                    {{ads?.make?.name}}
                </p>
                <div
                class="d-flex align-items-center justify-content-between"
                >
                <div class="d-flex mt-2">
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
                    <i
                    class="fas fa-star review-star"
                    ></i>
                </div>
                <span class="ad-tag mt-2"
                >{{ads?.user?.ads_count}} Ads</span
                >
            </div>
            <p class="mb-0 l-grey-text mt-2 medium">
                By {{ads?.user?.first_name }} {{ads?.user?.last_name}}
            </p>
            <hr />
            <router-link :to="{
                name: 'web.home.category_detail',
                params: { id: ads.id },
            }" class="medium"
            >View Details
            <i class="ms-2">
                <svg
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
                />
            </g>
        </svg>
    </i>
</router-link>
</div>
</div>

</div>

<div class="col-12 text-center mt-4">
    <a href="/site-manager/web/category?feature=1" class="site-btn mt-lg-4 mt-3 px-5">
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
</a>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- top rated section ends here -->

<!-- testimonials section starts here -->
<section
class="pt-sm-5 testimonials pb-md-5 pb-3 pt-4 wow fadeInUp"
data-wow-duration="0.5s"
data-wow-delay="0"
>
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-xxl-10 col-xl-11 col-12">
            <div class="testimonial-inner">
                <div class="text-center">
                    <p
                    class="p-lg mb-0 red-text bold wow fadeInRight"
                    data-wow-duration="0.5s"
                    data-wow-delay=".5s"
                    >
                    Reviews
                </p>
                <h1
                class="wow fadeInLeft"
                data-wow-duration="0.5s"
                data-wow-delay="1s"
                >
                Testimonials
            </h1>
        </div>
        <div class="row">
            <div class="col-xl-11 col-12 mt-4 mx-auto">
                <div
                class="owl-carousel testimonial-carousel owl-theme"
                >
                <div class="item">
                    <div
                    class="testimonial-card wow fadeInUp"
                    data-wow-duration="0.5s"
                    data-wow-delay="0.6s"
                    >
                    <div
                    class="d-flex wow slideInLeft"
                    data-wow-duration="0.5s"
                    data-wow-delay="0.5s"
                    >
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
                    <i
                    class="far fa-star review-star"
                    ></i>
                </div>
                <p
                class="mb-0 p-md mt-3 wow slideInRight"
                data-wow-duration="0.5s"
                data-wow-delay="0.6s"
                >
                Lorem ipsum dolor sit amet,
                conse ctetur adipisicing
                elit, sed do eius mod tempor
                incididunt ut labore. et
                dolore magna aliqua.
            </p>
            <p
            class="mb-0 p-md mt-3 wow slideInRight"
            data-wow-duration="0.5s"
            data-wow-delay="0.6s"
            >
            Sarah Parker
        </p>
    </div>
</div>
<div class="item">
    <div
    class="testimonial-card wow fadeInUp"
    data-wow-duration="0.5s"
    data-wow-delay="0.6s"
    >
    <div
    class="d-flex wow slideInLeft"
    data-wow-duration="0.5s"
    data-wow-delay="0.5s"
    >
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
    <i
    class="far fa-star review-star"
    ></i>
</div>
<p
class="mb-0 p-md mt-3 wow slideInRight"
data-wow-duration="0.5s"
data-wow-delay="0.6s"
>
Lorem ipsum dolor sit amet,
conse ctetur adipisicing
elit, sed do eius mod tempor
incididunt ut labore. et
dolore magna aliqua.
</p>
<p
class="mb-0 p-md mt-3 wow slideInRight"
data-wow-duration="0.5s"
data-wow-delay="0.6s"
>
Sarah Parker
</p>
</div>
</div>
<div class="item">
    <div
    class="testimonial-card wow fadeInUp"
    data-wow-duration="0.5s"
    data-wow-delay="0.6s"
    >
    <div
    class="d-flex wow slideInLeft"
    data-wow-duration="0.5s"
    data-wow-delay="0.5s"
    >
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
    <i
    class="far fa-star review-star"
    ></i>
</div>
<p
class="mb-0 p-md mt-3 wow slideInRight"
data-wow-duration="0.5s"
data-wow-delay="0.6s"
>
Lorem ipsum dolor sit amet,
conse ctetur adipisicing
elit, sed do eius mod tempor
incididunt ut labore. et
dolore magna aliqua.
</p>
<p
class="mb-0 p-md mt-3 wow slideInRight"
data-wow-duration="0.5s"
data-wow-delay="0.6s"
>
Sarah Parker
</p>
</div>
</div>
<div class="item">
    <div
    class="testimonial-card wow fadeInUp"
    data-wow-duration="0.5s"
    data-wow-delay="0.6s"
    >
    <div
    class="d-flex wow slideInLeft"
    data-wow-duration="0.5s"
    data-wow-delay="0.5s"
    >
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
    <i
    class="far fa-star review-star"
    ></i>
</div>
<p
class="mb-0 p-md mt-3 wow slideInRight"
data-wow-duration="0.5s"
data-wow-delay="0.6s"
>
Lorem ipsum dolor sit amet,
conse ctetur adipisicing
elit, sed do eius mod tempor
incididunt ut labore. et
dolore magna aliqua.
</p>
<p
class="mb-0 p-md mt-3 wow slideInRight"
data-wow-duration="0.5s"
data-wow-delay="0.6s"
>
Sarah Parker
</p>
</div>
</div>
</div>
</div>
</div>
<hr class="grey-line my-lg-5 my-sm-4 my-3" />
<div class="row">
    <div class="col-xl-11 col-12 mx-auto">
        <div class="row align-items-center">
            <div
            class="col-lg-8 wow slideInLeft"
            data-wow-duration="0.5s"
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
    data-wow-duration="0.5s"
    data-wow-delay="0.3s"
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
data-wow-duration="0.5s"
data-wow-delay="0.3s"
>
<site-footer></site-footer>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- testimonials section ends here -->
</div>
</template>
<script>
const SiteFooter = () =>
import("@views/Pages/web/Components/footer/site-footer-bottom.vue");

export default {
    components: {
        SiteFooter,
    },
    data() {
        return {
            formData:{
                make: "",
                model: "",
                zipCode: "",
                price_from: "",
                price_to:""
            },
            featureAds: undefined,
            make: '',
            models3: ''
        }
    },
    created() {
        this.getRecentProjects();
        this.makes();
    },
    methods:{
        async getRecentProjects() {
            let response = await axios.get('/api/advertisements/randomFeaturesAds');
            if(response.data){
                this.featureAds  = response.data;
            }else{
                this.$snotify.error(response.data.message);
            }
        },

        filterData(){
            let url = `/site-manager/web/category?make=${this.formData.make}&model=${this.formData.model}&price_to=${this.formData.price_to}&price_from=${this.formData.price_from}&zipCode=${this.formData.zipCode}`;
            console.log(url);
            window.location.href =url;
        },


        async makes() {
            let response = await axios.get("api/make");
            this.make = response.data.data;
        },
        async models(id) {
            let response = await axios.get(`api/model/${id}`);
            this.models3 = response.data.data;
        },
    }
};
</script>
<!-- <script>
    import {mapState, mapActions} from 'vuex';
    import carousel from 'vue-owl-carousel'

    export default {
        data() {
            return {
                recipesLists: {},
                storeList: {},
                refreshCarousel: 0,
                email: '',
                checkbox: false,
                response:{},
                recent_projects: {},
                latest_blogs: {},
                latest_services: {},
                latest_advertisements: {},
            };
        },
        created() {
            this.getRecentProjects();
            //    setTimeout(function () {
                //     $('.homeVideo').modal('show');
                // }, 2000);
                // this.fetch();
            },
            computed: {
                ...mapState('store', ['blogs']),
            },
            components: {
                carousel
            },

            methods: {
                ...mapActions('store', ['getAll']),

                async sendSubscribeForm(e) {
                    let fd = new FormData(this.$refs.SubscribeFormData);
                    try {
                        let response = await axios.post('api/subscribeEmail', fd);
                        if (response.data.data) {
                            var data = response.data.data;
                            this.$snotify.success(response.data.message)

                        } else {
                            this.$snotify.error(response.data.message)

                        }
                    } catch (e) {
                        if (e.response) {
                            this.response = e.response.data
                        }
                        console.log(e);
                    }
                },
                async getRecentProjects() {
                    let response = await axios.get('/api/web/home-data');
                    if(response.data){
                        this.recent_projects  = response.data.recent_projects;
                        this.latest_blogs  = response.data.latest_blogs;
                        this.latest_services  = response.data.latest_services;
                        this.latest_advertisements = response.data.latest_advertisements;
                        this.refreshCarousel++;
                    }else{
                        this.$snotify.error(response.data.message);
                    }
                },
                getServiceBody (lat_service) {
                    let service_description = this.stripTags(lat_service.service_description);

                    return service_description.length > 50 ? service_description.substring(0, 50) + '...' : service_description;
                },
                stripTags (text) {
                    return text.replace(/(<([^>]+)>)/ig, '');
                },
                // changeCheckbox() {
                    //
                    // },
                    // async recipesMethod() {
                        //     let params = {
                            //         route: 'api/recipe',
                            //         data: {
                                //             page: 1,
                                //             listRequest: 6
                                //         }
                                //     };
                                //     let {data} = await this.getAll(params);
                                //     this.recipesLists = data.data.data;
                                //
                                // },
                                // async storeMethod() {
                                    //     let params = {
                                        //         route: 'api/store',
                                        //         data: {
                                            //             page: 1,
                                            //             status: 1
                                            //         }
                                            //     };
                                            //     let {data} = await this.getAll(params);
                                            //     this.storeList = data.data.data;
                                            //     this.refreshCarousel++;
                                            // },
                                            // async fetch() {
                                                //     let {type, status} = this.$route.params;
                                                //     let params = {
                                                    //         route: `api/blog`,
                                                    //         mutation: 'SET_BLOGS',
                                                    //         variable: 'data',
                                                    //         data: {
                                                        //             status: 1
                                                        //         }
                                                        //     };
                                                        //     let {data} = await this.getAll(params);
                                                        //     this.stores = data.data;
                                                        //     if (page != 1) {
                                                            //         this.addRouteQuery({page});
                                                            //     } else {
                                                                //
                                                                //         this.addRouteQuery({});
                                                                //
                                                                //     }
                                                                // },
                                                            }
                                                        }

                                                    </script>
                                                -->
