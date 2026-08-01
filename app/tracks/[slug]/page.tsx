import { notFound } from "next/navigation";
import { tracks } from "@/lib/data/tracks";
import { TrackView } from "@/components/track-view";

export function generateStaticParams() {
  return tracks.map((t) => ({ slug: t.slug }));
}

export default async function TrackPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!tracks.some((t) => t.slug === slug)) notFound();
  return <TrackView slug={slug} />;
}
