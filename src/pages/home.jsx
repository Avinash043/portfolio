export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-10 mx-5 min-h-screen">
        <div className="w-full md:w-2/3 text-left lg:pl-40 md:pl-30 sm:pl-5">
          <div className="w-2/3 flex flex-col items-left">
            <h1 className="text-3xl font-bold ">
            Avinash Raj
              <img src="/handshake.png" alt="" className="inline-flex ml-3" />
            </h1>
            <p className="text-lg font-mono text-gray-60 font-medium ">
              Hii! I am a Web Developer.
            </p>
            <div className="overflow-hidden font-medium">
              Ambitious IT student skilled in web development, React, Next.js,
              and building innovative solutions, seeking impactful opportunities
              to excel.
            </div>
            <span className="flex flex-row mt-3">
              <a href="https://github.com/Avinash043" className="">
                <img src="/github.png" alt="" className="mr-5" />
              </a>
              <a href="https://www.linkedin.com/in/avinashraj7">
                <img src="/linkedin.png" alt="" />
              </a>
            </span>
          </div>
 
          <div className=" flex pt-10 flex-row justify-start gap-3">
            <div className=" flex flex-row justify-center items-center">
              <p className="content-center font-bold sm:text-sm">
                Tech Stack
              </p>
            </div>
            <div className="flex flex-row flex-wrap justify-around gap-4">
              <img src="/html.png" alt="html" className="space" />
              <img src="css.png" alt="css" className="space" />
              <img src="javascript.png" alt="JavaScript" className="space" />
              <img src="react.png" alt="React" className="space" />
              <img src="nodejs.png" alt="Nodejs" className="space" />
              <img src="express.png" alt="express" className="space" />
              <img src="tailwind.png" alt="Tailwind" className="space" />
              <img src="mongodb.png" alt="cpp" className="space" />
              <img src="cpp.png" alt="cpp" className="space" />
              <img src="sql.png" alt="SQL" className="space" />
              <img src="next.png" alt="Next" className="space" />
              <img src="typescript.png" alt="Typescript" className="space" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-start m-5 lg:pr-20">
          <img
            src="/photo.jpg"
            alt="Image"
            className="w-80 md:w-100 max-w-full rounded-lg mix-blend-multiply"
          />
        </div>
      </div>
    </>
    
  );
}
