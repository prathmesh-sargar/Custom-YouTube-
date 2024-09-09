import React, { useState } from "react";
import { setcategory } from "../store/storeSlices";
import { useDispatch } from "react-redux";

const ButtonList = () => {
  const [active, setactive] = useState("All");

  const dispatch = useDispatch()

  const videoByTag = (tag) => {
    // alert(tag)
    if (active !== tag) {
      setactive(tag);
      dispatch(setcategory(tag))
    }
  };
  
  console.log(active);

  const buttonlist = [
    "All",
    "JavaScript",
    "Java",
    "ReactJS",
    "vlogs",
    "Coder Life",
    "DSA",
    "Hacking",
    "Movies",
    "Full Stack ",
    "Internship",
    " web development ",
  ];

  return (
    <>
      <div className=" flex justify-center gap-2">
        {buttonlist.map((buttonName, index) => {
          return (
            <div key={index}>
              <button
                onClick={() => {
                  videoByTag(buttonName);
                }}
                className={`${
                  active === buttonName
                    ? "bg-black text-white"
                    : "bg-slate-200 text-black"
                }  px-3 py-1 mt-4 m-2 rounded-lg `}
              >
                {buttonName}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ButtonList;
