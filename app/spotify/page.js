import dynamic from "next/dynamic";

const Spotify = dynamic(() => import("@/components/spotify"), {
  loading: () => <div>Loading Spotify...</div>,
});

export default function SpotifyPage() {
  return <Spotify />;
}
