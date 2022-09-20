import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
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
import SurveyDetails from './pages/SurveyDetails';
import WorkPartnerDetails from './pages/workPartnerDetails';
import RateMaster from './pages/RateMaster';
import WorkPartnerService from './pages/WorkPartnerService';
import SiteSettings from './pages/SiteSettings';

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
        { path: 'blog', element: <Blog /> },
        { path: 'customerInformation', element: <CustomerInformation />},
        { path: 'customerRegistration', element: <CustomerRegistration />},
        { path: 'enquiry', element: <Enquiry />},
        { path: 'workPartner', element: <WorkPartner />},
        { path: 'survey', element: <Survey />},
        { path: 'surveyDetails/:id', element: <SurveyDetails />},
        { path: 'workPartnerDetails/:id', element: <WorkPartnerDetails />},
        { path: 'rateMaster', element: <RateMaster />},
        { path: 'workPartnerRateMaster', element: <WorkPartnerService />},
        { path: 'siteSettings', element: <SiteSettings /> },
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
