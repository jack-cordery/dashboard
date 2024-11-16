import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'] as const,
});

export const lusitana = Lusitana({
  subsets: ['latin'] as const,
  weight: ['400', '700'] as const,
});
