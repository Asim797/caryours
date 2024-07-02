<template>
    <!--    <div class="modal fade inactiveRecipe poppins" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">-->
    <!--        <div class="modal-dialog modal-dialog-centered" role="document">-->
    <!--            <div class="modal-content site-modal">-->
    <!--                <div class="text-center">-->
    <!--                    <h2 class="modal-heading poppins mb-0" >{{title}}</h2>-->
    <!--                    <p class="modal-text grey-text mt-1" >{{subtitle}}</p>-->
    <!--                    <div class="modal-btn-div mt-3">-->
    <!--                        <button class="site-btn login-btn py-1 px-4" id="yesinactive"  @click="$emit('confirmed')">Yes</button>-->
    <!--                        <button class="site-btn orange-border py-1 px-4" data-dismiss="modal" aria-label="Close" @click="$emit('closed',false)">No</button>-->
    <!--                    </div>-->
    <!--                </div>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->

    <!-- Modal -->
    <div
        class="modal fade"
        id="block"
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
                        src="zarnns_capital/assets/admin/images/question.png"
                        alt=""
                    />
                    <p class="modal-heading">System Message</p>
                    <p class="modal-text">
                        Are you sure you want to block this user ?
                    </p>
                    <div class="modal-btn-div">
                        <a
                            class="general-btn d-inline-block px-3 mr-1"
                            href="#_"
                            data-toggle="modal"
                            data-target="#userblocked"
                            data-dismiss="modal"
                            aria-label="Close"
                            @click="$emit('confirmed')"
                            >Yes</a
                        >
                        <a
                            class="general-btn d-inline-block px-3 ml-1"
                            data-dismiss="modal"
                            aria-label="Close"
                            @click="$emit('closed', false)"
                            >No</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
</template>
<script>
export default {
    props: {
        el: {
            type: String,
            default: "successPopup",
        },
        title: {
            type: String, // String, Number, Boolean, Function, Object, Array
            required: false,
            default: "",
        },
        subtitle: {
            type: String, // String, Number, Boolean, Function, Object, Array
            required: false,
            default: "Are you sure want to block user",
        },
    },
};
</script>
