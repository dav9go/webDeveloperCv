import { useState, useEffect } from "react";
import Hamburger from "./Hamburger";
import heart from "./assets/heart.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [opened, setOpened] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const location = useLocation();

  async function handleLikes() {
    const itemName = {
      name: "NavLikes",
    };
    let response = await fetch(
      "https://webdevelopercv.onrender.com/item-routes/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemName),
      }
    );
    console.log("NavLikes RESPONSE", response);
    setLikesCount(likesCount + 1);
  }

  useEffect(() => {
    // GET THE LIKES FROM THE BACKEND
    async function fetchNavLikes() {
      let response = await fetch(
        "https://webdevelopercv.onrender.com/item-routes"
      );

      if (response.ok) {
        let json = await response.json();
        let item = json.data.filter((item) => item.name === "NavLikes");
        setLikesCount(item[0].likes);
      } else {
        console.log(response.status);
      }
    }

    fetchNavLikes();
  }, []);

  return (
    <>
      <div className="lg:hidden flex flex-row justify-end w-full px-3">
        <div className="relative z-30">
          <Hamburger opened={opened} setOpened={setOpened} />
        </div>
      </div>
      <div className="hidden lg:flex flex-row justify-end w-full p-5 gap-10 -ml-10 font-lexend">
        <div
          className="flex justify-around items-center gap-4 mr-20 cursor-pointer likes-container"
          onClick={handleLikes}
        >
          <p className="font-press select-none">Give me like!</p>
          <div className="heart select-none"></div>
          <img
            src={heart}
            style={{ height: 32, width: 32 }}
            alt="heart"
            width="32"
            height="32"
            className="hearticon select-none"
          />
          <div className="flex flex-wrap w-10">
            {likesCount > 0 && <p className="select-none">{likesCount}</p>}
          </div>
        </div>
        <Link to="/" className={`text-3xl cursor-pointer link relative`}>
          Home
        </Link>
        <Link
          to="/stack"
          className={`text-3xl cursor-pointer link relative ${
            location.pathname == "/stack" ? "onPage" : "link"
          }`}
        >
          Stack
        </Link>
        <Link
          to="/portfolio"
          className={`text-3xl cursor-pointer link relative ${
            location.pathname == "/portfolio" ? "onPage" : "link"
          }`}
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className={`text-3xl cursor-pointer link relative ${
            location.pathname == "/contact" ? "onPage" : "link"
          }`}
        >
          Contact
        </Link>
      </div>
    </>
  );
}
