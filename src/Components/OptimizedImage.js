import React, { useState, useRef, useEffect } from "react";

const OptimizedImage = ({
  src,
  alt,
  className = "",
  placeholder = "/kothar_logo.png",
  loading = "lazy",
  priority = false,
  sizes = "100vw",
  quality = 75,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px 0px", // Start loading 50px before image comes into view
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Generate responsive image sources
  const generateSrcSet = (baseSrc) => {
    if (
      !baseSrc ||
      baseSrc.startsWith("data:") ||
      baseSrc.startsWith("blob:")
    ) {
      return baseSrc;
    }

    // For external URLs, return as is
    if (baseSrc.startsWith("http")) {
      return baseSrc;
    }

    // For local images, generate different sizes
    const baseName = baseSrc.replace(/\.[^/.]+$/, "");
    const extension = baseSrc.split(".").pop();

    return [
      `${baseName}-320w.${extension} 320w`,
      `${baseName}-640w.${extension} 640w`,
      `${baseName}-1024w.${extension} 1024w`,
      `${baseName}-1920w.${extension} 1920w`,
    ].join(", ");
  };

  // Generate WebP sources with fallback
  const generateWebPSources = (baseSrc) => {
    if (
      !baseSrc ||
      baseSrc.startsWith("data:") ||
      baseSrc.startsWith("blob:") ||
      baseSrc.startsWith("http")
    ) {
      return null;
    }

    const baseName = baseSrc.replace(/\.[^/.]+$/, "");
    const extension = baseSrc.split(".").pop();

    return [
      {
        srcSet: [
          `${baseName}-320w.webp 320w`,
          `${baseName}-640w.webp 640w`,
          `${baseName}-1024w.webp 1024w`,
          `${baseName}-1920w.webp 1920w`,
        ].join(", "),
        type: "image/webp",
      },
      {
        srcSet: generateSrcSet(baseSrc),
        type: `image/${extension}`,
      },
    ];
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  const webpSources = generateWebPSources(src);
  const fallbackSrc = hasError ? placeholder : src;

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: "16/9" }}
    >
      {/* Placeholder/Blur */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}

      {/* WebP Sources */}
      {isInView && webpSources && (
        <picture>
          {webpSources.map((source, index) => (
            <source
              key={index}
              srcSet={source.srcSet}
              type={source.type}
              sizes={sizes}
            />
          ))}
          <img
            src={fallbackSrc}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading={loading}
            onLoad={handleLoad}
            onError={handleError}
            sizes={sizes}
            {...props}
          />
        </picture>
      )}

      {/* Fallback for non-WebP browsers or external images */}
      {isInView && !webpSources && (
        <img
          src={fallbackSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          srcSet={generateSrcSet(fallbackSrc)}
          sizes={sizes}
          {...props}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
