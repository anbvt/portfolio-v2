export type Locale = (typeof locales)[number];

export const locales = ["en", "jp"] as const;
export const defaultLocale: Locale = 'en';
