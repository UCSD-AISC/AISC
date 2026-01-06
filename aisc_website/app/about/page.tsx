import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 2xl:px-64 gap-28 mt-12">
        {/* QUOTE Section */}
        <section className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-purple-400 leading-tight max-w-5xl mx-auto">
            “AI won’t take away your job – but someone who knows AI might.”
          </h1>
          <p className="mt-4 text-lg sm:text-xl italic text-purple-300 text-right max-w-5xl mx-auto sm:pr-4">
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
            <p className="text-lg sm:text-xl text-white leading-relaxed text-right lg:pr-4">
              It’s critical that people have a baseline understanding of the{" "}
              <i>power of AI technologies</i> and{" "}
              <i>how to properly wield that power</i>.
            </p>
          </div>
        </section>

        {/* AISC Overview Section */}
        <section className="text-center max-w-5xl">
          <h2 className="text-4xl font-bold text-cyan-300 mb-4">
            The AI Student Collective at UC San Diego
          </h2>
          <p className="text-lg sm:text-xl text-white leading-relaxed">
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
            <h3 className="text-6xl font-extrabold text-cyan-300 opacity-70">
              GAIN
            </h3>
            <p className="text-white text-3xl mt-4 leading-snug">
              Students will gain AI literacy through...
            </p>
            <ul className="mt-6 space-y-4 text-white text-lg">
              <li className="flex items-start gap-3">
                <span>⚙️</span>
                <span>
                  Contributing to technical projects and research teams using
                  AI.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span>🌐</span>
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
            <h3 className="text-6xl font-extrabold text-cyan-300 opacity-70">
              IMPACT
            </h3>
            <p className="text-white text-3xl mt-4 leading-snug">
              Students will impact AI literacy through...
            </p>
            <ul className="mt-6 space-y-4 text-white text-lg">
              <li className="flex items-start gap-3">
                <span>👩‍🏫</span>
                <span>
                  Teaching interactive courses at local grade schools to inspire
                  early interest in AI.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span>📝</span>
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

        {/* Divider: Meet the People */}
        <section className="w-full">
          <p className="text-3xl italic text-white font-extralight text-left max-w-4xl mx-auto">
            Meet the people spearheading this mission...
          </p>
        </section>

        {/* TEAM Section */}
        <section className="text-white text-center w-full">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-12">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center">
            {[
              { name: "Sadrac Santacruz", role: "President" },
              { name: "Neil Damle", role: "Vice President" },
              { name: "Hillary Chang", role: "Vice President" },
              { name: "Jiya Makhija", role: "Treasurer" },
              {
                name: "Rohan Sachdeva",
                role: "Director of Technical Projects",
              },
              {
                name: "Axel Orrhede",
                role: "Technical Projects (Extended Board)",
              },
              {
                name: "Yuvika Satapathy",
                role: "Director of External Affairs",
              },
              {
                name: "Stefanie Zarate",
                role: "External Affairs (Extended Board)",
              },
              {
                name: "Joseph Guzman",
                role: "External Affairs (Extended Board)",
              },
              { name: "Anisha Ramesh", role: "Marketing & Media Lead" },
              { name: "Divya Vijay", role: "Co-Director of Education" },
            ].map((member, idx) => (
              <div key={idx}>
                <div className="w-40 h-40 bg-gray-700 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
