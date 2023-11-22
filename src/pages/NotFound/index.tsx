import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-pink-100 gap-6">
            <h2 className="txt-xl font-bold text-primary">Ops! Page not found.</h2>
            <Link to="/">Back</Link>
        </div>
    )
}

export default NotFound;