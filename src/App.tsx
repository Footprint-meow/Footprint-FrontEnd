import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import GuestBookPage from './pages/guestbook/GuestBookPage';
import FootprintPage from './pages/footprint/FootprintPage';
import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/signup/SignUpPage';
import HomePage from './pages/home/HomePage';
import Profile from './pages/guestbook/AddGuestBook/components/Profile';
import Photo from './pages/guestbook/AddGuestBook/components/Photo';
import Description from './pages/guestbook/AddGuestBook/components/Description';
import AddGuestBook from './pages/guestbook/AddGuestBook/AddGuestBook';
import AddStep from './pages/footprint/components/AddStep';
import AddPhoto from './pages/footprint/components/AddPhoto';
import Footprint from './pages/footprint/components/Footprint';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/guestbook',
    element: <GuestBookPage />,
  },
  {
    path: '/footprint',
    element: <FootprintPage />,
    children: [
      {
        path: '',
        element: <Footprint />,
      },
      {
        path: 'add-step',
        element: <AddStep />,
      },
      {
        path: 'add-photo',
        element: <AddPhoto />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/add-guestbook',
    element: <AddGuestBook />,
    children: [
      {
        path: '',
        element: <Profile />,
      },
      {
        path: 'photo',
        element: <Photo />,
      },
      {
        path: 'desc',
        element: <Description />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
