import React, { useState } from "react";
import Pic from "../images/bgimg2.png";
import Navbarr from "./navbar";
import { Label, Input } from "reactstrap";
import "../styleComponents/page2.css";
import Sem1 from "../sem1";
import Sem2 from "../sem2";
import Opt from "./options";

const Page2 = () => {
  // var subject = null
  // var semester1 = ["FOP", "FOC", "FA", "CS", "BM", "FOW"];
  // var semester2 = ["PYTHON", "RDBMS", "PHP", "BSE", "CSII"];
  const [val, setVal] = useState(0);
  
  const ChangeSem = (newSem) => {
    setVal(newSem);
  }

  // if (val === "1") {
  //   subject = semester1;
  //   console.log(subject);
  // } else if (val === "2") {
  //   subject = semester2;
  //   console.log(subject);
  // } else {
  //   subject = null;
  // }

  const CreateOption = (option) => {
    return <Opt key={option.id} name={option.name} />
  }

  const ValidOption = () => {
    var valid = null;
    if (val === "1") {
      valid = Sem1.map(CreateOption)
    } else if (val === "2") {
      valid = Sem2.map(CreateOption)
    } else {
      return;
    }
    return (
      valid
    )
  }
  return (
    <>
      <Navbarr />
      <div id="pg2" className="container">
        <div className="row">
          <div className="img-content col-lg-6">
            <img className="img2" src={Pic} alt="img2" />
          </div>
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
                onChange={(e) => ChangeSem(e.target.value)}
                value={val}
              >
                <option value="0">Select your semester</option>
                <option value="1">semester 1</option>
                <option value="2">semester 2</option>
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
                {ValidOption()}
              </Input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
