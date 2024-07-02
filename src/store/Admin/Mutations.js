import Vue from "vue";

export default{
	SET_HOME_DATA(state,data){
		Vue.set(state,'home',data);

	},
	SET_NOTIFICATIONS(state,data){
		Vue.set(state,'notifications',data);
	},
	MARK_NOTIFICATION_READ(state,data){
		let index = _.findIndex(state.bell_notifications,(item)=>{return item.id == data.id});
		Vue.delete(state.bell_notifications,index);
		Vue.set(state,'notification_count',--state.notification_count);
	},
	SET_BELL_NOTIFICATIONS(state,data){

		Vue.set(state,'notification_count',data.notification_count);
		Vue.set(state,'bell_notifications',data.notifications);
	},
	PUSH_BELL_NOTIFICATIONS(state,notification){
		let notifications = state.bell_notifications;
		notifications.unshift(notification);
		let count = ++state.notification_count
		Vue.set(state,'bell_notifications',notifications);
		Vue.set(state,'notification_count',count);
	},
	SET_SEARCH(state,value){
		Vue.set(state,'search',value);
	},
	SET_ENTRIES(state,value){
		Vue.set(state,'entries',value);
	},
	CHANGE_USER_STATUS(state,data){
		let index = _.findIndex(state.users.data,(user)=>{ return user.id == data.id});
		state.users.data.splice(index,1);
	},
    SET_CONFIRMED_STATUS(state,data){
    	console.log('SET_CONFIRMED_STATUS',data);
    	if(data.status == 'confirmed'){
	    let index = _.findIndex(state.pendingOrders.data,(pendingOrder)=>{ return pendingOrder.id == data.id});
	    	console.log('index',state.pendingOrder);
			state.confirmeOrders.data.push(state.pendingOrders.data[index]);
	    	state.pendingOrders.data.splice(index,1);
    	}else if(data.status == 'rejected')
    	{
    		let index = _.findIndex(state.pendingOrders.data,(pendingOrder)=>{ return pendingOrder.id == data.id});
    		state.rejectedOrders.data.push(state.pendingOrders.data[index]);
	    	state.pendingOrders.data.splice(index,1);
    	}else if(data.status == 'delivered')
    	{
    		let index = _.findIndex(state.confirmeOrders.data,(confirmeOrders)=>{ return confirmeOrders.id == data.id});
    		state.deliveredOrders.data.push(state.confirmeOrders.data[index]);
	    	state.confirmeOrders.data.splice(index,1);
    	}
	},
	SET_USERS(state,data){
		Vue.set(state,'users',data);
	},
	SET_USER(state,data){
		Vue.set(state,'user',data);
	},
	SET_ADVERTISEMENT_FORMS(state,data){
		Vue.set(state,'advertisement_forms',data);
	},
	SET_ADVERTISEMENT_FORM(state,data){
		Vue.set(state,'advertisement_form',data);
	},
	SET_ADVERTISEMENTS(state,data){
		Vue.set(state,'advertisements',data);
	},
	SET_ADVERTISEMENT(state,data){
		Vue.set(state,'advertisement',data);
	},

	SET_ADVERTISEMENTS_FEATURE(state,data){
		Vue.set(state,'advertisement_features',data);
	},
	SET_INACTIVE_ADVERTISEMENTS(state,data){
		Vue.set(state,'inactive_advertisements',data);
	},
	SET_INACTIVE_ADVERTISEMENT(state,data){
		Vue.set(state,'inactive_advertisement',data);
	},
	SET_REPORTS(state,data){
		Vue.set(state,'reports',data);
	},
	SET_REPORT(state,data){
		Vue.set(state,'report',data);
	},
	SET_FEEDBACKS(state,data){
		Vue.set(state,'feedbacks',data);
	},
	SET_FEEDBACK(state,data){
		Vue.set(state,'feedback',data);
	},
}
