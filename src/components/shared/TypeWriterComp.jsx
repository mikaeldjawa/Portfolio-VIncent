"use client";

import Typewriter from "typewriter-effect";

const TypeWriterComp = ({ skillsData = [] }) => {
  return (
    <Typewriter
      options={{
        strings: skillsData,
        autoStart: true,
        loop: true,
        delay: 30,
      }}
      className='custom-typewriter'
    />
  );
};

export default TypeWriterComp;
