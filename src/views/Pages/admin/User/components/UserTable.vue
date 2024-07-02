<template>
    <div>
        <table class="table table-striped table-bordered zero-configuration">
            <thead>
                <tr>
                    <th>s.no</th>
                    <th>User ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Registration Date</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="index" v-for="(user, index) in users.data">
                    <td>{{ index }}</td>
                    <td>{{ user.id }}</td>
                    <td>{{ user.first_name }}</td>
                    <td>{{ user.last_name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ formatDate(user.created_at) }}</td>
                    <td>
                        <div class="btn-group mr-1 mb-1">
                            <button
                                type="button"
                                class="btn btn-drop-table btn-sm"
                                data-toggle="dropdown"
                            >
                                <i class="fa fa-ellipsis-v"></i>
                            </button>
                            <div class="dropdown-menu">
                                <router-link
                                    class="dropdown-item"
                                    :to="{
                                        name: 'admin.users.view',
                                        params: { id: user.id },
                                    }"
                                    ><i class="fa fa-eye"></i>View
                                </router-link>
                                <a
                                    v-if="user.status == 0"
                                    class="dropdown-item"
                                    @click="
                                        setUserId(
                                            user.id,
                                            user.first_name,
                                            user.status
                                        )
                                    "
                                    ><i class="fa fa-ban"></i>Active</a
                                >
                                <a
                                    v-if="user.status == 1"
                                    class="dropdown-item"
                                    @click="
                                        setUserId(
                                            user.id,
                                            user.first_name,
                                            user.status
                                        )
                                    "
                                    ><i class="fa fa-ban"></i>Inactive</a
                                >
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <no-record
                tag="tr"
                :colspan="5"
                :data="users.data"
                class="col-md-3"
            ></no-record>
        </table>
        <confirmation @confirmed="blockEntity"> </confirmation>
    </div>
</template>
<script>
const Confirmation = () => import("@core/components/Popups/Confirm.vue");
import { mapState, mapActions } from "vuex";

export default {
    data() {
        return {
            userId: 0,
            userName: "",
        };
    },
    computed: {
        ...mapState("admin", ["users"]),
        status() {
            return this.$route.params.status;
        },
    },
    components: {
        Confirmation,
    },
    methods: {
        ...mapActions("admin", ["store"]),
        async blockEntity() {
            let params = {
                route: "api/auth/user/activeInactive/" + this.userId,
                method: "post",
            };
            let { data } = await this.store(params);
            if (data.status) {
                this.$snotify.success(data.message);
            } else {
                this.$snotify.error(data.message);
            }
        },
        setUserId(id, name, status) {
            this.userId = id;
            this.userName = name;
            $(".activeUser").modal("show");
            if (status == 1) {
                $("#titleTxt").text("Inactive " + name);
                $("#subTitleTxt").text(
                    "Are you sure you want to Inactive " + name
                );
            } else {
                $("#titleTxt").text("Active " + name);
                $("#subTitleTxt").text(
                    "Are you sure you want to Active " + name
                );
            }
        },
    },
};
</script>
