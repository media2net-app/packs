"use client";

import { useState } from "react";

export default function SchadeformulierPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-8 max-w-2xl">
      <h1 className="text-2xl font-semibold text-packs-gray mb-2">Schadeformulier</h1>
      <p className="text-packs-gray-light mb-6">Meld schade of vermissing bij een zending.</p>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-packs-gray mb-1">Zendingnummer *</label>
            <input type="text" required className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Zendingnummer" />
          </div>
          <div>
            <label className="block text-sm font-medium text-packs-gray mb-1">Type melding *</label>
            <select required className="w-full border border-gray-300 rounded-md px-3 py-2">
              <option value="">Kies...</option>
              <option>Schade</option>
              <option>Vermissing</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-packs-gray mb-1">Omschrijving *</label>
            <textarea required rows={4} className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Beschrijf de schade of vermissing" />
          </div>
          <button type="submit" className="px-4 py-2 bg-packs-red text-white text-sm font-medium rounded-md hover:bg-packs-red-dark">
            Versturen
          </button>
        </form>
      ) : (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-packs-gray font-medium">Formulier ontvangen</p>
          <p className="text-sm text-packs-gray-light mt-1">Uw schademelding is bij ons ontvangen. We nemen zo spoedig mogelijk contact met u op.</p>
        </div>
      )}
    </div>
  );
}
