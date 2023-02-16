import Navbar from "./Navbar";
import Socials from "./Socials";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div className="min-h-screen text-white overflow-hidden font-lato">
      <Navbar />
      <div className="p-10">
        <h1 className="inline titulo-webpages relative font-bold text-5xl lg:text-9xl -z-50">
          Contact.
        </h1>
        <div className="mt-5">
          <p className="lg:pl-3 inline lg:p-webpages relative text-xl lg:text-2xl">
            This is the contact page.
          </p>
        </div>
        <section className="mt-20 lg:p-10 flex flex-col gap-20 max-w-5xl mx-auto">
          <Socials />
          <form
            className="text-black"
            action="https://formsubmit.co/dc2b43c9518e86c5c5389c6689e55218"
            method="POST"
          >
            <div className="w-full flex flex-col gap-10">
              <div className="w-full relative">
                <label htmlFor="name" className="text-white text-xl my-3">
                  Name
                </label>
                <input
                  className="placeholder-white/0 w-full p-3 mt-3 lg:m-3 rounded-xl cursor-default peer"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Write your name!"
                  required
                />
                <label
                  className="text-[#ff3c78] absolute -bottom-7 left-2 lg:-bottom-4 lg:left-6 peer-placeholder-shown:bottom-3.5 lg:peer-placeholder-shown:bottom-6 peer-placeholder-shown:text-slate-300 transition-all"
                  htmlFor="name"
                >
                  Write your name!
                </label>
              </div>
              <div className="relative">
                <label htmlFor="email" className="text-white text-xl my-3">
                  Email
                </label>
                <input
                  className="placeholder-white/0 w-full p-3 mt-3 lg:m-3 rounded-xl cursor-default peer"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Write your email!"
                  required
                />
                <label
                  className="text-[#ff3c78] absolute -bottom-7 left-2 lg:-bottom-4 lg:left-6 peer-placeholder-shown:bottom-3.5 lg:peer-placeholder-shown:bottom-6 peer-placeholder-shown:text-slate-300 transition-all"
                  htmlFor="email"
                >
                  Write your email!
                </label>
              </div>
              <div className="relative">
                <label htmlFor="message" className="text-white text-xl my-3">
                  Message
                </label>
                <textarea
                  className="placeholder-white/0 w-full p-3 mt-3 lg:m-3 rounded-xl cursor-default peer"
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Write your message!"
                  rows="10"
                  required
                ></textarea>
                <label
                  className="text-[#ff3c78] absolute -bottom-7 left-2 lg:-bottom-4 lg:left-6 peer-placeholder-shown:top-12 lg:peer-placeholder-shown:bottom-6 peer-placeholder-shown:text-slate-300 transition-all"
                  htmlFor="message"
                >
                  Write your message!
                </label>
              </div>
              <input
                type="hidden"
                name="_next"
                value="https://www.david-gomez.xyz/thanks"
              />
              <input type="text" name="_honey" className="hidden" />
              <input
                type="hidden"
                name="_subject"
                value="New email from PORTFOLIO"
              />
              <button
                className="w-full font-bold p-3 m-3 rounded-xl bg-[#ff3c78] hover:bg-[#f4195b] transition-all"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
}
