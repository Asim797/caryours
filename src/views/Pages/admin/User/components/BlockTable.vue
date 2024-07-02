<template>
    <div>
        <table class="table table-borderless dataTable">
            <thead>
                <tr>
                    <th>s.no</th>
                    <th>User ID</th>
                    <th>Full Name</th>
                    <th>Registration Date</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="index" v-for="(user, index) in users.data">
                    <td>{{ index }}</td>
                    <td>{{ user.id }}</td>
                    <td>{{ user.first_name + " " + user.last_name }}</td>
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
                                    class="dropdown-item"
                                    data-toggle="modal"
                                    data-target="#block"
                                    @click="setUserId(user.id)"
                                    ><i class="fa fa-ban"></i>unblock</a
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
const Confirmation = () =>
    import("@core/components/Popups/user/ConfirmUnblock.vue");
import { mapState, mapActions } from "vuex";

export default {
    data() {
        return {
            userId: 0,
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
                route: "api/auth/user/block/" + this.userId,
                method: "post",
            };
            let { data } = await this.store(params);
            if (data.status) {
                this.$snotify.success(data.message);
            } else {
                this.$snotify.error(data.message);
            }
        },
        setUserId(id) {
            this.userId = id;
        },
    },
};
</script>
