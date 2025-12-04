
import TechStack from "../components/TechStack";
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


      <main className="animate-slide-in h-screen pt-28 md:pt-32 overflow-y-scroll snap-y snap-mandatory">

        <section
          id="hero"
          className="h-screen snap-start flex flex-col items-center justify-center px-4"
        >
          <h1 className="mt-32 text-3xl md:text-4xl font-bold text-[#ede9fe] text-center mb-8">
            Développeur Web Full-Stack
          </h1>


          <div className="w-full max-w-6xl h-[55vh]">
            <img
              src="src/assets/IMG_0174.jpg"
              alt="Développeur 4K"
              className="w-full h-full rounded-2xl object-cover border border-white/10 shadow-2xl"
            />
          </div>
        </section>


        <section
          id="presentation"
          className=" animate-slide-in h-screen snap-start flex flex-col items-center justify-center px-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#ede9fe] text-center mb-6">
            Présentation
          </h1>
          <p className="max-w-2xl text-center text-xs md:text-base text-slate-100">
            Développeur web full‑stack en reconversion professionnelle, je suis actuellement en formation DWWM au sein de l’école forEach Academy, où je consolide mes compétences en front‑end, back‑end, création d’API et gestion de bases de données.  Fort d’une expérience significative dans la relation client et le pilotage d’activités digitales, je mets à profit mon sens de l’écoute et mon aisance relationnelle pour concevoir des interfaces efficaces et centrées utilisateur.  Curieux, rigoureux et autonome, j’apprécie particulièrement les environnements collaboratifs qui favorisent l’échange et la qualité du produit final.  À la recherche d’opportunités, notamment de stage, je vous invite à découvrir mon portfolio pour explorer mes projets et ma progression technique. 
          </p>
          <h1 className="mt-12 text-2xl md:text-3xl font-bold text-[#ede9fe] text-center mb-6">Stacks utilisées</h1>
          <section className="flex whitespace-nowrap animate-slide-in">
        <TechStack />
          </section>
        </section>


        <section
          id="projects"
          className="animate-slide-in h-screen snap-start flex flex-col justify-center mt-10 max-w-6xl mx-auto px-4"
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
          className="animate-slide-in h-screen snap-start flex flex-col items-center justify-center px-4"
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
            M'écrire
          </a>
        </section>
      </main>
    </div>
  );
}

