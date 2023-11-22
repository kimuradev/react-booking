import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";

import { useAuthContext } from "../../context/auth/useAuthContext";
import { isAuthenticated } from "../../utils/helper";

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuthContext();

    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setError(false)
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (isAuthenticated(formData)) {
            login(formData.username)
            navigate('/booking');
        } else {
            setError(true)
        }
    }

    return (
        <div className="flex justify-center items-center" >
            <form className="flex flex-col w-80 items-center justify-center gap-4" onSubmit={handleSubmit}>
                <Input type="text" name="username" placeholder="username..." value={formData.username} onChange={handleInputChange} />
                <Input type="password" name="password" placeholder="password..." value={formData.password} onChange={handleInputChange} />
                <Button type="submit">Login</Button>
                {error && <span className="text-red-500">Login or password invalid. Try again.</span>}
            </form>
        </div>
    );
}