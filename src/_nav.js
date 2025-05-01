import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilSpeedometer, cilCart, cilList, cilUser, cilTruck, cilCreditCard, cilStar, cilChartPie, cilSettings, cilPuzzle
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Catalog Management',
  },
  {
    component: CNavItem,
    name: 'Products',
    to: '/catalog/products',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Add New Product',
    to: '/catalog/AddNewProduct',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Categories',
    to: '/catalog/categories',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Brands',
    to: '/catalog/Brands',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Attributes',
    to: '/catalog/attributes',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Order Management',
  },
  {
    component: CNavItem,
    name: 'All Orders',
    to: '/orders/all',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Pending Orders',
    to: '/orders/returns',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Completed Orders',
    to: '/orders/all',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Cancelled Orders',
    to: '/orders/returns',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Returns & Refunds',
    to: '/orders/returns',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Customer Management',
  },
  {
    component: CNavItem,
    name: 'Customers',
    to: '/customers/list',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Shipping Management',
  },
  {
    component: CNavItem,
    name: 'Shipping Methods',
    to: '/shipping/methods',
    icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Tracking',
    to: '/shipping/tracking',
    icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Payment Management',
  },
  {
    component: CNavItem,
    name: 'Payment Methods',
    to: '/payments/methods',
    icon: <CIcon icon={cilCreditCard} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Transaction History',
    to: '/payments/transactions',
    icon: <CIcon icon={cilCreditCard} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Reviews & Feedback',
  },
  {
    component: CNavItem,
    name: 'Product Reviews',
    to: '/reviews',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Customer Feedback',
    to: '/cms/feedback',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Reports & Analytics',
  },
  {
    component: CNavItem,
    name: 'Sales Report',
    to: '/reports/sales',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Customer Report',
    to: '/reports/customers',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },{
    component: CNavItem,
    name: 'Refund Report',
    to: '/reports/refund',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Settings',
  },
  {
    component: CNavItem,
    name: 'General Settings',
    to: '/settings/general',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Currency Settings',
    to: '/settings/currency',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'User Roles',
    to: '/settings/users',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
]

