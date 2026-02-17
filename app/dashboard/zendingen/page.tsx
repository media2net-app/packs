import Link from "next/link";

export default function ZendingenPage() {
  const links = [
    { href: "/dashboard/zendingen/boeken", label: "Boeken" },
    { href: "/dashboard/zendingen/afgedrukte-zegels", label: "Afgedrukte zegels" },
    { href: "/dashboard/zendingen/overzicht", label: "Overzicht (oud)" },
    { href: "/dashboard/zendingen/inbrenglijsten", label: "Inbrenglijsten" },
    { href: "/dashboard/zendingen/importeren", label: "Importeren" },
    { href: "/dashboard/zendingen/snelle-trace", label: "Snelle trace" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-packs-gray mb-2">Zendingen</h1>
      <p className="text-packs-gray-light mb-6">Beheer en boek uw zendingen. Kies hieronder een onderdeel.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-sm font-medium text-packs-gray-light">Zendingen vandaag</p>
          <p className="text-2xl font-bold text-packs-gray">12</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-sm font-medium text-packs-gray-light">Deze week</p>
          <p className="text-2xl font-bold text-packs-gray">94</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-sm font-medium text-packs-gray-light">Onderweg</p>
          <p className="text-2xl font-bold text-packs-gray">28</p>
        </div>
      </div>

      <h2 className="text-base font-semibold text-packs-gray mb-3">Acties</h2>
      <ul className="grid gap-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-packs-red hover:underline font-medium">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
