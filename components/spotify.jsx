
import { useEffect, useState } from "react";

export default function SpotifyPlaylistCreator() {
    const [playlistId, setPlaylistId] = useState(null);
    
    const token = "BQDKc360Ni3DYHIAO7Falg9oN-bSsuhcsZcJSF3k8yu0hGpQbuIhnsgyXQ8t4dljI8i9l5pmFyGkU4168Svs4PxWiLjm3NX8KWXKEi-6idbTuktzfsENNvXEJlfYa52kL2VHRRO1Qi8I6psN7Qwvd_KzZslR-bvpLcMaPnwLHse82y0uwCOvBw3hNa3wuRa9lnzHs57R36V94F2YU1xVxAbpeeO4OgtOUxyBBqHLPbrTFXSnmz48hw6Y50GulmYiHpC5XsQqPYq_jrR0wMb3uY_DpQkFNogI5Z5JJudNaq_BgDLLzNRZRphnx5wVX7yt"; // Replace with a valid token
//   const token = "YOUR_SPOTIFY_TOKEN_HERE"; // Replace with a fresh token

  async function fetchWebApi(endpoint, method = "GET", body = null) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });
    return await res.json();
  }

  async function getTopTracks() {
    const response = await fetchWebApi(
      "v1/me/top/tracks?time_range=long_term&limit=50"
    );
    return response.items;
  }

  async function createPlaylist(tracksUri) {
    const { id: user_id } = await fetchWebApi("v1/me", "GET");

    const playlist = await fetchWebApi(
      `v1/users/${user_id}/playlists`,
      "POST",
      {
        name: "My Top Tracks Playlist",
        description: "Created via Spotify Web API",
        public: false,
      }
    );

    await fetchWebApi(
      `v1/playlists/${playlist.id}/tracks?uris=${tracksUri.join(",")}`,
      "POST"
    );

    return playlist;
  }

  useEffect(() => {
    async function setupPlaylist() {
      try {
        const topTracks = await getTopTracks();
        const uris = topTracks.map((track) => track.uri);
        const playlist = await createPlaylist(uris);
        setPlaylistId(playlist.id);
        console.log("Created playlist:", playlist.name, playlist.id);
      } catch (err) {
        console.error("Error creating playlist:", err);
      }
    }

    setupPlaylist();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎶 Your Spotify Playlist</h1>
      {playlistId ? (
        <iframe
          title="Spotify Embed: Top Tracks Playlist"
          src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
          width="100%"
          height="100%"
          style={{ minHeight: "360px" }}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      ) : (
        <p>Creating playlist...</p>
      )}
    </div>
  );
}
