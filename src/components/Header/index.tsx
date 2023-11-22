import { UserCircle2, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { useAuthContext } from "../../context/auth/useAuthContext";

function Header() {
    const navigate = useNavigate();
    const { signed, logout } = useAuthContext();

    const handleLogout = () => {
        logout();
        navigate('/')
    }

    return (
        <header className="flex justify-between items-center p-4 bg-pink-200">
            <h1 className="font-bold hover:text-white"><Link to="/">booking</Link></h1>
            <div className="flex justify-center items-center">
                {signed ? (
                    <div className="flex justify-center items-center hover:text-white">
                        <LogOut className='w-4 h-4 mr-2' />
                        <button onClick={() => handleLogout()}>Logout</button>
                    </div>

                ) :
                    (<div className="flex justify-center items-center hover:text-white">
                        <UserCircle2 className='w-4 h-4 mr-2' />
                        <Link to="/login">Login</Link>
                    </div>)
                }
            </div>
        </header>
    )
}

export default Header;