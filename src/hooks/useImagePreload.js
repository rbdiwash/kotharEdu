import { useState, useEffect } from "react";

const useImagePreload = (imageUrls, priority = false) => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [loadingImages, setLoadingImages] = useState(new Set());
  const [failedImages, setFailedImages] = useState(new Set());

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) return;

    const preloadImages = async () => {
      const promises = imageUrls.map((url) => {
        if (
          loadedImages.has(url) ||
          loadingImages.has(url) ||
          failedImages.has(url)
        ) {
          return Promise.resolve();
        }

        setLoadingImages((prev) => new Set([...prev, url]));

        return new Promise((resolve) => {
          const img = new Image();

          img.onload = () => {
            setLoadedImages((prev) => new Set([...prev, url]));
            setLoadingImages((prev) => {
              const newSet = new Set(prev);
              newSet.delete(url);
              return newSet;
            });
            resolve();
          };

          img.onerror = () => {
            setFailedImages((prev) => new Set([...prev, url]));
            setLoadingImages((prev) => {
              const newSet = new Set(prev);
              newSet.delete(url);
              return newSet;
            });
            resolve();
          };

          // Add preload link for critical images
          if (priority) {
            const link = document.createElement("link");
            link.rel = "preload";
            link.as = "image";
            link.href = url;
            document.head.appendChild(link);
          }

          img.src = url;
        });
      });

      await Promise.all(promises);
    };

    preloadImages();
  }, [imageUrls, priority, loadedImages, loadingImages, failedImages]);

  return {
    loadedImages,
    loadingImages,
    failedImages,
    isLoaded: (url) => loadedImages.has(url),
    isLoading: (url) => loadingImages.has(url),
    hasFailed: (url) => failedImages.has(url),
    allLoaded: imageUrls?.every((url) => loadedImages.has(url)) || false,
  };
};

export default useImagePreload;
