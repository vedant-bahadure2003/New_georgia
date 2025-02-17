import React from "react";

const YtFrame = () => {
  return (
    <>
      {/* IFrame */}
      <div className="w-full">
        <iframe
          className="w-full h-[200px] sm:h-[350px] md:h-[500px] mx-auto mt-5 sm:mt-10 object-cover rounded-xl shadow-xl"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default YtFrame;
