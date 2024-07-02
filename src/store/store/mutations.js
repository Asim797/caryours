export default {
    setLoggedIn(state, data) {
        Vue.set(state, 'user', data);
    },
    set_user(state, data) {
        Vue.set(state, 'user', data);
    },
    set_notifications(state, data) {
        Vue.set(state, 'notifications', data);
    },
    set_payments(state, data) {
        Vue.set(state, 'payments', data);
    },
}
