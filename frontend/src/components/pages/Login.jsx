import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const schema = yup
  .object()
  .shape({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (formValues) => {
    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      console.log(formValues);

      if (!response.ok) {
        // If the response is not successful (status code is not in the range 200-299)
        throw new Error("Failed to submit data");
        // You can throw a specific error message or handle different error cases here
      }

      // Upon successful login, store the token in localStorage
      const data = await response.json();
      localStorage.setItem("token", data.token);

      // Set isLoggedIn to true to indicate the user is logged in
      setIsLoggedIn(true);

      // Reset the form upon successful submission
      reset();
    } catch (error) {
      // Handle the error here, for example, log the error message
      console.error("Submission error:", error.message);
      // You can also set some state to display an error message to the user
      setError("Failed to submit data. Please try again.");

      setTimeout(() => setError(""), 2000);
    }
  };

  // Check for session token on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // If a token exists, the user is logged in
      setIsLoggedIn(true);
    }
  }, []);

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  // If logged in, redirect to a different route or render a different component
  if (isLoggedIn) {
    // Redirect or render another component indicating the user is signed in
    <Navigate to='/dashboard' />;
  }

  return (
    <>
      <div className='container-login'>
        <div>{error && <p>{error}</p>}</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='login-wrapper'>
            <div>
              <h3>Sign In to Wealth Homes Academy</h3>
            </div>
            <div className='login-email'>
              <label htmlFor='email-login' className='login-label'>
                Email
              </label>
              <input
                type='email'
                {...register("email")}
                className={`email-login ${errors.email ? "is-invalid" : ""}`}
                placeholder='Email'
              />
              <ErrorMessage errors={errors} name='email' as='error-message' />
            </div>
            <div className='login-password'>
              <label htmlFor='password' className='login-label'>
                Password
              </label>
              <div className='login-pass-div'>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  className={`password-login ${
                    errors.password ? "is-invalid-l" : ""
                  }`}
                  placeholder='Password'
                />
                <button
                  type='button'
                  onClick={togglePassword}
                  className={`eyed ${errors.password ? "is-invalid-eyed" : ""}`}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              {errors.password && (
                <ErrorMessage
                  errors={errors}
                  name='password'
                  as='error-message'
                />
              )}
            </div>
            <button
              type='submit'
              className={isSubmitting ? "disabled-button" : "login-button"}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className='span-spin'>
                    <span className='spinner-border'></span>
                    <p>Submmitting</p>
                  </span>
                </>
              ) : (
                "Continue"
              )}
            </button>
            <div className='login-rmfg'>
              <div className=''>
                <label className='log-label'>Remember me</label>
                <input
                  type='checkbox'
                  className='check-input'
                  {...register("keepMeSignedIn")}
                />
              </div>
              <div className>
                <Link to='/Reset' className='forgot-password'>
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className='login-signup'>
              <p>
                Don&apos;t have an account?
                <Link to='/Register' className='login-register'>
                  Register
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

// const [userInput, setUserInput] = useState({ email: "", password: "" });

// const changeUserInput = (e) => {
//   const name = e.target.name;
//   const value = e.target.value;
//   setUserInput((values) => ({ ...values, [name]: value }));
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(userInput);
//   alert(JSON(userInput).stringify);
// };
