import Link from "next/link";

export default function CtaBar() {
  return (
    <div className="bg-white border-t-2 border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="cursor-pointer">
            <span className="text-xl font-bold">
              <span className="logo-crime">Crime</span>
              <span className="logo-stoppers">Stoppers.</span>
            </span>
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          <Link
            href="tel:0800555111"
            className="flex items-center gap-2 text-purple-dark font-bold cursor-pointer hover:underline text-sm md:text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call
          </Link>
          <Link href="#" className="text-purple-dark font-semibold cursor-pointer hover:underline text-sm md:text-base hidden sm:inline">
            Volunteer
          </Link>
          <Link href="/get-involved" className="bg-purple-dark text-white px-4 md:px-5 py-2 md:py-2.5 rounded-lg font-semibold text-xs md:text-sm cursor-pointer hover:bg-purple-light transition-colors">
            Donate
          </Link>
          <Link href="/give-information/most-wanted" className="bg-red-brand text-white px-4 md:px-5 py-2 md:py-2.5 rounded-lg font-semibold text-xs md:text-sm cursor-pointer hover:bg-red-hover transition-colors">
            Give information
          </Link>
        </div>
      </div>
    </div>
  );
}
