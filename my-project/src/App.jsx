import React from "react";
import favicon from "./assets/favicon-32x32.png";
import qr from "./assets/image-qr-code.png";
import "./App.css";

function App() {
  return (
    <div className="box-border flex flex-col items-center justify-center bg-slate-100 p-4 mx-auto rounded-xl shadow-2xl shadow-black-100 sm:w-80">
      <img className="rounded-xl mb-4" src={qr} alt="QR Code" />
      <div>
        <p className="text-slate-800 font-bold text-lg">
          Improve your front-end skills by building projects
        </p>
        <p className="text-slate-600 font-thin p-2 text-base">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
