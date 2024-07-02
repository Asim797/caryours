<template>
    <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'web.auth.login' }"
                >Login</router-link
            >
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">|</a>
        </li>
        <li class="nav-item active">
            <router-link
                class="nav-link text-white"
                :to="{ name: 'web.auth.register.index' }"
                >Register
                <span class="sr-only">(current)</span>
            </router-link>
        </li>
    </ul>
</template>
