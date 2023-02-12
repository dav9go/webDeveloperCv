export default function Stack() {
  return (
    <div className="p-10 font-lato">
      <h2 className="text-4xl sm:text-8xl md:text-9xl text-center sm:text-start">
        STACK{" "}
        <span className="text-2xl sm:text-5xl md:text-6xl text-slate-500">
          MERN
        </span>
      </h2>
      {/** First Line **/}
      <div className="flex flex-col sm:flex-row justify-between h-full w-full p-1 pb-5 lg:p-10 mt-10 border-white border-b ">
        <div>
          <h3 className="text-center sm:text-start text-2xl sm:text-4xl xl:text-7xl">
            BASICS
          </h3>
          <div className="flex flex-col gap-3 mt-5 lg:mt-10">
            <div className="flex items-center justify-center sm:justify-start">
              <h4 className="text-center sm:text-start text-md sm:text-xl lg:text-3xl mr-5">
                HTML
              </h4>
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-full h-3 w-3 lg:h-5 lg:w-5"></div>
                <div className="bg-white rounded-full h-3 w-3 lg:h-5 lg:w-5"></div>
              </div>
            </div>
            <div className=" flex items-center justify-center sm:justify-start">
              <h4 className="text-center sm:text-start text-md sm:text-xl lg:text-3xl mr-5">
                CSS
              </h4>{" "}
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-full h-3 w-3 lg:h-5 lg:w-5"></div>
                <div className="bg-white rounded-full h-3 w-3 lg:h-5 lg:w-5"></div>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <h4 className="text-md sm:text-xl lg:text-3xl mr-5">
                JAVASCRIPT
              </h4>{" "}
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-full h-3 w-3 lg:h-5 lg:w-5"></div>
                <div className="bg-white rounded-full h-3 w-3 lg:h-5 lg:w-5"></div>
                <div className="bg-white rounded-full h-3 w-3 lg:h-5 lg:w-5"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-center sm:text-start text-2xl sm:text-4xl xl:text-7xl mt-10 sm:mt-0">
            FRONT-END
          </h3>
          <div className="flex flex-col gap-3 mt-5 lg:mt-10">
            <div className="flex items-center justify-center sm:justify-start">
              <h4 className="text-md sm:text-xl lg:text-3xl mr-5 ">REACT</h4>{" "}
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-full h-3 w-3 lg:h-5 lg:w-5"></div>
                <div className="bg-white rounded-full h-3 w-3 lg:h-5 lg:w-5"></div>
                <div className="bg-white rounded-full h-3 w-3 lg:h-5 lg:w-5"></div>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <h4 className="text-md sm:text-xl lg:text-3xl mr-5">TAILWIND</h4>{" "}
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-full h-3 w-3 lg:h-5 lg:w-5"></div>
                <div className="bg-white rounded-full h-3 w-3 lg:h-5 lg:w-5"></div>
                <div className="bg-white rounded-full h-3 w-3 lg:h-5 lg:w-5"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-center sm:text-start text-2xl sm:text-4xl xl:text-7xl mt-10 sm:mt-0">
            BACK-END
          </h3>
          <div className="flex flex-col gap-3 mt-5 lg:mt-10">
            <div className="flex items-center justify-center sm:justify-start">
              <h4 className="text-md sm:text-xl lg:text-3xl mr-5">MONGODB</h4>{" "}
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-full h-3 w-3 lg:h-5 lg:w-5"></div>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <h4 className="text-md sm:text-xl lg:text-3xl mr-5">EXPRESS</h4>{" "}
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-full h-3 w-3 lg:h-5 lg:w-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** Second Line **/}
      <div className="flex flex-col sm:flex-row justify-around h-full w-full mt-10">
        <div>
          <h3 className="text-center sm:text-start text-2xl sm:text-4xl md:text-5xl xl:text-7xl">
            CMS
          </h3>
          <div className="flex flex-col gap-3 mt-5 lg:mt-10">
            <div className="flex items-center justify-center sm:justify-start">
              <h4 className="text-md sm:text-xl lg:text-3xl mr-5">WEBFLOW</h4>{" "}
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-full h-3 w-3 lg:h-5 lg:w-5"></div>
                <div className="bg-white rounded-full h-3 w-3 lg:h-5 lg:w-5"></div>
                <div className="bg-white rounded-full h-3 w-3 lg:h-5 lg:w-5"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-center sm:text-start text-2xl sm:text-4xl xl:text-7xl mt-10 sm:mt-0">
            OTHERS
          </h3>
          <div className="flex flex-col gap-3 mt-5 lg:mt-10">
            <div className="flex items-center justify-center sm:justify-start">
              <h4 className="text-md sm:text-xl lg:text-3xl mr-5">NETLIFY</h4>{" "}
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-full h-3 w-3 lg:h-5 lg:w-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-4xl sm:text-8xl md:text-9xl text-center sm:text-start mt-10">
        WEB APPS
      </h2>
    </div>
  );
}
