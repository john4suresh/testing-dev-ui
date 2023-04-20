import './App.css'
import ErrorPage from './error-page';
import { AboutPageOne } from './pages/AboutPageOne';
import { BlogsOne } from './pages/BlogsOne';
import { ContactsPageOne } from './pages/ContactsPageOne';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { StartPage } from './pages/StartPage';
import Header from './components/Header';
import Footer from './components/Footer';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
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
        path: "/contactspageone",
        element: <ContactsPageOne />, 
      },
      {
        path: "/blogsone",
        element: <BlogsOne />,
      },
      {
        path: "/aboutpageone",
        element: <AboutPageOne />,
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
