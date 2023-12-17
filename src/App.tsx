import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GuestBookPage from "./pages/guestbook/GuestBookPage";
import FootprintPage from "./pages/footprint/FootprintPage";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signup/SignUpPage";
import HomePage from "./pages/home/HomePage";

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
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
