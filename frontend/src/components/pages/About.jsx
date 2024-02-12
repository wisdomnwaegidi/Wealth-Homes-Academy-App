import { Link } from "react-router-dom";
import "./about.css";
import Teacher from "../../assets/teacher.jpg";
import Choose from "../../assets/3dc3424b14.jpg";
/* import { FaGoogle } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa"; */

const About = () => {
  return (
    <>
      <div className="container-abt">
        <div className="abt-wrapper">
          <div className="few-blc">
            <h2>A few things you should know about us</h2>
            <p>
              Wealthy Homes Academy is a citadel of learning that teaches your
              child to becoming the champion they are designed to become.
            </p>
            <Link to="/Register">Get Started</Link>
          </div>
        </div>
      </div>
      <section className="values-wrapper">
        <div className="mission">
          <h2>Our Values</h2>
          <p>
            Our mission is to give your ward(s) a strong academic foundation
            that enables them become sound and smart individuals while also
            giving them a pedestal to achieving more in life irrespective of
            their choosen careers.
          </p>
        </div>
        <div className="mission-details">
          <div>
            <h3>Trust</h3>
            <p>
              Trusting us will help foster a positive and productive teaching
              environment that impacts your wards academically, spiritual,
              mentally and psychologically.
            </p>
          </div>
          <div>
            <h3>Integrity</h3>
            <p>
              We are known for practising uncomprosing adherence to strong moral
              and ethical principles.
            </p>
          </div>
          <div>
            <h3>Transperency</h3>
            <p>
              We operate in such a way it is easy for you our parents to see
              actions performed in making your children world class.
            </p>
          </div>
          <div>
            <h3>Collaboration</h3>
            <p>
              As a team we collaborate to achieving a common goal which is to
              give your wards the best education they can get.
            </p>
          </div>
        </div>
      </section>
      <section className="who-wrapper">
        <div className="who">
          <h1>Who we are</h1>
          <p>
            We know parents and guardians are always on the look out for what is
            best for their children with regards to academics and we know how
            painstaking and draining that search could be. And that is why at
            Wealthy Homes Academy WE streamline the process for our darling
            paarents/guardians while offering you an affordable yet quality
            education to your ward(s).
          </p>
        </div>
        <div className="who-img">
          <img src={Teacher} alt="teacher" loading="lazy" />
        </div>
      </section>
      <section className="choose-wrapper">
        <div>
          <img src={Choose} alt="choose us" loading="lazy" />
        </div>
        <div>
          <h1>Why Choose Us</h1>
          <p>
            The Wealthy Homes Academy team is driven by our goal to the
            development and welfare of your kiddies while ensuring that we are
            in constant comunication with parents to give them feedbacks on the
            progress of their children.
          </p>
        </div>
      </section>
      <main className="kick-wrapper">
        <p> Kickstart you ward(s) academic journey with us now!</p>
        <Link to="/Register">Get Started</Link>
      </main>
    </>
  );
};

export default About;
