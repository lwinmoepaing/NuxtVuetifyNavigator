## Nuxt Vuetify Navigation

    .
    ├── ...
    ├── components                             
    │   ├── Common  
    │   │   ├── Navigation 
    │   │   │   ├── AppBar.vue
    │   │   │   ├── LeftDrawer.vue
    │   │   │   ├── RightNavigationDrawer.vue
    │   │   │   ├── SideNavItems.vue
    │   │   │   ├── SideNavNestedList.vue
    │   │   │   └── SideNavNormalList.vue
    │   │   └── ...                     
    │   │   
    ├── configs
    │   ├── ...
    │   └── routes.js
    ├── layouts
    │   ├── ...
    │   └── default.js
    ├── plugins
    │   ├── ...
    │   └── customNavigatorPlugin.js
    ├── ...
    └── nuxt.config.js

### `configs/routes.js`

In Config Routes, We need to define Role Permission And Routers

coz of Hiding or Showing Each Side Links

```javascript

/**
 * All Role And Permision
 */

export const rolePermission = {
  Admin: [
    'Home',
    'User List',
    'User Create',
  ],
  Staff: [
    'Home',
    'Inspire'
  ]
}

/**
 * Need To Define All Route Here
 * @desc: Navigator For Left Side Bar
 */

export const masterLayoutRoute = [
  {
    icon: 'mdi-apps',
    title: 'Home',
    to: '/'
  },
  {
    icon: 'mdi-account-circle',
    title: 'User',
    to: '#',
    subLinks : [
      {
        title : 'User List',
        to: '/users/list',
        icon: 'mdi-account-group'
      },
      {
        title : 'User Create',
        to: '/users/create',
        icon: 'mdi-account-plus'
      },
    ]
  },
]

```

### `plugins/customNavigatorPlugin.js`

```javascript
/**
 * Injetng Helper Function
 * Written By Lwin Moe Paing
 */
import { masterLayoutRoute, rolePermission } from '../configs/routes'
import Vue from 'vue'

Vue.prototype.GET_ALL_ROUTES = () => filterRoutesName(masterLayoutRoute)
Vue.prototype.GET_ROUTE_BY_ROLE = getRouteByRole

export default ({ app }) => {
  app.GET_ALL_ROUTES = () => filterRoutesName(masterLayoutRoute)
  app.GET_ROUTE_BY_ROLE = getRouteByRole
}

/**
 * Doc: Filter Object Array
 * @desc to get new Obj{} by Role Permission
 * @param {role: String} | 'Admin', 'User'
 * @param {routeArray: Array} | [{ icon: 'mdi-apps', title: 'Welcome', to: '/'}]
 * @return { Array } | [{ icon: 'mdi-apps', title: 'Welcome', to: '/'}]
 */

function getRouteByRole(role = 'Admin', routeArray = masterLayoutRoute) {
  let arr = [];
  masterLayoutRoute.forEach((value, key) => {

    //If not Exist Sublinks
    if(!isSubLinks(value) && isExistRole(value, role)) {
      arr.push(value)
    } else if(isSubLinks(value)) {
      //If Exist Sublinks
      const nestedLink = isExistRoleSublinks(value, role);
      if( nestedLink.length > 0) {
        let obj = { ...value};
        obj.subLinks = nestedLink;
        arr.push(obj);
      }
    }

  });
  return arr;
}

function isExistRoleSublinks({ subLinks } , role) {
  let arr = [];
  subLinks.forEach((value, key) => {
    if (isExistRole(value, role)) arr.push(value);
  });
  return arr;
}

function isExistRole({ title }, role) {
  const permission = rolePermission[role];
  return permission.find(data => data === title)
}

function isSubLinks (linkObj) { return linkObj.subLinks && linkObj.subLinks.length > 0 }


/**
 * Doc: Helper Function
 * @desc to filter Route Array ['Route Name1', 'Route Name2']
 * @param { Array }
 * @return { Array }
 */

function filterRoutesName (routeArray) {
  return routeArray.reduce(
    (ini, next) => [...ini,
      ...(next.subLinks ? returnEachName(next.subLinks) : [next.title])
    ]
    , []
  );
}

function returnEachName (linksArray) {
  return linksArray.reduce((init, next) => [...init, next.title] ,[])
}

```



