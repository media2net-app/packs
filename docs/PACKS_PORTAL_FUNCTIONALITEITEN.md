# Packs Portal – Functionaliteiten (klanten van Packs)

Dit document beschrijft de functionaliteiten van het **echte Packs Portal** (portal.packs.nl), zoals zichtbaar na inloggen. Het platform dat we bouwen in **packs-nieuw** is bedoeld voor **dezelfde doelgroep: klanten van Packs** (B2B). Dit overzicht dient als referentie voor welke functies voor klanten relevant zijn.

---

## 1. Toegang & authenticatie

- **Login:** identityserver.packs.nl → inlog met gebruikersnaam/wachtwoord.
- **Portal:** Na inloggen redirect naar **portal.packs.nl** (Start-pagina).
- **Header:** Logo Packs, zoekveld **Tracen** (zending traceren), **Welkom [gebruikersnaam]**, gebruikersmenu.

---

## 2. Hoofdnavigatie (topmenu)

| Menu     | Submenu / items | Doel |
|----------|------------------|------|
| **Home** | Start, Packs     | Startpagina, nieuws, snelle acties |
| **Zendingen** | Zie hieronder | Alles rond boeken, labels, overzichten, import, trace |
| **Beheer** | Adresboek, Instellingen | Klantgegevens en portal-instellingen |
| **Privacy** | — | Privacy-informatie |

---

## 3. Zendingen (kernfunctionaliteit)

| Onderdeel | Beschrijving |
|-----------|---------------|
| **Boeken** | Zendingen boeken / aanmaken |
| **Afgedrukte zegels** | Overzicht of beheer van reeds afgedrukte zegels/labels |
| **Overzicht (oud)** | Ouder overzicht van zendingen (legacy) |
| **Inbrenglijsten** | Lijsten voor inbreng (bijv. zendingen die bij Packs worden ingebracht) |
| **Importeren** | Import van zendingen (bijv. bulk/Excel) |
| **Snelle trace** | Snel een zending opzoeken/traceren |

---

## 4. Startpagina (Home / Start)

- **Traceren (blok):**
  - Veld **Zendingnummer / aantal** – invoer voor trace of aantal labels.
  - Checkbox **Pallet zending**.
  - Checkbox **Mixed pallet zending**.
  - Acties: **Afdrukken zegel**, **Retour aanmaken** (retourlabel).
  - Berichten: o.a. “Zending wordt geladen”, “Zending is niet gevonden”, “Label(s) worden geladen”, “Geen zendingnummer of aantal ingevuld”, “Genereren van label(s) is niet gelukt”.

- **Mededelingen:**
  - Link: **Mededelingen voor klanten van Packs of van PacksPartners**.
  - Voorbeelden van mededelingen: dieselprijs week 7, dieseltoeslag, maatregelen België/Luxemburg, geen zendingen naar UK/Noorwegen/Liechtenstein/Zwitserland (EVA/AFTA).

- **Nieuws:**
  - Link: **Voorkom schade of vermissing bij het verzenden** (packs.nl).
  - Tekst over drukke periodes (Sinterklaas, Kerst), risico op schade/vermissing en tips.

- **Contact:**
  - “Heeft u vragen? Neem dan contact op met: Regio Express”.

---

## 5. Beheer

| Item | Beschrijving |
|------|--------------|
| **Adresboek** | Beheer van adressen (afzender/ontvanger) voor zendingen |
| **Instellingen** | Portal- en/of accountinstellingen voor de klant |

---

## 6. Overige links / content

- **Voorwaarden** – algemene voorwaarden.
- **Verpakking en Claim voorwaarden** – voorwaarden verpakking en claims.
- **Schadeformulier** – formulier voor schademeldingen.

---

## 7. Conclusie voor packs-nieuw (klantenplatform)

Het Packs-portal is een **B2B-portal voor verzendklanten**: zendingen boeken, labels/zegels afdrukken, retours aanmaken, zendingen traceren, adresboek, mededelingen en nieuws.  

Voor **packs-nieuw** (platform voor klanten van Packs) zijn met name relevant:

1. **Zendingen** – boeken, labels (incl. pallet/mixed pallet), retour aanmaken.
2. **Traceren** – zending opzoeken op nummer (in header en op start).
3. **Adresboek** – adressen beheren voor verzendingen.
4. **Mededelingen & nieuws** – Packs-berichten en links (dieseltoeslag, landenmaatregelen, tips).
5. **Documenten** – voorwaarden, verpakking/claim, schadeformulier.
6. **Beheer** – instellingen en eventueel profiel/contactgegevens.

De huidige demo in packs-nieuw (dashboard met o.a. Orders, Klanten, Voorraad, Rapporten, Instellingen) kan worden aangevuld of heringericht naar deze Packs-klantfuncties (zendingen, tracen, adresboek, mededelingen, documenten) zodat het aansluit bij wat klanten in het echte portal gewend zijn.
