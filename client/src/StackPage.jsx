import Navbar from "./Navbar";
import Stack from "./Stack";

export default function StackPage() {
  return (
    <div className="min-h-screen text-white overflow-hidden font-lato">
      <Navbar />
      <div className="p-10">
        <h1 className="inline titulo-webpages relative font-bold text-5xl lg:text-9xl -z-50">
          Stack.
        </h1>
        <div className="mt-5">
          <p className="lg:pl-3 inline lg:p-webpages relative text-xl lg:text-2xl">
            These are the technologies I'm used to work with.
          </p>
        </div>
        <section className="mt-20 lg:p-10">
          <Stack />
        </section>
      </div>
    </div>
  );
}
