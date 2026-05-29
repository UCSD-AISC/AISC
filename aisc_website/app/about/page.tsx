import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

export default function AboutPage() {

  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 2xl:px-64 gap-28 mt-12 animate-fade-in-hard">
        {/* QUOTE Section */}
        <section className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-purple-500 dark:text-purple-400 leading-tight max-w-5xl mx-auto">
            “AI won’t take away your job – but someone who knows AI might.”
          </h1>
          <p className="mt-4 text-lg sm:text-xl italic text-purple-600 dark:text-purple-300 text-right max-w-5xl mx-auto sm:pr-4">
            – Beena Ammanath, Founder of HFAI
          </p>
        </section>

        {/* AI IS BECOMING PIVOTAL Section */}
        <section className="w-full flex flex-col gap-12 sm:gap-16 lg:gap-0">
          <div className="lg:max-w-6xl lg:mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-pink-400 leading-snug text-left lg:pl-4">
              AI IS BECOMING
              <br className="hidden sm:block" />
              PIVOTAL IN EVERY INDUSTRY —<br className="hidden sm:block" />
              NOT JUST TECH.
            </h2>
          </div>
          <div className="lg:max-w-6xl lg:mx-auto lg:mt-8">
            <p className="text-lg sm:text-xl text-gray-800 dark:text-white leading-relaxed text-right lg:pr-4">
              It’s critical that people have a baseline understanding of the{" "}
              <i>power of AI technologies</i> and{" "}
              <i>how to properly wield that power</i>.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="flex flex-col md:flex-row justify-between items-center text-gray-800 dark:text-white gap-y-12 md:gap-y-0 w-full">
          <div className="md:w-1/2 text-lg leading-relaxed font-[var(--font-bai-jamjuree)]">
            <p>
              AI is playing an ever increasing role in our lives, and its impact
              continues to spread outside of just the tech industry.
            </p>
          </div>
          <div className="md:w-1/2 text-right">
            <p className="text-9xl font-bold font-[var(--font-archivo)]">91%</p>
            <p className="text-xl text-blue-400 dark:text-blue-200 mb-6 font-[var(--font-bai-jamjuree)]">OF TECH EXECUTIVES</p>
            <p className="text-9xl font-bold font-[var(--font-archivo)]">84%</p>
            <p className="text-xl text-blue-400 dark:text-blue-200 mb-4 font-[var(--font-bai-jamjuree)]">OF THE PUBLIC</p>
            <p className="text-2xl font-bold text-blue-400 dark:text-blue-300 leading-tight font-[var(--font-bai-jamjuree)]">
              BELIEVE THAT AI WILL <br />
              CONSTITUTE THE NEXT <br />
              <span className="italic font-extrabold">REVOLUTION IN TECHNOLOGY</span>
            </p>
          </div>
        </section>

        <section className="text-gray-800 dark:text-white text-left text-xl font-normal leading-relaxed max-w-5xl font-[var(--font-bai-jamjuree)]">
          <p>
            Given that, it's important for everyone to be AI literate, and
            understand the capabilities of this technology instead of succumbing
            to fear and misinformation.
          </p>
        </section>

        <section className="text-gray-800 dark:text-white text-center md:text-right w-full">
          <div className="flex flex-col items-center text-center gap-4 mb-10 md:flex-row md:justify-center md:items-end md:text-right">
            <h2 className="text-[150px] md:text-[200px] font-black leading-none font-[var(--font-archivo)] text-[#29b9e0d5] dark:text-[#20CCF124]">YET</h2>
            <h2 className="text-[60px] md:text-[100px] font-black leading-none mb-6 font-[var(--font-archivo)] text-[#29b9e0d5] dark:text-[#20CCF124]">ONLY</h2>
          </div>
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-8 px-4 max-w-3xl mx-auto">
            <p className="text-lg font-[var(--font-bai-jamjuree)]">
              <span className="inline-flex items-end gap-2">
                <span className="text-5xl">♀️♂️♂️</span>
                <span className="text-5xl font-bold">1 IN 3</span>
              </span>{" "}
              <span className="text-purple-500 dark:text-purple-300 text-xl font-normal font-[var(--font-bai-jamjuree)]">
                of those in data and AI roles are women
              </span>
            </p>
            <p className="text-8xl font-bold font-[var(--font-archivo)]">
              5%{" "}
              <span className="text-purple-500 dark:text-purple-300 text-xl font-normal font-[var(--font-bai-jamjuree)]">
                of PhD candidates for AI are black or hispanic
              </span>
            </p>
            <p className="text-8xl font-bold font-[var(--font-archivo)]">
              16%{" "}
              <span className="text-purple-500 dark:text-purple-300 text-xl font-normal font-[var(--font-bai-jamjuree)]">
                of Americans are literate in AI
              </span>
            </p>
          </div>
          <p className="text-center mt-12 text-xl font-normal dark:text-gray-300 font-[var(--font-bai-jamjuree)]">
            Not everyone has the means to become AI literate, whether it's due to
            a lack of resources, opportunities, or time.
          </p>
        </section>

        {/* AISC Overview Section */}
        <section className="text-center max-w-5xl">
          <h2 className="text-4xl font-bold text-blue-400 dark:text-cyan-300 mb-4">
            The AI Student Collective at UC San Diego
          </h2>
          <p className="text-lg sm:text-xl text-gray-800 dark:text-white leading-relaxed">
            is a student organization dedicated to providing accessible AI
            literacy through pre-professional programs and events. Each year is
            marked by high-impact events like symposiums and product
            competitions, as well as skill-building opportunities like resume
            workshops, code-alongs, and corporate mixers.
          </p>
        </section>

        {/* GAIN Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-right">
            <h3 className="text-6xl font-extrabold text-blue-400 dark:text-cyan-300 opacity-70">
              GAIN
            </h3>
            <p className="text-gray-800 dark:text-white text-3xl mt-4 leading-snug">
              Students will gain AI literacy through...
            </p>
            <ul className="mt-6 space-y-4 text-gray-800 dark:text-white text-lg">
              <li className="flex items-start gap-3">
                <span className="drop-shadow-[0_0_4px] dark:drop-shadow-none">⚙️</span>
                <span>
                  Contributing to technical projects and research teams using
                  AI.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="drop-shadow-[0_0_4px] dark:drop-shadow-none">🌐</span>
                <span>
                  Networking with industry leaders at workshops, symposia, and
                  collaborative programs.
                </span>
              </li>
            </ul>
          </div>
          <Image
            src="/afterlight-3-1.png"
            alt="GAIN visual"
            width={600}
            height={400}
            className="w-full max-w-md object-cover rounded-2xl"
          />
        </section>

        {/* IMPACT Section */}
        <section className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div className="max-w-xl text-left">
            <h3 className="text-6xl font-extrabold text-blue-400 dark:text-cyan-300 opacity-70">
              IMPACT
            </h3>
            <p className="text-gray-800 dark:text-white text-3xl mt-4 leading-snug">
              Students will impact AI literacy through...
            </p>
            <ul className="mt-6 space-y-4 text-gray-800 dark:text-white text-lg">
              <li className="flex items-start gap-3">
                <span className="drop-shadow-[0_0_4px] dark:drop-shadow-none">👩‍🏫</span>
                <span>
                  Teaching interactive courses at local grade schools to inspire
                  early interest in AI.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="drop-shadow-[0_0_4px] dark:drop-shadow-none">📝</span>
                <span>
                  Creating engaging articles and projects for learners of all
                  skill levels.
                </span>
              </li>
            </ul>
          </div>
          <Image
            src="/dsf3240-1.png"
            alt="IMPACT visual"
            width={600}
            height={400}
            className="w-full max-w-md object-cover rounded-2xl"
          />
        </section>

        
      </main>

      <Footer />
    </>
  );
}
