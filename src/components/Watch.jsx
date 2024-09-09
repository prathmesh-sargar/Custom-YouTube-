import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Siderbar from "./Siderbar";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../contstant/YouTube";

const Watch = () => {
  const [channelinfo, setchannelinfo] = useState([]);

  console.log(channelinfo);

  const [searchparam] = useSearchParams();
  const videoID = searchparam.get("v");
  // console.log(videoID);

  const fetchdataByyoutubeID = async () => {
    try {
      console.log("load data ");

      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoID}&key=${API_KEY}`
      );

      //   console.log(res.data.items[0].snippet.channelTitle);
      //    const result = res.data.items[0]
      setchannelinfo(res.data.items);

      console.log("api data");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdataByyoutubeID();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="flex w-full ">

        <div className="w-[22%] bg-slate-200 h-screen hidden md:block">
          <Siderbar />
        </div>
        <div className="w-[78%] h-screen">
          <div>
            <iframe
            className="w-[380px] md:w-[640px] m-auto"
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${videoID}`}
              title="My Infosys Springboard Internship Experience || Project Selection &amp; Process || GER ||"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>

            {channelinfo.map((item) => {
              console.log(item);

              return (
                <div className="text-bold item-center pt-2 pl-2 text-semibold  ">
                  <h1>{item.snippet.title}</h1>
                  <br />
                  <div>
                    <hr />
                    <div className="flex items-center  ">
                      <img
                        src={item.snippet.thumbnails.high.url}
                        alt="img"
                        className="rounded-full h-[50px] w-[50px] cover"
                      />
                      <p className="ml-4 text-bold ">
                        {item.snippet.channelTitle}
                      </p>
                    </div>
                    <hr />
                    <p>{item.snippet.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Watch;
