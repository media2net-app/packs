import Link from "next/link";

export default function VerpakkingClaimPage() {
  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-2xl font-semibold text-packs-gray mb-2">Verpakking en Claim voorwaarden</h1>
      <p className="text-packs-gray-light mb-6">Voorwaarden voor verpakking en het indienen van claims bij schade of vermissing.</p>

      <div className="bg-white rounded-xl border border-gray-200 p-6 prose prose-sm max-w-none space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-packs-gray">Verpakkingsrichtlijnen</h2>
          <p className="text-packs-gray-light">
            Zendingen moeten voldoende beschermd zijn tegen beschadiging tijdens transport. Gebruik stevige dozen of kisten en vul ruimte op met vulmateriaal. Kwetsbare artikelen moeten dubbel verpakt worden. Etiketten moeten goed leesbaar en stevig op de zending bevestigd zijn. Zendingen die niet voldoen aan de richtlijnen kunnen geweigerd worden of vallen buiten de claimmogelijkheid.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-packs-gray">Claimtermijn</h2>
          <p className="text-packs-gray-light">
            Schade of vermissing dient binnen 14 dagen na aflevering (of na constatering) bij Packs gemeld te worden. Na deze termijn kan geen aanspraak meer worden gemaakt. Gebruik het <Link href="/dashboard/schadeformulier" className="text-packs-red hover:underline">Schadeformulier</Link> voor uw melding.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-packs-gray">Procedure</h2>
          <p className="text-packs-gray-light">
            Na ontvangst van het schadeformulier neemt Packs contact met u op. U kunt gevraagd worden om foto’s of bewijs te leveren. Binnen een redelijke termijn ontvangt u een reactie over de afhandeling. Bij erkenning van de claim wordt de vergoeding volgens de geldende voorwaarden vastgesteld.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-packs-gray">Contact</h2>
          <p className="text-packs-gray-light">
            Voor vragen over verpakking of claims: 088 80 40 800 of info@packs.nl. De volledige verpakking- en claimvoorwaarden zijn op aanvraag beschikbaar via Packs.
          </p>
        </section>
      </div>
    </div>
  );
}
