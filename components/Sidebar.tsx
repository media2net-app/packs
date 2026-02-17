"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainMenu = [
  {
    href: "/dashboard",
    label: "Home",
    icon: "home",
    children: [
      { href: "/dashboard", label: "Start" },
      { href: "/dashboard/packs", label: "Packs" },
    ],
  },
  { href: "/track-trace", label: "Track & trace", icon: "trace" },
  {
    href: "/dashboard/zendingen",
    label: "Zendingen",
    icon: "zendingen",
    children: [
      { href: "/dashboard/zendingen/boeken", label: "Boeken" },
      { href: "/dashboard/zendingen/afgedrukte-zegels", label: "Afgedrukte zegels" },
      { href: "/dashboard/zendingen/overzicht", label: "Overzicht (oud)" },
      { href: "/dashboard/zendingen/inbrenglijsten", label: "Inbrenglijsten" },
      { href: "/dashboard/zendingen/importeren", label: "Importeren" },
      { href: "/dashboard/zendingen/snelle-trace", label: "Snelle trace" },
    ],
  },
  {
    href: "/dashboard/beheer",
    label: "Beheer",
    icon: "beheer",
    children: [
      { href: "/dashboard/beheer/adresboek", label: "Adresboek" },
      { href: "/dashboard/beheer/instellingen", label: "Instellingen" },
    ],
  },
  { href: "/dashboard/privacy", label: "Privacy", icon: "privacy" },
  { href: "/dashboard/voorwaarden", label: "Voorwaarden", icon: "doc" },
  { href: "/dashboard/verpakking-claim", label: "Verpakking en Claim voorwaarden", icon: "doc" },
  { href: "/dashboard/schadeformulier", label: "Schadeformulier", icon: "doc" },
];

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
  );
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
    </svg>
  );
}

function CogIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106a1.532 1.532 0 01.948 2.286c-1.56.38-1.56 2.6 0 2.98a1.532 1.532 0 01-.948 2.286c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.286.948c.38 1.56 2.6 1.56 2.98 0a1.532 1.532 0 012.286-.948c1.372.836 2.942-.734 2.106-2.106a1.532 1.532 0 01.948-2.286c1.56-.38 1.56-2.6 0-2.98a1.532 1.532 0 01-.948-2.286c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.286-.948zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
    </svg>
  );
}

function TraceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  home: HomeIcon,
  trace: TraceIcon,
  zendingen: TruckIcon,
  beheer: CogIcon,
  privacy: ShieldIcon,
  doc: DocumentIcon,
};

function isActive(pathname: string, href: string) {
  if (href === "/dashboard") return pathname === "/dashboard";
  if (pathname === href) return true;
  return pathname.startsWith(href);
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 min-h-screen bg-packs-red flex flex-col shrink-0">
      <div className="p-4 border-b border-red-900/30">
        <Link href="/dashboard" className="block">
          <Image
            src="/packs-logo-300x70.png"
            alt="Packs"
            width={300}
            height={70}
            className="max-w-full h-8 w-auto object-contain brightness-0 invert"
          />
        </Link>
      </div>
      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-0.5 px-3">
          {mainMenu.map((item) => {
            const Icon = iconMap[item.icon] ?? DocumentIcon;
            const hasChildren = item.children && item.children.length > 0;

            return (
              <li key={item.href}>
                {hasChildren ? (
                  <>
                    <span className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-white/90">
                      <Icon className="w-5 h-5 shrink-0" />
                      {item.label}
                    </span>
                    <ul className="ml-4 mt-0.5 space-y-0.5 border-l border-white/20 pl-3">
                      {item.children!.map((child) => {
                        const active = isActive(pathname, child.href);
                        return (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={`block py-1.5 text-sm transition-colors ${
                                active ? "text-white font-medium" : "text-white/80 hover:text-white"
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      isActive(pathname, item.href)
                        ? "bg-white/20 text-white"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5 shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-4 border-t border-red-900/30">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          Uitloggen
        </Link>
      </div>
    </aside>
  );
}
