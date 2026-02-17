import Link from "next/link";

export default function BeheerPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-packs-gray mb-2">Beheer</h1>
      <p className="text-packs-gray-light mb-6">
        Hier beheert u uw adresboek en portalinstellingen. Uw adressen worden gebruikt bij het boeken van zendingen; in de instellingen stelt u taal en notificaties in.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
        <Link
          href="/dashboard/beheer/adresboek"
          className="block p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-packs-red/30 hover:shadow-md transition-all"
        >
          <h2 className="font-semibold text-packs-gray mb-1">Adresboek</h2>
          <p className="text-sm text-packs-gray-light">Afzend- en ontvangeradressen voor zendingen.</p>
        </Link>
        <Link
          href="/dashboard/beheer/instellingen"
          className="block p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-packs-red/30 hover:shadow-md transition-all"
        >
          <h2 className="font-semibold text-packs-gray mb-1">Instellingen</h2>
          <p className="text-sm text-packs-gray-light">Taal, notificaties en accountvoorkeuren.</p>
        </Link>
      </div>
    </div>
  );
}
