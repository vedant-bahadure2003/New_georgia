import React from "react";

const YouTube = () => {
  return (
    <div className=" mt-5 sm:mt-10  lg:w-[95%] lg:mx-auto">
      <div className="shadow-md shadow-gray-400 rounded-xl overflow-hidden">
        <iframe
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-xl"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTube;
