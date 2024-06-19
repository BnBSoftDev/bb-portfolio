const dictionaries: any = {
    en: () => import("./dictionaries/en.json").then((module) => module.default),
    tn: () => import("./dictionaries/tn.json").then((module) => module.default),
    fr: () => import("./dictionaries/fr.json").then((module) => module.default),
  };
  export const getDictionary = async (locale: any) => dictionaries[locale]();