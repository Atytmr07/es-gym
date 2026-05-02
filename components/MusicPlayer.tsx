"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Play, Pause, ChevronUp, Volume2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const VIDEO_ID = "pEskP0ulPlA";

declare global {
  interface Window {
    YT: {
      Player: new (
        el: HTMLElement,
        opts: {
          videoId: string;
          playerVars: Record<string, number | string>;
          events: {
            onReady?: (e: { target: YTPlayer }) => void;
            onStateChange?: (e: { data: number }) => void;
          };
        }
      ) => YTPlayer;
      PlayerState: { PLAYING: number; PAUSED: number; ENDED: number };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  setVolume(v: number): void;
  getPlayerState(): number;
  destroy(): void;
}

export default function MusicPlayer() {
  const playerRef = useRef<YTPlayer | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const [showVolume, setShowVolume] = useState(false);

  const initPlayer = useCallback(() => {
    if (!containerRef.current || playerRef.current) return;
    playerRef.current = new window.YT.Player(containerRef.current, {
      videoId: VIDEO_ID,
      playerVars: {
        autoplay: 0,
        controls: 0,
        loop: 1,
        playlist: VIDEO_ID,
        modestbranding: 1,
        rel: 0,
        playsinline: 1,
      },
      events: {
        onReady: (e) => {
          e.target.setVolume(60);
          setReady(true);
        },
        onStateChange: (e) => {
          setPlaying(e.data === window.YT.PlayerState.PLAYING);
        },
      },
    });
  }, []);

  useEffect(() => {
    if (window.YT?.Player) {
      initPlayer();
      return;
    }
    window.onYouTubeIframeAPIReady = initPlayer;
    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }
    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [initPlayer]);

  const toggle = () => {
    if (!ready || !playerRef.current) return;
    if (playing) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const handleVolume = (v: number) => {
    setVolume(v);
    playerRef.current?.setVolume(v);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">

      {/* Volume slider */}
      <AnimatePresence>
        {showVolume && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="bg-zinc-900/95 backdrop-blur-sm border border-zinc-700/60 rounded-2xl px-4 py-3 flex flex-col items-center gap-2 shadow-xl"
          >
            <Volume2 className="w-3.5 h-3.5 text-zinc-400" />
            <input
              type="range"
              min={0}
              max={100}
              value={volume}
              onChange={(e) => handleVolume(Number(e.target.value))}
              className="h-20 cursor-pointer accent-[#FFC107]"
              style={{ writingMode: "vertical-lr", direction: "rtl" }}
            />
            <span className="text-zinc-500 text-[10px] font-bold">{volume}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main widget */}
      <div className="flex items-center gap-2">

        {/* Volume button */}
        <button
          onClick={() => setShowVolume((v) => !v)}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
            showVolume
              ? "bg-[#FFC107] text-gray-900"
              : "bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 text-zinc-400 hover:text-white"
          }`}
        >
          <ChevronUp className={`w-4 h-4 transition-transform duration-200 ${showVolume ? "rotate-180" : ""}`} />
        </button>

        {/* Play / Pause */}
        <button
          onClick={toggle}
          disabled={!ready}
          className="w-11 h-11 bg-zinc-900/95 backdrop-blur-sm border border-zinc-700/60 rounded-full flex items-center justify-center hover:border-[#FFC107]/50 transition-all duration-200 shadow-lg disabled:opacity-40 group"
        >
          {playing ? (
            <Pause className="w-4 h-4 text-[#FFC107]" />
          ) : (
            <Play className="w-4 h-4 text-zinc-300 group-hover:text-[#FFC107] transition-colors ml-0.5" />
          )}
        </button>

        {/* Label */}
        <AnimatePresence>
          {playing && (
            <motion.div
              initial={{ opacity: 0, x: -6, width: 0 }}
              animate={{ opacity: 1, x: 0, width: "auto" }}
              exit={{ opacity: 0, x: -6, width: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="bg-zinc-900/95 backdrop-blur-sm border border-zinc-700/60 rounded-full px-3 py-2 flex items-center gap-2 shadow-lg whitespace-nowrap">
                {/* Animated bars */}
                <div className="flex items-end gap-[3px] h-3.5">
                  {[1, 0.6, 0.9, 0.4, 0.8].map((h, i) => (
                    <motion.div
                      key={i}
                      className="w-[3px] bg-[#FFC107] rounded-full"
                      animate={{ scaleY: [h, 0.2, h * 0.8, 0.3, h] }}
                      transition={{
                        duration: 0.9,
                        repeat: Infinity,
                        delay: i * 0.12,
                        ease: "easeInOut",
                      }}
                      style={{ height: "100%", transformOrigin: "bottom" }}
                    />
                  ))}
                </div>
                <span className="text-white text-[11px] font-bold">Carnival</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hidden YouTube iframe mount point */}
      <div className="absolute opacity-0 pointer-events-none w-px h-px overflow-hidden">
        <div ref={containerRef} />
      </div>
    </div>
  );
}
