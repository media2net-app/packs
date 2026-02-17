"use client";

import Link from "next/link";
import { useState } from "react";

const STATS = [
  { label: "Zendingen vandaag", value: "12", sub: "3 nog te verwerken", icon: "truck", trend: "+2" },
  { label: "Onderweg", value: "28", sub: "Verwacht deze week", icon: "route", trend: null },
  { label: "Afgeleverd deze week", value: "94", sub: "98% op tijd", icon: "check", trend: "+12%" },
  { label: "Labels gedrukt", value: "156", sub: "Deze maand", icon: "label", trend: null },
];

const RECENTE_ZENDINGEN = [
  { nr: "U080787023", status: "Afgeleverd", datum: "17-02-2026", bestemming: "Dordrecht" },
  { nr: "U080787018", status: "Onderweg", datum: "17-02-2026", bestemming: "Amsterdam" },
  { nr: "U080787012", status: "Sortering", datum: "17-02-2026", bestemming: "Rotterdam" },
  { nr: "U080787005", status: "Aangemeld", datum: "16-02-2026", bestemming: "Utrecht" },
  { nr: "U080786998", status: "Afgeleverd", datum: "16-02-2026", bestemming: "Eindhoven" },
];

const MEDEDELINGEN = [
  { title: "Dieselprijs week 7", summary: "Gemiddeld €1,6810. Dieseltoeslag van toepassing.", date: "14-02-2026" },
  { title: "België en Luxemburg", summary: "Alleen standaard dienstverlening tot nader order.", date: "10-02-2026" },
  { title: "UK / EVA-landen", summary: "Geen zendingen i.v.m. douaneformaliteiten.", date: "01-02-2026" },
];

const NIEUWS = [
  { title: "Voorkom schade of vermissing bij het verzenden", link: "https://www.packs.nl/voorkom-schade-of-vermissing-bij-het-verzenden/", date: "15-02-2026" },
  { title: "Drukke periodes: tips voor Sinterklaas en Kerst", link: "#", date: "01-12-2025" },
];

function IconTruck({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
    </svg>
  );
}

