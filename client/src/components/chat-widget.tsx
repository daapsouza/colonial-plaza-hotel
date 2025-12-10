import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeText = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowText(false);
  };

  return (
    <div id="BeeBotStruct" className="fixed z-50" data-testid="chat-widget">
      {/* Icon Content - Floating Button */}
      <div 
        id="icon-content" 
        className="fixed bottom-3 right-6"
        style={{ display: isOpen ? 'none' : 'block' }}
      >
        {/* Text Bubble */}
        {showText && (
          <div 
            className="absolute bottom-full right-0 mb-2 flex flex-col items-end"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <div 
                onClick={toggleChat}
                className="px-4 py-2 text-white font-semibold text-sm cursor-pointer bg-[#2563eb] text-center"
                data-testid="text-title-chat"
              >
                Melhor tarifa aqui!
              </div>
              <div 
                onClick={toggleChat}
                className="px-4 py-2 text-sm cursor-pointer text-[#1a3a5c] bg-white text-center font-medium"
                data-testid="text-subtitle-chat"
              >
                Atendimento 24h
              </div>
              <button
                onClick={closeText}
                className="absolute top-1 right-1 w-5 h-5 flex items-center justify-center text-xs font-bold rounded-full bg-white/80 text-[#2563eb] hover:bg-white"
                data-testid="button-close-text"
              >
                x
              </button>
            </div>
            {/* Arrow pointing to avatar */}
            <div 
              className="w-0 h-0 mr-6"
              style={{
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '8px solid #ffffff'
              }}
            />
          </div>
        )}
        
        {/* Avatar Button */}
        <img 
          id="icon-bot"
          src="https://hsystem-hbot.s3.us-east-1.amazonaws.com/public/DEFAULT-AVATARS/25.png"
          onClick={toggleChat}
          className="w-16 h-16 rounded-full cursor-pointer shadow-lg object-cover transition-transform hover:scale-105 border-2 border-[#2563eb]"
          alt="avatar chatbot"
          data-testid="button-toggle-chat"
        />
      </div>

      {/* Chat Content - Iframe Container */}
      {isOpen && (
        <div 
          id="chat-content"
          className="fixed bottom-3 right-3 w-[380px] h-[650px] bg-white rounded-lg shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300 flex flex-col"
          style={{ maxHeight: 'calc(100vh - 80px)' }}
        >
          {/* Minimize Button */}
          <button
            id="chat-min"
            onClick={toggleChat}
            className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
            data-testid="button-minimize-chat"
          >
            <span className="w-4 h-0.5 bg-gray-600" />
          </button>

          {/* Loading State */}
          {isLoading && (
            <div className="absolute inset-0 bg-white flex flex-col items-center justify-center z-5">
              <img 
                id="chat-loader"
                src="https://hsystem-hbot.s3.us-east-1.amazonaws.com/public/DEFAULT-AVATARS/25.png"
                className="w-20 h-20 rounded-full animate-pulse"
                alt="Loading"
              />
              <p className="mt-4 text-gray-600 text-center">Carregando...</p>
            </div>
          )}

          {/* BeeBot Iframe */}
          <iframe 
            id="beebot-chat"
            src="https://beebot.omnibees.com/assistent-hbot/636136f22bb1c200010aa7ed"
            className="w-full flex-1 border-0"
            style={{ visibility: isLoading ? 'hidden' : 'visible' }}
            title="Assistente Virtual Colonial Plaza Hotel"
            data-testid="iframe-beebot"
          />

          {/* Contact Buttons */}
          <div className="p-3 bg-gray-50 border-t flex gap-2">
            <a 
              href="https://api.whatsapp.com/send?phone=5512992578072&text=Olá,%20gostaria%20de%20fazer%20uma%20cotação%20de%20reserva."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-lg py-2.5 px-3 transition-colors text-sm font-medium"
              data-testid="link-whatsapp-chat"
            >
              <SiWhatsapp className="h-4 w-4" />
              <span>(12) 99257-8072</span>
            </a>
            <a 
              href="tel:551236443644"
              className="flex-1 flex items-center justify-center gap-2 text-white rounded-lg py-2.5 px-3 transition-colors text-sm font-medium bg-[#1a3a5c] hover:bg-[#0f2540]"
              data-testid="link-phone-chat"
            >
              <Phone className="h-4 w-4" />
              <span>(12) 3644-3644</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          #chat-content {
            width: calc(100vw - 20px) !important;
            height: calc(100vh - 80px) !important;
            right: 10px !important;
            bottom: 10px !important;
          }
        }
      `}</style>
    </div>
  );
}
