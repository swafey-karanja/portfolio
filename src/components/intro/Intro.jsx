import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: true, 
      backDelay: 1500,
      backSpeed:100,
      strings:["Developer", "Designer", "Front-end developer"],
      });
  },[]);

  return (
    <div className="intro" id="intro">
       <div className="left">
        <div className="imgContainer">
          <img src="assets/beardman.png" alt="" />
        </div>
       </div>
       <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Swafey Karanja</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
       </div>
    </div>
  )
}
