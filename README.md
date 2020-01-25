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


### `Folder Structure`
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



