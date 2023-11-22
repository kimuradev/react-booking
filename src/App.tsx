import { AuthProvider } from './context/auth/auth';
import { BookingProvider } from './context/booking/booking';
import RoutesApp from "./routes";

import './index.css';

export default function App() {
  return (
    <BookingProvider>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </BookingProvider>
  )
}