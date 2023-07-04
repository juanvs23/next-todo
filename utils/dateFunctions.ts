import { format, formatDistance, formatRelative, subDays, formatDistanceToNow } from 'date-fns';
import { es, ru } from 'date-fns/locale';

export function showDate(date: string): string {
  const distanceFromNow = formatDistanceToNow(new Date(date), { locale: es });
  return distanceFromNow;
}
