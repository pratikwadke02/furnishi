// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'customer information',
    path: '/dashboard/customerInformation',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'customer registration',
    path: '/dashboard/customerRegistration',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'enquiry',
    path: '/dashboard/enquiry',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'work partner',
    path: '/dashboard/workPartner',
    icon: getIcon('eva:people-fill'), 
  },
  {
    title: 'survey',
    path: '/dashboard/survey',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'rate master',
    path: '/dashboard/rateMaster',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'work partner rate master',
    path: '/dashboard/workPartnerRateMaster',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'site settings',
    path: '/dashboard/siteSettings',
    icon: getIcon('eva:settings-2-fill'),
  }
  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: getIcon('eva:people-fill'),
  // },
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: getIcon('eva:shopping-bag-fill'),
  // },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: getIcon('eva:file-text-fill'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill'),
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill'),
  // },
];

export default navConfig;
