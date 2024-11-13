import './login.css'
import LoginCard from './loginCard.tsx';

function login() {
    return (
      <div className="card">
        <LoginCard title="Applicant Login" otherTitle="Admin Login" prompt="Company Domain"/>
      </div>
    );
}

export default login