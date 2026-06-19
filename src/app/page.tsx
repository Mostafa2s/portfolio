"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaAndroid,
  FaGamepad,
  FaGlobe,
  FaRocket,
} from "react-icons/fa";

export default function Home() {
  const skills = [
    "Android",
    "Kotlin",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "UI/UX",
    "Web Design",
  ];
const codeSnippet = `
class Mostafa {
  role = "Android Developer";
  location = "Germany";

  interests = [
    "Gaming",
    "Web Design",
    "Technology"
  ];

  build() {
    return "Products, not just pages";
  }
}
`;
  return (
    <main className="text-white">

      {/* NAVBAR */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
        <div className="glass px-4 md:px-6 py-3 flex gap-3 md:gap-6 text-xs md:text-sm">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen pt-32 md:pt-0 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="uppercase tracking-[0.15em] md:tracking-[0.3em] text-cyan-400 mb-4 text-xs md:text-base"
        >
          Android Developer • Web Designer • Gamer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6"
        >
          Mostafa{" "}
          <span className="gradient-text">
            Alasaad
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-4xl font-semibold mb-6"
        >
          I build products, not just pages.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl text-gray-400 text-lg"
        >
          Let's turn complex requirements into scalable digital experiences.
          <br />
          From Syria, currently living and studying in Germany and always open
          to learning more.
        </motion.p>

        <div className="glass p-6 glow">
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500"></div>
    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
    <div className="w-3 h-3 rounded-full bg-green-500"></div>
  </div>

  <pre className="text-cyan-300 text-sm whitespace-pre-wrap">
    {codeSnippet}
  </pre>
</div>

        <div className="flex gap-6 mt-10 text-3xl">
          <a href="https://github.com/Mostafa2s" target="_blank">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/alasaad/" target="_blank">
            <FaLinkedin />
          </a>

          <a href="mailto:info@alasaad.de">
            <FaEnvelope />
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <div className="glass p-10">
          <h2 className="text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-300 leading-8">
            I am a technology enthusiast originally from Syria and currently
            living and studying in Germany. My interests revolve around Android
            application development, modern web experiences, gaming culture, and
            digital product design.

            <br /><br />

            I enjoy turning ideas into practical solutions and continuously
            expanding my knowledge through learning, experimentation, and
            building.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="max-w-6xl mx-auto px-6 py-12"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          What I Do
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="glass p-8">
            <FaAndroid className="text-4xl mb-4 text-cyan-400" />
            <h3 className="text-2xl font-semibold mb-3">
              Android Development
            </h3>
            <p className="text-gray-400">
              Building modern mobile experiences and user-focused Android apps.
            </p>
          </div>

          <div className="glass p-8">
            <FaGlobe className="text-4xl mb-4 text-cyan-400" />
            <h3 className="text-2xl font-semibold mb-3">
              Web Design
            </h3>
            <p className="text-gray-400">
              Creating responsive websites with modern UI and smooth user
              experiences.
            </p>
          </div>

          <div className="glass p-8">
            <FaGamepad className="text-4xl mb-4 text-cyan-400" />
            <h3 className="text-2xl font-semibold mb-3">
              Gaming
            </h3>
            <p className="text-gray-400">
              Passionate about video games, interactive systems, and creative
              digital experiences.
            </p>
          </div>

          <div className="glass p-8">
            <FaRocket className="text-4xl mb-4 text-cyan-400" />
            <h3 className="text-2xl font-semibold mb-3">
              Continuous Learning
            </h3>
            <p className="text-gray-400">
              Always exploring new technologies and improving my technical
              skills.
            </p>
          </div>

        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-24">
  <h2 className="text-4xl font-bold text-center mb-12">
    My Journey
  </h2>

  <div className="glass p-10">
    <div className="space-y-10">

      <div>
        <h3 className="text-cyan-400 font-bold text-xl">
          🇸🇾 Syria
        </h3>
        <p className="text-gray-400">
          Where my passion for technology and digital creativity started.
        </p>
      </div>

      <div>
        <h3 className="text-cyan-400 font-bold text-xl">
          🇩🇪 Germany
        </h3>
        <p className="text-gray-400">
          Studying, learning, and building technical skills every day.
        </p>
      </div>

      <div>
        <h3 className="text-cyan-400 font-bold text-xl">
          🚀 Future
        </h3>
        <p className="text-gray-400">
          Creating Android apps, websites, and digital experiences that matter.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* SKILLS */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="glass px-6 py-3 hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* CURRENT FOCUS */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <div className="glass p-10">
          <h2 className="text-4xl font-bold mb-6">
            Current Focus
          </h2>

          <p className="text-gray-400 leading-8">
            Currently expanding my expertise in Android development, modern web
            technologies, and digital product creation.

            <br /><br />

            New projects will be published soon.
          </p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-24">
  <h2 className="text-4xl font-bold text-center mb-12">
    Projects
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="glass p-8">
      <h3 className="font-bold text-xl mb-3">
        Android Apps
      </h3>

      <p className="text-gray-400">
        New Android applications coming soon.
      </p>
    </div>

    <div className="glass p-8">
      <h3 className="font-bold text-xl mb-3">
        Web Experiences
      </h3>

      <p className="text-gray-400">
        Modern web projects and interactive designs.
      </p>
    </div>

    <div className="glass p-8">
      <h3 className="font-bold text-xl mb-3">
        Experiments
      </h3>

      <p className="text-gray-400">
        Exploring new technologies and ideas.
      </p>
    </div>

  </div>
</section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-24"
      >
        <div className="glass p-10 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Connect
          </h2>

          <p className="text-gray-400 mb-8">
            Feel free to reach out for collaboration, networking, or simply a
            good conversation about technology.
          </p>

          <div className="flex justify-center gap-8 text-4xl">
            <a href="https://github.com/Mostafa2s" target="_blank">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/alasaad/" target="_blank">
              <FaLinkedin />
            </a>

            <a href="mailto:info@alasaad.de">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}