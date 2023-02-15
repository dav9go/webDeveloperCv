import Navbar from "./Navbar";
import WebApp from "./WebApp";
import nhaDep from "./assets/loadingpic.png";
import khuyen from "./assets/khuyenBig.png";
import portfolio from "./assets/portfolio.png";

export default function Portfolio() {
  return (
    <div className="min-h-screen text-white overflow-hidden font-lato">
      <Navbar />
      <div className="p-10">
        <h1 className="inline titulo-webpages relative font-bold text-5xl lg:text-9xl -z-50">
          Webpages.
        </h1>
        <div className="mt-5">
          <p className="lg:pl-3 inline lg:p-webpages relative text-xl lg:text-2xl">
            These are the webpages I've made.
          </p>
        </div>
        <section className="mt-20 lg:p-10 flex flex-col gap-20">
          <WebApp
            likesName="nhaDepLikes"
            photo={nhaDep}
            web="vietley.com"
            title={
              <h2>
                Interior House{" "}
                <span className="text-[#ff3c78] font-bold">Design</span> Social
                Platform
              </h2>
            }
            stack="FULL STACK - React - MongoDB - Express"
            description="React Router 6 for routing. Google login authentication. CRUD comments and likes system. Create and remove house designs. Top five liked post of the lost month. User accounts. Dynamic routing."
          />

          <WebApp
            likesName="khuyenLikes"
            photo={khuyen}
            web="khuyenvanong.com"
            title={
              <h2>
                Online{" "}
                <span className="text-[#ff3c78] font-bold">Piercing</span> Shop
              </h2>
            }
            stack="FULL STACK - React - Next.js 12 - MongoDB - Express"
            description="React Router 6 for routing. Google login authentication. CRUD comments and likes system. Create and remove house designs. Top five liked post of the lost month. User accounts. Dynamic routing."
          />

          <WebApp
            likesName="webDeveloperCVLikes"
            photo={portfolio}
            web="khuyenvanong.com"
            title={
              <h2>
                Online{" "}
                <span className="text-[#ff3c78] font-bold">Piercing</span> Shop
              </h2>
            }
            stack="FULL STACK - React - Next.js 12 - MongoDB - Express"
            description="React Router 6 for routing. Google login authentication. CRUD comments and likes system. Create and remove house designs. Top five liked post of the lost month. User accounts. Dynamic routing."
          />
        </section>
      </div>
    </div>
  );
}
