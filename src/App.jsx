import './App.css'
import ErrorPage from './error-page';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { StartPage } from './pages/StartPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { AboutPageOne } from './pages/AboutPageOne';
import { BlogPostsPageOne } from './pages/BlogPostsPageOne';
import { BlogPostsPageTwo } from './pages/BlogPostsPageTwo';
import { BlogsOne } from './pages/BlogsOne';
import { BlogsTwo } from './pages/BlogsTwo';
import { ContactsPageOne } from './pages/ContactsPageOne';
import { ContactsPageTwo } from './pages/ContactsPageTwo';
import { LandingPageOne } from './pages/LandingPageOne';
import { PricingPageOne } from './pages/PricingPageOne';
import { PricingPageTwo } from './pages/PricingPageTwo';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Footer />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <StartPage />, 
      },
      {
        path: "/aboutpageone",
        element: <AboutPageOne />,
      },
      {
        path: "/blogpostspageone",
        element: <BlogPostsPageOne />,
      },
      {
        path: "/blogpostspagetwo",
        element: <BlogPostsPageTwo />,
      },
      {
        path: "/blogsone",
        element: <BlogsOne />,
      },
      {
        path: "/blogstwo",
        element: <BlogsTwo />,
      },
      {
        path: "/contactspageone",
        element: <ContactsPageOne />, 
      },
      {
        path: "/contactspagtwo",
        element: <ContactsPageTwo />, 
      },
      {
        path: "/landingpageone",
        element: <LandingPageOne />, 
      },
      {
        path: "/pricingpageone",
        element: <PricingPageOne />, 
      },
      {
        path: "/pricingpagetwo",
        element: <PricingPageTwo />, 
      },
      
    ]
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
