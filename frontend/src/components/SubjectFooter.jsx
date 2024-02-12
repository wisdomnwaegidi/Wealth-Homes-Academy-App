import { Link } from "react-router-dom";
import "./subjectfooter.css";
// import Mathematics from "./subjects/Mathematics";
// import English from "./subjects/English";

const SubjectFooter = () => {
  return (
    <div className='subjt-cont'>
      <div className='subject-footer'>
        <h1 className='sub'>Subjects</h1>
        <ul>
          <li className='mathematics'>
            <Link to='/Mathematics'>Mathematics</Link>
          </li>
          <li className='english'>
            <Link to='/English'>English</Link>
          </li>
          <li className='civic-studies'>
            <Link to='/CivicStudies'>Civic Studies</Link>
          </li>
          <li className='physical'>
            <Link to='/PhysicalEducation'>Physical Health Education</Link>
          </li>
          <li className='religion'>
            <Link to='/Religion'>Religion and National Values</Link>
          </li>
          <li className='social-skills'>
            <Link to='/SocialSkills'>Social Skills</Link>
          </li>
          <li className='french'>
            <Link to='/French'>French Language</Link>
          </li>
          <li className='cultural'>
            <Link to='/Cultural'>Cultural and Creative Arts</Link>
          </li>
          <li className='basic'>
            <Link to='/BasicScience'>Basic Science and Technology</Link>
          </li>
          <li className='hausa'>
            <Link to='/Hausa'>Hausa Language</Link>
          </li>
          <li className='yoruba'>
            <Link to='/Yoruba'>Yoruba Language</Link>
          </li>
          <li className='igbo'>
            <Link to='/Igbo'>Igbo language</Link>
          </li>
        </ul>
      </div>
      <div className='school-footer'>
        <h1>Company</h1>
        <ul>
          <li className='about-us'>
            <Link to='/About'>About Us</Link>
          </li>
          <li className='privacy'>
            <Link to='/Privacypolicy'>Privacy Policy</Link>
          </li>
          <li className='patnership'>
            <Link to='/Partnerships'>Partnerships</Link>
          </li>
          <li className='contact'>
            <Link to='/Contact'> Contact Us</Link>
          </li>
          <li className='quiz'>
            <Link to='/Quiz'>Quiz</Link>
          </li>
          <li className='teachers'>
            <Link to='/MeetOurTeachers'>Meet our teachers</Link>
          </li>
        </ul>
      </div>
      <div className='community-footer'>
        <h1>Community</h1>
        <ul>
          <li className='blog'>
            <Link to='/Blogposts'> Blog & Articles</Link>
          </li>
          <li className='faq'>
            <Link to='/Faq'>F.A.Q</Link>
          </li>
          <li className='invest'>
            <Link to='/Investwithus'> Invest With Us</Link>
          </li>
          <li className='parents-day'>
            <Link to='/Parentsday'>Parents Day</Link>
          </li>
          <li className='elearn'>
            <Link to='/Elearning'> E-Learning</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubjectFooter;
