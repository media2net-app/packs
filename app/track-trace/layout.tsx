import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track & Trace - Packs",
  description: "Volg uw pakket met Track & Trace. Vul zendingnummer en postcode in.",
};

export default function TrackTraceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
