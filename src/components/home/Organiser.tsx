import yccLogo from "../../assets/ycc-logo.jpeg";
import mppLogo from "../../assets/mpp-logo.jpeg";
import SponsorsCarousel from "./SponsorsCarousel";

export default function Organiser(){
  return (
    <section id="organiser" className="bg-slate-100 px-6 py-20">
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center rounded-3xl bg-white p-8 text-center shadow-sm">
          <p className="font-bold uppercase tracking-widest text-cyan-700">Organised By</p>
          <img src={mppLogo} alt="Majlis Perwakilan Pelajar UMT logo" loading="lazy" className="mt-5 h-32 w-32 rounded-full object-cover shadow-md" />
          <h2 className="mt-5 text-2xl font-black text-slate-950">Majlis Perwakilan Pelajar UMT</h2>
          <p className="mt-3 text-slate-600">Blue Economy Fun Run UMT 2026 Organising Committee</p>
        </div>

        <div className="flex flex-col items-center rounded-3xl border-2 border-amber-300 bg-white p-8 text-center shadow-sm">
          <p className="font-bold uppercase tracking-widest text-amber-600">In Collaboration With</p>
          <img src={yccLogo} alt="Young Conservationist Club UMT logo" loading="lazy" className="mt-5 h-32 w-32 rounded-full object-cover shadow-md" />
          <h2 className="mt-5 text-2xl font-black text-slate-950">Young Conservationist Club UMT</h2>
          <p className="mt-2 font-bold text-amber-600">YCC UMT</p>
        </div>

      </div>
      <SponsorsCarousel />
    </section>
  );
}
