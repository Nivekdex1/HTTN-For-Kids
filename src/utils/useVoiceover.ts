import { useEffect, useRef } from 'react';

interface VoiceoverConfig {
  content: string;
  voiceGender?: 'male' | 'female';
  autoplay?: boolean;
  delay?: number;
  onStart?: () => void;
  onEnd?: () => void;
}

export function useVoiceover({ content, voiceGender = 'female', autoplay = true, delay = 1000, onStart, onEnd }: VoiceoverConfig) {
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const isPlayingRef = useRef<boolean>(false);

  useEffect(() => {
    if (!('speechSynthesis' in window)) return;

    synthRef.current = window.speechSynthesis;
    utteranceRef.current = new SpeechSynthesisUtterance(content);
    
    // Add end event listener to update playing state and notify caller
    utteranceRef.current.onend = () => {
      isPlayingRef.current = false;
      try {
        onEnd?.();
      } catch (err) {
        console.error('useVoiceover onEnd callback error', err);
      }
    };

    // Configure voice
    if (synthRef.current.getVoices().length > 0) {
      const voices = synthRef.current.getVoices();
      const preferredVoice = voices.find(
        voice => voice.name.toLowerCase().includes(voiceGender) ||
                voice.name.toLowerCase().includes('google') ||
                voice.name.toLowerCase().includes('microsoft')
      );
      if (preferredVoice) {
        utteranceRef.current.voice = preferredVoice;
      }
    }

    // Configure speech settings
    if (utteranceRef.current) {
      utteranceRef.current.rate = 0.9;  // Slightly slower
      utteranceRef.current.pitch = 1.0;
      utteranceRef.current.volume = 1.0;
    }

    // Handle voice loading
    const handleVoicesChanged = () => {
      if (utteranceRef.current && synthRef.current) {
        const voices = synthRef.current.getVoices();
        const preferredVoice = voices.find(
          voice => voice.name.toLowerCase().includes(voiceGender) ||
                  voice.name.toLowerCase().includes('google') ||
                  voice.name.toLowerCase().includes('microsoft')
        );
        if (preferredVoice) {
          utteranceRef.current.voice = preferredVoice;
        }
      }
    };

    synthRef.current.addEventListener('voiceschanged', handleVoicesChanged);

    // Auto-play if enabled
    if (autoplay) {
      const timer = setTimeout(() => {
        if (synthRef.current && utteranceRef.current) {
          synthRef.current.cancel(); // Cancel any ongoing speech
          isPlayingRef.current = true;
          try {
            onStart?.();
          } catch (err) {
            console.error('useVoiceover onStart callback error', err);
          }
          synthRef.current.speak(utteranceRef.current);
        }
      }, delay);

      return () => {
        clearTimeout(timer);
        if (isPlayingRef.current) {
          synthRef.current?.cancel();
        }
        synthRef.current?.removeEventListener('voiceschanged', handleVoicesChanged);
      };
    }

    return () => {
      synthRef.current?.cancel();
      synthRef.current?.removeEventListener('voiceschanged', handleVoicesChanged);
    };
  }, [content, voiceGender, autoplay, delay]);

  const playVoiceover = () => {
    if (synthRef.current && utteranceRef.current) {
      synthRef.current.cancel(); // Cancel any ongoing speech
      isPlayingRef.current = true;
      try {
        onStart?.();
      } catch (err) {
        console.error('useVoiceover onStart callback error', err);
      }
      synthRef.current.speak(utteranceRef.current);
    }
  };

  const stopVoiceover = () => {
    if (synthRef.current) {
      isPlayingRef.current = false;
      synthRef.current.cancel();
    }
  };

  const pauseVoiceover = () => {
    try {
      if (synthRef.current && synthRef.current.speaking && !synthRef.current.paused) {
        synthRef.current.pause();
      }
    } catch (err) {
      console.error('useVoiceover pauseVoiceover error', err);
    }
  };

  const resumeVoiceover = () => {
    try {
      if (synthRef.current && synthRef.current.paused) {
        synthRef.current.resume();
      }
    } catch (err) {
      console.error('useVoiceover resumeVoiceover error', err);
    }
  };

  return { playVoiceover, stopVoiceover, pauseVoiceover, resumeVoiceover };
}