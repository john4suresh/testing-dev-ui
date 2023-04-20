/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable max-len */
import "./App.css";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider
} from "react-router-dom";
import ErrorPage from "./error-page";
import Header from "./components/Header";
import Footer from "./components/Footer";
import loadable from "./utils";

const AppLayout = () => (
    <>
        <Header />
        <Outlet />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Footer />
        </div>
    </>
    ),
    StartPage = loadable(() => import("./pages/StartPage")),
    AboutPageOne = loadable(() => import("./pages/AboutPageOne")),
    BlogPostsPageOne = loadable(() => import("./pages/BlogPostsPageOne")),
    BlogPostsPageTwo = loadable(() => import("./pages/BlogPostsPageTwo")),
    BlogsOne = loadable(() => import("./pages/BlogsOne")),
    BlogsTwo = loadable(() => import("./pages/BlogsTwo")),
    ContactsPageOne = loadable(() => import("./pages/ContactsPageOne")),
    ContactsPageTwo = loadable(() => import("./pages/ContactsPageTwo")),
    LandingPageOne = loadable(() => import("./pages/LandingPageOne")),
    PricingPageOne = loadable(() => import("./pages/PricingPageOne")),
    PricingPageTwo = loadable(() => import("./pages/PricingPageTwo")),
    router = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <StartPage />
                },
                {
                    path: "/aboutpageone",
                    element: <AboutPageOne />
                },
                {
                    path: "/blogpostspageone",
                    element: <BlogPostsPageOne />
                },
                {
                    path: "/blogpostspagetwo",
                    element: <BlogPostsPageTwo />
                },
                {
                    path: "/blogsone",
                    element: <BlogsOne />
                },
                {
                    path: "/blogstwo",
                    element: <BlogsTwo />
                },
                {
                    path: "/contactspageone",
                    element: <ContactsPageOne />
                },
                {
                    path: "/contactspagtwo",
                    element: <ContactsPageTwo />
                },
                {
                    path: "/landingpageone",
                    element: <LandingPageOne />
                },
                {
                    path: "/pricingpageone",
                    element: <PricingPageOne />
                },
                {
                    path: "/pricingpagetwo",
                    element: <PricingPageTwo />
                }

            ]
        }
    ]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
