import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const GOOGLE_FORM_URL = "https://forms.gle/YvHj9yBKhsg2uUqk6";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Blue Economy Fun Run" className="h-12 w-12 rounded-full bg-white object-contain p-1" />
          <span className="hidden font-black text-white sm:block">Blue Economy Fun Run</span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          <Link to="/" className="font-bold text-cyan-300">Home</Link>
          <a href="/#event" className="font-semibold text-slate-300 hover:text-cyan-300">Event</a>
          <a href="/#pricing" className="font-semibold text-slate-300 hover:text-cyan-300">Pricing</a>
          <a href="/#race-pack" className="font-semibold text-slate-300 hover:text-cyan-300">Race Pack</a>
          <a href="/#checkpoints" className="font-semibold text-slate-300 hover:text-cyan-300">Checkpoints</a>
          <a href="/#contact" className="font-semibold text-slate-300 hover:text-cyan-300">Contact</a>
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-cyan-300 px-5 py-2.5 font-black text-slate-950">Register</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="text-white lg:hidden" aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="border-t border-white/10 bg-slate-950 lg:hidden">
        <Link to="/" onClick={() => setOpen(false)} className="block px-6 py-4 text-white">Home</Link>
        <a href="/#event" onClick={() => setOpen(false)} className="block px-6 py-4 text-white">Event Details</a>
        <a href="/#pricing" onClick={() => setOpen(false)} className="block px-6 py-4 text-white">Pricing</a>
        <a href="/#race-pack" onClick={() => setOpen(false)} className="block px-6 py-4 text-white">Race Pack</a>
        <a href="/#checkpoints" onClick={() => setOpen(false)} className="block px-6 py-4 text-white">Checkpoints</a>
        <a href="/#contact" onClick={() => setOpen(false)} className="block px-6 py-4 text-white">Contact</a>
        <a href="/#faq" onClick={() => setOpen(false)} className="block px-6 py-4 text-white">FAQ</a>
        <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="block bg-cyan-300 px-6 py-4 font-black text-slate-950">Register via Google Form</a>
      </div>}
    </header>
  );
}
