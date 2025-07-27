"use client"

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { ImageProps } from "next/dist/shared/lib/image-external";

interface ScrollUnblurImageProps extends Omit<ImageProps, "ref"> {
  blurAmount?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function ScrollUnblurImage({
  blurAmount = 20,
  className = "",
  style = {},
  ...imageProps
}: ScrollUnblurImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;
    let hasUnblurred = false;
    const observer = new window.IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasUnblurred) {
            hasUnblurred = true;
            // Animate to unblurred state
            element.style.filter = `blur(0px)`;
            element.style.opacity = `1`;
            element.style.transform = `scale(1)`;
            obs.unobserve(element);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [blurAmount]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 will-change-transform will-change-filter will-change-opacity ${className}`}
      style={{ ...style, filter: `blur(${blurAmount}px)`, opacity: 0.3, transform: "scale(0.95)" }}
    >
      <Image {...imageProps} className="w-full h-full object-cover" />
    </div>
  );
}

export default ScrollUnblurImage; 