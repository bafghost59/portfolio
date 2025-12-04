import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const tabs = [
  { label: "Accueil", to: "/" },
  { label: "Projets réalisés", to: "/about" },
  { label: "Contact", to: "/company" },
];

export default function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full flex justify-center py-4">
      <div className="w-full max-w-5xl rounded-3xl bg-[#10002B]/90 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between backdrop-blur-md shadow-[0_18px_45px_rgba(0,0,0,0.6)] border border-white/5">
        <div className="text-white font-semibold text-sm md:text-base leading-tight">
          Bafodé
          <br />
          TOURE
        </div>

        <nav className="hidden md:flex relative rounded-full bg-black/50 px-1 py-1 items-center gap-1">
          {tabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              className={({ isActive }) =>
                `px-5 py-2 text-sm rounded-full transition-all ${
                  isActive
                    ? "bg-white text-black shadow"
                    : "text-gray-400 hover:text-white"
                }`
              }
              end={tab.to === "/"}
            >
              {tab.label}
            </NavLink>
          ))}
        </nav>

        <button className="hidden md:inline-flex rounded-full bg-white text-black px-6 py-2 text-sm font-medium">
          Mon CV
        </button>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-[#240046] p-6 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col gap-6 mt-10">
            {tabs.map((tab) => (
              <li key={tab.to}>
                <NavLink
                  to={tab.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block text-lg rounded-full px-4 py-2 transition-all ${
                      isActive
                        ? "bg-white text-black shadow"
                        : "text-[#e0aaff] hover:text-white"
                    }`
                  }
                  end={tab.to === "/"}
                >
                  {tab.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
<a
  href="/CV-TOURE-Bafode.pdf"
  download
  onClick={() => setOpen(false)}
  className="w-full block text-center rounded-full bg-white text-black px-5 py-2 text-base font-medium"
>
  Mon CV
</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
