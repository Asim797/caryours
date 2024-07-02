<template>
    <ul class="navbar-nav mr-auto">
        <li class="nav-item active text-center">
            <router-link class="nav-link text-white" :to="{ name: 'web.home' }">
                <template v-if="$route.name != 'web.home' && $user">
                    <i class="fas fa-home"></i>
                    <br />
                </template>
                Home
                <span class="sr-only">(current)</span>
            </router-link>
        </li>
        <li class="nav-item text-center">
            <router-link
                class="nav-link text-white"
                :to="{ name: 'web.about' }"
            >
                <template v-if="$route.name != 'web.home' && $user">
                    <i class="fas fa-info-circle"></i>
                    <br />
                </template>
                About</router-link
            >
        </li>
        <slot name="owner-links"></slot>
        <slot name="employee-links"></slot>
        <slot></slot>
    </ul>
</template>
