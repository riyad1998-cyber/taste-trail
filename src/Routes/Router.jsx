import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import ReviewCard from "../Components/ReviewCard";
import Resturant from "../Pages/Resturant";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Registrations from "../Pages/Registrations";
import AuthLayout from "../Layout/AuthLayout";
import MyReviewCard from "../Components/AllReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllReview from "../Components/AllReview";
import MyReview from "../Pages/MyReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/reviews",
        element: <AllReview></AllReview>,
        loader: () => fetch('http://localhost:3000/reviews')
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/resturants",
        element: <Resturant></Resturant>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/registration",
        element: <Registrations></Registrations>,
      },
    ],
  },
]);

export default router;
