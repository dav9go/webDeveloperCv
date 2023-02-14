import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Stack from "./Stack";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Parallax className="bg-[rgb(9,9,9)]" pages={2}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          className="bg-[url('./assets/layerBack.png')] bg-cover bg-center bg-no-repeat"
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.75}
          className="bg-[url('./assets/logo.png')] sm:bg-[url('./assets/logoSM.png')] md:bg-[url('./assets/logoMD.png')] lg:bg-[url('./assets/logoLG.png')] bg-cover bg-center"
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={1}
          className="bg-[url('./assets/layer1.png')] sm:bg-[url('./assets/layer1SM.png')] md:bg-[url('./assets/layer1MD.png')] lg:bg-[url('./assets/layer1LG.png')] bg-cover bg-center"
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={1.5}
          className=" bg-[url('./assets/layer0.png')] sm:bg-[url('./assets/layer0SM.png')] md:bg-[url('./assets/layer0MD.png')] lg:bg-[url('./assets/layer0LG.png')] bg-center bg-no-repeat  "
        ></ParallaxLayer>
        {/** Third page **/}
        <ParallaxLayer
          className="relative bg-[rgb(9,9,9)] text-white"
          offset={0.99}
          speed={0.25}
        ></ParallaxLayer>
        <ParallaxLayer
          className="relative bg-[rgb(9,9,9)] text-white"
          offset={0.99}
          speed={-0.1}
        >
          <div className="flex flex-col justify-center items-center h-full w-full">
            <nav className="flex flex-col md:flex-row justify-around text-2xl sm:text-4xl md:text-6xl lg:text-8xl gap-20">
              <Link to="/" className="link relative pb-3 cursor-pointer">
                Home
              </Link>
              <Link
                to="/portfolio"
                className="link relative pb-3 cursor-pointer"
              >
                Portfolio
              </Link>
              <Link to="/contact" className="link relative pb-3 cursor-pointer">
                Contact
              </Link>
            </nav>
          </div>
        </ParallaxLayer>

        {/** Second page **/}
        <ParallaxLayer
          className="relative bg-[rgb(9,9,9)] text-white "
          offset={0.99}
          speed={1.5}
        >
          <Stack />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
