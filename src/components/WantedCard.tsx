import Link from "next/link";
import type { WantedPerson } from "@/data/wanted";

interface WantedCardProps {
  person: WantedPerson;
}

export default function WantedCard({ person }: WantedCardProps) {
  return (
    <Link
      href={`/give-information/most-wanted/appeal?id=${person.id}`}
      className="card-hover bg-white rounded-sm overflow-hidden cursor-pointer block group"
    >
      <div className="relative aspect-[4/5] bg-gray-200 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
          <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-sm leading-snug group-hover:text-purple-dark transition-colors">
          {person.name} {person.crimeType === "Murder" ? `- Wanted for ${person.crimeType}` : `wanted for ${person.crimeType}`}
        </h3>
        <p className="text-red-brand text-sm font-semibold mt-1 cursor-pointer hover:underline">
          {person.crimeType}
        </p>
        {person.location && (
          <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-red-brand flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            {person.location}
          </p>
        )}
      </div>
    </Link>
  );
}
