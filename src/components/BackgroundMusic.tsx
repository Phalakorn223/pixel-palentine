import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const BackgroundMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Create audio element
        const audio = new Audio("/bgm.mp3");
        audio.loop = true;
        audio.volume = 0.3;
        audioRef.current = audio;

        const handleFirstInteraction = () => {
            if (audioRef.current && !isPlaying) {
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                }).catch(err => {
                    console.log("Autoplay blocked:", err);
                });
            }
            // Remove listeners after first interaction
            window.removeEventListener("click", handleFirstInteraction);
            window.removeEventListener("keydown", handleFirstInteraction);
        };

        window.addEventListener("click", handleFirstInteraction);
        window.addEventListener("keydown", handleFirstInteraction);

        return () => {
            audio.pause();
            window.removeEventListener("click", handleFirstInteraction);
            window.removeEventListener("keydown", handleFirstInteraction);
        };
    }, []);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border-2 border-pink-200 hover:bg-pink-50 hover:border-pink-300 transition-all shadow-sm group"
                            onClick={togglePlay}
                        >
                            {isPlaying ? (
                                <Volume2 className="h-5 w-5 text-pink-500 animate-pulse" />
                            ) : (
                                <VolumeX className="h-5 w-5 text-gray-400" />
                            )}
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="left" className="bg-white border-pink-100 text-pink-600">
                        <p className="text-xs font-pixel">{isPlaying ? "Pause Music" : "Play Music"}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            {isPlaying && (
                <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-pink-100 shadow-sm animate-in fade-in slide-in-from-right-2 duration-500">
                    <p className="text-[10px] font-pixel text-pink-400 whitespace-nowrap">
                        🎵 Now Playing: Valentine BGM
                    </p>
                </div>
            )}
        </div>
    );
};

export default BackgroundMusic;
