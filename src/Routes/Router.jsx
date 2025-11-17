import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Resturant from "../Pages/Resturant";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Registrations from "../Pages/Registrations";
import AuthLayout from "../Layout/AuthLayout";
import AllReview from "../Components/AllReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddReview from "../Pages/AddReview";
import ReviewDetail from "../Pages/ReviewDetail";
import MyFavourite from "../Pages/MyFavourite";
import MyReview from "../Pages/MyReview";
import EditReview from "../Pages/EditReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/reviews",
        element: <AllReview />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/reviews`)
      },
      {
        path: "/addReviews",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
      { path: "/resturants", element: <Resturant /> },
      { path: "/about", element: <About /> },
      {
        path: "/myFavourite",
        element: (
          <PrivateRoute>
            <MyFavourite />
          </PrivateRoute>
        ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-review/:id",
        element: (
          <PrivateRoute>
            <EditReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/reviewDetail/:id",
        element: (
          <PrivateRoute>
            <ReviewDetail />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/reviews/${params.id}`)
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/registration", element: <Registrations /> },
    ],
  },
]);

export default router;
