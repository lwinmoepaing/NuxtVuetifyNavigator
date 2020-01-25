/**
 * All Role And Permision
 */

export const rolePermission = {
  Admin: [
    'Welcome',
    'Inspire',
    'Table',
    'User List',
    'User Create',
    'User Role',
  ],
  Staff: [
    'Welcome',
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
    title: 'Welcome',
    to: '/'
  },
  {
    icon: 'mdi-chart-bubble',
    title: 'Inspire',
    to: '/inspire'
  },
  {
    icon: 'mdi-table',
    title: 'Table',
    to: '/table'
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
      {
        title : 'User Role',
        to: '/users/role',
        icon: 'mdi-account-alert'
      },
    ]
  },
]
