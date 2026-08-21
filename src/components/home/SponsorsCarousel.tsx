import type { CSSProperties } from "react";

// Add a logo to public/sponsors, then add its name and path to this list.
const sponsors = [
  { name: "Decathlon", logo: "/sponsors/Decathlon-Logo-scaled.jpg" },
  { name: "WeDrink", logo: "/sponsors/qnwa-logo.jpg" },
];

export default function SponsorsCarousel() {
  // Repeat short lists enough times to fill the screen and loop seamlessly.
  const repeatCount = Math.max(2, Math.ceil(10 / sponsors.length));
  const loopingSponsors = Array.from(
    { length: repeatCount },
    () => sponsors,
  ).flat();
  const trackStyle = {
    "--sponsor-shift": `${100 / repeatCount}%`,
    "--sponsor-duration": `${Math.max(14, sponsors.length * 4)}s`,
  } as CSSProperties;

  return (
    <div className="mx-auto mt-8 max-w-7xl overflow-hidden py-8">
      <div className="px-6 text-center">
        <p className="font-bold uppercase tracking-widest text-cyan-700">
          Sponsors &amp; Partners
        </p>
        <h2 className="mt-2 text-2xl font-black text-slate-950">
          Proudly Supported By
        </h2>
      </div>

      <div className="sponsor-marquee mt-7" aria-label="Sponsors and partners">
        <div className="sponsor-track" style={trackStyle}>
          {loopingSponsors.map((sponsor, index) => (
            <div
              className="sponsor-logo"
              key={`${sponsor.name}-${index}`}
              aria-hidden={index >= sponsors.length}
            >
              <img
                src={sponsor.logo}
                alt={index < sponsors.length ? `${sponsor.name} logo` : ""}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
