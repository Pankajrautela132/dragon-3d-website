import { Phone, Mail } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home", active: true },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Profile", href: "#profile" },
  { label: "Career", href: "#career" },
  { label: "Our Clients", href: "#clients" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  return (
    <header className="w-full">
      {/* Top info bar */}
      <div className="w-full bg-[#0d1650] text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 px-4 py-2">
          <p>Plot No. 353, Sector -68, IMT Faridabad -121004, Haryana, India</p>
          <p>Mon - Fri: 09:00AM - 6:00PM</p>
        </div>
      </div>

      {/* Logo / contact row */}
      <div className="w-full bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-3">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <div className="h-14 w-32 rounded-full border-2 border-[#3949ab] flex items-center justify-center">
              <span className="text-[#3949ab] font-bold text-lg tracking-wide">
                TAPL TEJ
              </span>
            </div>
          </a>

          {/* Contact info */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-6 w-6 text-[#3949ab]" strokeWidth={1.5} />
              <div className="leading-tight">
                <p className="text-xs text-slate-500">Contact Now</p>
                <p className="text-sm font-semibold text-[#0d1650]">
                  +91-8053 650 222
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-6 w-6 text-[#3949ab]" strokeWidth={1.5} />
              <div className="leading-tight">
                <p className="text-xs text-slate-500">Mail Us</p>
                <p className="text-sm font-semibold text-[#0d1650]">
                  rahul@taplindia.net
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button className="border border-[#f37021] text-[#f37021] font-semibold text-sm px-5 py-2 rounded hover:bg-[#f37021] hover:text-white transition-colors">
            Get A Quote
          </button>
        </div>
      </div>

      {/* Nav bar */}
      <nav className="w-full bg-[#f37021]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4">
          <ul className="flex flex-wrap items-center">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`block px-4 py-3 text-sm font-medium text-white ${
                    link.active ? "border-b-2 border-white" : "opacity-90"
                  } hover:opacity-100`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#enquiry"
            className="px-4 py-3 text-sm font-semibold text-white"
          >
            Enquiry Now
          </a>
        </div>
      </nav>
    </header>
  );
}
