import RegisterForm from "../../Components/logIn/registerForm";
import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (
        <div>
            <RegisterForm />
            <p>Already have an account? <Link to="/login">Log In Here!</Link></p>
        </div>
    );
}