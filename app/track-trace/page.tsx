"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";

const DEMO_ZENDINGNR = "U080787023";
const DEMO_PC6HNR = "3317ZE";

const STEPS = [
  { id: "aangemeld", label: "Aangemeld", done: true },
  { id: "sortering", label: "Sortering", done: false },
  { id: "onderweg", label: "Onderweg", done: false },
  { id: "afgeleverd", label: "Afgeleverd", done: false },
];

const STATUS_TIMELINE = [
  { date: "17-02-2026 12:19", status: "Uw zending is aangemeld" },
];

type TraceResult = {
  zendingnummer: string;
  status: string;
  statusDetail: string;
  afzender: string;
  naam: string;
  straat: string;
  postcode: string;
  plaats: string;
};

function getDemoResult(zendingnummer: string, postcode: string): TraceResult {
  return {
    zendingnummer,
    status: "Uw zending is aangemeld",
    statusDetail: "De afzender heeft het pakket aangemeld, maar nog niet bij ons aangeboden. De afzender heeft het pakket aangemeld, maar het is nog niet opgehaald, of het is nog niet verwerkt in het sorteersysteem. De leverdatum en -tijd verschijnen zodra het pakket in het sorteerproces zit en gescand wordt.",
    afzender: "De Gier Bloemen",
    naam: "Patrick Stok",
    straat: "Klipperstraat 19",
    postcode,
    plaats: "Dordrecht",
  };
}

