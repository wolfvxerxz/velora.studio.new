"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Page(): React.ReactElement {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <main className="min-h-screen bg-[#0f0f0f] py-8 sm:py-16">
      <div className="w-full px-0 sm:px-4 flex flex-col items-center">
        <div className="bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 flex flex-col sm:flex-row items-center gap-2 mb-8 border border-white/10 shadow-lg max-w-[500px] justify-center">
          <div className="flex -space-x-2 mr-2 flex-shrink-0">
            <img 
              src="/images/1.avif" 
              alt="Client" 
              className="w-8 h-8 rounded-full border-2 border-[#0f0f0f] object-cover"
            />
            <img 
              src="/images/2.avif" 
              alt="Client" 
              className="w-8 h-8 rounded-full border-2 border-[#0f0f0f] object-cover"
            />
            <img 
              src="/images/3.avif" 
              alt="Client" 
              className="w-8 h-8 rounded-full border-2 border-[#0f0f0f] object-cover"
            />
          </div>
          <span className="text-gray-300 text-sm min-w-0 break-words whitespace-normal text-center sm:text-left">
            38+ startups & founders chose velora.studio
          </span>
        </div>
        <div className="text-center mb-10">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-white gradient-text">
            Book a 15-Minute Meeting
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-4">
            Please select the time that fits you or just text me in Telegram / WhatsApp
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-white text-sm font-medium">Only 2 spots left this month</span>
          </div>
        </div>
        <div className="bg-[#0f0f0f] rounded-2xl shadow-xl p-0 sm:p-10 w-full">
          <Cal
            namespace="15min"
            calLink="vuk-m/15min"
            style={{ width: "100%", minWidth: 0, minHeight: 350, overflow: "scroll", display: "block" }}
            config={{ layout: "month_view" }}
          />
        </div>
      </div>
    </main>
  );
}