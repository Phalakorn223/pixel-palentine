import { useState } from "react";
import PixelEnvelope from "@/components/PixelEnvelope";
import LetterWindow from "@/components/LetterWindow";
import AcceptedState from "@/components/AcceptedState";
import BackgroundMusic from "@/components/BackgroundMusic";

type AppState = "closed" | "question" | "accepted";

const Index = () => {
  const [state, setState] = useState<AppState>("closed");

  return (
    <div className="min-h-screen flex items-center justify-center bg-background heart-pattern overflow-hidden">
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
