/// <reference types="vite/client" />

import { useState } from "react";

import shirt3 from "../../assets/shirt-3km.png";
import shirt5 from "../../assets/shirt-5km.png";

import medal3 from "../../assets/medal-3km.png";
import medal5 from "../../assets/medal-5km.png";

import route3 from "../../assets/route-3km.png";
import route5 from "../../assets/route-5km.png";

export default function RacePack() {
  const [category, setCategory] = useState<"3KM" | "5KM">("3KM");
  const data = category === "3KM" ? [shirt3, medal3, route3] : [shirt5, medal5, route5];
  return <section id="race-pack" className="bg-slate-950 px-6 py-24 text-white"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="font-bold uppercase tracking-[.3em] text-cyan-300">Official Race Pack</p><h2 className="mt-4 text-4xl font-black">Choose Your Category</h2><p className="mx-auto mt-4 max-w-2xl text-slate-400">Select a category to view the current shirt, medal and route. Images can be updated when the final designs are ready.</p><div className="mt-8 flex justify-center gap-4">{(["3KM","5KM"] as const).map(v => <button key={v} onClick={() => setCategory(v)} className={`rounded-full px-7 py-3 font-bold ${category===v ? "bg-cyan-300 text-slate-950":"bg-slate-800"}`}>{v}</button>)}</div></div><div className="mt-12 grid gap-8 lg:grid-cols-3">{[["Official Shirt",data[0]],["Finisher Medal",data[1]],["Route Map",data[2]]].map(([title,image]) => <article key={title} className="overflow-hidden rounded-3xl bg-slate-900"><a href={image} target="_blank" rel="noreferrer" className="block bg-white p-4" aria-label={`View ${category} ${title} full size`}><img src={image} alt={`${category} ${title}`} loading="lazy" className="h-80 w-full object-contain transition hover:scale-[1.02]" /></a><div className="p-6"><h3 className="text-2xl font-black">{title}</h3><p className="mt-2 text-sm text-slate-400">Click image to view full size</p></div></article>)}</div></div></section>;
}
