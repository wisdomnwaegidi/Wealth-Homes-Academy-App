import "./footer.css";
import { FaEnvelope } from "react-icons/fa";
import Socials from "./Socials";
import SubjectFooter from "./SubjectFooter";
import { useState } from "react";

export const Footer = () => {
  const [formData, setFormData] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formTrue, setFormTrue] = useState(false);

  const changeEmail = (e) => setFormData(e.target.value);

  console.log(formData);

  const submitEmail = (e) => {
    e.preventDefault();
    setFormData(formData);
    console.log("data submiited successfully", formData);
    setSuccessMessage("Subscribed Successfully!");
    setFormData("");

    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
  };

  return (
    <footer>
      <div className='container-footer'>
        <div className='cont-footer'>
          <div className='gap-footer'>
            <h3 className='logo-footer'>Wealthy Home Academy</h3>
            <p className='academic-footer'>
              An Academic Institution that trains your children <br /> to
              becoming the best they can be.
            </p>
          </div>
          <div className='subscribe-footer'>
            <h1 className='newsletter'>Subscribe To Our Newsletter</h1>
            <form method='post' className='main-form' onSubmit={submitEmail}>
              <div className='form-footer'>
                <FaEnvelope className='email-icon' />
                <input
                  value={formData}
                  type='email'
                  className='newsletter-input'
                  placeholder='Enter your email'
                  onChange={changeEmail}
                  name='email'
                  title='Enter a valid email address'
                  required
                />
                <button
                  onClick={() => setFormTrue(true)}
                  className={formData ? "btn-subscribe" : "btn-disabled"}
                >
                  Subscribe
                </button>
              </div>
            </form>
            {formTrue && (
              <>
                <p className='subscribe-message'>{successMessage}</p>
              </>
            )}
          </div>
        </div>
        <SubjectFooter />
      </div>
      <Socials />
    </footer>
  );
};

export default Footer;

// return new Promise((resolve) => {
//   resolve();
// });

/*  fetch("/api/submit-form", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSuccessMessage(`${data} your subscription is successful!`);
        setFormData("");
      })
      .catch((error) => {
        console.error("Error:", error);
      }); */
