import facebook from "./assets/facebook-icon.png";
import github from "./assets/github-icon.png";
import linkedin from "./assets/linkedin-icon.png";

export default function Footer() {
  return (
    <div className="h-32 lg:h-20 bg-[#090909] p-5 flex flex-col gap-3 lg:flex-row items-center justify-between rounded-t-xl">
      <div className="flex items-center gap-10">
        <a
          href="https://www.facebook.com/profile.php?id=100040950443262"
          hrefLang=""
          rel=""
          type=""
          target="_blank"
        >
          <img
            src={facebook}
            style={{ height: 32, width: 32 }}
            alt="facebook-icon"
            width="64"
            height="64"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/david-g%C3%B3mez-gonz%C3%A1lez-23372a256/"
          hrefLang=""
          rel=""
          type=""
          target="_blank"
        >
          <img
            src={linkedin}
            style={{ height: 32, width: 32 }}
            alt="linkedin-icon"
            width="64"
            height="64"
          />
        </a>
        <a
          href="https://github.com/dav9go"
          hrefLang=""
          rel=""
          type=""
          target="_blank"
        >
          <img
            src={github}
            style={{ height: 32, width: 32 }}
            alt="github-icon"
            width="64"
            height="64"
          />
        </a>
      </div>
      <p>©2023 David Gómez. All Rights Reserved.</p>
    </div>
  );
}
