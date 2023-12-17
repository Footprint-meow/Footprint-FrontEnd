import { Route, Routes } from 'react-router-dom';
import GuestBookPage from './pages/guestbook/GuestBookPage';
import FootprintPage from './pages/footprint/FootprintPage';
import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/signup/SignUpPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/guestbook" element={<GuestBookPage />} />
        <Route path="/footprint" element={<FootprintPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
