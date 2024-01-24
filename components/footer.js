import React from "react";

const Footer = () => {
  return (
    <div className="w-[688px] rounded-lg bg-white mt-20 mx-auto flex flex-col p-8">
      <h1>This project was build with:</h1>
      <ul className="text-[#555e61] mb-5">
        <li>NextJS</li>
        <li>Tailwind</li>
      </ul>
      <p className="text-[#555e61] text-[12px]">
        <i>
          This project includes a clone functionality developed for personal
          use, and it is important to note that it has been created
          independently and is not associated with the original website. This
          clone feature has been implemented for personal exploration and
          experimentation purposes only. It is not intended to replicate,
          imitate, or infringe upon the original website&apos;s content, design,
          or functionality.
        </i>
      </p>
    </div>
  );
};

export default Footer;
