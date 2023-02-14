import { useState } from "react";
import Hamburger from "./Hamburger";
import heart from "./assets/heart.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [opened, setOpened] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  return (
    <>
      <div className="lg:hidden flex flex-row justify-end w-full px-3">
        <Hamburger opened={opened} setOpened={setOpened} />
      </div>
      <div className="hidden lg:flex flex-row justify-end w-full p-5 gap-10 -ml-10 font-lexend">
        <div
          className="flex justify-around items-center gap-4 mr-20 cursor-pointer likes-container"
          onClick={() => setLikesCount(likesCount + 1)}
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
            <p className="select-none">{likesCount}</p>
          </div>
        </div>
        <Link to="/" className="text-3xl cursor-pointer link relative">
          Home
        </Link>
        <Link to="/portfolio" className="text-3xl cursor-pointer link relative">
          Portfolio
        </Link>
        <Link to="/contact" className="text-3xl cursor-pointer link relative">
          Contact
        </Link>
      </div>
    </>
  );
}
