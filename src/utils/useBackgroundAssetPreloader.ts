import { useEffect } from 'react';

const imageModules = import.meta.glob<string>(
  '../assets/**/*.{png,jpg,jpeg,gif,webp,avif}',
  { eager: true, import: 'default' }
);

const videoModules = import.meta.glob<string>(
  '../assets/**/*.{mp4,webm,mov}',
  { eager: true, import: 'default' }
);

const audioModules = import.meta.glob<string>(
  '../assets/**/*.{mp3,m4a,wav,ogg}',
  { eager: true, import: 'default' }
);

const imageAssets = Object.values(imageModules);
const videoAssets = Object.values(videoModules);
const audioAssets = Object.values(audioModules);

type IdleHandle = number;

declare global {
  interface Window {
    requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => IdleHandle;
    cancelIdleCallback?: (handle: IdleHandle) => void;
  }
}

function runWhenIdle(callback: () => void) {
  if (typeof window === 'undefined') {
    return () => void 0;
  }

  if (typeof window.requestIdleCallback === 'function') {
    const idleHandle = window.requestIdleCallback(() => callback());
    return () => window.cancelIdleCallback?.(idleHandle);
  }

  const timeout = window.setTimeout(callback, 300);
  return () => window.clearTimeout(timeout);
}

export function useBackgroundAssetPreloader() {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const loadedMedia: Array<HTMLImageElement | HTMLVideoElement | HTMLAudioElement> = [];

    const loadImages = () => {
      imageAssets.forEach((src) => {
        const img = new Image();
        img.decoding = 'async';
        img.loading = 'lazy';
        img.src = src;
        loadedMedia.push(img);
      });
    };

    const loadVideos = () => {
      videoAssets.forEach((src) => {
        const video = document.createElement('video');
        video.preload = 'auto';
        video.src = src;
        video.load();
        loadedMedia.push(video);
      });
    };

    const loadAudios = () => {
      audioAssets.forEach((src) => {
        const audio = new Audio();
        audio.preload = 'auto';
        audio.src = src;
        audio.load();
        loadedMedia.push(audio);
      });
    };

    const cancelImages = runWhenIdle(loadImages);
    const cancelVideos = runWhenIdle(loadVideos);
    const cancelAudios = runWhenIdle(loadAudios);

    return () => {
      cancelImages();
      cancelVideos();
      cancelAudios();
      loadedMedia.forEach((media) => {
        if (media instanceof HTMLVideoElement || media instanceof HTMLAudioElement) {
          media.pause();
          media.removeAttribute('src');
          media.load();
        } else if (media instanceof HTMLImageElement) {
          media.src = '';
        }
      });
    };
  }, []);
}
