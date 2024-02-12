import { FaPhone, FaEnvelope, FaGlobe, FaHome } from "react-icons/fa";
import "./contact.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Email is invalid"),
    messageSubject: yup.string().required("Message subject is required"),
    userMessage: yup
      .string()
      .transform()
      .required("Message subject is required"),
  })
  .required();

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted, isSubmitting, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (formValues) => {
    console.log("formValues", formValues);
    /* await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    }); */

    reset();
  };
  console.log(isSubmitted, isSubmitSuccessful);

  return (
    <div style={{ margin: "14rem 0px" }}>
      <div className="con-one">
        <h1>Contact Us!</h1>
      </div>
      <div className="cont-contact">
        <div className="form-reg">
          <div className="con-get">
            <h4>Get in touch with us</h4>
            <h1>Have Any Questions?</h1>
          </div>
          <div className="inp-con">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="inp2">
                <div>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Name"
                    className={`leave-message ${
                      errors.name ? "error-border" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="error-message">{errors.name?.message}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Email"
                    className={`leave-message ${
                      errors.email ? "error-border" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="error-message">{errors.email?.message}</p>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  {...register("messageSubject")}
                  placeholder="Message Subject"
                  className={`leave-message ${
                    errors.messageSubject ? "error-border" : ""
                  }`}
                />
                {errors.messageSubject && (
                  <p className="error-message error-padding">
                    {errors.messageSubject?.message}
                  </p>
                )}
              </div>
              <div>
                <textarea
                  {...register("userMessage")}
                  placeholder="Leave Message"
                  cols="60"
                  rows="12"
                  className={`inp-textarea ${
                    errors.userMessage ? "error-border" : ""
                  }`}
                ></textarea>
                {errors.userMessage && (
                  <p className="error-message">{errors.userMessage?.message}</p>
                )}
              </div>
              <button
                className={isSubmitting ? "disabled-button" : ".inp-con button"}
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
                  "Submit Now"
                )}
              </button>
            </form>
          </div>
        </div>
        <div className="sch1">
          <ul>
            <li className="visit1">
              <FaHome className="home-i" />
              <div>
                <span className="loc">Visit our location</span>
                <a href="" className="sch-add">
                  #39 Ojo Barracks Street Lagos Mainland
                </a>
              </div>
            </li>
            <li className="call-us1">
              <FaPhone className="phone-icon1" />
              <div>
                <span className="call1">Give us a Call</span>
                <a href="tel:+2348035388627" className="number1">
                  +234-803-538-8627
                </a>
              </div>
            </li>
            <li className="send-msg1">
              <FaEnvelope className="envelope-icon1" />
              <div>
                <span className="msg1">Send us a message</span>
                <a href="wealthyhomesacademy@gmail.com" className="email1">
                  wealthyhomesacademy@gmail.com
                </a>
              </div>
            </li>
            <li className="globe-div">
              <FaGlobe className="globe-icon" />
              <div>
                <span className="location11">Visit our website</span>
                <a href="www.wealthyhomeacademy.com" className="sch-address11">
                  www.wealthyhomeacademy.com
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
