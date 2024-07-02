<template>
    <!-- Modal -->
    <div
        class="modal fade activeUser"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content admin-modal">
                <i
                    class="fas fa-times close modal-close"
                    data-dismiss="modal"
                    aria-label="Close"
                ></i>
                <div class="text-center">
                    <img
                        :src="`${base_url}/assets/admin/images/question.png`"
                        alt=""
                        class="img-fluid"
                    />
                    <!-- <h4 class="modal-heading-2 mb-0 mt-1" id="titleTxt"></h4> -->
                    <h5 class="modal-text mt-1" id="subTitleTxt"></h5>
                    <div
                        class="d-sm-flex align-items-center justify-content-center"
                    >
                        <button
                            class="px-3 py-1 site-btn mr-sm-1 mt-1"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            No
                        </button>
                        <button
                            class="px-3 py-1 site-btn mt-1"
                            @click="$emit('confirmed')"
                        >
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal -->
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
            default: "",
        },
    },
};
</script>
