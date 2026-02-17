# Analyse: Packs Identity & Login-systeem

## Overzicht

Packs gebruikt een **centrale Identity Server** voor inloggen. Gebruikers loggen in op één plek (`identityserver.packs.nl`) en worden daarna doorgestuurd naar het portal (`portal.packs.nl`).

---

## 1. Architectuur

| Onderdeel | URL / waarde | Rol |
|-----------|--------------|-----|
| **Identity Server** | `https://identityserver.packs.nl` | Centrale authenticatie (login, wachtwoord, sessie) |
| **Login-pagina** | `https://identityserver.packs.nl/Account/Login` | Formulier: gebruikersnaam, wachtwoord, impersonation |
| **Portal (client)** | `https://portal.packs.nl` | Applicatie waar gebruikers na login terechtkomen |
| **OIDC callback** | `https://portal.packs.nl/signin-oidc` | Endpoint dat tokens ontvangt na geslaagde login |

Flow: **Portal** → redirect naar **Identity Server** → gebruiker logt in → Identity Server redirect terug naar **Portal** met tokens.

---

## 2. Protocol: OpenID Connect (OIDC)

De `ReturnUrl` in de login-URL is in feite een **authorize**-request naar de Identity Server. Uit de query parameters:

| Parameter | Waarde | Betekenis |
|-----------|--------|-----------|
| `client_id` | `PacksOnlineGeneralClient` | Identifier van de portal-app bij Identity Server |
| `redirect_uri` | `https://portal.packs.nl/signin-oidc` | Waar de gebruiker na login naartoe gaat (callback) |
| `response_type` | `id_token token` | Hybrid flow: zowel ID-token als access token |
| `response_mode` | `form_post` | Tokens worden via HTTP POST (form) naar de callback gestuurd, niet in de URL |
| `scope` | Zie hieronder | Gevraagde rechten/info |
| `nonce` | (dynamisch) | Beveiliging tegen replay-aanvallen |
| `state` | (dynamisch) | Beveiliging tegen CSRF, herstel van oorspronkelijke request |

**Scopes** (uit de URL, URL-decoded):

- `openid` – basis OpenID Connect
- `profile` – profielgegevens (naam, etc.)
- `company` – bedrijfscontext
- `portalLogo` – logo voor in het portal
- `localization` – taal/regio
- `email` – e-mailadres
- `role` – rollen/rechten

De portal vraagt dus naast identiteit ook bedrijf, logo, taal en rollen aan.

---

## 3. Technologie (client-kant)

- **Client SDK**: .NET 8 (`x-client-SKU: ID_NET8_0`, `x-client-ver: 8.2.1.0`)
- De portal is waarschijnlijk een **ASP.NET Core**-applicatie die de OIDC-middleware gebruikt en `signin-oidc` als callback heeft.

---

## 4. Functionaliteit op de login-pagina

(Uit de beschrijving van [Identity Server Packs](https://identityserver.packs.nl/Account/Login)):

- **Log on to Packs** – titel van de pagina
- **Impersonation** – komt overeen met de “Imiteren”-optie (inloggen als andere gebruiker, waarschijnlijk voor support/admin)
- **Login** – inlogknop
- **Forgot your password?** – link naar wachtwoord vergeten
- **Caps lock is on** – waarschuwing als Caps Lock aan staat
- **© 2026 - packs.nl** – footer

Geen aparte “registreren”-link zichtbaar; waarschijnlijk alleen inloggen en wachtwoord vergeten.

---

## 5. Beveiliging (af te leiden)

- **HTTPS** overal (identity + portal).
- **state** en **nonce** in de OIDC-request → bescherming tegen CSRF en token replay.
- **response_mode=form_post** → tokens zitten niet in de URL (browser history/bookmarks).
- Eigen **Identity Server** (geen volledige afhankelijkheid van een externe IdP voor de eerste factor).

Impersonation wijst op een vorm van role-based access (bijv. alleen bepaalde rollen mogen “imiteren”).

---

## 6. Samenvatting voor integratie

Als je de **demo-app in packs-nieuw** later wilt aansluiten op het echte Packs-systeem:

1. **OIDC-client** configureren in de Next.js-app:
   - `client_id` (evt. een eigen client voor “packs-nieuw” of dezelfde `PacksOnlineGeneralClient` als dat mag)
   - `redirect_uri` = bijv. `https://jouw-domein.nl/api/auth/callback` of een NextAuth/vergelijkbare callback
   - `scope`: minimaal `openid profile`, eventueel ook `company portalLogo localization email role` als de app dat nodig heeft

2. **Identity Server** blijft `https://identityserver.packs.nl`; login-URL wordt dan bijvoorbeeld:
   - `https://identityserver.packs.nl/Account/Login?ReturnUrl=...`  
   waarbij `ReturnUrl` de geëncodeerde authorize-URL is die de Identity Server na login gebruikt om terug te sturen naar jouw app.

3. **Callback** in de Next.js-app:
   - Ontvangen van `id_token` (en evt. `access_token`) via POST (als je `form_post` gebruikt) of via query/fragment afhankelijk van flow
   - Sessie zetten (cookie of session store) en gebruiker doorsturen naar het dashboard

4. **Impersonation** wordt afgehandeld op de Identity Server; jouw app krijgt gewoon de tokens van de geïmiteerde gebruiker als de flow zo is opgezet.

Dit document vormt een analyse van het **huidige** Packs-inlogsysteem; voor concrete client-id’s, secrets en redirect-uri’s is overleg met de beheerder van Identity Server nodig.
