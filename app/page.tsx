export default function PortfolioWebsite() {
  const skills = [
    "Android Native",
    "Flutter",
    "Kotlin",
    "Java",
    "Dart",
    "Jetpack Compose",
    "MVVM",
    "Firebase",
    "Google Maps",
    "FastAPI",
    "Room DB",
    "REST APIs",
    "SQLite",
    "Adobe Events",
    "Glide",
    "Retrofit"
  ];

  const projects = [
    {
      title: "ONE VISUALISER",
      company: "Asian Paints",
      description:
        "AI-powered room visualizer app that helps customers preview paints, wallpapers, and textures in real-time using room images and templates.",
      tech: "Flutter, Android, Adobe Events, Xcode",
      duration: "Oct 2025 - Dec 2025"
    },
    {
      title: "COLOUR WITH ASIAN PAINTS",
      company: "Asian Paints",
      description:
        "Wall colour visualizer app with textures, stencils, wallpaper rendering, templates, and real-time wall preview capabilities.",
      tech: "Kotlin, Java, Android SDK",
      duration: "Jun 2024 - Present"
    },
    {
      title: "BASEMAP",
      company: "BASEMAP",
      description:
        "Offline map and GPS-based hunting and land ownership application with advanced mapping and tracking features.",
      tech: "Kotlin, Java, Google Maps",
      duration: "Oct 2023 - Present"
    },
    {
      title: "SURAKSHA QR",
      company: "Bartronics",
      description:
        "Healthcare services application focused on QR-based digital healthcare workflows.",
      tech: "Kotlin, Android Studio",
      duration: "Jul 2023 - Present"
    },
    {
      title: "ACADEMIOS",
      company: "Avantao Technologies",
      description:
        "School management app for teachers, students, parents, and drivers with attendance and fee management modules.",
      tech: "Kotlin, Jetpack Compose",
      duration: "Apr 2022 - Dec 2022"
    },
    {
      title: "ALMUZAINI",
      company: "Al Muzaini",
      description:
        "Remittance and exchange application supporting bank transfers and Western Union integrations.",
      tech: "Kotlin, Java, Graphs & Charts",
      duration: "Dec 2021 - Apr 2022"
    }
  ];

  const experience = [
    {
      role: "Senior Software Engineer",
      company: "Codetru",
      period: "Jan 2023 - Present"
    },
    {
      role: "Senior Android Developer",
      company: "Avantao Technologies",
      period: "Aug 2021 - Dec 2023"
    },
    {
      role: "Senior Android Developer",
      company: "OSoft Labs",
      period: "Aug 2020 - Jul 2021"
    },
    {
      role: "Android Developer",
      company: "Freyr Energy Services",
      period: "Jul 2017 - Jan 2020"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      {/* Hero Section */}
<section className="relative overflow-hidden border-b border-zinc-800 min-h-screen flex items-center">

  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-purple-950 to-black" />

  <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20 items-center">

    {/* LEFT CONTENT */}
    <div>

      <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-full px-5 py-3 text-sm mb-8">
        <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
        Available for Freelance & Full-Time Opportunities
      </div>

      <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
        Hi, I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Sravan Kumar
        </span>
      </h1>

      <p className="text-2xl text-zinc-300 leading-relaxed mb-10 max-w-2xl">
        Senior Software Engineer with 9+ years of experience building high-performance Android and Flutter applications for enterprise and consumer products.
      </p>

      <div className="flex flex-wrap gap-5">

        <a
          href="mailto:sravanchintha24@gmail.com"
          className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition-all font-semibold text-lg"
        >
          Contact Me
        </a>

        <a
          href="https://www.linkedin.com/in/sravan-chintha"
          target="_blank"
          className="px-8 py-4 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition-all font-semibold text-lg"
        >
          LinkedIn
        </a>

      </div>

    </div>

    {/* RIGHT IMAGE SECTION */}
    <div className="relative flex justify-center lg:justify-end">

      {/* IMAGE */}
      <div className="relative">

        <img
          src="/profile.jpg"
          alt="Sravan Kumar"
          className="w-[420px] lg:w-[500px] h-[520px] lg:h-[620px] object-cover rounded-[36px] border border-zinc-700 shadow-2xl"
        />

        {/* FLOATING STATS CARD */}
        <div className="hidden lg:block absolute bottom-10 -left-32 bg-zinc-900/95 border border-zinc-800 rounded-[32px] p-6 shadow-2xl backdrop-blur w-[300px]">

          <div className="grid grid-cols-2 gap-5">

            <div className="bg-zinc-800 rounded-2xl p-5">
              <h3 className="text-3xl font-bold text-cyan-400">9+</h3>
              <p className="text-zinc-400 mt-2 text-sm">
                Years Experience
              </p>
            </div>

            <div className="bg-zinc-800 rounded-2xl p-5">
              <h3 className="text-3xl font-bold text-purple-400">15+</h3>
              <p className="text-zinc-400 mt-2 text-sm">
                Apps Delivered
              </p>
            </div>

            <div className="bg-zinc-800 rounded-2xl p-5">
              <h3 className="text-2xl font-bold text-green-400">
                Android
              </h3>
              <p className="text-zinc-400 mt-2 text-sm">
                Native Expert
              </p>
            </div>

            <div className="bg-zinc-800 rounded-2xl p-5">
              <h3 className="text-2xl font-bold text-pink-400">
                Flutter
              </h3>
              <p className="text-zinc-400 mt-2 text-sm">
                Cross Platform
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>

  </div>

</section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-8">About Me</h2>

            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
              <p>
                I specialize in designing and developing scalable Android and Flutter applications with clean architecture, high-performance UI, and modern development practices.
              </p>

              <p>
                My expertise includes Jetpack Compose, MVVM architecture, Google Maps, offline maps, REST API integrations, Firebase, Adobe Events, and AI-assisted mobile experiences.
              </p>

              <p>
                I have worked with enterprise clients like Asian Paints, BASEMAP, and healthcare platforms to deliver production-grade mobile applications.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8">Technical Skills</h2>

            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-3 bg-zinc-900 border border-zinc-700 rounded-2xl text-zinc-200 hover:border-cyan-500 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center justify-between mb-14 flex-wrap gap-4">
            <div>
              <h2 className="text-4xl font-bold">Featured Projects</h2>
              <p className="text-zinc-400 mt-3 text-lg">
                Production-ready applications built for enterprise clients and global users.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-black border border-zinc-800 rounded-[28px] p-8 hover:border-cyan-500 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300">
                    {project.company}
                  </span>

                  <span className="text-xs text-zinc-500">{project.duration}</span>
                </div>

                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                <p className="text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="pt-4 border-t border-zinc-800">
                  <p className="text-sm text-cyan-400 font-medium">{project.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-14">Work Experience</h2>

        <div className="space-y-8">
          {experience.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-[28px] p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
            >
              <div>
                <h3 className="text-2xl font-semibold">{item.role}</h3>
                <p className="text-zinc-400 mt-2 text-lg">{item.company}</p>
              </div>

              <div className="text-zinc-500 font-medium text-lg">
                {item.period}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Let's Build Something Amazing
          </h2>

          <p className="text-zinc-400 text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            I'm passionate about building scalable mobile applications and creating exceptional user experiences across Android and Flutter platforms.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:sravanchintha24@gmail.com"
              className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-all"
            >
              sravanchintha24@gmail.com
            </a>

            <a
              href="tel:+917207736638"
              className="px-8 py-4 rounded-2xl border border-zinc-700 font-semibold hover:border-zinc-500 transition-all"
            >
              +91 72077 36638
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
