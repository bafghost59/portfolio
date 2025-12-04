import TopNav from "../components/TopNav";
import Parallax from "../components/Parrallax";

const projectsHero = [
  { image: "/assets/projects/labo-zombie.jpg"}
];

const projectsList = [
  {image: "/assets/projects/prison.jpg" },
  {image: "/assets/projects/manoir.jpg" },
  {image: "/assets/projects/braquage.jpg" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(157,78,221,0.35),_transparent_55%),_#000000] text-[#f5f3ff]">
      <header className="fixed top-0 left-0 w-full z-50">
        <TopNav />
      </header>

      <main className="pt-40 pb-10 overflow-hidden">
        <section className="animate-slide-in px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#10002B] text-center">
            Bafodé TOURE <br /> Développeur Web Full-Stack
          </h1>
        </section>

        <section className="animate-slide-in mt-10 max-w-4xl mx-auto px-4">
          <video
            className="w-full h-auto rounded-2xl"
            controls
            autoPlay
            muted
          >
            <source
              src="https://docs.material-tailwind.com/demo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </section>

        {/* Parallax 1 : teaser projets */}
        <Parallax items={projectsHero} />

        <section className="animate-slide-in mt-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#10002B] text-center">
            Projets réalisés
          </h1>
        </section>

        {/* Parallax 2 : liste projets */}
        <Parallax items={projectsList} />

        <section className="animate-slide-in mt-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#10002B] text-center">
            Contact
          </h1>
        </section>
      </main>
    </div>
  );
}

