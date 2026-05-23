import Link from "next/link";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface HeroProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  subtitle?: string;
  showCta?: boolean;
  backgroundImage?: string;
}

export default function Hero({ title, breadcrumbs, subtitle, showCta = false, backgroundImage }: HeroProps) {
  return (
    <div className="relative bg-purple-deeper overflow-hidden">
      {backgroundImage ? (
        <div className="absolute inset-0">
          <img src={backgroundImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-purple-deeper/60" />
        </div>
      ) : (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      )}

      <div className="relative max-w-[1400px] mx-auto px-4 py-8 md:py-20">
        {/* Breadcrumbs */}
        <nav className="mb-4 md:mb-6" aria-label="breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 md:gap-2 text-xs md:text-sm text-white/70">
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-2">
                {i > 0 && (
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white underline cursor-pointer transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/50">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="text-3xl md:text-6xl font-bold text-white max-w-3xl">{title}</h1>

        {subtitle && (
          <p className="mt-3 md:mt-4 text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">{subtitle}</p>
        )}

        {showCta && (
          <Link
            href="#"
            className="mt-6 inline-flex items-center bg-red-brand text-white px-8 py-3.5 rounded-full font-semibold text-lg cursor-pointer hover:bg-red-hover transition-colors"
          >
            Give information anonymously online
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
