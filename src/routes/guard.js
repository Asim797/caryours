import router from './index.js';


function isAdminLoggedIn() {
     
    return localStorage.getItem('access-token') && localStorage.getItem('isLoggedIn') && localStorage.getItem('userType') === 'admin';
}

function isWebLoggedIn() {
    
    return localStorage.getItem('access-token') && localStorage.getItem('isLoggedIn') && localStorage.getItem('userType') === 'web';
}

router.beforeEach((to, from, next) => {
    console.log(to);
    if(to.name.includes('admin.')){
       
        // validating non login pages.
        if (isAdminLoggedIn()) {

            if (to.meta.requiresAuth && to.meta.loggedInCan) {
                return next();
            } else if (!to.meta.requiresAuth && !to.meta.loggedInCan) {
                return next({ name: 'admin.dashboard'});
            } else {
            }
            return;
        }
        // validating access for actors as unauthenticated
        if (to.meta.requiresAuth) {
            
            return next({ name: 'admin.auth.login' });
        }
    } 

    if (to.name.includes('web.')){
         
        if (isWebLoggedIn()) {
            
           
            if (to.meta.requiresAuth && to.meta.loggedInCan) {
                return next();
            } else if (!to.meta.requiresAuth && !to.meta.loggedInCan) {
                return next();
            } else {
                return next();
            
                //return next({name : 'user.404'});
            }
            return;
        }
        //validating access for actors as unauthenticated
        if (to.meta.requiresAuth) {
            
            return next({ name:'web.auth.login'});
        }
    }


    return next();

});