'use client'

import { useState, useEffect } from "react";
import ImageComponent from "./Image";
import { getRandomLadyCydImage } from "@/lib/utils/images";

interface RandomLadyCydImageProps {
  className?: string;
  alt?: string;
}

/**
 * Displays a random Lady Cyd image from the available pool
 * Image changes on each page refresh
 */
export default function RandomLadyCydImage({
  className = "",
  alt = "Cyd Alex-Emenike - Lady Cyd"
}: RandomLadyCydImageProps) {
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    setImageSrc(getRandomLadyCydImage());
  }, []);

  if (!imageSrc) {
    return (
      <div className={`w-full h-full bg-secondary animate-pulse ${className}`} />
    );
  }

  return (
    <ImageComponent
      src={imageSrc}
      alt={alt}
      objectFit="cover"
      width="100%"
      height="100%"
      className={`w-full h-full ${className}`}
    />
  );
}
