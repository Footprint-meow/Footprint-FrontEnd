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
import AddStep from './pages/footprint/AddStep/AddStep';
import AddPhoto from './pages/footprint/components/AddPhoto';
import Footprint from './pages/footprint/components/Footprint';
import Writer from './pages/footprint/AddStep/components/Writer';
import Impression from './pages/footprint/AddStep/components/Impression';
import Password from './pages/footprint/AddStep/components/Password';
import ShareGuestBook from './pages/guestbook/ShareGuestBook/ShareGuestBook';

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
        path: 'add-photo',
        element: <AddPhoto />,
      },
      {
        path: 'add-step',
        element: <AddStep />,
        children: [
          {
            path: '',
            element: <Writer />,
          },
          {
            path: 'impression',
            element: <Impression />,
          },
          {
            path: 'pwd',
            element: <Password />,
          },
        ],
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
  {
    path: '/share-guestbook',
    element: <ShareGuestBook />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
