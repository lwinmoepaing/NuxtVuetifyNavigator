# Nuxt Vuetify Navigation

### `nuxt.config.js`

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


In Config Routes, We need to define Role Permission And Routers

coz of Hiding or Showing Each Side Links
### `configs/routes.js`

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



