// Prefix for absolute links to files in /public (e.g. the calendar .ics).
// Next.js automatically prefixes <Link> and next/image, but plain <a href="/…">
// and <img src="/…"> need this applied by hand.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}
