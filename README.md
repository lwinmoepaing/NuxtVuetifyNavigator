## Nuxt Vuetify Navigation

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