import React from "react";

const Rating = ({ setShowRating }) => {
  return (
    <>
      <div className="absolute top-0 left-0 inset-0 min-w-[100%] h-full container bg-[#000] bg-opacity-70 flex items-center justify-center">
        <span
          onClick={() => {
            setShowRating(false);
          }}
          className="absolute inset-0"
        ></span>
        <div className="w-[999px] h-[686px] px-6 py-5 flex flex-col items-center text-center gap-10 rounded-[24px] bg-white z-50 ">
          <div className="flex flex-col gap-3">
            <h1 className="text-[24px] font-medium text-[#454545]">
              Ratings (<span className="text-[#888888]">Tool Name</span>)
            </h1>
            <p className="text-sm text-[#888888] max-w-[630px]">
              Open the ratings view to check user feedback and scores. Each
              rating has comments on strengths and improvements. Filter reviews
              by category and date for quick insights.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 scrollbar overflow-y-scroll">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

const Card = () => {
  return (
    <div className="w-[300px] p-4 flex flex-col gap-4 bg-[#FBFCFC] rounded-[16px]">
      <div className="flex items-center gap-3">
        <img
          src="/images/ProfilePicture.png"
          className="w-[48px] h-[48px] rounded-[12px] select-none"
          draggable="false"
          alt=""
        />
        <div className="flex flex-col gap-1">
          <p className="text-sm text-[#888888]">User name</p>
          <div className="flex items-center gap-1">
            <svg
              width={18}
              height={19}
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2957 3.08313L11.6155 5.74466C11.7955 6.11515 12.2755 6.47052 12.6805 6.53857L15.0727 6.93931C16.6025 7.1964 16.9625 8.31545 15.8601 9.41937L14.0003 11.2945C13.6853 11.6121 13.5129 12.2245 13.6103 12.6631L14.1428 14.9844C14.5627 16.8217 13.5953 17.5325 11.983 16.5722L9.74077 15.2339C9.33585 14.9919 8.66842 14.9919 8.25592 15.2339L6.0137 16.5722C4.40887 17.5325 3.43399 16.8141 3.85394 14.9844L4.38638 12.6631C4.48387 12.2245 4.31139 11.6121 3.99642 11.2945L2.13663 9.41937C1.04175 8.31545 1.39421 7.1964 2.92404 6.93931L5.31628 6.53857C5.71373 6.47052 6.19368 6.11515 6.37366 5.74466L7.6935 3.08313C8.41342 1.63896 9.58327 1.63896 10.2957 3.08313Z"
                stroke="#888888"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm text-[#B0B0B0]">5.0</span>
          </div>
        </div>
      </div>
      <p className="text-sm text-[#888888] text-left">
        I recently tried out a new tool called AssignGenie, and I must say, it
        has completely transformed the way I create assignments! The interface
        is super user-friendly, making it easy to navigate
      </p>
    </div>
  );
};

export default Rating;
