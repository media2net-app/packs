const DEMO_ZENDINGEN = [
  { nr: "U080787023", datum: "17-02-2026", bestemming: "Dordrecht", status: "Afgeleverd" },
  { nr: "U080787022", datum: "17-02-2026", bestemming: "Amsterdam", status: "Onderweg" },
  { nr: "U080787018", datum: "17-02-2026", bestemming: "Rotterdam", status: "Sortering" },
  { nr: "U080787012", datum: "16-02-2026", bestemming: "Utrecht", status: "Aangemeld" },
  { nr: "U080787005", datum: "16-02-2026", bestemming: "Eindhoven", status: "Afgeleverd" },
  { nr: "U080786998", datum: "15-02-2026", bestemming: "Den Haag", status: "Afgeleverd" },
];

const statusClass: Record<string, string> = {
  Afgeleverd: "bg-emerald-100 text-emerald-800",
  Onderweg: "bg-amber-100 text-amber-800",
  Sortering: "bg-blue-100 text-blue-800",
  Aangemeld: "bg-gray-100 text-gray-800",
};

export default function OverzichtPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-packs-gray mb-2">Overzicht (oud)</h1>
      <p className="text-packs-gray-light mb-6">Legacy overzicht van zendingen.</p>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/80">
                <th className="text-left font-medium text-packs-gray py-3 px-6">Zendingnr.</th>
                <th className="text-left font-medium text-packs-gray py-3 px-6">Datum</th>
                <th className="text-left font-medium text-packs-gray py-3 px-6">Bestemming</th>
                <th className="text-left font-medium text-packs-gray py-3 px-6">Status</th>
                <th className="w-20" />
              </tr>
            </thead>
            <tbody>
              {DEMO_ZENDINGEN.map((z) => (
                <tr key={z.nr} className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="py-3 px-6 font-mono text-packs-gray">{z.nr}</td>
                  <td className="py-3 px-6 text-packs-gray-light">{z.datum}</td>
                  <td className="py-3 px-6 text-packs-gray">{z.bestemming}</td>
                  <td className="py-3 px-6">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${statusClass[z.status] ?? "bg-gray-100 text-gray-800"}`}>
                      {z.status}
                    </span>
                  </td>
                  <td className="py-3 px-6">
                    <a href={`/track-trace?zendingnr=${z.nr}`} className="text-packs-red hover:underline text-xs font-medium">
                      Trace
                    </a>
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
