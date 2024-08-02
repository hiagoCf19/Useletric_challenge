import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilActionRedo, cilAddressBook, cilDevices, cilPuzzle } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavGroup,
    name: 'Dispositivos',
    to: '/buttons',
    icon: <CIcon icon={cilDevices} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Smartmeter',
        to: '/devices/smartmeter',
      },
      {
        component: CNavItem,
        name: 'Smartemp',
        to: '/devices/smartemp',
      },
    ],
  },
]

export default _nav