// const _nav = [
//   {
//     component: CNavItem,
//     name: 'Dashboard',
//     to: '/dashboard',
//     icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
//     badge: {
//       color: 'info',
//       text: 'NEW',
//     },
//   },
//   {
//     component: CNavTitle,
//     name: 'Theme',
//   },
//   {
//     component: CNavItem,
//     name: 'Colors',
//     to: '/theme/colors',
//     icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: 'Typography',
//     to: '/theme/typography',
//     icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavTitle,
//     name: 'Components',
//   },
//   {
//     component: CNavGroup,
//     name: 'Base',
//     to: '/base',
//     icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: 'Accordion',
//         to: '/base/accordion',
//       },
//       {
//         component: CNavItem,
//         name: 'Breadcrumb',
//         to: '/base/breadcrumbs',
//       },
//       {
//         component: CNavItem,
//         name: (
//           <React.Fragment>
//             {'Calendar'}
//             <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
//           </React.Fragment>
//         ),
//         href: 'https://coreui.io/react/docs/components/calendar/',
//         badge: {
//           color: 'danger',
//           text: 'PRO',
//         },
//       },
//       {
//         component: CNavItem,
//         name: 'Cards',
//         to: '/base/cards',
//       },
//       {
//         component: CNavItem,
//         name: 'Carousel',
//         to: '/base/carousels',
//       },
//       {
//         component: CNavItem,
//         name: 'Collapse',
//         to: '/base/collapses',
//       },
//       {
//         component: CNavItem,
//         name: 'List group',
//         to: '/base/list-groups',
//       },
//       {
//         component: CNavItem,
//         name: 'Navs & Tabs',
//         to: '/base/navs',
//       },
//       {
//         component: CNavItem,
//         name: 'Pagination',
//         to: '/base/paginations',
//       },
//       {
//         component: CNavItem,
//         name: 'Placeholders',
//         to: '/base/placeholders',
//       },
//       {
//         component: CNavItem,
//         name: 'Popovers',
//         to: '/base/popovers',
//       },
//       {
//         component: CNavItem,
//         name: 'Progress',
//         to: '/base/progress',
//       },
//       {
//         component: CNavItem,
//         name: 'Smart Pagination',
//         href: 'https://coreui.io/react/docs/components/smart-pagination/',
//         badge: {
//           color: 'danger',
//           text: 'PRO',
//         },
//       },
//       {
//         component: CNavItem,
//         name: (
//           <React.Fragment>
//             {'Smart Table'}
//             <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
//           </React.Fragment>
//         ),
//         href: 'https://coreui.io/react/docs/components/smart-table/',
//         badge: {
//           color: 'danger',
//           text: 'PRO',
//         },
//       },
//       {
//         component: CNavItem,
//         name: 'Spinners',
//         to: '/base/spinners',
//       },
//       {
//         component: CNavItem,
//         name: 'Tables',
//         to: '/base/tables',
//       },
//       {
//         component: CNavItem,
//         name: 'Tabs',
//         to: '/base/tabs',
//       },
//       {
//         component: CNavItem,
//         name: 'Tooltips',
//         to: '/base/tooltips',
//       },
//       {
//         component: CNavItem,
//         name: (
//           <React.Fragment>
//             {'Virtual Scroller'}
//             <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
//           </React.Fragment>
//         ),
//         href: 'https://coreui.io/react/docs/components/virtual-scroller/',
//         badge: {
//           color: 'danger',
//           text: 'PRO',
//         },
//       },
//     ],
//   },
//   {
//     component: CNavGroup,
//     name: 'Buttons',
//     to: '/buttons',
//     icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: 'Buttons',
//         to: '/buttons/buttons',
//       },
//       {
//         component: CNavItem,
//         name: 'Buttons groups',
//         to: '/buttons/button-groups',
//       },
//       {
//         component: CNavItem,
//         name: 'Dropdowns',
//         to: '/buttons/dropdowns',
//       },
//       {
//         component: CNavItem,
//         name: (
//           <React.Fragment>
//             {'Loading Button'}
//             <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
//           </React.Fragment>
//         ),
//         href: 'https://coreui.io/react/docs/components/loading-button/',
//         badge: {
//           color: 'danger',
//           text: 'PRO',
//         },
//       },
//     ],
//   },
//   {
//     component: CNavGroup,
//     name: 'Forms',
//     icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: 'Form Control',
//         to: '/forms/form-control',
//       },
//       {
//         component: CNavItem,
//         name: 'Select',
//         to: '/forms/select',
//       },
//       {
//         component: CNavItem,
//         name: (
//           <React.Fragment>
//             {'Multi Select'}
//             <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
//           </React.Fragment>
//         ),
//         href: 'https://coreui.io/react/docs/forms/multi-select/',
//         badge: {
//           color: 'danger',
//           text: 'PRO',
//         },
//       },
//       {
//         component: CNavItem,
//         name: 'Checks & Radios',
//         to: '/forms/checks-radios',
//       },
//       {
//         component: CNavItem,
//         name: 'Range',
//         to: '/forms/range',
//       },
//       {
//         component: CNavItem,
//         name: (
//           <React.Fragment>
//             {'Range Slider'}
//             <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
//           </React.Fragment>
//         ),
//         href: 'https://coreui.io/react/docs/forms/range-slider/',
//         badge: {
//           color: 'danger',
//           text: 'PRO',
//         },
//       },
//       {
//         component: CNavItem,
//         name: (
//           <React.Fragment>
//             {'Rating'}
//             <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
//           </React.Fragment>
//         ),
//         href: 'https://coreui.io/react/docs/forms/rating/',
//         badge: {
//           color: 'danger',
//           text: 'PRO',
//         },
//       },
//       {
//         component: CNavItem,
//         name: 'Input Group',
//         to: '/forms/input-group',
//       },
//       {
//         component: CNavItem,
//         name: 'Floating Labels',
//         to: '/forms/floating-labels',
//       },
//       {
//         component: CNavItem,
//         name: (
//           <React.Fragment>
//             {'Date Picker'}
//             <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
//           </React.Fragment>
//         ),
//         href: 'https://coreui.io/react/docs/forms/date-picker/',
//         badge: {
//           color: 'danger',
//           text: 'PRO',
//         },
//       },
//       {
//         component: CNavItem,
//         name: 'Date Range Picker',
//         href: 'https://coreui.io/react/docs/forms/date-range-picker/',
//         badge: {
//           color: 'danger',
//           text: 'PRO',
//         },
//       },
//       {
//         component: CNavItem,
//         name: (
//           <React.Fragment>
//             {'Time Picker'}
//             <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
//           </React.Fragment>
//         ),
//         href: 'https://coreui.io/react/docs/forms/time-picker/',
//         badge: {
//           color: 'danger',
//           text: 'PRO',
//         },
//       },
//       {
//         component: CNavItem,
//         name: 'Layout',
//         to: '/forms/layout',
//       },
//       {
//         component: CNavItem,
//         name: 'Validation',
//         to: '/forms/validation',
//       },
//     ],
//   },
//   {
//     component: CNavItem,
//     name: 'Charts',
//     to: '/charts',
//     icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavGroup,
//     name: 'Icons',
//     icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: 'CoreUI Free',
//         to: '/icons/coreui-icons',
//       },
//       {
//         component: CNavItem,
//         name: 'CoreUI Flags',
//         to: '/icons/flags',
//       },
//       {
//         component: CNavItem,
//         name: 'CoreUI Brands',
//         to: '/icons/brands',
//       },
//     ],
//   },
//   {
//     component: CNavGroup,
//     name: 'Notifications',
//     icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: 'Alerts',
//         to: '/notifications/alerts',
//       },
//       {
//         component: CNavItem,
//         name: 'Badges',
//         to: '/notifications/badges',
//       },
//       {
//         component: CNavItem,
//         name: 'Modal',
//         to: '/notifications/modals',
//       },
//       {
//         component: CNavItem,
//         name: 'Toasts',
//         to: '/notifications/toasts',
//       },
//     ],
//   },
//   {
//     component: CNavItem,
//     name: 'Widgets',
//     to: '/widgets',
//     icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
//     badge: {
//       color: 'info',
//       text: 'NEW',
//     },
//   },
//   {
//     component: CNavTitle,
//     name: 'Extras',
//   },
//   {
//     component: CNavGroup,
//     name: 'Pages',
//     icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: 'Login',
//         to: '/login',
//       },
//       {
//         component: CNavItem,
//         name: 'Register',
//         to: '/register',
//       },
//       {
//         component: CNavItem,
//         name: 'Error 404',
//         to: '/404',
//       },
//       {
//         component: CNavItem,
//         name: 'Error 500',
//         to: '/500',
//       },
//     ],
//   },
//   {
//     component: CNavItem,
//     name: 'Docs',
//     href: 'https://coreui.io/react/docs/templates/installation/',
//     icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
//   },
// ]

export default _nav
