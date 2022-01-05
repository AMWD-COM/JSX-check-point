import React from "react";
import "./style.css";
import imageInSrc from "./imageInSrc.jpg";
import myVideo from "./myVideo.mp4";

function App() {
  return (
    <div
      className="App"
      style={{ border: "solid 1px wihte", maxWidth: "100vw" }}
    >
      <h1 className="title red">AHMED MIZI</h1>
      <video style={{ width: 480, height: 250 }} controls autoPlay loop>
        <source src={myVideo} type="video/mp4" />
      </video>
      <img
        src="/imageInPublic.jpg"
        alt="tree"
        style={{ minWidth: 500, minHeight: "30vw", borderRadius: "50px" }}
      />
      
      <img
        src={imageInSrc}
        alt="road through tree"
        style={{ maxWidth: "30vw", maxHeight: "50vw", borderRadius: 50 }}
      />
    </div>
  );
}

export default App;
