"use client";

import Link from "next/link";
import { useState } from "react";

const DEMO_NR = "U080787023";

const DEMO_RESULT = {
  status: "Uw zending is aangemeld",
  detail: "De afzender heeft het pakket aangemeld, maar nog niet bij ons aangeboden.",
  afzender: "De Gier Bloemen",
  bestemming: "Patrick Stok, Klipperstraat 19, 3317ZE Dordrecht",
  datum: "17-02-2026 12:19",
};

export default function SnelleTracePage() {
  const [zendingnummer, setZendingnummer] = useState(DEMO_NR);
  const [status, setStatus] = useState<"idle" | "loading" | "found" | "notfound">("idle");
  const [result, setResult] = useState<typeof DEMO_RESULT | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null);
    setStatus("loading");
    setTimeout(() => {
      if (zendingnummer.trim() === DEMO_NR) {
        setResult(DEMO_RESULT);
        setStatus("found");
      } else {
        setStatus("notfound");
      }
    }, 800);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-packs-gray mb-2">Snelle trace</h1>
      <p className="text-packs-gray-light mb-6">Snel een zending opzoeken op nummer. Demo: gebruik zendingnummer {DEMO_NR} voor een resultaat.</p>

      <div className="max-w-md space-y-6">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-packs-gray mb-1">Zendingnummer</label>
              <input
                type="text"
                value={zendingnummer}
                onChange={(e) => setZendingnummer(e.target.value)}
                placeholder="Bijv. U080787023"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-packs-red text-white text-sm font-medium rounded-lg hover:bg-packs-red-dark"
            >
              Tracen
            </button>
          </form>
          {status === "loading" && <p className="text-sm text-packs-gray-light mt-4">Zending wordt opgehaald...</p>}
          {status === "notfound" && <p className="text-sm text-amber-600 mt-4">Geen zending gevonden met dit nummer. Probeer {DEMO_NR} voor demo.</p>}
        </div>

        {result && status === "found" && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-packs-red text-white px-6 py-3">
              <p className="font-semibold">{result.status}</p>
            </div>
            <div className="p-6 space-y-3 text-sm">
              <p className="text-packs-gray-light">{result.detail}</p>
              <p><strong className="text-packs-gray">Afzender:</strong> {result.afzender}</p>
              <p><strong className="text-packs-gray">Bestemming:</strong> {result.bestemming}</p>
              <p><strong className="text-packs-gray">Laatste update:</strong> {result.datum}</p>
              <Link href={`/track-trace?zendingnr=${zendingnummer}`} className="inline-block mt-2 text-packs-red hover:underline font-medium">
                Volledige Track & trace openen →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
