import logo from "../../assets/logo.png";

const GOOGLE_FORM_URL = "https://forms.gle/YvHj9yBKhsg2uUqk6";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-700 px-6 pt-28 text-white">
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 py-16 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.3em] text-cyan-300">Majlis Perwakilan Pelajar UMT</p>
          <h1 className="mt-6 text-5xl font-black leading-tight sm:text-7xl">Blue Economy <span className="block text-cyan-300">Fun Run 2026</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Run for our ocean while promoting sustainability, marine conservation, healthy lifestyles and community awareness.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-cyan-300 px-7 py-3 font-bold text-slate-950">Register via Google Form</a>
            <a href="#race-pack" className="rounded-full border border-white/20 px-7 py-3 font-bold">View Race Pack</a>
          </div>
          <p className="mt-4 text-sm text-slate-300">Registration opens securely in a new tab.</p>
        </div>
        <div className="rounded-[2rem] bg-white p-6 shadow-2xl">
          <img src={logo} alt="Blue Economy Fun Run logo" className="h-full w-full" />
        </div>
      </div>
    </section>
  );
}
