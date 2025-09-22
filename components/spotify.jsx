import { useEffect, useState } from "react";

export default function Spotify() {
  const [playlistId, setPlaylistId] = useState(null);

  const token =
    "BQBD_fVhamnGJZ6E2LdTKOS3pHcnZjS2-2Cie4O_PShePT1NSqkdm7lcSAPsC1aWg8QHy9IIHN417s2tpCIYGZl6PDCdx-OHnPz_zFu1SWaWR98BwxnzTylX7g5ABGKpPGQMk4Wgu-ibdWft6oi-pQgbov2AX0GGBNL3tlVjgXz9hkHlAv0YUVfiaZyjYY8e3MY9MnpN-wLezmVDwbnHLroBH0Jbbwl43DzeYwPIvUpXVEmk9g9P_SK8spnxAxjAozEjHSnjN_yu3-FbPS_zV7odOfPFKxLJmYHBlXIG7J8DWj4pBWbWcGPm7vxGz2fA";

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
    return Array.isArray(response?.items) ? response.items : [];
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

  async function setupPlaylist() {
    try {
      const topTracks = await getTopTracks();
      if (!Array.isArray(topTracks)) {
        throw new Error("Top tracks not returned as array");
      }

      const uris = topTracks.map((track) => track.uri);
      const playlist = await createPlaylist(uris);
      setPlaylistId(playlist.id);
      console.log("Created playlist:", playlist.name, playlist.id);
    } catch (err) {
      console.error("Error creating playlist:", err);
    }
  }

  // 🔑 Run setupPlaylist when component mounts
  useEffect(() => {
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