function TrackTraceContent() {
  const searchParams = useSearchParams();
  const [zendingnr, setZendingnr] = useState(DEMO_ZENDINGNR);
  const [pc6hnr, setPc6hnr] = useState(DEMO_PC6HNR);
  const [result, setResult] = useState<TraceResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  // Sync from URL or use demo defaults; auto-load result so data/status is visible (zoals oude track & trace)
  useEffect(() => {
    const z = searchParams.get("zendingnr") ?? DEMO_ZENDINGNR;
    const p = (searchParams.get("pc6hnr") ?? DEMO_PC6HNR).toUpperCase();
    setZendingnr(z);
    setPc6hnr(p);
    setNotFound(false);
    setResult(null);
    setLoading(true);
    const t = setTimeout(() => {
      setLoading(false);
      setResult(getDemoResult(z, p));
    }, 600);
    return () => clearTimeout(t);
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNotFound(false);
    setResult(null);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (!zendingnr.trim() || !pc6hnr.trim()) {
        setNotFound(true);
        return;
      }
      setResult(getDemoResult(zendingnr.trim(), pc6hnr.trim()));
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Image
              src="/packs-logo-300x70.png"
              alt="Packs"
              width={180}
              height={42}
              className="h-10 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-packs-red hover:underline"
          >
            Inloggen
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8">
        <h1 className="text-2xl font-bold text-packs-gray mb-2">Track & Trace</h1>
        <p className="text-packs-gray-light mb-8">
          Vul uw Track en Trace code en postcode in en zie direct wat de verzendstatus van uw pakket is.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="zendingnr" className="block text-sm font-medium text-packs-gray mb-1">
                Zendingnummer
              </label>
              <input
                id="zendingnr"
                type="text"
                value={zendingnr}
                onChange={(e) => setZendingnr(e.target.value)}
                placeholder="Bijv. U080787023"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-packs-gray placeholder-gray-400 focus:ring-2 focus:ring-packs-red focus:border-packs-red"
              />
            </div>
            <div>
              <label htmlFor="pc6hnr" className="block text-sm font-medium text-packs-gray mb-1">
                Postcode (6 cijfers + 2 letters)
              </label>
              <input
                id="pc6hnr"
                type="text"
                value={pc6hnr}
                onChange={(e) => setPc6hnr(e.target.value.toUpperCase())}
                placeholder="Bijv. 3317ZE"
                maxLength={6}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-packs-gray placeholder-gray-400 focus:ring-2 focus:ring-packs-red focus:border-packs-red uppercase"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2.5 bg-packs-red text-white font-medium rounded-lg hover:bg-packs-red-dark disabled:opacity-70 transition-colors"
          >
            {loading ? "Zoeken..." : "Track & trace"}
          </button>
        </form>

        {loading && (
          <div className="bg-white rounded-xl border border-gray-200 p-8 text-center text-packs-gray-light">
            Zending wordt opgehaald...
          </div>
        )}

        {notFound && !result && !loading && (
          <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
            <p className="text-packs-gray font-medium">Geen zending gevonden</p>
            <p className="text-sm text-packs-gray-light mt-1">Controleer het zendingnummer en de postcode. Pakket vandaag verstuurd? Kijk dan na 22:00 uur.</p>
          </div>
        )}

        {/* Result */}
        {result && !loading && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-packs-red text-white px-6 py-4">
                <h2 className="text-lg font-semibold">Uw zending is aangemeld</h2>
              </div>
              <div className="p-6">
                <p className="text-packs-gray-light text-sm mb-6">
                  {result.statusDetail}
                </p>

                {/* Progress steps */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {STEPS.map((step) => (
                    <span
                      key={step.id}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        step.done ? "bg-packs-red/10 text-packs-red" : "bg-gray-100 text-packs-gray-light"
                      }`}
                    >
                      {step.label}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-packs-gray mb-2">Afzender</h3>
                    <p className="text-packs-gray">{result.afzender}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-packs-gray mb-2">Zendingnummer</h3>
                    <p className="text-packs-gray font-mono">{result.zendingnummer}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-semibold text-packs-gray mb-2">Afleveradres</h3>
                  <p className="text-packs-gray font-medium">{result.naam}</p>
                  <p className="text-packs-gray">{result.straat}</p>
                  <p className="text-packs-gray">{result.postcode} {result.plaats}</p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-semibold text-packs-gray mb-2">Afleveropties</h3>
                  <p className="text-sm text-packs-gray-light mb-3">Kies een ander aflevermoment of afleveroptie:</p>
                  <button type="button" className="text-sm font-medium text-packs-red hover:underline">
                    Afleveropties bekijken
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-semibold text-packs-gray mb-3">Statusdetails</h3>
                  <ul className="space-y-2">
                    {STATUS_TIMELINE.map((item, i) => (
                      <li key={i} className="flex justify-between text-sm">
                        <span className="text-packs-gray-light">{item.date}</span>
                        <span className="text-packs-gray font-medium">{item.status}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Info blokken */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h4 className="font-semibold text-packs-gray mb-2">Niet thuis – bij buren</h4>
                <p className="text-sm text-packs-gray-light">
                  Indien de geadresseerde niet thuis is dan probeert Packs bij de buren af te leveren. Onze chauffeur doet een kaartje in de bus om aan te geven waar de zending is afgeleverd.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h4 className="font-semibold text-packs-gray mb-2">Afspraak voor 2e levering</h4>
                <p className="text-sm text-packs-gray-light">
                  Als afleveren bij buren niet mogelijk is, ontvangt de geadresseerde een kaartje met het telefoonnummer van het PacksCenter om een afleverafspraak te maken.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h4 className="font-semibold text-packs-gray mb-2">MailPacks / kaarten</h4>
                <p className="text-sm text-packs-gray-light">
                  MailPacks en kaarten worden direct in de brievenbus afgeleverd met GPS-registratie. De chauffeur belt niet aan bij deze zendingen.
                </p>
              </div>
            </div>
          </div>
        )}

        {!result && !loading && !notFound && (
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-sm text-packs-gray-light">
            <p className="font-medium text-packs-gray mb-1">Pakket vandaag verstuurd?</p>
            <p>Kijk dan na 22:00 uur voor de meest actuele status.</p>
          </div>
        )}
      </main>

      <footer className="bg-gray-100 border-t border-gray-200 py-4 mt-auto">
        <p className="text-center text-sm text-packs-red">© 2026 - packs.nl</p>
      </footer>
    </div>
  );
}

export default function TrackTracePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-packs-gray-light">Laden...</p>
      </div>
    }>
      <TrackTraceContent />
    </Suspense>
  );
}
