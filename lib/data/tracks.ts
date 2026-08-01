import type { Episode, Track } from "@/lib/types";
import videosData from "./videos.json";

function videoIdFrom(url: string): string {
  const match = url.match(/[?&]v=([\w-]{6,})/);
  return match ? match[1] : "";
}

interface RawEpisode {
  order: number;
  title: string;
  creator: string;
  url: string;
  durationMin: number | null;
  subtopic: string;
  why: string;
}

interface RawTrack {
  slug: string;
  title: string;
  tagline: string;
  episodes: RawEpisode[];
}

export const tracks: Track[] = (videosData.tracks as RawTrack[]).map((t) => ({
  slug: t.slug,
  title: t.title,
  tagline: t.tagline,
  episodes: t.episodes.map((e) => ({
    ...e,
    id: `${t.slug}-${String(e.order).padStart(2, "0")}`,
    videoId: videoIdFrom(e.url),
    trackSlug: t.slug,
  })),
}));

export function getTrack(slug: string): Track | undefined {
  return tracks.find((t) => t.slug === slug);
}

// The commute sequence interleaves tracks round-robin so every week
// touches several threads while each track still progresses in order.
// A few videos belong to two tracks; the queue keeps only their first pass.
export const dailySequence: Episode[] = (() => {
  const sequence: Episode[] = [];
  const seenVideos = new Set<string>();
  const maxLen = Math.max(0, ...tracks.map((t) => t.episodes.length));
  for (let i = 0; i < maxLen; i++) {
    for (const track of tracks) {
      const episode = track.episodes[i];
      if (episode && !seenVideos.has(episode.videoId)) {
        seenVideos.add(episode.videoId);
        sequence.push(episode);
      }
    }
  }
  return sequence;
})();

export const totalEpisodes = dailySequence.length;
