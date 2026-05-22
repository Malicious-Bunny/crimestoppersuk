"use client";

export default function QuickExit() {
  const handleQuickExit = () => {
    window.location.replace("https://www.google.com");
  };

  return (
    <button
      onClick={handleQuickExit}
      className="fixed bottom-6 right-6 bg-amber-brand text-white px-5 py-3 rounded-lg font-bold text-sm shadow-lg cursor-pointer hover:brightness-110 transition-all z-50 flex items-center gap-2"
      aria-label="Quick Exit - leaves this site immediately"
    >
      Quick Exit
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
    </button>
  );
}
