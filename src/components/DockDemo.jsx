import { HomeIcon, Github, Linkedin, Mail, X } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function DockDemo() {
 
  
  const DATA = {
    navbar: [
      { href: "", icon: HomeIcon, label: "Home" },
    ],
    social: [
      { name: "GitHub", url: "https://github.com/bafghost59", icon: Github },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/bafod%C3%A9-toure-579723145/", icon: Linkedin },

      { name: "Email", url: "#", icon: Mail },
          {
      name: "Email",
      url: "mailto:bafode.toure.pro59@gmail.com",
      icon: Mail,
    },
    ],
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 rounded-full bg-slate-900/60 px-4 py-2 shadow-lg backdrop-blur-md border border-white/10">
        {/* navbar */}
        {DATA.navbar.map((item) => (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-100 hover:bg-slate-700/80 transition"
          >
            <item.icon className="h-4 w-4" />
          </a>
        ))}

        {/* séparation */}
        <span className="h-6 w-px bg-white/20" />

        {/* réseaux sociaux */}
        {DATA.social.map((item) => (
          <a
            key={item.name}
            href={item.url}
            aria-label={item.name}
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-100 hover:bg-slate-700/80 transition"
          >
            <item.icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  );
}
