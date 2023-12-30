import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GuestBookPage from "./pages/guestbook/GuestBookPage";
import FootprintPage from "./pages/footprint/FootprintPage";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signup/SignUpPage";
import HomePage from "./pages/home/HomePage";
import Profile from "./pages/guestbook/AddGuestBook/components/Profile";
import Photo from "./pages/guestbook/AddGuestBook/components/Photo";
import Description from "./pages/guestbook/AddGuestBook/components/Description";
import AddGuestBook from "./pages/guestbook/AddGuestBook/AddGuestBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/guestbook",
    element: <GuestBookPage />,
  },
  {
    path: "/footprint",
    element: <FootprintPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/add-guestbook",
    element: <AddGuestBook />,
    children: [
      {
        path: "",
        element: <Profile />,
      },
      {
        path: "photo",
        element: <Photo />,
      },
      {
        path: "desc",
        element: <Description />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
