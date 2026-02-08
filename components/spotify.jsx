"use client";

import { useEffect, useState } from "react";

export default function SpotifyTopTracksPreview() {
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const token = process.env.NEXT_PUBLIC_REACT_APP_SPOTIFY_TOKEN;
  console.log("Token from env:", process.env.NEXT_PUBLIC_REACT_APP_SPOTIFY_TOKEN);


  async function fetchWebApi(endpoint, method = "GET") {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw new Error(`Spotify API error: ${res.status}`);
    return res.json();
  }

  async function getTopTracks() {
    const response = await fetchWebApi(
      "v1/me/top/tracks?time_range=long_term&limit=5"
    );
    const items = Array.isArray(response?.items) ? response.items : [];
    return items.map((t) => ({
      id: t.id,
      name: t.name,
      artists: t.artists?.map((a) => a.name) ?? [],
      uri: t.uri,
    }));
  }

// async function getTopTracks() {
//   return [
//     {
//       id: "3n3Ppam7vgaVa1iaRUc9Lp",
//       name: "Hey Ya!",
//       artists: ["Outkast"],
//       uri: "spotify:track:3n3Ppam7vgaVa1iaRUc9Lp",
//     },
//     {
//       id: "7ouMYWpwJ422jRcDASZB7P",
//       name: "Blinding Lights",
//       artists: ["The Weeknd"],
//       uri: "spotify:track:7ouMYWpwJ422jRcDASZB7P",
//     },
//     {
//       id: "0VjIjW4GlUZAMYd2vXMi3b",
//       name: "Save Your Tears",
//       artists: ["The Weeknd"],
//       uri: "spotify:track:0VjIjW4GlUZAMYd2vXMi3b",
//     },
//     {
//       id: "3AJwUDP919kvQ9QcozQPxg",
//       name: "Shape of You",
//       artists: ["Ed Sheeran"],
//       uri: "spotify:track:3AJwUDP919kvQ9QcozQPxg",
//     },
//     {
//       id: "0e7ipj03S05BNilyu5bRzt",
//       name: "Levitating",
//       artists: ["Dua Lipa"],
//       uri: "spotify:track:0e7ipj03S05BNilyu5bRzt",
//     },
//     {
//       id: "1fDsrQ23eTAVFElUMaf38X",
//       name: "Uptown Funk",
//       artists: ["Mark Ronson", "Bruno Mars"],
//       uri: "spotify:track:1fDsrQ23eTAVFElUMaf38X",
//     },
//     {
//       id: "0tgVpDi06FyKpA1z0VMD4v",
//       name: "Perfect",
//       artists: ["Ed Sheeran"],
//       uri: "spotify:track:0tgVpDi06FyKpA1z0VMD4v",
//     },
//     {
//       id: "2VxeLyX666F8uXCJ0dZF8B",
//       name: "Peaches",
//       artists: ["Justin Bieber", "Daniel Caesar", "Giveon"],
//       uri: "spotify:track:2VxeLyX666F8uXCJ0dZF8B",
//     },
//     {
//       id: "4iJyoBOLtHqaGxP12qzhQI",
//       name: "Sunflower",
//       artists: ["Post Malone", "Swae Lee"],
//       uri: "spotify:track:4iJyoBOLtHqaGxP12qzhQI",
//     },
//     {
//       id: "2xLMifQCjDGFmkHkpNLD9h",
//       name: "Bad Guy",
//       artists: ["Billie Eilish"],
//       uri: "spotify:track:2xLMifQCjDGFmkHkpNLD9h",
//     },
//     {
//       id: "1rqqCSm0Qe4I9rUvWncaom",
//       name: "Dance Monkey",
//       artists: ["Tones and I"],
//       uri: "spotify:track:1rqqCSm0Qe4I9rUvWncaom",
//     },
//   ];
// }


  useEffect(() => {
    (async () => {
      try {
        const top = await getTopTracks();
        setTracks(top);
      } catch (e) {
        setError(e?.message || "Failed to load tracks");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div style={{ padding: 20, maxWidth: 1100, margin: "0 auto" }}>
      <h1>🎧 Spotify Top Tracks Preview</h1>

      {loading && <p>Loading your tracks…</p>}

      {error && (
        <p style={{ color: "crimson" }}>
          {error} — ensure the token has <code>user-top-read</code> scope.
        </p>
      )}

      {!loading && !error && tracks.length === 0 && <p>No tracks found.</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 16,
          marginTop: 16,
        }}
      >
        {tracks.map((t) => (
          <div key={t.id} style={{ borderRadius: 12, overflow: "hidden" }}>
            <iframe
              title={`Track ${t.name}`}
              src={`https://open.spotify.com/embed/track/${t.id}?utm_source=generator&theme=0`}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}