"use client";

import { useState } from "react";

export default function BoekenPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-packs-gray mb-2">Zendingen boeken</h1>
      <p className="text-packs-gray-light mb-6">Boek een nieuwe zending. Vul gegevens in en kies type zending.</p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 max-w-2xl space-y-6">
          <div>
            <h2 className="text-sm font-semibold text-packs-gray mb-3">Afzender</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-packs-gray mb-1">Bedrijf / Naam *</label>
                <input type="text" defaultValue="De Gier Bloemen" className="w-full border border-gray-300 rounded-lg px-3 py-2" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-packs-gray mb-1">Straat + huisnummer *</label>
                <input type="text" defaultValue="Bloemenweg 12" className="w-full border border-gray-300 rounded-lg px-3 py-2" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-packs-gray mb-1">Postcode + Plaats *</label>
                <input type="text" defaultValue="2671 AB Naaldwijk" className="w-full border border-gray-300 rounded-lg px-3 py-2" required />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-packs-gray mb-3">Ontvanger</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-packs-gray mb-1">Naam *</label>
                <input type="text" placeholder="Patrick Stok" className="w-full border border-gray-300 rounded-lg px-3 py-2" required />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-packs-gray mb-1">Straat + huisnummer *</label>
                <input type="text" placeholder="Klipperstraat 19" className="w-full border border-gray-300 rounded-lg px-3 py-2" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-packs-gray mb-1">Postcode *</label>
                <input type="text" placeholder="3317ZE" className="w-full border border-gray-300 rounded-lg px-3 py-2" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-packs-gray mb-1">Plaats *</label>
                <input type="text" placeholder="Dordrecht" className="w-full border border-gray-300 rounded-lg px-3 py-2" required />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-packs-gray mb-3">Zending</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-packs-gray mb-1">Gewicht (kg) *</label>
                <input type="number" step="0.1" min="0" placeholder="2.5" className="w-full border border-gray-300 rounded-lg px-3 py-2" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-packs-gray mb-1">Type zending *</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2" required>
                  <option value="">Kies...</option>
                  <option>Pakket</option>
                  <option>Pallet</option>
                  <option>Mixed pallet</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="flex items-center gap-2 text-sm text-packs-gray cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-packs-red" />
                  Retourzending
                </label>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button type="submit" className="px-5 py-2.5 bg-packs-red text-white font-medium rounded-lg hover:bg-packs-red-dark">
              Zending boeken
            </button>
            <button type="button" className="px-5 py-2.5 border border-gray-300 text-packs-gray font-medium rounded-lg hover:bg-gray-50">
              Annuleren
            </button>
          </div>
        </form>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-2xl">
          <p className="font-semibold text-packs-gray">Zending geboekt (demo)</p>
          <p className="text-sm text-packs-gray-light mt-1">U ontvangt een bevestiging per e-mail. Zendingnummer: <span className="font-mono text-packs-gray">U080787024</span></p>
        </div>
      )}
    </div>
  );
}
