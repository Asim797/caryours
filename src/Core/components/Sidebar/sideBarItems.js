const sidebarItems = [
    {
    	componentName : 'admin.dashboard',
    	iconClasses : 'fas fa-area-chart',
    	name : 'Dashboard',
        permission : 'admin.dashboard',
    },
    {
        iconClasses: 'fas fa-users',
        name: 'User Management',
        permission : 'admin.users',
        children : [
        {
            componentName : 'admin.users.index',
            defaultParams : {
                type : 'employee',
            },
            name: 'Employee',
        },
        {
            componentName : 'admin.users.index',
            defaultParams : {
                type : 'property-owner',
            },
            name: 'Property Owner',
        },
        ],
    },
    {
        componentName : 'admin.properties.index',
        permission : 'admin.properties',
        iconClasses: 'fas fa-building',
        name: 'Property Management',
    },
    // {
    //     componentName : 'admin.subscriptions.index',
    //     iconClasses: 'fas fa-money-bill',
    //     name: 'Subscription Log',
    //     permission : 'admin.subscriptions',
    // },
    {
        componentName : 'admin.logs.index',
        iconClasses: 'fas fa-file-alt',
        name: 'Task Log',
        permission : 'admin.logs',
    },
    {
        componentName : 'admin.feedback.index',
        iconClasses: 'fas fa-comments',
        name: 'Feedback',
        permission : 'admin.feedbacks',
    },
    {
        componentName : 'admin.packages.index',
        iconClasses: 'fas fa-clipboard-list',
        name: 'Package Management',
        permission : 'admin.packages',
    },
    {
        componentName : 'admin.admins.index',
        iconClasses: 'fas fa-user',
        name: 'Sub-Admin Management',
        permission : 'admin.admins',
    },
    /*{
        componentName: 'AdminHome',
        iconClasses: 'fa fa-th-large',
        name: 'Product Management',
        children: [
        	{
                componentName: 'Users',
                iconClasses: '',
                name: 'Inventory Management',
            },
            {
                componentName: 'Users',
                iconClasses: '',
                name: 'Category Management',
            },
            {
                componentName: 'Users',
                iconClasses: '',
                name: 'Attribute Management',
            },

        ],
    },*/

];
export default sidebarItems;
