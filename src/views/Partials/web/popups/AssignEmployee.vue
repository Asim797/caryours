<template>
    <div
        class="modal fade"
        id="assign-employee"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
    >
        <!-- Add .modal-dialog-centered to .modal-dialog to vertically center the modal -->
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="my-modal-header">
                    <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4
                        v-if="
                            !$_.isUndefined(all_employees.data) &&
                            all_employees.data.length > 0
                        "
                        class="modal-title"
                        id="exampleModalLongTitle"
                    >
                        Assign Employee
                    </h4>
                    <div
                        v-if="
                            !$_.isUndefined(all_employees.data) &&
                            all_employees.data.length > 0
                        "
                        class="input-group md-form form-sm form-2 pl-0 my-search"
                    >
                        <input
                            class="form-control my-0 py-1 lime-border"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <div class="input-group-append">
                            <span
                                class="input-group-text lime lighten-2"
                                id="basic-text1"
                            >
                                <i
                                    class="fas fa-search text-grey"
                                    aria-hidden="true"
                                ></i>
                            </span>
                        </div>
                    </div>
                </div>
                <ValidationObserver
                    tag="div"
                    ref="assignemployeeObserver"
                    v-slot="{ handleSubmit }"
                >
                    <form @submit.prevent="handleSubmit(assign)">
                        <div class="modal-body">
                            <ul
                                class="list-unstyled"
                                v-if="!$_.isUndefined(all_employees.data)"
                            >
                                <li
                                    :key="employee.id"
                                    v-for="employee in all_employees.data"
                                    class="media"
                                >
                                    <a
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#delete-employee"
                                        ><i class="fas fa-times-circle"></i
                                    ></a>
                                    <img
                                        src="assets/images/download.png"
                                        class="mr-3 w-25"
                                        alt="..."
                                        width="14%"
                                    />
                                    <div class="media-body">
                                        <h6 class="mt-0 mb-1">
                                            {{ employee.name }}
                                        </h6>
                                        <h6 class="mt-0 mb-1">
                                            Employee_Id {{ employee.id }}
                                        </h6>
                                        <span class="modal-gr-clr"
                                            >Assigned Properties:
                                            {{ employee.properties_count }},
                                            Assigned Tasks:
                                            {{ employee.pending_tasks }}</span
                                        >
                                        <ValidationProvider
                                            rules="required"
                                            name="Employee"
                                            v-slot="{ errors }"
                                            class="custom-control custom-radio"
                                        >
                                            <input
                                                v-model="assignTo"
                                                type="radio"
                                                :id="`employee${employee.id}`"
                                                name="employee"
                                                class="custom-control-input"
                                                :value="employee.employee_id"
                                            />
                                            <label
                                                class="custom-control-label"
                                                :for="`employee${employee.id}`"
                                            ></label>
                                            <span>{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </li>
                                <li
                                    v-if="
                                        !$_.isUndefined(all_employees.data) &&
                                        all_employees.data.length == 0
                                    "
                                >
                                    <h4 class="text-center">
                                        Another employee not found
                                    </h4>
                                </li>
                            </ul>
                        </div>
                        <div
                            v-if="
                                !$_.isUndefined(all_employees.data) &&
                                all_employees.data.length > 0
                            "
                            class="modal-footer"
                        >
                            <button
                                type="submit"
                                class="modal-add-btn"
                                data-toggle="modal"
                                data-target="#exampleModal"
                            >
                                Assign
                            </button>
                        </div>
                    </form>
                </ValidationObserver>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
const success = () => import("@views/Partials/web/popups/Success.vue");

export default {
    props: {
        exclude: {
            type: Array,
            required: true,
            default: () => {
                return [];
            },
        },
        property: {
            type: Number,
            required: false,
            default: null,
        },
    },
    data() {
        return {
            properties: {},
            selectedProperty: 0,
            assignTo: "",
        };
    },
    components: {
        success,
    },
    computed: {
        ...mapState("employee", ["all_employees"]),
    },
    created() {
        this.fetch();
    },
    mounted() {
        this.$nextTick(function () {});
    },
    methods: {
        ...mapActions("employee", ["getAll", "store"]),
        async fetch(page = 1) {
            let { employee } = this.$route.params;
            let params = {
                route: route("employee.index"),
                mutation: "set_employees",
                data: {
                    page: page,
                    exclude: this.exclude,
                },
            };
            let { data } = await this.getAll(params);
            this.properties = data.properties;
        },
        async assignProperty() {
            let { employee } = this.$route.params;
            if (this.selectedProperty == 0) {
                this.$snotify.error("please select a property first");
                return;
            }
            let fd = new FormData();
            fd.append("property", this.selectedProperty);
            let params = {
                route: route("property.assign-property", { employee }),
                data: fd,
                method: "POST",
            };
            let { data } = await this.store(params);
            if (data.status) {
                window.$("#successPopup").modal("show");
                let propertyId = parseInt(this.selectedProperty);
                let index = _.findIndex(this.properties.data, (property) => {
                    return property.id == propertyId;
                });
                let property = this.properties.data[index];
                this.$emit("assigned-property", property);
                this.properties.data.splice(index, 1);
            }
        },
        async assign() {
            if (this.assignTo == "") {
                this.$snotify.error("please select a Employee first");
                return;
            }
            let fd = new FormData();
            fd.append("property", this.property);

            try {
                let params = {
                    route: route("property.assign-property", {
                        employee: this.assignTo,
                    }),
                    data: fd,
                    method: "POST",
                };
                // statements
                let { data } = await this.store(params);
                if (data.status) {
                    window.$("#assign-employee").modal("hide");
                    let employeeId = parseInt(this.assignTo);
                    let index = _.findIndex(
                        this.all_employees.data,
                        (employee) => {
                            return employee.employee_id == employeeId;
                        }
                    );
                    // let property = this.properties.data[index];
                    this.$emit("task-assigned");
                    this.$emit("closed");
                    this.all_employees.data.splice(index, 1);
                }
            } catch (e) {
                // statements
                alert();
                if (e.response) {
                    let { data } = e.response;
                    this.$snotify.error(data.msg);
                }
                console.log(e);
            }
        },
    },
};
</script>
