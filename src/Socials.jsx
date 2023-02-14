
import facebook from '../assets/facebook-icon.png'
import github from '../assets/github-icon.png'
import linkedin from '../assets/linkedin-icon.png'

export default function Socials () {
    return(
        <div className="fixed top-80 right-5">
          <div className="flex flex-col gap-5">
            <a href="https://www.facebook.com/profile.php?id=100040950443262" hrefLang="" rel="" type="" target="_blank">
              <img src={facebook} style={{ height: 64, width: 64 }} alt="facebook-icon" width="64" height="64"/>
            </a>
            <a href="https://www.linkedin.com/in/david-g%C3%B3mez-gonz%C3%A1lez-23372a256/" hrefLang="" rel="" type="" target="_blank">
              <img src={linkedin} style={{ height: 64, width: 64 }} alt="linkedin-icon" width="64" height="64"/>
            </a>
            <a href="https://github.com/websajang" hrefLang="" rel="" type="" target="_blank">
              <img src={github} style={{ height: 64, width: 64 }} alt="github-icon" width="64" height="64"/>
            </a>
          </div>
        </div>
    )
}