import { CalWrapper } from "./cal-wrapper";

export default function Page(): React.ReactElement {
  return (
    <main className="min-h-screen py-8 sm:py-16" style={{ backgroundImage: "url(/images/bg.png)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
      <div className="w-full px-0 sm:px-4 flex flex-col items-center">
        {/* Back Navigation */}
        <div className="w-full max-w-[500px] mb-6">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </a>
        </div>
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
          <h1 className="text-5xl sm:text-6xl font-velora-studio mb-4 text-white gradient-text">
            Book a 15-Minute Meeting
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-4 font-velora-studio">
            Please select the time that fits you or just text me in{" "}
            <a href="https://wa.me/message/CRWTXVTJ2LCJO1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">WhatsApp</a>{" "}
            /{" "}
            <a href="https://t.me/vukkm" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">Telegram</a>
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-white text-sm font-velora-studio">Only 2 spots left this month</span>
          </div>
        </div>
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl shadow-xl p-0 sm:p-10 w-full border border-white/10">
          <CalWrapper />
        </div>
      </div>
    </main>
  );
}