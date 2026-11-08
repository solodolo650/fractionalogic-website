import Image, { type StaticImageData } from 'next/image';
import type { CSSProperties } from 'react';

/*
 * Thin wrapper over next/image that accepts the props the Astro version used.
 * `widths`/`densities` are hints only: Next generates its own responsive set from `sizes`
 * (or from width/height for fixed-size images such as partner portraits).
 */
interface Props {
  src: StaticImageData | string;
  alt: string;
  className?: string;
  sizes?: string;
  widths?: number[];
  densities?: number[];
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  style?: CSSProperties;
}

export default function Img({ src, alt, className, sizes, width, height, loading, fetchPriority, style }: Props) {
  const priority = loading === 'eager' || fetchPriority === 'high';
  if (typeof src === 'string') {
    // Remote (CMS) images arrive without intrinsic size; let CSS size them.
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={className} style={style} loading={loading ?? 'lazy'} decoding="async" />;
  }
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      style={style}
      sizes={sizes}
      width={width ?? src.width}
      height={height ?? (width ? Math.round((width * src.height) / src.width) : src.height)}
      priority={priority}
      loading={priority ? undefined : 'lazy'}
      quality={82}
    />
  );
}
