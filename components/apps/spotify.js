import React from 'react';

export default function Spotify() {
    return (
        <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/47drhs5RLDwX2hxrsZdVs3?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify"
            className="h-full w-full bg-ub-cool-grey"
        ></iframe>
    );
}

export const displaySpotify = () => {
    return <Spotify />;
};
