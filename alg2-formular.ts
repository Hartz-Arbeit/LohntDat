/*
 * Datenmodell für die Eingabetabelle aus dem ALG2-Rechner von https://tacheles-sozialhilfe.de/files/Aktuelles/2022/ALG2-Berechnung-ver-5-0.xlsx
 */

export interface ALG2Formular {
  beginnBewilligungszeitraum: Date;
  antragsteller: LeistungsberechtigtePerson;
  partnerInBG?: LeistungsberechtigtePerson;
  kinder?: LeistungsberechtigtePerson[];
  unterkunft: Unterkunft;
  personenImHaushaltAusserhalbBG: number;
}

export interface LeistungsberechtigtePerson {
  geburtsdatum: Date;
  kinderAusserhalbBG: boolean;
  alleinerziehend: boolean;
  erwerbsunfaehig: boolean;
  mehrbedarf: Mehrbedarf;
  einkommen: Einkommen;
  absetzung: Absetzung;
}

export interface Mehrbedarf {
  ernaehrung?: MehrbedarfErnaehrung;
  schwangerschaft?: MehrbedarfSchwangerschaft;
  teilhabeArbeitsleben: boolean;
  besondererBedarf?: number;
}

export enum MehrbedarfErnaehrung {
  STUFE_EINS = 1,
  STUFE_ZWEI = 2,
}

export interface MehrbedarfSchwangerschaft {
  entbindungstermin: Date;
  betrag: number;
}

export interface Einkommen {
  erwerbBrutto: number;
  erwerbNetto: number;
  selbststaendigkeit?: number;
}

export interface Absetzung {
  gezahlteEinkommenssteuer?: number;
  versicherungenAusserhalbErwerb: {
    krankenversicherung?: number;
    pflegeversicherung?: number;
    rentenversicherung?: number;
    privateAltersvorsorge?: number;
    zvkBeitrag?: number;
  }
  arbeitstageImMonat?: number;
  arbeitstageImMonatMit12StundenAbwesenheit?: number;
  entfernungWohnungArbeitsplatz?: number;
  privatePflichtversicherungenJahresbeitraege?: number;
  sonstigeVersicherungenMonatsbeitraege?: number;
  gewerkschaftsbeitraege?: number;
  unterhaltsverpflichtungen?: number;
  arbeitsmittel?: number;
  werbungskosten?: number;
  riestervertrag: boolean;
  zusatzbeitragKrankenversicherung?: number;
  priviligiertesEinkommen?: number;
  taschengeldAusFreiwilligenDiensten?: number;
  arbeitslosengeldEins?: number;
  mittelwertKindergeldFuerAlleKinderInBG?: number;
  unterhalt?: number;
  unterhaltsvorschuss?: number;
  wohngeldOderMischhaushalt?: number;
  ausbildungsfoerderung?: number;
  altersrente?: number;
  leistungenRentenUndKrankversicherungen?: number;
  sonstigesEinkommen?: number;
  mieteinnahmen?: number;
  sonstigesEinkommenKinderzuschlagBetreuungsgeldEtc?: number;
  elterngeld?: {
    betrag: number;
    durchschnittlichesMonatlichesEinkommen: number;
    verlaengerungsoptionGenutzt: boolean;
    freibetrag?: number;
  };
  ueberhangKindergeld?: number;
}

export interface Unterkunft {
  mietstufe: Mietstufe;
  wohnverhaeltnis: Wohnverhaeltnis;
  kaltmiete: number;
  nebenkosten: number;
  heizkosten: number;
  zentraleWasserversorgung?: number;
}

export enum Wohnverhaeltnis {
  MIETE = "MIETE",
  EIGENTUM = "EIGENTUM"
}

export enum Mietstufe {
  STUFE_EINS = 1,
  STUFE_ZWEI = 2,
  STUFE_DREI = 3,
  STUFE_VIER = 4,
  STUFE_FUENF = 5,
  STUFE_SECHS = 6,
  STUFE_SIEBEN = 7
}
