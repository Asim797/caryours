export default{
    async getAll({ commit }, params) {
        try {
            let response = await axios.get(params.route, { params: params.data });
            // statements
            if(params.mutation){
                commit(params.mutation, response.data[params.variable]);
            }

            return response;
        } catch (e) {
            // statements
            return e.response
            // console.log(e);
        }
    },
	async store({ commit }, params) {
        let method = typeof params.method == 'undefined' || params.method.toLowerCase() == 'post' ? 'post' : 'put';

        try {
            let response = await axios.post(params.route, params.data);
            // statements
            if(params.mutation){
                commit(params.mutation, response.data[params.variable]);
            }
            console.log('store',response);
            return response;
        } catch (e) {
             console.log('store-catch',e);
            // statements
            return e.response
            // console.log(e);
        }
    },
	async delete({ commit }, params) {
        try {
            let response = await axios.delete(params.route, { params: params.data });
            if(params.mutation){
                commit(params.mutation, response.data[params.variable]);
            }
            return response;
        } catch (e) {
            // statements
            return e.response
            // console.log(e);
        }
    },
    async store({ commit }, params) {
        let method = typeof params.method == 'undefined' || params.method.toLowerCase() == 'post' ? 'post' : 'put';

        try {
            let response = await axios[method](params.route, params.data);
            // statements
            if(params.mutation){
                commit(params.mutation, response.data[params.variable]);
            }
            console.log('store',response);
            return response;
        } catch (e) {
             console.log('store-catch',e);
            // statements
            return e.response
            // console.log(e);
        }
    },
	async getLoggedIn({ commit }) {
        let res = await axios.get(route('seller.logged-user'));
            commit('setLoggedIn',res.data);
    },
	async get_subscription_logs({commit},data){
		let res = await axios.get(route('seller.packages.logs'),data);
		commit('set_subscription_logs',res.data.logs);
	},
}
