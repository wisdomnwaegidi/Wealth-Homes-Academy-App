/* eslint-disable no-unused-vars */
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import StudentClasses from "./components/pages/StudentClasses";
// import SeeAll from "./components/pages/SeeAll";
// import Trending from "./components/pages/Trending";
// import Popularity from "./components/pages/Popularity";
// import Featured from "./components/pages/Featured";
import Contact from "./components/pages/Contact";
import Register from "./components/pages/Register";
import Faqs from "./components/pages/Faqs";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Bottom from "./components/Bottom";
import BlogPosts from "./components/pages/BlogPosts";
import Mathematics from "./components/subjects/Mathematics";
import English from "./components/subjects/English";
import French from "./components/subjects/French";
import PhysicalEducation from "./components/subjects/PhysicalEducation";
import Yoruba from "./components/subjects/Yoruba";
import Religion from "./components/subjects/Religion";
import BasicScience from "./components/subjects/BasicScience";
import Cultural from "./components/subjects/Cultural";
import Hausa from "./components/subjects/Hausa";
import Igbo from "./components/subjects/Igbo";
import CivicStudies from "./components/subjects/CivicStudies";
import SocialSkills from "./components/subjects/SocialSkills";
import Quiz from "./components/schoolQuiz/Quiz";
import MeetTeachers from "./components/MeetTeachers";
import Login from "./components/pages/Login";
import Reset from "./components/pages/Reset";
import EachBlogPost from "./components/pages/EachBlogPost";
// import UserProfile from "./components/schoolExam/UserProfile";

function App() {
  const location = useLocation();
  // const isMeetTeachersRoute = location.pathname === "/MeetOurTeachers";
  // console.log(location.pathname);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/StudentClasses" element={<StudentClasses />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/FAQ" element={<Faqs />} />
        <Route path="/Blogposts" element={<BlogPosts />} />
        <Route path="/About" element={<About />} />
        <Route path="/Mathematics" element={<Mathematics />}></Route>
        <Route path="/English" element={<English />}></Route>
        <Route path="/French" element={<French />}></Route>
        <Route
          path="/PhysicalEducation"
          element={<PhysicalEducation />}
        ></Route>
        <Route path="/Yoruba" element={<Yoruba />}></Route>
        <Route path="/Religion" element={<Religion />}></Route>
        <Route path="/BasicScience" element={<BasicScience />}></Route>
        <Route path="/Cultural" element={<Cultural />}></Route>
        <Route path="/Hausa" element={<Hausa />}></Route>
        <Route path="/Igbo" element={<Igbo />}></Route>
        <Route path="/CivicStudies" element={<CivicStudies />}></Route>
        <Route path="/SocialSkills" element={<SocialSkills />}></Route>
        <Route exact path="/Quiz" element={<Quiz />}></Route>
        <Route path="/StudentClasses" element={<StudentClasses />}></Route>
        <Route path="/Eachblogpost/:id" element={<EachBlogPost />} />
        <Route path="/MeetOurTeachers" element={<MeetTeachers />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Reset" element={<Reset />}></Route>
        <Route exact path="*" element={<NotFound />} />
        {/* <Route path='/Trending' element={<Trending />}></Route> */}
        {/* <Route path='/Seeall' element={<SeeAll />}></Route> */}
        {/* <Route path='/Popularity' element={<Popularity />}></Route> */}
        {/* <Route path='/Featured' element={<Featured />}></Route> */}
      </Routes>
      {location.pathname !== "/Quiz" &&
        location.pathname !== "/MeetOurTeachers" && <Navbar />}
      {location.pathname === "/" && <Body />}
      {location.pathname === "/" && <Bottom />}
      {location.pathname === "/" && <Footer />}
      {location.pathname === "/StudentClasses" && <Footer />}
      {/* {location.pathname === "/Register" && <Footer />} */}
    </>
  );
}

export default App;
