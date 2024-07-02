<template>
    <li class="nav-item text-center dropdown not">
        <a
            class="nav-link toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
            href="notification-page.php"
        >
            <template v-if="$route.name != 'web.home' && $user">
                <i class="fas fa-bell"></i>
                <br />
            </template>
            Notification</a
        >
        <div class="req-drop-main">
            <div class="dropdown-menu" aria-labelledby="toggle">
                <h6 class="green">Notification</h6>
                <div class="media align-items-center">
                    <div class="media-body">
                        <h3>0 new Notification</h3>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
    computed: {
        ...mapState("admin", ["bell_notifications", "notification_count"]),
    },
    methods: {
        ...mapActions("admin", ["store"]),
        async markRead(id) {
            let params = {
                route: route("admin.notification.markRead", {
                    notification: id,
                }),
                method: "PUT",
                mutation: "MARK_NOTIFICATION_READ",
                variable: "notification",
            };
            let { data } = await this.store(params);
            if (data.status) {
                this.$snotify.success(data.msg);
            }
        },
    },
};
</script>
