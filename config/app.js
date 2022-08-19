const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME ?? "Keuzes";

const APP_TITLE =
  process.env.NEXT_PUBLIC_APP_TITLE ??
  `Verschillende keuzes uit verschillende ketens elektronica | Keuzes`;

const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ??
  `Welkom op Keuzes.be, een marktplaats van allerlei 
  elektronica producten uit verschillende winkelketens. 
  Vergelijk de prijzen van artikelen uit verschillende ketens en maak uw keuze!`;

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? `https://keuzes.be`;

export { APP_NAME, APP_TITLE, APP_DESCRIPTION, APP_URL };
