"use client";

import { useState } from "react";

export default function ImporterenPage() {
  const [uploaded, setUploaded] = useState(false);
  const [importCount, setImportCount] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploaded(false);
      setTimeout(() => {
        setImportCount(8);
        setUploaded(true);
      }, 1200);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-packs-gray mb-2">Importeren</h1>
      <p className="text-packs-gray-light mb-6">Importeer zendingen via bestand (Excel of CSV).</p>

      <div className="max-w-2xl space-y-6">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-packs-gray">
          <p className="font-medium text-packs-gray mb-1">Instructie</p>
          <p className="text-packs-gray-light">
            Upload een CSV of Excel-bestand met kolommen: ontvanger_naam, straat, postcode, plaats, gewicht.
            De eerste rij moet de koppen bevatten. Download het voorbeeld om het juiste formaat te zien.
          </p>
          <button type="button" className="mt-2 text-packs-red hover:underline font-medium">
            Voorbeeldbestand downloaden (CSV)
          </button>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <label className="block text-sm font-medium text-packs-gray mb-2">Bestand uploaden</label>
          <input
            type="file"
            accept=".csv,.xlsx,.xls"
            onChange={handleFileChange}
            className="block w-full text-sm text-packs-gray-light file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-packs-red file:text-white file:cursor-pointer"
          />
          <p className="text-xs text-packs-gray-light mt-2">Ondersteunde formaten: CSV, Excel (.xlsx, .xls)</p>

          {uploaded && (
            <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
              <p className="font-medium text-emerald-800">Import voltooid</p>
              <p className="text-sm text-emerald-700 mt-1">{importCount} zendingen geïmporteerd en klaar om te boeken.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
