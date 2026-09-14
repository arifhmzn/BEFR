
import earlybird from "../../assets/early bird.jpeg";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-cyan-50 px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">

        {/* SECTION TITLE */}
        <p className="font-bold uppercase tracking-[.3em] text-cyan-700">
          Registration Fees
        </p>

        <h2 className="mt-4 text-4xl font-black text-slate-950">
          Choose Your Registration Tier
        </h2>

        {/* SINGLE PRICING POSTER */}
        <a
          href="https://forms.gle/YvHj9yBKhsg2uUqk6"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-12 block max-w-4xl overflow-hidden rounded-3xl shadow-xl transition duration-300 hover:scale-[1.02] hover:shadow-2xl"
        >
          <img
            src={earlybird}
            alt="Blue Economy Fun Run Early Bird Registration Promo"
            className="h-auto w-full object-cover"
          />
        </a>

        {/* REGISTER BUTTON */}
        <a
          href="https://forms.gle/YvHj9yBKhsg2uUqk6"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-8 inline-block rounded-full bg-cyan-600 px-8 py-4 text-lg font-black text-white shadow-lg transition hover:bg-cyan-700"
        >
          REGISTER NOW →
        </a>

        <p className="mt-5 text-sm text-slate-600">
          Prices are subject to slot availability.
        </p>

      </div>
    </section>
  );
}
