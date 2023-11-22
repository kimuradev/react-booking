import { Link } from 'react-router-dom';
import { Home, CalendarCheck } from 'lucide-react';

const navigation = [
    { link: '/', label: 'Home', icon: <Home className='w-4 h-4 mr-2' /> },
    { link: '/booking', label: 'Booking', icon: <CalendarCheck className='w-4 h-4 mr-2' /> },
]

function Navbar() {
    return (
        <aside className="row-span-1 bg-red-200">
            <nav className="p-4 ">
                <ul className="flex flex-row gap-6 md:flex-col">
                    {navigation.map(item => (
                        <li key={item.label}>
                            <Link to={item.link}>
                                <div className='flex items-center hover:text-white'>
                                    {item.icon}
                                    <span>{item.label}</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}

export default Navbar;