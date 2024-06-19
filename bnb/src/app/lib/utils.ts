import { getDictionary } from "@/app/dictionaries";

export async function fetchDict(lang: string) {
    const dict = await getDictionary(lang);
   return dict;
}