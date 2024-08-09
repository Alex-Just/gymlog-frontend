import i18next from 'i18next';

export function formatDateToHumanReadable(dateString: string): string {
  const date = new Date(dateString);
  const currentLanguage = i18next.language;
  return new Intl.DateTimeFormat(currentLanguage, {
    weekday: 'long',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(date);
}
