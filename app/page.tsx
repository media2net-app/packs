"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DEMO_USER = "Degierbloemen";
const DEMO_PASSWORD = "Industri3w3g8!";

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
  );
}

function KeyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
    </svg>
  );
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
    </svg>
  );
}

function EyeSlashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478l-1.5 1.5zM12 10a2 2 0 01-2 2c-.695 0-1.296-.352-1.664-.902l1.44-1.44A1.99 1.99 0 0112 10zM2 4.586l1.91 1.91A9.958 9.958 0 0010 3c4.478 0 8.268 2.943 9.542 7a10.014 10.014 0 01-4.354 5.647l1.473 1.473a1 1 0 101.414-1.414l-14-14a1 1 0 00-1.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function DotsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState(DEMO_USER);
  const [password, setPassword] = useState(DEMO_PASSWORD);
  const [showPassword, setShowPassword] = useState(false);
  const [imiteren, setImiteren] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    if (username === DEMO_USER && password === DEMO_PASSWORD) {
      router.push("/dashboard");
    } else {
      setMessage("Ongeldige inloggegevens. Gebruik demo: Degierbloemen / Industri3w3g8!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header / Branding */}
      <header className="pt-12 pb-8 flex justify-center">
        <Image
          src="/Packs-logo200.png"
          alt="Packs"
          width={200}
          height={80}
          className="h-12 w-auto object-contain"
          priority
        />
      </header>

      {/* Login form card */}
      <main className="flex-1 flex justify-center px-4 pb-8">
        <div className="w-full max-w-md">
          <div className="bg-white border border-gray-200 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,0.06)] p-8">
            <h1 className="text-xl font-semibold text-packs-gray mb-2">Log in op Packs</h1>
            <div className="h-px bg-gray-200 mb-6" />

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username */}
              <div>
                <div className="relative flex">
                  <span className="inline-flex items-center pl-3 text-gray-400 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                    <UserIcon className="w-5 h-5" />
                  </span>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="flex-1 rounded-none border border-gray-300 py-2.5 px-3 text-packs-gray placeholder-gray-400 focus:border-packs-red focus:ring-1 focus:ring-packs-red outline-none"
                    placeholder="Gebruikersnaam"
                  />
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-9 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 hover:bg-gray-100"
                    title="Opties"
                  >
                    <DotsIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-packs-gray mb-1">Wachtwoord</label>
                <div className="relative flex">
                  <span className="inline-flex items-center pl-3 text-gray-400 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                    <KeyIcon className="w-5 h-5" />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex-1 rounded-none border border-gray-300 py-2.5 px-3 text-packs-gray placeholder-gray-400 focus:border-packs-red focus:ring-1 focus:ring-packs-red outline-none"
                    placeholder="Wachtwoord"
                  />
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-9 border border-l-0 border-gray-300 bg-gray-50 text-gray-500 hover:bg-gray-100"
                    title="Opties"
                  >
                    <DotsIcon className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="inline-flex items-center justify-center w-9 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 hover:bg-gray-100"
                    title={showPassword ? "Verbergen" : "Tonen"}
                  >
                    {showPassword ? <EyeSlashIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Imiteren checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="imiteren"
                  checked={imiteren}
                  onChange={(e) => setImiteren(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-packs-red focus:ring-packs-red"
                />
                <label htmlFor="imiteren" className="text-sm text-packs-gray">
                  Imiteren
                </label>
              </div>

              {message && (
                <p className={`text-sm ${message.includes("geslaagd") ? "text-green-600" : "text-red-600"}`}>
                  {message}
                </p>
              )}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-packs-red hover:bg-packs-red-dark text-white font-medium rounded-md shadow-sm transition-colors"
              >
                <LockIcon className="w-5 h-5" />
                Log in
              </button>
            </form>

            <a
              href="#"
              className="mt-4 block text-center text-sm text-blue-600 hover:underline"
            >
              Uw wachtwoord vergeten?
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 bg-gray-100 border-t border-gray-200">
        <p className="text-center text-sm text-packs-red">© 2026 - packs.nl</p>
      </footer>
    </div>
  );
}
