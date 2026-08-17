import checkpointConcept from "../../assets/checkpoints-concept.png";

const checkpoints = [
  ["CP1", "Ocean Guardian", "Plastic-Free Zone"],
  ["CP2", "Deep Blue Neon & Bubble Station", "Bubble Zone"],
  ["CP3", "Marine Life", "Sea Creature Zone"],
  ["CP4", "The Fisherman", "Fisherfolk Community"],
  ["CP5", "Save Our Reefs", "Coral Reef Lane"],
];

export default function Checkpoints(){return <section id="checkpoints" className="bg-cyan-50 px-6 py-24 text-slate-950"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="font-bold uppercase tracking-[.3em] text-cyan-700">Along the Route</p><h2 className="mt-4 text-4xl font-black">Five Themed Checkpoints</h2><p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">Experience five ocean-inspired zones designed to make the run more engaging while promoting marine awareness and sustainability.</p></div><div className="mt-12 overflow-hidden rounded-3xl bg-white shadow-xl"><a href={checkpointConcept} target="_blank" rel="noreferrer" aria-label="View checkpoint concept illustration full size"><img src={checkpointConcept} alt="Concept illustration of the five Blue Economy Fun Run checkpoints" loading="lazy" className="w-full object-cover" /></a><div className="border-t border-amber-200 bg-amber-50 p-4 text-center text-sm font-bold text-amber-900">Concept illustration only. The actual checkpoint design, decorations and activities may differ on event day.</div></div><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{checkpoints.map(([number,title,theme])=><article key={number} className="rounded-2xl bg-slate-950 p-5 text-white"><p className="font-black text-cyan-300">{number}</p><h3 className="mt-2 text-lg font-black">{title}</h3><p className="mt-2 text-sm text-slate-400">{theme}</p></article>)}</div></div></section>}
