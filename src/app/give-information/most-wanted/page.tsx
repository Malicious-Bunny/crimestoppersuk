import Hero from "@/components/Hero";
import Link from "next/link";
import MostWantedFilters from "@/components/MostWantedFilters";

export default function MostWantedPage() {
  return (
    <div>
      <Hero
        title="Most Wanted"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Give information", href: "/give-information/most-wanted" },
          { label: "Most Wanted" },
        ]}
        subtitle="Exposing those wanted by UK law enforcement. Search below by UK region, keyword or crime type, and give information 100% anonymously by calling 0800 555 111 or through our online form."
        backgroundImage="https://crimestoppers-uk.org/getContentAsset/0deebd7e-1630-4177-ad57-d28d0d176afe/0d97e4a9-e9ea-4e9e-bc2b-b08a6eae8854/1800/shutterstock-man-on-phone-flipped-002-cropped-1800.jpg"
      />

      <div className="max-w-[1400px] mx-auto px-4">
        <Link
          href="#"
          className="inline-flex items-center text-purple-dark font-semibold mt-6 cursor-pointer hover:underline"
        >
          Find out more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <MostWantedFilters />
    </div>
  );
}
