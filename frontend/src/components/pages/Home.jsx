import "./Home.css";
import "animate.css";
import Android from "../Android";
import Loader from "./Loader";
// import LoaderUdemy from "./LoaderUdemy";
import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import Subjects from "./Subjects";
const LazyLoadedComponent = lazy(() => delayForDemo(import("../Welcome")));

const Home = () => {
  return (
    <main>
      <div className='main-content'>
        <section className='main-text'>
          <h1 className='main-content-h1'>
            We turn your <span className='yellow'>Wards</span> into world{" "}
            <span className='purple'>beaters!</span>
          </h1>
          <p>
            We take your wards from rookies to world class with our unique
            teaching facilities and competent teachers who make learning fun.
          </p>
          <Link
            to='/Register'
            className='rgt-btn animate__animated animate__heartBeat animate__infinite'
          >
            Enroll your ward
          </Link>
        </section>
      </div>
      <Suspense fallback={<Loader />}>
        <LazyLoadedComponent />
      </Suspense>
      <Subjects />
      <Android />
    </main>
  );
};

export default Home;

function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
  }).then(() => promise);
}
