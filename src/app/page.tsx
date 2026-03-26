"use client";

import { ArrowUpRight, Search, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";

const properties = [
  {
    name: "Santal Crest Villa",
    location: "Cap Ferrat, France",
    price: "$18.9M",
    accent: "from-[#f7e7ce]/40 via-[#121212] to-[#1f1f1f]",
  },
  {
    name: "Maison Verre",
    location: "Beverly Hills, USA",
    price: "$24.3M",
    accent: "from-[#f7e7ce]/35 via-[#141414] to-[#222222]",
  },
  {
    name: "Azure Chambers",
    location: "Dubai, UAE",
    price: "$31.4M",
    accent: "from-[#f7e7ce]/32 via-[#151515] to-[#202020]",
  },
];

export default function Home() {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [planView, setPlanView] = useState<"exterior" | "plan">("exterior");

  const planContent = useMemo(
    () =>
      planView === "exterior"
        ? {
            label: "Exterior",
            title: "Sunlit facade framed by limestone, champagne stone, and private gardens.",
          }
        : {
            label: "Plan View",
            title: "A layered plan with gallery corridors, indoor spa, and panoramic terrace alignment.",
          },
    [planView],
  );

  return (
    <main className="min-h-screen bg-[#121212] text-[#f7e7ce]">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(247,231,206,0.08),transparent_22%),linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.68)),linear-gradient(135deg,#1a1a1a_0%,#121212_40%,#2c2116_100%)]" />
        <div className="absolute inset-0 scale-105 bg-[radial-gradient(circle_at_20%_20%,rgba(247,231,206,0.18),transparent_18%),radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.08),transparent_16%),linear-gradient(120deg,rgba(255,255,255,0.05),transparent_50%)]" />

        <header className="relative z-20 px-6 py-6 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <a href="#top" className="text-lg font-semibold tracking-[0.16em] text-[#f7e7ce]">
              Aura Global Estates
            </a>
            <div className="hidden items-center gap-6 text-sm text-[#f7e7ce]/70 md:flex">
              <a href="#collection" className="transition hover:text-[#f7e7ce]">
                Collection
              </a>
              <a href="#plans" className="transition hover:text-[#f7e7ce]">
                Floor Plan
              </a>
              <a href="#contact" className="transition hover:text-[#f7e7ce]">
                Contact
              </a>
            </div>
          </div>
        </header>

        <div
          id="top"
          className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl flex-col items-center justify-center px-6 pb-16 pt-14 text-center sm:px-8 lg:px-10"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-[#f7e7ce]/60">
            Quiet Luxury. Global Access. Cinematic Living.
          </p>
          <h1 className="mt-8 max-w-5xl text-[clamp(3.2rem,8vw,6.8rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-[#f7e7ce]">
            Exceptional estates curated for people who already know what rare feels like.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f7e7ce]/72">
            Discover signature properties across the world’s most sought-after coastlines,
            capitals, and private enclaves.
          </p>

          <div className="mt-12 w-full max-w-4xl">
            <button
              type="button"
              onClick={() => setSearchExpanded((current) => !current)}
              className={`group mx-auto flex w-full items-center justify-between rounded-full border border-white/12 bg-black/30 px-6 py-5 text-left shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 ${
                searchExpanded ? "max-w-4xl" : "max-w-2xl"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7e7ce] text-[#121212]">
                  <Search className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f7e7ce]/50">
                    Search Collection
                  </p>
                  <p className="mt-2 text-base text-[#f7e7ce]">
                    Monaco penthouse, Los Angeles hillside, Dubai waterfront...
                  </p>
                </div>
              </div>
              <span className="text-sm text-[#f7e7ce]/72">
                {searchExpanded ? "Tap to close" : "Tap to expand"}
              </span>
            </button>

            <div
              className={`mx-auto mt-4 grid overflow-hidden rounded-[2rem] border border-white/10 bg-black/28 backdrop-blur-xl transition-all duration-500 ${
                searchExpanded
                  ? "max-h-64 grid-rows-[1fr] p-6 opacity-100"
                  : "max-h-0 grid-rows-[0fr] p-0 opacity-0"
              }`}
            >
              <div className="min-h-0">
                <div className="grid gap-4 md:grid-cols-3">
                  {["City or region", "Property type", "Budget"].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.5rem] border border-white/10 bg-white/4 px-5 py-4 text-left"
                    >
                      <p className="text-xs uppercase tracking-[0.18em] text-[#f7e7ce]/50">
                        {item}
                      </p>
                      <p className="mt-3 text-sm text-[#f7e7ce]/78">
                        Select your preference
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="collection" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.24em] text-[#f7e7ce]/55">
            Signature Collection
          </p>
          <h2 className="mt-4 text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#f7e7ce]">
            Properties presented like an experience, not a listing grid.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {properties.map((property) => (
            <article
              key={property.name}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-black/28 shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
            >
              <div className="overflow-hidden">
                <div
                  className={`property-zoom aspect-[4/5] bg-gradient-to-br ${property.accent} transition-transform duration-700 group-hover:scale-110`}
                  style={{ transformOrigin: "center center" }}
                />
              </div>

              <div className="relative px-6 pb-6 pt-5">
                <div className="absolute inset-x-4 top-4 rounded-[1.5rem] border border-white/14 bg-black/42 p-5 opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#f7e7ce]/55">
                    Quick View
                  </p>
                  <p className="mt-3 text-lg font-medium text-[#f7e7ce]">
                    A cinematic residence with gallery-scale interiors and private amenity flow.
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#f7e7ce]/50">
                    {property.location}
                  </p>
                  <h3 className="text-3xl font-semibold tracking-[-0.04em] text-[#f7e7ce]">
                    {property.name}
                  </h3>
                  <p className="text-lg text-[#f7e7ce]/72">{property.price}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="plans" className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-10">
        <div className="rounded-[2.5rem] border border-white/10 bg-black/28 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#f7e7ce]/55">
                Floor Plan Transition
              </p>
              <h2 className="mt-4 text-[clamp(2.4rem,4vw,4rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#f7e7ce]">
                Move between exterior atmosphere and spatial logic.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#f7e7ce]/72">
                A clean property experience should show beauty and structure with equal confidence.
              </p>

              <button
                type="button"
                onClick={() =>
                  setPlanView((current) => (current === "exterior" ? "plan" : "exterior"))
                }
                className="mt-8 inline-flex items-center gap-4 rounded-full border border-white/12 bg-white/4 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#f7e7ce]"
              >
                <span
                  className={`flex h-8 w-14 items-center rounded-full p-1 transition ${
                    planView === "plan" ? "bg-[#f7e7ce]" : "bg-white/14"
                  }`}
                >
                  <span
                    className={`h-6 w-6 rounded-full bg-[#121212] transition-transform ${
                      planView === "plan" ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </span>
                {planView === "exterior" ? "Show Plan View" : "Show Exterior"}
              </button>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#121212] p-4">
              <div
                key={planView}
                className={`aspect-[16/10] rounded-[1.5rem] border border-white/8 transition-opacity duration-500 ${
                  planView === "exterior"
                    ? "bg-[linear-gradient(135deg,#2a211a_0%,#121212_46%,#3d2d20_100%)]"
                    : "bg-[linear-gradient(135deg,#f6efe4_0%,#d9ccb7_42%,#c8b299_100%)]"
                }`}
              >
                <div className="flex h-full flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.18em] ${
                        planView === "exterior"
                          ? "bg-white/10 text-[#f7e7ce]"
                          : "bg-[#121212]/10 text-[#121212]"
                      }`}
                    >
                      {planContent.label}
                    </span>
                    <span
                      className={`text-xs uppercase tracking-[0.18em] ${
                        planView === "exterior" ? "text-[#f7e7ce]/60" : "text-[#121212]/55"
                      }`}
                    >
                      Aura Edition
                    </span>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
                    <p
                      className={`max-w-lg text-2xl font-medium leading-9 ${
                        planView === "exterior" ? "text-[#f7e7ce]" : "text-[#121212]"
                      }`}
                    >
                      {planContent.title}
                    </p>
                    <div
                      className={`rounded-[1.25rem] border p-4 ${
                        planView === "exterior"
                          ? "border-white/10 bg-white/6"
                          : "border-[#121212]/10 bg-white/40"
                      }`}
                    >
                      <div className="grid h-full grid-cols-3 gap-3">
                        {Array.from({ length: 6 }).map((_, index) => (
                          <div
                            key={index}
                            className={`rounded-xl ${
                              planView === "exterior"
                                ? "bg-white/8"
                                : "bg-[#121212]/12"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24 sm:px-8 lg:px-10">
        <div className="rounded-[2.5rem] bg-[#f7e7ce] px-8 py-12 text-[#121212] shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#121212]/55">
                Private Appointments
              </p>
              <h2 className="mt-4 max-w-3xl text-[clamp(2.5rem,5vw,4.6rem)] font-semibold leading-[0.96] tracking-[-0.05em]">
                Enquire about residences that never need to shout.
              </h2>
            </div>
            <a
              href="mailto:concierge@auraglobalestates.com"
              style={{ color: "#f7e7ce" }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#121212] px-7 py-4 text-base font-semibold text-[#f7e7ce] transition hover:opacity-90 hover:text-[#f7e7ce]"
            >
              concierge@auraglobalestates.com
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Monaco", "London", "Dubai", "New York"].map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-2 rounded-full border border-[#121212]/12 bg-white/40 px-4 py-3 text-sm"
              >
                <ShieldCheck className="h-4 w-4" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
