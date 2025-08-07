
import LogInForm from '../../Components/logIn/logInForm';
import { Link } from 'react-router-dom';

export default function LogInPage() {
    return (
        <div>
            <LogInForm />
            <p>Don't have an account? <Link to="/register">Sing Up Here!</Link></p>
        </div>
    );

}