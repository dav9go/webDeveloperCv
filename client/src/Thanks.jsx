import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Thanks() {
  return (
    <div className="min-h-screen text-white overflow-hidden font-lato">
      <Navbar />
      <div className="p-10">
        <h1 className="inline titulo-webpages relative font-bold text-5xl lg:text-9xl -z-50">
          Thanks.
        </h1>
        <div className="mt-5">
          <p className="lg:pl-3 inline lg:p-webpages relative text-xl lg:text-2xl">
            for getting in touch with me.
          </p>
        </div>
        <div className="mt-5">
          <p className="lg:pl-3 inline lg:p-webpages relative text-xl lg:text-2xl">
            I will reply as soon as possible..
          </p>
        </div>
        <section className="mt-20 lg:p-10 flex flex-col gap-20 max-w-5xl mx-auto"></section>
      </div>
    </div>
  );
}
