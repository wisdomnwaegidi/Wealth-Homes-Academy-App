/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import RegisterSuccess from "./RegisterSuccess";

const schema = yup
  .object()
  .shape({
    childFullNames: yup.string().required("Child Full Names is required"),
    childAge: yup
      .number()
      .typeError("Child age is required")
      .positive("Child age must be between 1 - 10 years", {
        childAge: [1 - 10],
      })
      .integer("Child age is required")
      .required("Child age is required"),
    homeAddress: yup.string().required("Home Address is required"),
    parentNames: yup.string().required("Parent Names is required"),
    stateOfOrigin: yup.string().required("State of Origin is required"),
    childClass: yup.string().required("Child Class is required"),
    parentsEmail: yup
      .string()
      .required("Parents Email is required")
      .email("Email is invalid"),
    password: yup.string().required("Password is required"),
  })
  .required();

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterSuccess, setShowRegisterSuccess] = useState(false);

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted, isSubmitting, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (formValues) => {
    // console.log(formValues);
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    reset();

    setShowRegisterSuccess(true);

    setTimeout(() => {
      setShowRegisterSuccess(false);
    }, 2000);
  };

  console.log("form successfully submmitted!", isSubmitted, isSubmitSuccessful);

  return (
    <>
      <div className="container-registerform">
        <div className="form-con">
          <form
            action="/api/register"
            method="POST"
            className="register-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="body-wrapper">
              <div className="start-free">
                {/* <p>START FOR FREE</p> */}
                <h1>Sign Up To Wealthy Homes Academy</h1>
              </div>
              <div className="show-success">
                {showRegisterSuccess && <RegisterSuccess />}
              </div>
              <div className="register-formcontainer">
                <div className="reg-google">
                  <button type="button">
                    <FaGoogle />
                    SIGN UP WITH GOOGLE
                  </button>
                </div>
                <div>
                  <div className="fullnames">
                    <div className="prt">
                      <label htmlFor="fullnames" className="register-label">
                        Child Full Names
                      </label>
                    </div>
                    <input
                      type="text"
                      className={`register-input ${
                        errors.childFullNames ? "is-invalid" : ""
                      }`}
                      placeholder="Child Full Names"
                      {...register("childFullNames", {
                        required: "Child Full Names is required",
                      })}
                    />
                    {errors.childFullNames && (
                      <ErrorMessage
                        errors={errors}
                        name="childFullNames"
                        as="error-message"
                      />
                    )}
                  </div>
                  <div className="age">
                    <div className="prt">
                      <label htmlFor="age" className="register-label">
                        Child Age
                      </label>
                    </div>
                    <input
                      type="number"
                      className={`register-input ${
                        errors.childAge ? "is-invalid" : ""
                      }`}
                      placeholder="Child Age"
                      {...register("childAge", { valueAsNumber: true })}
                    />
                    {/* {errors.childAge && <p>{errors.childAge?.message}</p>} */}
                    {errors.childAge && (
                      <ErrorMessage
                        errors={errors}
                        name="childAge"
                        as="error-message"
                      />
                    )}
                  </div>
                  <div className="address">
                    <div className="prt">
                      <label htmlFor="address" className="register-label">
                        Home Address
                      </label>
                    </div>
                    <input
                      type="text"
                      className={`register-input ${
                        errors.homeAddress ? "is-invalid" : ""
                      }`}
                      placeholder="Home Address"
                      {...register("homeAddress")}
                    />
                    {errors.homeAddress && (
                      <ErrorMessage
                        errors={errors}
                        name="homeAddress"
                        as="error-message"
                      />
                    )}
                  </div>
                  <div className="parent">
                    <div className="prt">
                      <label htmlFor="parent" className="register-label">
                        Parent Full Names
                      </label>
                    </div>
                    <input
                      type="text"
                      className={`register-input ${
                        errors.parentNames ? "is-invalid" : ""
                      }`}
                      placeholder="Parents Full Name"
                      {...register("parentNames")}
                    />
                    {errors.parentNames && (
                      <ErrorMessage
                        errors={errors}
                        name="parentNames"
                        as="error-message"
                      />
                    )}
                  </div>
                  <div className="origin">
                    <div className="prt">
                      <label htmlFor="origin" className="register-label">
                        State of Origin
                      </label>
                    </div>
                    <input
                      type="text"
                      className={`register-input ${
                        errors.stateOfOrigin ? "is-invalid" : ""
                      }`}
                      placeholder="State of Origin"
                      {...register("stateOfOrigin")}
                    />
                    {errors.stateOfOrigin && (
                      <ErrorMessage
                        errors={errors}
                        name="stateOfOrigin"
                        as="error-message"
                      />
                    )}
                  </div>
                  <div className="child-class">
                    <div className="prt">
                      <label htmlFor="child-class" className="register-label">
                        Child Class
                      </label>
                    </div>
                    <input
                      type="text"
                      className={`register-input ${
                        errors.childClass ? "is-invalid" : ""
                      }`}
                      placeholder="Primary One"
                      {...register("childClass", {
                        required: "Child Class is required",
                      })}
                    />
                    {errors.childClass && (
                      <ErrorMessage
                        errors={errors}
                        name="childClass"
                        as="error-message"
                      />
                    )}
                  </div>
                  <div className="parents-email">
                    <div className="prt">
                      <label htmlFor="parentsemail" className="register-label">
                        Parents Email
                      </label>
                    </div>
                    <input
                      type="text"
                      className={`register-input ${
                        errors.parentsEmail ? "is-invalid" : ""
                      }`}
                      placeholder="Parents Email"
                      {...register("parentsEmail")}
                    />
                    {errors.parentsEmail && (
                      <ErrorMessage
                        errors={errors}
                        name="parentsEmail"
                        as="error-message"
                      />
                    )}
                  </div>
                  <div className="password">
                    <div className="prt">
                      <label htmlFor="password" className="register-label">
                        Password
                      </label>
                    </div>
                    <div className="pass-div">
                      <input
                        type={showPassword ? "text" : "password"}
                        className={`register-input register-password ${
                          errors.password ? "is-invalid-p" : ""
                        }`}
                        placeholder="Password"
                        {...register("password")}
                      />
                      <span>
                        <button
                          type="button"
                          onClick={togglePassword}
                          className={`eye ${
                            errors.password ? "is-invalid-eye" : ""
                          }`}
                        >
                          {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                      </span>
                    </div>

                    {errors.password && (
                      <ErrorMessage
                        errors={errors}
                        name="password"
                        as="error-message"
                      />
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className={
                    isSubmitting ? "disabled-button" : "register-button"
                  }
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="span-spin">
                        <span className="spinner-border"></span>
                        <p>Submmitting</p>
                      </span>
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>

                {/* {showUser &&
                  user.map((eachUser, index) => {
                    return <User key={index} eachUser={eachUser} />;
                  })} */}

                <div className="register-sign-div">
                  <p className="register-signin-p">Already a Student?</p>
                  <Link to="/Login" className="register-sign-button">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

/* useEffect(() => {
    const timer = setTimeout(() => {
      clearErrors([
        "childFullNames",
        "childAge",
        "homeAddress",
        "parentNames",
        "stateOfOrigin",
        "childClass",
        "parentsEmail",
        "password",
      ]);

      return () => clearTimeout(timer);
    }, 10000);
  }); */

/*  return new Promise((resolve) => {
      setTimeout(() => {
        setUser((prevUser) => {
          return [...prevUser, formValues];
        });

        reset();

        setShowUser(true);

        setTimeout(() => {
          setShowUser(false);
        }, 3000);
      }, 10000);

      resolve();
    }); */

// import User from "./User";
// import GoogleComp from "../utils/GoogleComp";
// const [isVisible, setIsVisible] = useState(false);
// const [showUser, setShowUser] = useState(false);
// const [user, setUser] = useState([]);

/* {
  required: "Child Age is required",
  pattern: {
    value: /^(0?[0-9]|1[0-8])$/,
    message: "Please enter a valid number between 0-18",
    validate: (value) => {
      const intValue = parseInt(value, 10);
      return Number.isInteger(intValue)
        // ? intValue
        : "Please enter an integer value";
    },
  },
} */

/* {
  required: "Parents Email is required",
  pattern: {
    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    message: "Please enter a valid email",
  },
} */
