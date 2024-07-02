<template>
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration" class="search view-cause">
                <div class="row">
                    <div class="col-12">
                        <div class="card pad-20">
                            <div class="card-content collapse show">
                                <div
                                    class="card-body table-responsive card-dashboard"
                                >
                                    <a href="sub-admin-management.php">
                                        <h2>< SUB-ADMINS MANAGEMENT</h2>
                                    </a>
                                    <section class="add-sub-admin-box">
                                        <h5>Add-Sub-Admin</h5>
                                        <form>
                                            <div class="row">
                                                <div class="col">
                                                    <label for="inputEmail4"
                                                        >Admin Name</label
                                                    >
                                                    <p>{{ admin.full_name }}</p>
                                                </div>
                                                <div class="col">
                                                    <label for="inputEmail4"
                                                        >Email</label
                                                    >
                                                    <p>{{ admin.email }}</p>
                                                </div>
                                                <div class="col">
                                                    <label for="inputEmail4"
                                                        >Password</label
                                                    >
                                                    <p>*********</p>
                                                </div>
                                            </div>
                                            <h5>Permissions</h5>
                                            <ul class="for-check-box2">
                                                <li
                                                    :key="index"
                                                    v-for="(
                                                        permission, index
                                                    ) in admin.permissions"
                                                >
                                                    <!-- Default inline 2-->
                                                    <div
                                                        class="custom-control custom-checkbox custom-control-inline"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            disabled
                                                            class="custom-control-input"
                                                            id="defaultInline2"
                                                            checked
                                                        />
                                                        <label
                                                            class="custom-control-label"
                                                            for="defaultInline2"
                                                            >{{
                                                                permission.title
                                                            }}</label
                                                        >
                                                    </div>
                                                </li>
                                                <no-record
                                                    tag="li"
                                                    :data="admin.permissions"
                                                    >NA</no-record
                                                >
                                            </ul>
                                        </form>
                                        <a
                                            href="edit-sub-admin.php"
                                            class="sub-admin-add"
                                            >EDIT</a
                                        >
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
    data() {
        return {
            form: {
                permissions: [],
            },
        };
    },
    created() {
        this.fetch();
    },
    computed: {
        ...mapState("admin", ["admin"]),
    },
    methods: {
        ...mapActions("admin", ["store", "get"]),
        async fetch() {
            let { admin } = this.$route.params;
            let params = {
                route: route("admin.admin.show", { admin }),
                mutation: "SET_ADMIN",
                variable: "admin",
                data: {},
            };
            let { data } = await this.get(params);
            let { permissions } = this.form;
            this.form = this.admin;
            this.form.permissions = this.admin.permissions
                ? this.admin.permissions
                : permissions;
        },
    },
};
</script>
