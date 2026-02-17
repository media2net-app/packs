const DEMO_LIJSTEN = [
  { id: "IB-2026-042", naam: "Inbreng 17 feb", datum: "17-02-2026", aantal: 12, status: "Verwerkt" },
  { id: "IB-2026-041", naam: "Inbreng 16 feb", datum: "16-02-2026", aantal: 8, status: "Verwerkt" },
  { id: "IB-2026-040", naam: "Inbreng 15 feb", datum: "15-02-2026", aantal: 15, status: "In behandeling" },
];

export default function InbrenglijstenPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-packs-gray mb-2">Inbrenglijsten</h1>
      <p className="text-packs-gray-light mb-6">Beheer lijsten voor inbreng van zendingen bij Packs.</p>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-base font-semibold text-packs-gray">Uw inbrenglijsten</h2>
          <button type="button" className="text-sm font-medium text-packs-red hover:underline">
            + Nieuwe lijst
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/80">
                <th className="text-left font-medium text-packs-gray py-3 px-6">Referentie</th>
                <th className="text-left font-medium text-packs-gray py-3 px-6">Naam</th>
                <th className="text-left font-medium text-packs-gray py-3 px-6">Datum</th>
                <th className="text-left font-medium text-packs-gray py-3 px-6">Aantal zendingen</th>
                <th className="text-left font-medium text-packs-gray py-3 px-6">Status</th>
                <th className="w-20" />
              </tr>
            </thead>
            <tbody>
              {DEMO_LIJSTEN.map((l) => (
                <tr key={l.id} className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="py-3 px-6 font-mono text-packs-gray">{l.id}</td>
                  <td className="py-3 px-6 text-packs-gray">{l.naam}</td>
                  <td className="py-3 px-6 text-packs-gray-light">{l.datum}</td>
                  <td className="py-3 px-6 text-packs-gray">{l.aantal}</td>
                  <td className="py-3 px-6">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                      l.status === "Verwerkt" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                    }`}>
                      {l.status}
                    </span>
                  </td>
                  <td className="py-3 px-6">
                    <button type="button" className="text-packs-red hover:underline text-xs font-medium">
                      Bekijken
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
