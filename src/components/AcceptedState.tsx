import { useState } from "react";
import PixelCat from "./PixelCat";
import FloatingHearts from "./FloatingHearts";
import qrCodeImage from "@/assets/qr-code.png";

const AcceptedState = () => {
  const [isQrExpanded, setIsQrExpanded] = useState(false);

  return (
    <>
      <FloatingHearts />
      <div className="animate-scale-in" style={{ animation: "scaleIn 0.4s ease-out" }}>
        {/* Red Theme Window (Matching Reference Image 1) */}
        <div
          className="relative w-[480px] md:w-[560px] overflow-visible bg-[#fff5f5] border-4 border-[#ff4d4d] shadow-[8px_8px_0_0_rgba(0,0,0,0.1)] flex flex-col items-center"
          style={{
            imageRendering: 'pixelated',
            minHeight: '600px', // Increased height to fit QR code
            paddingBottom: '2rem',
          }}
        >
          {/* Decorative Header - Red Background, White Text */}
          <div className="w-full h-10 bg-[#ff4d4d] flex items-center justify-between px-4">
            <div className="flex gap-2">
              <span className="text-white text-xs">♥</span>
              <span className="text-white text-xs">♥</span>
              <span className="text-white text-xs">♥</span>
            </div>
            <div className="text-white font-bold tracking-[0.2em] text-lg font-pixel uppercase">LOVE</div>
            <div className="w-12"></div> {/* Spacer for centering */}
          </div>

          {/* Content */}
          <div className="flex-1 w-full p-6 flex flex-col items-center justify-start gap-4 relative">

            {/* Floating hearts around cat */}
            <div className="absolute top-16 left-20 animate-bounce-soft text-[#ff4d4d]">♥</div>
            <div className="absolute top-12 right-24 animate-pulse text-[#ff8fab]">♥</div>

            <div className="mt-2">
              <PixelCat happy />
            </div>

            <div className="flex flex-col items-center gap-1">
              <p className="text-[#ff4d4d] text-2xl md:text-3xl font-bold font-pixel tracking-wide animate-pulse-glow text-center">
                Yippeeee!
              </p>
            </div>

            {/* Date Box - Red Border, Pink Background */}
            <div className="w-full max-w-[90%] border-4 border-[#ff4d4d] bg-[#ffe6e6] p-4 text-center mt-2 relative">
              <p className="text-[10px] md:text-xs text-[#888] font-bold tracking-widest mb-2 uppercase">
                ♡ Valentine Day ♡
              </p>

              <div className="font-pixel text-[#333] space-y-1">
                <p className="text-lg md:text-xl font-bold">
                  Love You Naa Jaa
                </p>
                <p className="text-base md:text-lg">
                  Jup Jup
                </p>
                <p className="text-base md:text-lg">
                  💖💗❤️
                </p>
              </div>

              <p className="text-[#ff4d4d] text-sm mt-3 font-bold uppercase tracking-wide flex items-center justify-center gap-2">
                อยู่ด้วยกันไปนานๆน้าาา <span className="animate-spin-slow">✨</span>
              </p>
            </div>

            {/* Support / Contact Section (New) */}
            <div className="w-full max-w-[90%] mt-4 flex flex-col items-center gap-3 border-t-2 border-dashed border-[#ffb7c5] pt-4">
              <p className="text-[#ff4d4d] font-pixel text-xs md:text-sm animate-pulse font-bold">
                💌 ติดต่อเพิ่มเติม / สนับสนุนเราได้ที่ 👇
              </p>

              <div
                className="relative group cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setIsQrExpanded(true)}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-red-400 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-white p-2 rounded-lg border-2 border-[#ff4d4d]">
                  <img
                    src={qrCodeImage}
                    alt="QR Code PromptPay"
                    className="w-32 h-32 md:w-36 md:h-36 object-contain"
                    style={{ imageRendering: "pixelated" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors rounded-lg">
                    <span className="opacity-0 group-hover:opacity-100 text-white text-[10px] bg-black/60 px-2 py-1 rounded font-pixel">
                      Click to zoom
                    </span>
                  </div>
                </div>

                {/* Cute bouncing decoration */}
                <div className="absolute -top-3 -right-3 animate-bounce-soft text-xl">✨</div>
              </div>

              <p className="text-[#ff8fab] text-[10px] md:text-xs font-pixel mt-1">
                ขอบคุณนะค๊าบบบบ~ 💖
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Expanded QR Code Overlay */}
      {isQrExpanded && (
        <div
          className="fixed inset-0 bg-black/80 z-[10000] flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
          onClick={() => setIsQrExpanded(false)}
        >
          <div className="relative bg-white p-4 rounded-xl animate-scale-in max-w-[90vw] max-h-[90vh] flex flex-col items-center gap-4">
            <div className="border-4 border-[#ff4d4d] p-2 rounded-lg bg-white">
              <img
                src={qrCodeImage}
                alt="QR Code Fullscreen"
                className="max-w-full max-h-[70vh] object-contain"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <p className="text-[#ff4d4d] font-pixel text-sm md:text-base animate-pulse">
              แตะที่ไหนก็ได้เพื่อปิด
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scaleIn {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
};

export default AcceptedState;
