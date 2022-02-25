import React from "react";
// import Button from "./button";
import Pic from "../bgimg2.png";
import Navbarr from "./navbar";
// import Footer from "./footer";
import { Label, Input } from "reactstrap";
import "../styleComponents/page2.css";

const Page2 = () => {
  // const sem = useRef();
  // const sub = useRef();
  // var semester1 = ["FOP", "FOC", "FA", "CS", "BM", "FOW"];
  // var semester2 = ["PYTHON", "RDBMS", "PHP", "BSE", "CSII"];
  // const [subject, setSubject] = useState("");

  // if(sem.current.props.children[1].props.value === "semester 1") {
  //   setSubject(subject = semester1)
  // } else {
  //   setSubject(subject = semester2)
  // }

  return (
    <>
      <Navbarr />
      <div id="pg2" className="container">
        <div className="row">
          <div className="text-content col-lg-6">
            <div className="inputs">
              <Label htmlFor="semSelect">
                <h4>Select your semester:</h4>
              </Label>
              <Input
                id="semSelect"
                name="semester"
                type="select"
                // ref={sem}
              >
                <option>Select your semester</option>
                <option value="semester 1">semester 1</option>
                <option value="semester 2">semester 2</option>
              </Input>
            </div>
            
            <div className="inputs">
              <Label htmlFor="subSelect">
                <h4>Select your subject:</h4>
              </Label>
              <Input
                id="subSelect"
                name="subject"
                type="select"
                // ref={sub}
              >
                <option>Select your subject</option>
              </Input>
              </div>
          </div>
          <div className="img-content col-lg-6">
            <img className="img2" src={Pic} alt="img2" width="500vw" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
