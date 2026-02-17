"use client";

export default function InstellingenPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-packs-gray mb-2">Instellingen</h1>
      <p className="text-packs-gray-light mb-6">Portal- en accountinstellingen.</p>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 max-w-2xl space-y-6">
        <div>
          <label className="block text-sm font-medium text-packs-gray mb-1">Taal</label>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full max-w-xs">
            <option>Nederlands</option>
            <option>English</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-packs-gray mb-2">Notificaties</label>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded border-gray-300 text-packs-red focus:ring-packs-red" />
              Mededelingen per e-mail ontvangen
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded border-gray-300 text-packs-red focus:ring-packs-red" />
              Melding bij nieuwe zendingstatus
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-packs-red focus:ring-packs-red" />
              Wekelijkse samenvatting
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-packs-gray mb-1">Standaard afzender</label>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full max-w-xs">
            <option>De Gier Bloemen - Bloemenweg 12, Naaldwijk</option>
            <option>Geen standaard</option>
          </select>
          <p className="text-xs text-packs-gray-light mt-1">Wordt vooringevuld bij Zending boeken.</p>
        </div>
        <div className="pt-4 border-t border-gray-100">
          <button type="button" className="px-5 py-2.5 bg-packs-red text-white text-sm font-medium rounded-lg hover:bg-packs-red-dark">
            Opslaan
          </button>
        </div>
      </div>
    </div>
  );
}
