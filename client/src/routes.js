import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
// import Blog from './pages/Blog';
import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import CustomerInformation from './pages/CustomerInformation';
import CustomerRegistration from './pages/CustomerRegistration';
import Enquiry from './pages/Enquiry';
import Survey from './pages/Survey'
import WorkPartner from './pages/WorkPartner'
import RateMaster from './pages/RateMaster';
import WorkPartnerRateMaster from './pages/WorkPartnerRateMaster';
import Master from './pages/Master';
import MyOrders from './pages/MyOrders';
import ComplaintTicket from './pages/ComplaintTicket';
import AMC from './pages/AMC';
import Settings from './pages/Settings';
import SurveyTicket from './pages/SurveyTicket';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        // { path: 'blog', element: <Blog /> },
        { path: 'customerInformation', element: <CustomerInformation />},
        { path: 'customerRegistration', element: <CustomerRegistration />},
        { path: 'enquiry', element: <Enquiry />},
        { path: 'workPartner', element: <WorkPartner />},
        { path: 'survey', element: <Survey />},
        { path: 'rateMaster', element: <RateMaster />},
        { path: 'workPartnerRateMaster', element: <WorkPartnerRateMaster />},
        { path: 'master', element: <Master />},
        { path: 'myOrders', element: <MyOrders />},
        { path: 'complaintTicket', element: <ComplaintTicket />},
        { path: 'surveyTicket', element: <SurveyTicket />},
        { path: 'amc', element: <AMC />},
        { path: 'settings', element: <Settings />},
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
