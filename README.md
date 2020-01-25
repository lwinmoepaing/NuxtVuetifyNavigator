# Nuxt Vuetify Navigation

## Setup

At first You need to register My Plugins. And Then Add components and Define Route File in Config folder.

### `nuxt.config.js`

Register Our Custom Navigator Plugins

```javascript
{
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/customNavigatorPlugin.js'
  ],
}
```


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

### `laytouts/default.js`

You Can Changes Role From Your **Vuex** Store `user:{ role: 'User' }` below Example.

```javascript
export default {
  data () {
    return {
      //...
      title: 'Master',
      user: {
        name: 'Something',
        role: 'Admin' // Or User, Guest
      }
    }
  },
  computed: {
    getRoutesByRole() {
      // Injection Method From Navigator Plugins
      return this.GET_ROUTE_BY_ROLE(this.user.role)
    }
  },
}
```

### `Folder Structure`

Be Careful to right directory. 

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



