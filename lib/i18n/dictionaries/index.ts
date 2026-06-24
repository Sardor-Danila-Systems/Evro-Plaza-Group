import ru from './ru';
import uz from './uz';
import en from './en';
import type { Locale } from '../context';
import type { Dictionary } from './ru';

export const dictionaries: Record<Locale, Dictionary> = { ru, uz, en };
export type { Dictionary };
export { ru, uz, en };
