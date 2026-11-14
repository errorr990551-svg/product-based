import React, { useState } from "react";

// Shows the YouTube thumbnail with a play button and only loads the real
// (heavy, ~3 MB) YouTube player after the visitor clicks it.
// The element keeps the className/style passed in, so it occupies exactly the
// same box the iframe used to (no layout shift). The parent box must give it a
// size; the button itself must be positioned (absolute/relative) so the
// thumbnail and play icon can be layered inside it.
export default function LiteYouTube({ id, title, className = "", style }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className={className}
        style={{ border: 0, ...style }}
        src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      style={{
        border: 0,
        padding: 0,
        margin: 0,
        cursor: "pointer",
        overflow: "hidden",
        background: "#000",
        display: "block",
        width: "100%",
        height: "100%",
        ...style,
      }}
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt={title}
        loading="lazy"
        width="480"
        height="360"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <svg
        viewBox="0 0 68 48"
        width="68"
        height="48"
        aria-hidden="true"
        style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <path d="M66.5 7.7c-.8-2.9-3-5.2-5.9-6C55.3.3 34 .3 34 .3s-21.3 0-26.6 1.4c-2.9.8-5.1 3.1-5.9 6C.1 13 .1 24 .1 24s0 11 1.4 16.3c.8 2.9 3 5.2 5.9 6 5.3 1.4 26.6 1.4 26.6 1.4s21.3 0 26.6-1.4c2.9-.8 5.1-3.1 5.9-6C67.9 35 67.9 24 67.9 24s0-11-1.4-16.3z" fill="#f00" />
        <path d="M45 24 27 14v20" fill="#fff" />
      </svg>
    </button>
  );
}
