import { useState, useEffect } from "react";
import heart from "../src/assets/heart.png";

export default function WebApp({
  photo,
  title,
  stack,
  description,
  web,
  likesName,
}) {
  const [likesCount, setLikesCount] = useState(0);

  async function handleLikes() {
    const itemName = {
      name: likesName,
    };
    let response = await fetch("https://webdevelopercv.onrender.com/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemName),
    });
    console.log("NavLikes RESPONSE", response);
    setLikesCount(likesCount + 1);
  }

  useEffect(() => {
    // GET THE LIKES FROM THE BACKEND
    async function fetchLikes() {
      let response = await fetch(
        "https://webdevelopercv.onrender.com/item-routes"
      );

      if (response.ok) {
        let json = await response.json();
        let item = json.data.filter((item) => item.name === likesName);
        setLikesCount(item[0].likes);
      } else {
        console.log(response.status);
      }
    }

    fetchLikes();
  }, []);

  return (
    <div className="text-white w-full flex flex-col items-center lg:items-stretch lg:flex-row group">
      <div className="basis-1/4 no-wrap lg:group-hover:transform lg:group-hover:scale-110 lg:group-hover:-rotate-6 transition-all">
        <img className="object-cover rounded-xl" src={photo} />
      </div>
      <div className="basis-3/4 lg:ml-10 flex-col justify-items-stretch relative mt-5 lg:mt-0">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-center lg:text-start">
            {title}
          </h2>
          <div
            className="flex justify-center lg:justify-around items-center gap-4 cursor-pointer likes-container mt-5 lg:mt-0"
            onClick={handleLikes}
          >
            <div className="flex flex-wrap w-10">
              {likesCount > 0 && <p className="select-none">{likesCount}</p>}
            </div>
            <img
              src={heart}
              style={{ height: 32, width: 32 }}
              alt="heart"
              width="32"
              height="32"
              className="hearticon select-none"
            />
          </div>
        </div>
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
