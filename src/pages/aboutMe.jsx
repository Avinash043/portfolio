import React from "react";
function AboutMe() {
  return (
    <div className="flex justify-center items-center mt-40 min-h-screen flex-wrap">
      <div className=" h-88 w-128 pr-10 items-stretch flex ">
        <img
          src="/public/about.jpg"
          alt="About"
          className="h-auto self-center rounded-3xl"
        />
      </div>
      <div className=" h-80 w-128">
        <h4 className="text-rose-500 font-bold leading-loose text-xl">ABOUT ME</h4>
        <h1 className="font-extrabold text-3xl leading-loose">A Dedicated Full-Stack Developer</h1>
        <p className="font-mono text-gray-60 font-medium text-base leading-relaxed">
          A passionate Full-Stack Developer with a strong focus on building
          modern web applications using the MERN stack (MongoDB, Express.js,
          React.js, Node.js). With a solid foundation in both front-end and
          back-end development, I thrive on creating seamless, efficient, and
          scalable solutions that bring ideas to life. I am also a team player 
          who thrives in collaborating with cross-functional teams to produce outstanding web
          applications. 
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