function IconRoute({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  );
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function IconLabel({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>
  );
}

const statusColors: Record<string, string> = {
  Afgeleverd: "bg-emerald-100 text-emerald-800",
  Onderweg: "bg-amber-100 text-amber-800",
  Sortering: "bg-blue-100 text-blue-800",
  Aangemeld: "bg-gray-100 text-gray-800",
};

export default function StartPage() {
  const [zendingnummer, setZendingnummer] = useState("");
  const [pallet, setPallet] = useState(false);
  const [mixedPallet, setMixedPallet] = useState(false);

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    truck: IconTruck,
    route: IconRoute,
    check: IconCheck,
    label: IconLabel,
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Welcome + breadcrumb */}
      <div className="mb-8">
        <nav className="text-sm text-packs-gray-light mb-2">
          <Link href="/dashboard" className="hover:text-packs-red">Home</Link>
          <span className="mx-1">/</span>
          <span className="text-packs-gray">Start</span>
        </nav>
        <h1 className="text-2xl lg:text-3xl font-bold text-packs-gray">Welkom terug</h1>
        <p className="text-packs-gray-light mt-1">Overzicht van uw zendingen en snelle acties.</p>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {STATS.map((stat) => {
          const Icon = iconMap[stat.icon];
          return (
            <div
              key={stat.label}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-packs-gray-light">{stat.label}</p>
                  <p className="text-2xl font-bold text-packs-gray mt-1">{stat.value}</p>
                  <p className="text-xs text-packs-gray-light mt-0.5">{stat.sub}</p>
                </div>
                <div className="p-2 rounded-lg bg-packs-red/10">
                  {Icon && <Icon className="w-5 h-5 text-packs-red" />}
                </div>
              </div>
              {stat.trend && (
                <span className="inline-block mt-2 text-xs font-medium text-emerald-600">{stat.trend}</span>
              )}
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left: Quick actions + Label/Trace + Recente zendingen */}
        <div className="xl:col-span-2 space-y-6">
          {/* Quick actions */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <h2 className="text-base font-semibold text-packs-gray px-6 py-4 border-b border-gray-100">
              Snelle acties
            </h2>
            <div className="p-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Link
                href="/track-trace"
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 hover:bg-packs-red/5 border border-gray-100 hover:border-packs-red/20 transition-colors group"
              >
                <span className="p-2 rounded-lg bg-packs-red/10 text-packs-red group-hover:bg-packs-red group-hover:text-white transition-colors mb-2">
                  <IconRoute className="w-5 h-5" />
                </span>
                <span className="text-sm font-medium text-packs-gray group-hover:text-packs-red">Track & trace</span>
              </Link>
              <Link
                href="/dashboard/zendingen/boeken"
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 hover:bg-packs-red/5 border border-gray-100 hover:border-packs-red/20 transition-colors group"
              >
                <span className="p-2 rounded-lg bg-packs-red/10 text-packs-red group-hover:bg-packs-red group-hover:text-white transition-colors mb-2">
                  <IconTruck className="w-5 h-5" />
                </span>
                <span className="text-sm font-medium text-packs-gray group-hover:text-packs-red">Zending boeken</span>
              </Link>
              <Link
                href="/dashboard/zendingen/afgedrukte-zegels"
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 hover:bg-packs-red/5 border border-gray-100 hover:border-packs-red/20 transition-colors group"
              >
                <span className="p-2 rounded-lg bg-packs-red/10 text-packs-red group-hover:bg-packs-red group-hover:text-white transition-colors mb-2">
                  <IconLabel className="w-5 h-5" />
                </span>
                <span className="text-sm font-medium text-packs-gray group-hover:text-packs-red">Label afdrukken</span>
              </Link>
              <Link
                href="/dashboard/zendingen/snelle-trace"
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 hover:bg-packs-red/5 border border-gray-100 hover:border-packs-red/20 transition-colors group"
              >
                <span className="p-2 rounded-lg bg-packs-red/10 text-packs-red group-hover:bg-packs-red group-hover:text-white transition-colors mb-2">
                  <IconCheck className="w-5 h-5" />
                </span>
                <span className="text-sm font-medium text-packs-gray group-hover:text-packs-red">Retour aanmaken</span>
              </Link>
            </div>
          </div>

          {/* Label + Trace compact */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <h2 className="text-base font-semibold text-packs-gray px-6 py-4 border-b border-gray-100">
              Label afdrukken of zending traceren
            </h2>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-packs-gray mb-1">Zendingnummer / aantal</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={zendingnummer}
                    onChange={(e) => setZendingnummer(e.target.value)}
                    placeholder="Bijv. U080787023"
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-packs-gray placeholder-gray-400 focus:ring-2 focus:ring-packs-red focus:border-packs-red"
                  />
                  <div className="flex gap-2 flex-shrink-0">
                    <Link
                      href={`/track-trace${zendingnummer ? `?zendingnr=${encodeURIComponent(zendingnummer)}` : ""}`}
                      className="px-4 py-2.5 bg-packs-red text-white text-sm font-medium rounded-lg hover:bg-packs-red-dark"
                    >
                      Tracen
                    </Link>
                    <button
                      type="button"
                      className="px-4 py-2.5 border border-gray-300 text-packs-gray text-sm font-medium rounded-lg hover:bg-gray-50"
                    >
                      Label afdrukken
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 text-sm text-packs-gray cursor-pointer">
                  <input type="checkbox" checked={pallet} onChange={(e) => setPallet(e.target.checked)} className="rounded border-gray-300 text-packs-red focus:ring-packs-red" />
                  Pallet zending
                </label>
                <label className="flex items-center gap-2 text-sm text-packs-gray cursor-pointer">
                  <input type="checkbox" checked={mixedPallet} onChange={(e) => setMixedPallet(e.target.checked)} className="rounded border-gray-300 text-packs-red focus:ring-packs-red" />
                  Mixed pallet zending
                </label>
              </div>
            </div>
          </div>

          {/* Recente zendingen */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-base font-semibold text-packs-gray">Recente zendingen</h2>
              <Link href="/dashboard/zendingen/overzicht" className="text-sm font-medium text-packs-red hover:underline">
                Alles bekijken
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <th className="text-left font-medium text-packs-gray-light py-3 px-6">Zendingnr.</th>
                    <th className="text-left font-medium text-packs-gray-light py-3 px-6">Status</th>
                    <th className="text-left font-medium text-packs-gray-light py-3 px-6">Datum</th>
                    <th className="text-left font-medium text-packs-gray-light py-3 px-6">Bestemming</th>
                    <th className="w-10" />
                  </tr>
                </thead>
                <tbody>
                  {RECENTE_ZENDINGEN.map((z) => (
                    <tr key={z.nr} className="border-b border-gray-50 hover:bg-gray-50/50">
                      <td className="py-3 px-6 font-mono text-packs-gray">{z.nr}</td>
                      <td className="py-3 px-6">
                        <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[z.status] ?? "bg-gray-100 text-gray-800"}`}>
                          {z.status}
                        </span>
                      </td>
                      <td className="py-3 px-6 text-packs-gray-light">{z.datum}</td>
                      <td className="py-3 px-6 text-packs-gray">{z.bestemming}</td>
                      <td className="py-3 px-6">
                        <Link href={`/track-trace?zendingnr=${z.nr}`} className="text-packs-red hover:underline text-xs font-medium">
                          Trace
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right: Mededelingen + Nieuws + Contact */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-amber-100">
                <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </span>
              <h2 className="text-base font-semibold text-packs-gray">Mededelingen</h2>
            </div>
            <div className="p-6">
              <Link href="#" className="text-sm font-medium text-packs-red hover:underline mb-4 inline-block">
                Alle mededelingen
              </Link>
              <ul className="space-y-4">
                {MEDEDELINGEN.map((m) => (
                  <li key={m.title} className="pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                    <p className="font-medium text-packs-gray text-sm">{m.title}</p>
                    <p className="text-sm text-packs-gray-light mt-0.5">{m.summary}</p>
                    <p className="text-xs text-packs-gray-light mt-1">{m.date}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-packs-red/10">
                <svg className="w-4 h-4 text-packs-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2h4a2 2 0 002-2V4a2 2 0 00-2-2h-2a2 2 0 00-2 2v12a2 2 0 01-2 2h-4a2 2 0 01-2-2V5z" clipRule="evenodd" />
                </svg>
              </span>
              <h2 className="text-base font-semibold text-packs-gray">Nieuws</h2>
            </div>
            <div className="p-6 space-y-4">
              {NIEUWS.map((n) => (
                <a
                  key={n.title}
                  href={n.link}
                  target={n.link.startsWith("http") ? "_blank" : undefined}
                  rel={n.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block group"
                >
                  <p className="text-sm font-medium text-packs-gray group-hover:text-packs-red">{n.title}</p>
                  <p className="text-xs text-packs-gray-light mt-0.5">{n.date}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-packs-red/5 to-packs-red/10 rounded-xl border border-packs-red/20 p-6">
            <h3 className="text-sm font-semibold text-packs-gray mb-1">Heeft u vragen?</h3>
            <p className="text-sm text-packs-gray-light mb-3">Neem contact op met uw regio.</p>
            <p className="text-packs-gray font-medium">Regio Express</p>
            <a href="tel:0888040800" className="text-packs-red font-medium hover:underline">088 80 40 800</a>
          </div>
        </div>
      </div>
    </div>
  );
}
