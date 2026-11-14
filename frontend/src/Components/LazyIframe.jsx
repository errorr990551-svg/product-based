import React, { useEffect, useRef, useState } from "react";

// Renders an empty box of the same size until it is about to scroll into view,
// then swaps in the real iframe. Used for Google Maps so its ~2 MB of scripts
// are not downloaded by visitors who never scroll down to the map.
export default function LazyIframe({ width, height, style, className, title, ...rest }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) return undefined;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShow(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [show]);

  if (show) {
    return <iframe width={width} height={height} style={style} className={className} title={title} loading="lazy" {...rest} />;
  }
  const h = typeof height === "string" && /^\d+$/.test(height) ? Number(height) : height;
  return (
    <div
      ref={ref}
      className={className}
      role="img"
      aria-label={title}
      style={{ width: width || "100%", height: h, background: "#e5e3df", ...style }}
    />
  );
}
