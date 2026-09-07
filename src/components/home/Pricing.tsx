const prices = [
  {category:"3KM", super:"RM28.90", early:"RM38.90", standard:"RM58.90"},
  {category:"5KM", super:"RM38.90", early:"RM48.90", standard:"RM68.90"},
];

export default function Pricing(){
  return (
    <section id="pricing" className="bg-cyan-50 px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">

        <p className="font-bold uppercase tracking-[.3em] text-cyan-700">
          Registration Fees
        </p>

        <h2 className="mt-4 text-4xl font-black text-slate-950">
          Choose Your Registration Tier
        </h2>

        <div className="mt-12 overflow-x-auto rounded-3xl bg-white shadow-xl">
          <table className="w-full min-w-[680px] text-left">

            <thead className="bg-slate-950 text-white">
              <tr>
                <th className="p-5">Category</th>

                <th className="p-5">
                  Early Bird
                  <br />
                  <span className="text-sm font-normal text-cyan-300">
                    7/9/2026-12/9/2026
                  </span>
                </th>

                <th className="p-5">
                  Standard
                  <br />
                  <span className="text-sm font-normal text-cyan-300">
                    13/9/2026-16/9/2026
                  </span>
                </th>
              </tr>
            </thead>

            <tbody>
              {prices.map((p, i) => (
                <tr
                  key={p.category}
                  className={i % 2 ? "bg-slate-50" : "bg-white"}
                >
                  <td className="p-5 text-2xl font-black text-cyan-700">
                    {p.category}
                  </td>

                  
                      <span className="absolute whitespace-nowrap rounded-full bg-red-500 px-3 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md">
                        Sold Out
                      </span>
                    </div>
                  </td>

                  {/* EARLY BIRD */}
                  <td className="p-5 text-xl font-bold">
                    {p.early}
                  </td>

                  {/* STANDARD */}
                  <td className="p-5 text-xl font-bold">
                    {p.standard}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        <p className="mt-5 text-sm text-slate-600">
          Prices are subject to the applicable registration period and slot availability.
        </p>

      </div>
    </section>
  );
}
