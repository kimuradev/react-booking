import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';

import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import BookingList from '../pages/BookingList';
import BookingReservation from '../pages/BookingReservation';

const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="/booking/" element={<BookingList />} />
                    <Route path="/booking/:id" element={<BookingReservation />} />
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default RoutesApp;