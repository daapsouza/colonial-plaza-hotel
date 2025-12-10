import { useState, useEffect, useRef } from "react";
import { Calendar, Users, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import flatpickr from "flatpickr";
import { Portuguese } from "flatpickr/dist/l10n/pt";
import "flatpickr/dist/flatpickr.min.css";

export function BookingEngine() {
  const [checkInValue, setCheckInValue] = useState("");
  const [checkOutValue, setCheckOutValue] = useState("");
  const [adults, setAdults] = useState("1");
  const [children, setChildren] = useState("0");
  
  const dateInputRef = useRef<HTMLInputElement>(null);
  const fpRef = useRef<flatpickr.Instance | null>(null);

  useEffect(() => {
    if (dateInputRef.current && !fpRef.current) {
      fpRef.current = flatpickr(dateInputRef.current, {
        mode: "range",
        locale: Portuguese,
        dateFormat: "d/m/Y",
        minDate: "today",
        showMonths: 2,
        disableMobile: false,
        onChange: (selectedDates) => {
          if (selectedDates.length === 2) {
            const [start, end] = selectedDates;
            const formatDate = (d: Date) => {
              const day = String(d.getDate()).padStart(2, '0');
              const month = String(d.getMonth() + 1).padStart(2, '0');
              const year = d.getFullYear();
              return `${day}${month}${year}`;
            };
            setCheckInValue(formatDate(start));
            setCheckOutValue(formatDate(end));
          }
        },
      });
    }
    
    return () => {
      if (fpRef.current) {
        fpRef.current.destroy();
        fpRef.current = null;
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams({
      q: "7863",
      lang: "pt-BR",
      currencyId: "16",
      ad: adults,
      ch: children,
    });
    
    if (checkInValue) {
      params.append("CheckIn", checkInValue);
    }
    if (checkOutValue) {
      params.append("CheckOut", checkOutValue);
    }
    
    window.open(`https://book.omnibees.com/hotelresults?${params.toString()}`, "_blank");
  };

  return (
    <section className="bg-[#1a3a5c] py-2 md:py-3 shadow-md sticky top-12 md:top-14 z-40">
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row items-center justify-center gap-2 md:gap-3">
          <input type="hidden" name="lang" value="pt-BR" />
          <input type="hidden" name="currencyId" value="16" />
          
          <div className="flex items-center gap-1.5 md:gap-2 text-white mr-0 md:mr-2 mb-1 md:mb-0 bg-blue-500/30 px-3 py-1 rounded-full">
            <Calendar className="h-4 w-4 md:h-5 md:w-5 text-yellow-300" />
            <span className="text-sm md:text-base font-semibold whitespace-nowrap tracking-wide">Reserve sua estadia</span>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-1.5 md:gap-2 w-full md:w-auto">
            <div className="flex items-center bg-white rounded-md px-2 py-1.5 md:py-2 gap-2">
              <Calendar className="h-4 w-4 md:h-5 md:w-5 text-blue-600 flex-shrink-0" />
              <input
                ref={dateInputRef}
                type="text"
                placeholder="Check-in - Check-out"
                readOnly
                className="bg-transparent text-gray-800 text-xs md:text-sm w-[160px] md:w-[180px] cursor-pointer border-none outline-none"
                data-testid="input-dates"
              />
            </div>
            
            <div className="relative">
              <Users className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 md:h-4 md:w-4 text-gray-400" />
              <select
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="pl-7 md:pl-8 pr-1 md:pr-2 py-1.5 md:py-2 rounded-md bg-white text-gray-800 text-xs md:text-sm appearance-none cursor-pointer"
                data-testid="select-adults"
              >
                {[1,2,3,4,5,6,7,8,9,10].map(n => (
                  <option key={n} value={n}>{n} Adulto{n > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
            
            <div className="relative">
              <Baby className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 md:h-4 md:w-4 text-gray-400" />
              <select
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="pl-7 md:pl-8 pr-1 md:pr-2 py-1.5 md:py-2 rounded-md bg-white text-gray-800 text-xs md:text-sm appearance-none cursor-pointer"
                data-testid="select-children"
              >
                {[0,1,2,3,4,5].map(n => (
                  <option key={n} value={n}>{n} Criança{n !== 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <Button 
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 md:px-8 py-1.5 md:py-2 text-xs md:text-sm"
              data-testid="button-booking-search"
            >
              RESERVAR
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
