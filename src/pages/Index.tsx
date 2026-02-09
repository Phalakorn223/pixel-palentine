import { useState } from "react";
import PixelEnvelope from "@/components/PixelEnvelope";
import LetterWindow from "@/components/LetterWindow";
import AcceptedState from "@/components/AcceptedState";
import BackgroundMusic from "@/components/BackgroundMusic";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

type AppState = "initial" | "closed" | "question" | "accepted";

const Index = () => {
  const [state, setState] = useState<AppState>("initial");

  const startApp = (e: React.MouseEvent) => {
    // This click event will bubble up and be caught by the interaction listener in BackgroundMusic
    setState("closed");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background heart-pattern overflow-hidden">
      {state === "initial" && (
        <div className="fixed inset-0 z-[100] bg-pink-50/90 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center animate-in fade-in duration-700">
          <div className="bg-white p-8 rounded-2xl border-4 border-pink-200 shadow-xl max-w-sm w-full space-y-6">
            <Heart className="w-16 h-16 text-pink-400 mx-auto animate-bounce" fill="currentColor" />
            <div className="space-y-2">
              <h1 className="text-2xl font-pixel text-pink-500">For You...</h1>
              <p className="text-sm font-pixel text-pink-400 opacity-80">I have a special message waiting inside.</p>
            </div>
            <Button
              onClick={startApp}
              className="w-full h-12 text-lg font-pixel bg-pink-400 hover:bg-pink-500 text-white rounded-xl shadow-lg transform active:scale-95 transition-all"
            >
              Open It
            </Button>
          </div>
        </div>
      )}

      {state === "closed" && (
        <PixelEnvelope onClick={() => setState("question")} />
      )}

      {state === "question" && (
        <LetterWindow onAccept={() => setState("accepted")} />
      )}

      {state === "accepted" && <AcceptedState />}

      <BackgroundMusic />
    </div>
  );
};

export default Index;
