const DEMO_ZEGELS = [
  { zendingnr: "U080787023", datum: "17-02-2026", type: "Pakket", aantal: 1 },
  { zendingnr: "U080787022", datum: "17-02-2026", type: "Pakket", aantal: 2 },
  { zendingnr: "U080787018", datum: "16-02-2026", type: "Pallet", aantal: 1 },
  { zendingnr: "U080787012", datum: "16-02-2026", type: "Pakket", aantal: 1 },
  { zendingnr: "U080787005", datum: "15-02-2026", type: "Mixed pallet", aantal: 1 },
];

export default function AfgedrukteZegelsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-packs-gray mb-2">Afgedrukte zegels</h1>
      <p className="text-packs-gray-light mb-6">Overzicht van reeds afgedrukte zegels en labels.</p>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/80">
                <th className="text-left font-medium text-packs-gray py-3 px-6">Zendingnummer</th>
                <th className="text-left font-medium text-packs-gray py-3 px-6">Datum</th>
                <th className="text-left font-medium text-packs-gray py-3 px-6">Type</th>
                <th className="text-left font-medium text-packs-gray py-3 px-6">Aantal</th>
                <th className="w-20" />
              </tr>
            </thead>
            <tbody>
              {DEMO_ZEGELS.map((z) => (
                <tr key={z.zendingnr} className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="py-3 px-6 font-mono text-packs-gray">{z.zendingnr}</td>
                  <td className="py-3 px-6 text-packs-gray-light">{z.datum}</td>
                  <td className="py-3 px-6 text-packs-gray">{z.type}</td>
                  <td className="py-3 px-6 text-packs-gray">{z.aantal}</td>
                  <td className="py-3 px-6">
                    <button type="button" className="text-packs-red hover:underline text-xs font-medium">
                      Opnieuw afdrukken
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
