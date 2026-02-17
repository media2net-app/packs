const DEMO_ADRESSEN = [
  { id: 1, naam: "De Gier Bloemen", straat: "Bloemenweg 12", postcode: "2671 AB", plaats: "Naaldwijk", type: "Afzender" },
  { id: 2, naam: "Patrick Stok", straat: "Klipperstraat 19", postcode: "3317 ZE", plaats: "Dordrecht", type: "Ontvanger" },
  { id: 3, naam: "Bloemen & Zo B.V.", straat: "Handelsstraat 44", postcode: "1012 AB", plaats: "Amsterdam", type: "Ontvanger" },
];

export default function AdresboekPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-packs-gray mb-2">Adresboek</h1>
      <p className="text-packs-gray-light mb-6">Beheer uw afzend- en ontvangeradressen voor zendingen.</p>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-base font-semibold text-packs-gray">Opgeslagen adressen</h2>
          <button type="button" className="text-sm font-medium text-packs-red hover:underline">
            + Adres toevoegen
          </button>
        </div>
        <ul className="divide-y divide-gray-100">
          {DEMO_ADRESSEN.map((a) => (
            <li key={a.id} className="px-6 py-4 hover:bg-gray-50/50 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-medium text-packs-gray">{a.naam}</p>
                <p className="text-sm text-packs-gray-light">{a.straat}, {a.postcode} {a.plaats}</p>
                <span className="inline-block mt-1 text-xs font-medium text-packs-gray-light bg-gray-100 px-2 py-0.5 rounded">
                  {a.type}
                </span>
              </div>
              <div className="flex gap-2">
                <button type="button" className="text-sm text-packs-red hover:underline font-medium">Bewerken</button>
                <button type="button" className="text-sm text-packs-gray-light hover:text-red-600 font-medium">Verwijderen</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
