
/// <reference types="vite/client" />

import { useState } from "react";

// SHIRT IMAGES
import shirt3 from "../../assets/shirt-3km.png";
import shirt5 from "../../assets/shirt-5km.png";

// MEDAL IMAGES
import medal3 from "../../assets/3medal.jpeg";
import medal5 from "../../assets/5medal.jpeg";

// ROUTE MAP IMAGES
import route3 from "../../assets/route-3km.jpeg";
import route5 from "../../assets/route-5km.jpeg";

// RACE KIT POSTERS
import racekit3 from "../../assets/racekit3.jpeg";
import racekit5 from "../../assets/racekit5.jpeg";

type Category = "3KM" | "5KM";

export default function RacePack() {
  const [category, setCategory] = useState<Category>("3KM");

  const data =
    category === "3KM"
      ? [
          {
            title: "Official Shirt",
            image: shirt3,
          },
          {
            title: "Finisher Medal",
            image: medal3,
          },
          {
            title: "Route Map",
            image: route3,
          },
        ]
      : [
          {
            title: "Official Shirt",
            image: shirt5,
          },
          {
            title: "Finisher Medal",
            image: medal5,
          },
          {
            title: "Route Map",
            image: route5,
          },
        ];

  return (
    <section
      id="race-pack"
      className="bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            OFFICIAL RACE PACK
        ========================== */}

        <div className="text-center">

          <p className="font-bold uppercase tracking-[.3em] text-cyan-300">
            Official Race Pack
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Choose Your Category
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Select a category to view the current shirt, medal and route.
            Images can be updated when the final designs are ready.
          </p>

          {/* CATEGORY BUTTONS */}

          <div className="mt-8 flex justify-center gap-4">

            {(["3KM", "5KM"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setCategory(v)}
                className={`rounded-full px-7 py-3 font-bold transition ${
                  category === v
                    ? "bg-cyan-300 text-slate-950"
                    : "bg-slate-800 text-white hover:bg-slate-700"
                }`}
              >
                {v}
              </button>
            ))}

          </div>

        </div>

        {/* =========================
            SHIRT / MEDAL / ROUTE
        ========================== */}

        <div className="mt-12 grid gap-8 lg:grid-cols-3">

          {data.map((item) => (

            <article
              key={item.title}
              className="overflow-hidden rounded-3xl bg-slate-900"
            >

              {/* IMAGE */}

              <a
                href={item.image}
                target="_blank"
                rel="noreferrer"
                className="block bg-white p-4"
                aria-label={`View ${category} ${item.title} full size`}
              >

                <img
                  src={item.image}
                  alt={`${category} ${item.title}`}
                  loading="lazy"
                  className="h-80 w-full object-contain transition duration-300 hover:scale-[1.02]"
                />

              </a>

              {/* CARD CONTENT */}

              <div className="p-6">

                <h3 className="text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Click image to view full size
                </p>

              </div>

            </article>

          ))}

        </div>


        {/* =========================
            OFFICIAL RACE KIT POSTERS
        ========================== */}

        <div className="mt-24 border-t border-slate-800 pt-20">

          <div className="text-center">

            <p className="font-bold uppercase tracking-[.3em] text-cyan-300">
              Race Kit Poster
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Official Race Kit
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Check out the full race kit for both categories!
            </p>

          </div>


          {/* TWO RACE KIT POSTERS */}

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {/* 3KM RACE KIT */}

            <article className="overflow-hidden rounded-3xl bg-slate-900 p-4 shadow-xl">

              <a
                href={racekit3}
                target="_blank"
                rel="noreferrer"
                aria-label="View 3KM Race Kit Poster full size"
                className="block overflow-hidden rounded-2xl bg-white"
              >

                <img
                  src={racekit3}
                  alt="Blue Economy Fun Run 3KM Official Race Kit"
                  loading="lazy"
                  className="h-auto w-full object-contain transition duration-300 hover:scale-[1.02]"
                />

              </a>

              <div className="p-4 text-center">

                <h3 className="text-2xl font-black">
                  3KM Race Kit
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Official 3KM race kit poster
                </p>

              </div>

            </article>


            {/* 5KM RACE KIT */}

            <article className="overflow-hidden rounded-3xl bg-slate-900 p-4 shadow-xl">

              <a
                href={racekit5}
                target="_blank"
                rel="noreferrer"
                aria-label="View 5KM Race Kit Poster full size"
                className="block overflow-hidden rounded-2xl bg-white"
              >

                <img
                  src={racekit5}
                  alt="Blue Economy Fun Run 5KM Official Race Kit"
                  loading="lazy"
                  className="h-auto w-full object-contain transition duration-300 hover:scale-[1.02]"
                />

              </a>

              <div className="p-4 text-center">

                <h3 className="text-2xl font-black">
                  5KM Race Kit
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Official 5KM race kit poster
                </p>

              </div>

            </article>

          </div>

        </div>

      </div>
    </section>
  );
}
