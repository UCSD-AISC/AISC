import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Button from "@/components/Button/Button";
import Carousel from "@/components/Carousel/Carousel";
import Footer from "@/components/Footer/Footer";
import Countdown from "@/components/Countdown/Countdown";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="w-full text-gray-800 dark:text-white py-24 text-center md:text-left animate-fade-in-hard">
        <div className="flex flex-col items-center justify-center px-4">
          <Image
            src="/3DCubeLogo.png"
            alt="AISC Logo"
            width={400}
            height={400}
            className="mb-8 animate-[float_3s_ease-in-out_infinite]"
          />
          <h1 className="text-5xl md:text-5xl font-bold tracking-widest mb-2 font-[var(--font-bai-jamjuree)]">
            ARTIFICIAL INTELLIGENCE STUDENT COLLECTIVE
          </h1>
          <p className="text-sm md:text-base dark:text-gray-300 mb-4 font-[var(--font-bai-jamjuree)]">
            Powered by AI Collective
          </p>
          <p className="text-base md:text-lg font-[var(--font-bai-jamjuree)]">
            Creating a future of AI literacy for all.
          </p>
        </div>
      </section>

      <Countdown />

      <section className="text-gray-800 dark:text-white px-6 md:px-20 py-24">
        <p className="text-3xl md:text-5xl font-light leading-relaxed mb-12 max-w-5xl mx-auto font-[var(--font-bai-jamjuree)]">
          AISC @ UCSD wants to provide{" "}
          <span className="italic text-pink-500 dark:text-pink-400 font-semibold">
            accessible AI literacy
          </span>{" "}
          for students, equipping them to enter the changing workforce and world.
        </p>
      </section>

      <section
        className="relative text-white px-6 md:px-20 py-32"
        style={{
          backgroundImage: "url('/education.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-6 right-6 text-lg font-bold text-white uppercase tracking-wide opacity-70 font-[var(--font-bai-jamjuree)]">
          We are a national community
        </div>
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-black text-sky-400 mb-8 leading-tight font-[var(--font-bai-jamjuree)]">
            THE GRADE <br /> SCHOOL <br /> PROJECT
          </h2>
          <p className="italic text-xl text-white mb-8 font-[var(--font-bai-jamjuree)]">
            Exploring the power of AI with students <br /> in underrepresented
            communities.
          </p>

          <Button text="READ MORE" size="lg" href="/projects" color="white" />
        </div>
      </section>

      <section>
        <Carousel />
        <div className="flex justify-center mt-8 px-4">
          <Button text="VIEW ALL EVENTS" href="/events" size="md" />
        </div>
      </section>
      <section className="text-gray-800 dark:text-white px-10 py-14 font-[var(--font-bai-jamjuree)]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 inline-block origin-left">
            Non-Discrimination Policy
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-sm leading-relaxed tracking-wide">
              In accordance with applicable Federal and State law and University policy, AISC does not discriminate, or grant preferences, on the basis of race, color, national origin, religion, sex, gender identity, citizenship, disability, and/or other protected categories. All enrolled students are encouraged to participate in AISC events and activities.
            </p>
            <img
              className="w-32 h-auto flex-shrink-0 filter-[invert(var(--invert-perc))] dark:filter-none"
              src="icons/aisc.png"
              alt="AISC"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
