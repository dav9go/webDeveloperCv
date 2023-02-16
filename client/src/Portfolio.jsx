import Navbar from "./Navbar";
import WebApp from "./WebApp";
import nhaDep from "./assets/loadingpic.png";
import khuyen from "./assets/khuyenBig.png";
import portfolio from "./assets/portfolio.png";
import Footer from "./Footer";

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
        <section className="mt-20 lg:p-10 flex flex-col gap-32">
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
            stack="FULL STACK - React - Tailwind - MongoDB - Express"
            description={
              <p>
                The interior house design social network is a full-stack web app
                that allows users to share and discover interior design ideas.
                Built with React, MongoDB, and Express, the app uses React
                Router 6 for routing and Google Login for authentication.
                <br></br>
                <br></br> The app provides a platform for users to upload
                pictures of their interior design projects and share them with
                the community. Users can create and delete their posts and view
                the posts of other users. The app also features a like system
                that limits users to one like per post, helping to promote
                fairness and prevent spam.<br></br>
                <br></br> Users can also leave comments on posts, enabling them
                to provide feedback and engage in discussions about the design
                ideas they discover. The app uses MongoDB to store and manage
                user data, ensuring that it is both secure and scalable.
                <br></br>
                <br></br> The homepage of the app features a showcase of the
                five most liked posts of the month, providing users with an easy
                way to discover popular content. The latest posts uploaded by
                users are also prominently featured, helping to ensure that
                users stay up-to-date with the latest interior design trends.
                <br></br>
                <br></br>
                Dynamic routing for the posts and user accounts ensures that the
                app is responsive and easy to navigate. Overall, the interior
                house design social network is a powerful tool for designers,
                decorators, and interior design enthusiasts to share and
                discover new ideas.<br></br>
                <br></br>
              </p>
            }
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
            stack="FULL STACK - React - Tailwind - Next.js 12 - MongoDB - Express"
            description={
              <p>
                The online piercing shop is a web application designed for
                customers in Vietnam. It has been created using React, Next.js
                12, MongoDB, and Express to deliver a fast and reliable user
                experience.
                <br></br>
                <br></br>
                The application is fully optimized for speed and includes
                features like lazy loading and server-side rendering. This means
                that the application loads quickly, even for customers with
                slower internet connections, and provides a seamless shopping
                experience. The owner of the shop can easily update the items
                through MongoDB Compass, allowing for rapid updates.
                <br></br>
                <br></br>
                One of the key features of the online piercing shop is the
                embedded Facebook chat messenger. This feature allows customers
                to contact the shop directly through Facebook, providing a quick
                and easy way to get in touch with any questions or concerns. It
                also provides an additional layer of customer support, helping
                to build trust and increase customer satisfaction.
                <br></br>
                <br></br>
                Overall, the online piercing shop provides a reliable and
                convenient shopping experience for customers in Vietnam. The use
                of React, Next.js 12, MongoDB, and Express, along with the
                inclusion of key features like lazy loading and the Facebook
                chat messenger, make this web application a valuable tool for
                any business looking to expand its online presence.
              </p>
            }
          />

          <WebApp
            likesName="webDeveloperCVLikes"
            photo={portfolio}
            web="david-gomez.xyz"
            title={
              <h2>
                Online{" "}
                <span className="text-[#ff3c78] font-bold">Piercing</span> Shop
              </h2>
            }
            stack="FULL STACK - React - Tailwind - Next.js 12 - MongoDB - Express"
            description={
              <p>
                The web developer web portfolio is a full-stack web application
                that showcases the work and skills of a web developer. Built
                with React and Tailwind for the frontend, the portfolio features
                an impressive landing page with a stunning parallax effect
                created using the @react-spring/parallax library.
                <br></br>
                <br></br>
                The portfolio includes a page that shows the webpages created by
                the developer, as well as the technologies and frameworks used
                to create them. It also has a contact page where recruiters can
                easily and quickly get in touch with the developer.
                <br></br>
                <br></br>
                The application includes a likes system that is connected to a
                MongoDB database using Mongoose and Express. This allows users
                to like and engage with the developer's work, providing valuable
                feedback and helping to increase engagement.
                <br></br>
                <br></br>
                React Router is used for routing, making it easy to navigate
                between different pages and content. The application also
                provides responsiveness for all devices to ensure optimal user
                experience.
                <br></br>
                <br></br>
                Overall, the web developer web portfolio is a powerful tool for
                showcasing the skills and work of a web developer. With its
                impressive landing page, intuitive navigation, and modern web
                development practices, it provides a seamless and engaging
                experience for recruiters and potential clients.
              </p>
            }
          />
        </section>
      </div>
      <Footer />
    </div>
  );
}
