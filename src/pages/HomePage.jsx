import TopNav from "../components/TopNav";
import projectsData from "../data/projects.json";

export default function HomePage() {
  const projects = projectsData;

  return (
    <div className="relative min-h-screen bg-slate-950 text-[#f5f3ff]">

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(157,78,221,0.5),_transparent_55%)] blur-3xl opacity-80" />

      <div className="fixed inset-0 -z-20 bg-black/80 backdrop-blur-xl" />

      <header className="fixed top-0 left-0 w-full z-50">
        <TopNav />
      </header>


      <main className="h-screen pt-28 md:pt-32 overflow-y-scroll snap-y snap-mandatory">

        <section
          id="hero"
          className="h-screen snap-start flex flex-col items-center justify-center px-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#ede9fe] text-center mb-8">
            Bafodé TOURE <br /> Développeur Web Full-Stack
          </h1>

          <div className="w-full max-w-5xl">
            <img
              src="src/assets/19751d804d0bf3793cd2faad8443ecb8.jpg"
              alt="Développeur 4K"
              className="w-full h-auto rounded-2xl object-cover border border-white/10 shadow-2xl"
            />
          </div>
        </section>


        <section
          id="presentation"
          className="h-screen snap-start flex flex-col items-center justify-center px-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#ede9fe] text-center mb-6">
            Présentation
          </h1>
          <p className="max-w-2xl text-center text-sm md:text-base text-slate-200">
            Développeur web full‑stack passionné par les expériences interactives,
            les interfaces animées et les projets immersifs (escape games, jeux,
            applications web). Toujours en veille sur les nouvelles technologies
            JavaScript et l’UX.
          </p>
        </section>


        <section
          id="projects"
          className="h-screen snap-start flex flex-col justify-center mt-10 max-w-6xl mx-auto px-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#ede9fe] text-center mb-6">
            Projets Réalisés
          </h1>

          <div className="flex snap-x snap-mandatory overflow-x-auto gap-6 pb-4 -mx-4 px-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="snap-center snap-always shrink-0 w-[85vw] sm:w-[60vw] md:w-80"
              >
                <div className="bg-slate-900/70 rounded-2xl border border-white/10 shadow-xl overflow-hidden">

                  <img
                    src={project.image[0]}
                    alt={project.title}
                    className="w-full h-56 sm:h-64 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm font-semibold text-[#ede9fe]">
                      {project.title}
                    </p>
                    <p className="text-xs text-slate-300 mt-1">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="h-screen snap-start flex flex-col items-center justify-center px-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#ede9fe] text-center mb-6">
            Contact
          </h1>
          <p className="text-sm md:text-base text-slate-200 mb-4 text-center">
            Une idée de projet, une collaboration, une question ?
          </p>
          <a
            href="mailto:bafode.toure.pro59@gmail.com"
            className="rounded-full bg-white text-black px-6 py-2 text-sm font-medium"
          >
            Me contacter
          </a>
        </section>
      </main>
    </div>
  );
}

