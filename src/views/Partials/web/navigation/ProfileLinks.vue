<template>
    <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a class="nav-link" href="javascript:void(0)">
                <img src="assets/images/Layer 25 copy 3.png" alt="" />
            </a>
        </li>
        <li class="nav-item text-center">
            <div class="dropdown">
                <a
                    class="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >{{ $user.name }}</a
                >
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <router-link
                        :to="{ name: 'web.account.index' }"
                        class="dropdown-item"
                        ><i class="fas fa-user-circle"></i> Profile</router-link
                    >
                    <router-link
                        v-if="!isEmployee"
                        class="dropdown-item"
                        :to="{ name: 'web.tasks.index' }"
                        ><i class="fas fa-clipboard-list"></i> Task
                        Log</router-link
                    >
                    <router-link
                        v-if="!isEmployee"
                        class="dropdown-item"
                        :to="{ name: 'web.subscription.index' }"
                        ><i class="fas fa-envelope"></i> Subscription
                        Log</router-link
                    >
                    <a
                        @click="logout()"
                        class="dropdown-item"
                        href="javascript:;"
                        ><i class="fas fa-sign-out-alt"></i> Log Out</a
                    >
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    methods: {
        async logout() {
            await axios.post(route("logout"));
            this.$snotify.success("Logout Successfully");
            window.Laravel.user = null;
            window.Laravel.isLoggedin = false;
            Vue.prototype.$user = null;
            location.reload();
            let self = this;
            setTimeout(function () {
                self.$router.push({ name: "Login" });
            }, 2000);
        },
    },
};
</script>
