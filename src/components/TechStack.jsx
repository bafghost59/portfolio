const techs = [
  { name: "Bootstrap", src: "/Bootstrap.svg" },
  { name: "CSS3", src: "/CSS3.svg" },
  { name: "Express", src: "/Express.svg" },
  { name: "Figma", src: "/Figma.svg" },
  { name: "JavaScript", src: "/JavaScript.svg" },
  { name: "JSON", src: "/JSON.svg" },
  { name: "Material UI", src: "/Material-UI.svg" },
  { name: "Microsoft SQL Server", src: "/Microsoft-SQL-Server.svg" },
  { name: "Node.js", src: "/Node.js.svg" },
  { name: "Nodemon", src: "/Nodemon.svg" },
  { name: "PostCSS", src: "/PostCSS.svg" },
  { name: "React Bootstrap", src: "/React-Bootstrap.svg" },
  { name: "React", src: "/React.svg" },
  { name: "Tailwind CSS", src: "/Tailwind-CSS.svg" },
  { name: "Visual Studio Code", src: "/Visual-Studio-Code-VSCode.svg" },
  { name: "Vite.js", src: "/Vite.js.svg" },
];

export default function TechStack() {
  return (
    <section className="mt-5 flex flex-wrap justify-center gap-4 sm:gap-10">
      {techs.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center gap-3 w-20 sm:w-24 lg:w-28"
        >
          <img
            src={tech.src}
            alt={tech.name}
            className="h-10 w-10 object-contain sm:h-12 sm:w-12 lg:h-14 lg:w-14"
          />
          <span className="text-[0.65rem] text-gray-300 text-center sm:text-xs lg:text-sm">
            {tech.name}
          </span>
        </div>
      ))}
    </section>
  );
}






