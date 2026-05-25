import Link from "next/link";
import type { WantedPerson } from "@/data/wanted";

interface WantedCardProps {
  person: WantedPerson;
}

export default function WantedCard({ person }: WantedCardProps) {
  return (
    <Link
      href={`/give-information/most-wanted/appeal/${person.id}`}
      className="bg-white shadow-[0_2px_6px_rgba(0,0,0,0.3)] cursor-pointer block group"
    >
      <figure className="h-[250px] overflow-hidden flex items-center justify-center bg-gray-100">
        {person.image && !person.image.includes("placeholder") ? (
          <img
            src={person.image}
            alt={`${person.name} wanted for ${person.crimeType}`}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        ) : (
          <svg className="w-20 h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        )}
      </figure>
      <div className="p-4">
        <span className="block text-base leading-snug mb-1">
          {person.summary || `${person.name} wanted for ${person.crimeType}`}
        </span>
        <span className="block text-red-brand text-sm mt-1">
          {person.crimeType}
        </span>
        {person.location && (
          <span className="block text-[#676767] text-sm mt-1 flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-red-brand flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            {person.location}
          </span>
        )}
      </div>
    </Link>
  );
}
