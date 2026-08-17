import { CalendarDays, Clock3, MapPin, PackageCheck } from "lucide-react";

const schedule = [
  ["6:30 AM", "Participant registration"], ["7:30 AM", "Warm-up"],
  ["7:45 AM", "5KM flag-off"], ["8:00 AM", "3KM flag-off"],
  ["9:30 AM", "All participants arrive"], ["9:45 AM", "Cool down"],
  ["10:00 AM", "Prize presentation & lucky draw"], ["11:00 AM", "Event ends"],
];

export default function EventDetails(){return <section id="event" className="bg-white px-6 py-24 text-slate-900"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="font-bold uppercase tracking-[.3em] text-cyan-600">Plan Your Race Day</p><h2 className="mt-4 text-4xl font-black">Event Details & Schedule</h2></div><div className="mt-12 grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><div className="space-y-4">{[[CalendarDays,"Race Day","Saturday, 17 October 2026"],[Clock3,"Event Time","6:30 AM – 11:00 AM"],[MapPin,"Venue","Tapak Konvo UMT"],[PackageCheck,"Race Pack Collection","Friday, 16 October 2026 · Tapak Konvo UMT"]].map(([Icon,title,text])=><div key={String(title)} className="flex gap-4 rounded-2xl bg-slate-100 p-5"><Icon className="mt-1 text-cyan-600"/><div><h3 className="font-black">{String(title)}</h3><p className="mt-1 text-slate-600">{String(text)}</p></div></div>)}</div><div className="overflow-hidden rounded-3xl border border-slate-200"><div className="grid grid-cols-[110px_1fr] bg-slate-950 p-4 font-black text-white"><span>Time</span><span>Activity</span></div>{schedule.map(([time,item])=><div key={time} className="grid grid-cols-[110px_1fr] border-t border-slate-200 p-4"><span className="font-bold text-cyan-700">{time}</span><span>{item}</span></div>)}</div></div></div></section>}
