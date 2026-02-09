import React, { useState, useEffect } from "react";
// @ts-ignore
import ReactPlayer from "react-player";
import { Music, Music2, Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const BackgroundMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    // Auto-play attempt on first interaction with the page
    useEffect(() => {
        const handleFirstInteraction = () => {
            if (!hasInteracted) {
                setHasInteracted(true);
                setIsPlaying(true);
            }
        };

        window.addEventListener("click", handleFirstInteraction);
        window.addEventListener("keydown", handleFirstInteraction);

        return () => {
            window.removeEventListener("click", handleFirstInteraction);
            window.removeEventListener("keydown", handleFirstInteraction);
        };
    }, [hasInteracted]);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
            <div className="hidden">
                {/* @ts-ignore */}
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=BH-SnQ8J1VU"
                    playing={isPlaying}
                    loop={true}
                    volume={0.5}
                    muted={isMuted}
                    width="0"
                    height="0"
                />
            </div>

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
                        🎵 Now Playing: And So It Begins
                    </p>
                </div>
            )}
        </div>
    );
};

export default BackgroundMusic;
