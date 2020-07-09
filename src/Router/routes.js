import React from "react";
import HomePage from "../Pages/HomePage";
import BlogPage from "../Pages/BlogPage";
import CartPage from "../Pages/CartPage";
import CourseItemPage from "../Pages/CourseItemPage";
import CoursesPage from "../Pages/CoursesPage";
import UserPage from "../Pages/UserPage";
import NotfoundPage from "../Pages/NotfoundPage";
import CheckoutPage from "../Pages/CheckoutPage";
import AdminPage from "../Pages/AdminPage";
import EventsPage from "../Pages/EventsPage";
import AboutPage from "../Pages/AboutPage";

export const routes = [
  {
    path: "/",
    exact: true,
    main: ({ history }) => <HomePage history={history} />,
  },
  {
    path: "/courses",
    exact: true,
    main: ({ history, match }) => (
      <CoursesPage history={history} match={match} />
    ),
  },
  {
    path: "/courses/:id",
    exact: true,
    main: ({ match }) => <CourseItemPage match={match} />,
  },
  {
    path: "/cart",
    exact: false,
    main: ({ match }) => <CartPage match={match} />,
  },
  {
    path: "/checkout",
    exact: false,
    main: ({ match }) => <CheckoutPage match={match} />,
  },
  {
    path: "/user/:id",
    exact: false,
    main: ({ match }) => <UserPage match={match} />,
  },
  {
    path: "/blog",
    exact: false,
    main: ({ match }) => <BlogPage match={match} />,
  },
  {
    path: "/events",
    exac: false,
    main: () => <EventsPage />,
  },
  {
    path: "/about",
    exact: false,
    main: ({ match }) => <AboutPage match={match} />,
  },
  {
    path: "/admin",
    exact: false,
    main: () => <AdminPage />,
  },
  {
    path: "",
    exact: true,
    main: () => <NotfoundPage />,
  },
];
