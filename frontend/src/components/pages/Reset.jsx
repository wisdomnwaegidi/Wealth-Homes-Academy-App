import { Link } from "react-router-dom";

const Reset = () => {
  return (
    <div className='container-reset' style={{ marginTop: "10rem" }}>
      <div>
        <h3>Reset Password</h3>
        <p>
          Enter your email and we will send you a link to reset your password.
        </p>
        <input type='email' name='' id='' />
        <button>continue</button>
        <Link to='/Login'>back to Sign In</Link>
      </div>
    </div>
  );
};

export default Reset;
