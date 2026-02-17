import Link from "next/link";

export default function PacksPage() {
  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-2xl font-semibold text-packs-gray mb-2">Packs</h1>
      <p className="text-packs-gray-light mb-6">Informatie over Packs en uw account.</p>

      <div className="space-y-6">
        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-packs-gray mb-3">Over Packs</h2>
          <p className="text-packs-gray-light text-sm">
            Packs is uw betrouwbare pakketdienst voor de Benelux. Wij zijn gespecialiseerd in Overnight-dienstverlening
            en sterk in zendingen met speciale eisen. Via dit portal boekt u zendingen, drukt u labels af en volgt u
            uw pakketten met Track & Trace.
          </p>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-packs-gray mb-3">Contact</h2>
          <ul className="text-sm text-packs-gray-light space-y-1">
            <li><strong className="text-packs-gray">Telefoon:</strong> 088 80 40 800</li>
            <li><strong className="text-packs-gray">E-mail:</strong> info@packs.nl</li>
            <li><strong className="text-packs-gray">Adres:</strong> Nijverheidstraat 2d, 4143 HM Leerdam</li>
          </ul>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-packs-gray mb-3">Handige links</h2>
          <ul className="space-y-2">
            <li><Link href="/track-trace" className="text-packs-red hover:underline font-medium">Track & trace</Link></li>
            <li><Link href="/dashboard/voorwaarden" className="text-packs-red hover:underline font-medium">Algemene voorwaarden</Link></li>
            <li><Link href="/dashboard/privacy" className="text-packs-red hover:underline font-medium">Privacy</Link></li>
            <li><Link href="/dashboard/schadeformulier" className="text-packs-red hover:underline font-medium">Schadeformulier</Link></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
