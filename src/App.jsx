import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Stack from "./Stack";

function App() {
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
          className="h-screen bg-[url('./assets/layer0.png')] sm:bg-[url('./assets/layer0SM.png')] md:bg-[url('./assets/layer0MD.png')] lg:bg-[url('./assets/layer0LG.png')] bg-center bg-no-repeat  "
        ></ParallaxLayer>
        {/** Second page **/}
        <ParallaxLayer
          className="relative bg-[rgb(9,9,9)] text-white"
          offset={0.99}
          speed={0.25}
        >
          <div className="h-full w-full mx-auto"></div>
        </ParallaxLayer>
        <ParallaxLayer
          className="relative bg-[rgb(9,9,9)] text-white "
          offset={0.99}
          speed={1.5}
        >
          <Stack />
        </ParallaxLayer>
      </Parallax>
      <div className="h-screen bg-red-300">hola</div>
    </>
  );
}

export default App;
