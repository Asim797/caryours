<template>
    <section class="recipes text-center py-4 py-md-5">
        <div class="container">
            <h3>Notifications</h3>
            <div
                class="notification text-left mt-4"
                v-for="notification in notifications.data"
                :key="notification.id"
            >
                <p class="p-bg bold mb-0">
                    {{ formatDate(notification.created_at) }}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="p-bg bold mb-0">02:00 pm</p>
                    <a class="p-bg pink-text bold mb-0">View</a>
                </div>
                <p class="p-lg mt-3">{{ notification.data.title }}</p>
                <hr class="pink-line" />
            </div>
            <div class="notification text-left mt-4">
                <no-record
                    tag="div"
                    :data="notifications.data"
                    class="noti-inner-cards mb-3"
                    >No Data Available</no-record
                >
                <pagination
                    :data="notifications"
                    @pagination-change-page="fetch"
                ></pagination>
            </div>
        </div>
    </section>
</template>
<script>
import { mapActions, mapState } from "vuex";
// const EmployeeTable = ()=> import('./components/EmployeeTable.vue');
export default {
    data() {
        return {
            base_url: base_url,
        };
    },
    computed: {
        ...mapState("admin", ["notifications", "search", "bell_notifications"]),
    },
    components: {
        // EmployeeTable,
    },
    created() {
        let { page } = this.$route.query;
        this.fetch(page);
    },
    watch: {
        search: function (val, oldVal) {
            this.fetch();
        },
        bell_notifications(val, oldVal) {
            this.fetch();
        },
    },
    methods: {
        ...mapActions("admin", ["getAll"]),
        async fetch(page = 1) {
            let { status } = this.$route.params;
            let params = {
                route: route("web.notifications"),
                mutation: "set_notifications",
                variable: "notifications",
                data: {
                    page,
                    status,
                    search: this.search,
                },
            };
            let { data } = await this.getAll(params);
            if (page != 1) {
                this.addRouteQuery({ page });
            } else {
                this.addRouteQuery({});
            }
        },
    },
};
</script>
