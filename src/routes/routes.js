// importing components
import admin from './admin/public';
import web from './web/public';
 import webAuthenticate from './web/authenticate';
import adminAuthenticate from './admin/authenticate';


// building routes & injecting components
const routes = [
    admin,
    web,
    adminAuthenticate,
     webAuthenticate,
];

export default routes;
