import React from "react";
import { useLottie } from "lottie-react";
import dev1 from "../assets/dev1.json";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

const Siderbar = () => {
  const options = {
    animationData: dev1,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <>
      <div className="p-2 hidden md:block text-center items-center justify-center text-black font-bold hover:bg-slate-700 hover:text-white duration-500">
        <Link to={"/"}>Home</Link>
      </div>
      <div className="text-white text-xl bg-slate-900 h-screen hidden md:block">
        <div>
          <div className="p-2 font-semibold ">
            I am
            <ReactTyped
              className="ml-2 text-2xl text-blue-600 text-bold font-bold"
              strings={[
                "  Developer..",
                " Write Code For Create Impact..",
                "MERN Stack Dev ..",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            ></ReactTyped>
          </div>
        </div>
        {View}
      </div>
    </>
  );
};

export default Siderbar;
