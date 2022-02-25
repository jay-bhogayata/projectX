import "../styleComponents/page1.css";
import Pic from "../bg3.png";
import Button from "./button";
import Footer from "./footer";
import Navbarr from "./navbar";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <>
      <Navbarr />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img className="img" src={Pic} alt="img" width="100%" />
          </div>
          <div className="col-lg-6">
            <div className="text-content">
              <h3>Welcome to</h3>
              <h1>The Study Buddy</h1>
              <p>
                A place where you can solve all of your study related queries, have an access to prebuilt assignment, journals made by
                scholers. <br /> Hangout with new friends and much more!
              </p>
              <Link to="studybuddy">
                <Button icon={<AiOutlineArrowRight />} btn_text={`Get Started`} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
