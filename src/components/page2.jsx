import React, { useRef } from "react";
// import Button from "./button";
import Pic from "../bgimg2.png";
import Navbarr from "./navbar";
// import Footer from "./footer";
import {
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import "../styleComponents/page2.css"

const Page2 = () => {

  const sem = useRef();
  const sub = useRef();
  function Test(e) {
    console.log(e.target.value)
  }


    return (
      <>
        <Navbarr />
        <div id="pg2" className="container">
          <div className="row">
            <div className="text-content col-lg-6">
              <FormGroup className="form">
                <Label htmlFor="semSelect">
                  <h2>Select your semester:</h2>
                </Label>
                <Input id="semSelect" name="semester" type="select" ref={sem} onChange={Test}>
                  <option>Select your semester</option>
                  <option>Semester 1</option>
                  <option>Semester 2</option>
                </Input>
              </FormGroup>

              <FormGroup className="form">
                <Label htmlFor="subSelect">
                  <h2>Select your subject:</h2>
                </Label>
                <Input id="subSelect" name="subject" type="select" ref={sub}>
                  <option>Select your subject</option>
                  {/* <option>Semester 1</option>
                  <option>Semester 2</option> */}
                </Input>
              </FormGroup>
            </div>
            <div
              className="img-content col-lg-6
              "
            >
              <img className="img2" src={Pic} alt="img2" width="500vw" />
            </div>
          </div>
        </div>
      </>
    );
};

export default Page2;
