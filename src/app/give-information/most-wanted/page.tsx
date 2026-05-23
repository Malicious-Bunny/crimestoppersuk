"use client";

import { useState, useMemo } from "react";
import Hero from "@/components/Hero";
import WantedCard from "@/components/WantedCard";
import { wantedPersons, regions, crimeTypes } from "@/data/wanted";
import Link from "next/link";

export default function MostWantedPage() {
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedCrimeTypes, setSelectedCrimeTypes] = useState<string[]>([]);
  const [keyword, setKeyword] = useState("");
  const [filtersApplied, setFiltersApplied] = useState(false);

  const filteredPersons = useMemo(() => {
    if (!filtersApplied && !keyword) return wantedPersons;

    return wantedPersons.filter((person) => {
      const regionMatch = selectedRegions.length === 0 || selectedRegions.includes(person.region);
      const crimeMatch = selectedCrimeTypes.length === 0 || selectedCrimeTypes.includes(person.crimeCategory);
      const keywordMatch = !keyword || person.name.toLowerCase().includes(keyword.toLowerCase()) ||
        person.crimeType.toLowerCase().includes(keyword.toLowerCase()) ||
        person.location.toLowerCase().includes(keyword.toLowerCase());
      return regionMatch && crimeMatch && keywordMatch;
    });
  }, [selectedRegions, selectedCrimeTypes, keyword, filtersApplied]);

  const toggleRegion = (region: string) => {
    setSelectedRegions((prev) =>
      prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]
    );
  };

  const toggleCrimeType = (type: string) => {
    setSelectedCrimeTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const resetFilters = () => {
    setSelectedRegions([]);
    setSelectedCrimeTypes([]);
    setKeyword("");
    setFiltersApplied(false);
  };

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

      {/* Filters */}
      <div className="bg-[#EDEDED] mt-6">
        <div className="max-w-[1400px] mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-300">
            {/* Region filter */}
            <div className="pb-4 lg:pb-0 lg:pr-6">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-bold text-sm">Showing Region(s):</h3>
                <span className="text-sm">
                  {selectedRegions.length === 0 ? "All" : `${selectedRegions.length} selected`}
                </span>
              </div>
              <div className="h-[150px] lg:h-[200px] overflow-y-scroll space-y-2">
                {regions.map((region) => (
                  <label key={region} className="flex items-center gap-2 text-sm cursor-pointer hover:text-purple-dark">
                    <input
                      type="checkbox"
                      checked={selectedRegions.includes(region)}
                      onChange={() => toggleRegion(region)}
                      className="accent-purple-dark cursor-pointer"
                    />
                    {region}
                  </label>
                ))}
              </div>
            </div>

            {/* Crime type filter */}
            <div className="py-4 lg:py-0 lg:px-6">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-bold text-sm">Crime type(s):</h3>
                <span className="text-sm">
                  {selectedCrimeTypes.length === 0 ? "All" : `${selectedCrimeTypes.length} selected`}
                </span>
              </div>
              <div className="h-[150px] lg:h-[200px] overflow-y-scroll space-y-2">
                {crimeTypes.map((type) => (
                  <label key={type} className="flex items-center gap-2 text-sm cursor-pointer hover:text-purple-dark">
                    <input
                      type="checkbox"
                      checked={selectedCrimeTypes.includes(type)}
                      onChange={() => toggleCrimeType(type)}
                      className="accent-purple-dark cursor-pointer"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            {/* Keyword search */}
            <div className="pt-4 lg:pt-0 lg:pl-6">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-bold text-sm">Keyword Search:</h3>
                <span className="text-sm">{keyword || "None"}</span>
              </div>
              <label className="block text-sm mb-1">Keyword</label>
              <input
                type="text"
                placeholder="Keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full border border-gray-300 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-dark"
              />
              <button
                onClick={() => setFiltersApplied(true)}
                className="mt-4 w-full bg-teal text-white py-3.5 font-semibold text-lg cursor-pointer hover:brightness-110 transition-all"
                style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}
              >
                Apply Filters
              </button>
              <button
                onClick={resetFilters}
                className="mt-2 text-purple-dark font-semibold text-sm cursor-pointer hover:underline"
              >
                Reset filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results grid */}
      <div className="max-w-[1400px] mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-deeper mb-8">
          Help us find these people
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredPersons.map((person) => (
            <WantedCard key={person.id} person={person} />
          ))}
        </div>

        {filteredPersons.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            <p className="text-xl font-semibold">No results found</p>
            <p className="mt-2">Try adjusting your filters or search terms.</p>
          </div>
        )}

      </div>
    </div>
  );
}
