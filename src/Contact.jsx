import Navbar from "./Navbar";

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
          <form
            className="text-black"
            action="https://formsubmit.co/david9go@gmail.com"
            method="POST"
          >
            <div className="w-full flex flex-col gap-10">
              <div className="w-full">
                <label className="text-white text-xl my-3">Name</label>
                <input
                  className="w-full p-3 mt-3 lg:m-3 rounded-xl cursor-default"
                  type="text"
                  name="name"
                  placeholder="Write your name!"
                  required
                />
              </div>
              <div>
                <label className="text-white text-xl my-3">Email</label>
                <input
                  className="w-full p-3 mt-3 lg:m-3 rounded-xl cursor-default"
                  type="email"
                  name="email"
                  placeholder="Write your email!"
                  required
                />
              </div>
              <div>
                <label className="text-white text-xl my-3">Message</label>
                <textarea
                  className="w-full p-3 mt-3 lg:m-3 rounded-xl cursor-default"
                  type="text"
                  name="message"
                  placeholder="Write your message!"
                  rows="10"
                  required
                ></textarea>
              </div>
              <button
                className="w-full font-bold p-3 m-3 rounded-xl bg-[#ff3c78]"
                type="submit"
              >
                Send
              </button>
            </div>
            <input type="hidden" name="_next" value="" />
            <input type="text" name="_honey" className="hidden" />
            <input
              type="hidden"
              name="_subject"
              value="New email from PORTFOLIO"
            />
          </form>
        </section>
      </div>
    </div>
  );
}
