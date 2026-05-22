import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(200,160,50,0.15) 30deg, transparent 60deg)`,
            backgroundSize: '80px 80px',
          }} />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-2xl">
            Most Wanted in Spain
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl leading-relaxed">
            A new appeal has been launched to locate and bring to justice 12 of the UK&apos;s most wanted fugitives, who are believed to be hiding in Spain.
          </p>
          <Link
            href="/give-information/most-wanted"
            className="mt-6 inline-flex items-center bg-red-brand text-white px-8 py-3.5 rounded-full font-semibold text-lg cursor-pointer hover:bg-red-hover transition-colors"
          >
            Find out more
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* How it works */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-deeper mb-10">
            How to give information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-deeper mb-2">Call us</h3>
              <p className="text-gray-600">
                Call our UK Contact Centre on <strong className="text-purple-dark">0800 555 111</strong>. Free, anonymous, 24/7.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-deeper mb-2">Use our online form</h3>
              <p className="text-gray-600">
                Fill in our simple and secure anonymous online form to give information about crime.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-deeper mb-2">100% anonymous</h3>
              <p className="text-gray-600">
                We never ask for your name. We never trace your call or IP. Your identity is safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise of anonymity */}
      <section className="bg-purple-deeper text-white">
        <div className="max-w-[1400px] mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About our promise of anonymity
          </h2>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed mb-8">
            When you contact Crimestoppers, you remain completely anonymous. We never ask for your personal details and we never trace calls or online information.
          </p>
          <Link
            href="/about-us"
            className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-full font-semibold cursor-pointer hover:bg-white hover:text-purple-deeper transition-colors"
          >
            Find out more
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Latest campaigns */}
      <section className="bg-gray-light">
        <div className="max-w-[1400px] mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-deeper mb-10">
            Latest campaigns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "County Lines", desc: "Help us tackle county lines drug dealing and protect young people." },
              { title: "Knife Crime", desc: "Information about knife crime in your area can help save lives." },
              { title: "Fearless", desc: "Our youth service helping young people speak up about crime anonymously." },
            ].map((campaign) => (
              <Link
                key={campaign.title}
                href="#"
                className="bg-white rounded-sm overflow-hidden card-hover cursor-pointer block"
              >
                <div className="h-48 bg-purple-deeper relative">
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-deeper/90 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white">{campaign.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm">{campaign.desc}</p>
                  <span className="text-red-brand font-semibold text-sm mt-3 inline-block">Learn more &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Get involved */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-deeper mb-4">
            Get involved
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto mb-8">
            There are many ways to support Crimestoppers and help us fight crime across the UK.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-involved" className="bg-purple-dark text-white px-8 py-3.5 rounded-lg font-semibold cursor-pointer hover:bg-purple-light transition-colors">
              Donate to us
            </Link>
            <Link href="#" className="border-2 border-purple-dark text-purple-dark px-8 py-3.5 rounded-lg font-semibold cursor-pointer hover:bg-purple-dark hover:text-white transition-colors">
              Volunteer
            </Link>
            <Link href="#" className="border-2 border-purple-dark text-purple-dark px-8 py-3.5 rounded-lg font-semibold cursor-pointer hover:bg-purple-dark hover:text-white transition-colors">
              Fundraise
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
