import { Link, useLocation } from "react-router-dom";

export default function Hamburger({ opened, setOpened }) {
  return (
    <button
      className={`button-one ${
        opened && "fixed top-0 left-0 h-full w-full bg-[#ff3c78]"
      }`}
      aria-controls="primary-navigation"
      aria-expanded={opened ? "true" : "false"}
      onClick={() => setOpened(!opened)}
    >
      <svg
        className={`hamburger fill-white ${opened && " fixed top-0 right-3"} `}
        viewBox="0 0 100 100"
        width="60"
      >
        <rect
          className="line line-top"
          width="80"
          height="10"
          x="10"
          y="25"
          rx="5"
        ></rect>
        <rect
          className="line line-middle"
          width="80"
          height="10"
          x="10"
          y="45"
          rx="5"
        ></rect>
        <rect
          className="line line-bottom"
          width="80"
          height="10"
          x="10"
          y="65"
          rx="5"
        ></rect>
      </svg>
      {opened && (
        <div>
          <ul className="flex flex-col gap-10 text-5xl">
            <Link
              to="/"
              className={` cursor-pointer link relative ${
                location.pathname == "/home"
                  ? "underline underline-offset-8"
                  : "link"
              }`}
            >
              Home
            </Link>
            <Link
              to="/stack"
              className={` cursor-pointer link relative ${
                location.pathname == "/stack"
                  ? "underline underline-offset-8"
                  : "link"
              }`}
            >
              Stack
            </Link>
            <Link
              to="/portfolio"
              className={` cursor-pointer link relative ${
                location.pathname == "/portfolio"
                  ? "underline underline-offset-8"
                  : "link"
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={` cursor-pointer link relative ${
                location.pathname == "/contact"
                  ? "underline underline-offset-8"
                  : "link"
              }`}
            >
              Contact
            </Link>
          </ul>
        </div>
      )}
    </button>
  );
}
