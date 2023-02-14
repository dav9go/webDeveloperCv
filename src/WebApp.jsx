export default function WebApp({ photo, title, stack, description, web }) {
  return (
    <div className="text-white w-full flex flex-col items-center lg:items-stretch lg:flex-row group">
      <div className="basis-1/4 no-wrap lg:group-hover:transform lg:group-hover:scale-110 lg:group-hover:-rotate-6 transition-all">
        <img className="object-cover rounded-xl" src={photo} />
      </div>
      <div className="basis-3/4 lg:ml-10 flex-col justify-items-stretch relative">
        <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-center lg:text-start">
          {title}
        </h2>
        <h3 className="mt-5 text-xl lg:text-2xl text-center lg:text-start">
          {stack}
        </h3>
        <p className="mt-5 text-lg lg:text-xl text-center lg:text-start">
          {web}
        </p>
        <p className="mt-10 text-justify lg:text-2xl">{description}</p>
        <a
          target="_blank"
          href={`https://www.${web}`}
          className="cursor-pointer absolute bottom-10 left-full group-hover:left-0 hidden lg:flex justify-start items-center h-1/4 w-screen rounded-xl bg-white/0 group-hover:bg-white/90 transition-all duration-700"
        >
          <p className="text-black text-5xl font-merienda ml-20">
            {" "}
            Visit webpage{" "}
          </p>
        </a>
        <a
          target="_blank"
          href={`https://www.${web}`}
          className="cursor-pointer w-full mt-5 p-4 lg:hidden flex justify-center items-center bg-white text-black font-bold rounded-xl "
        >
          <p className="font-merienda">Visit Webpage</p>
        </a>
      </div>
    </div>
  );
}
