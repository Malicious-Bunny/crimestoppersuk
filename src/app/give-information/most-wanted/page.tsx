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
  const [showRegions, setShowRegions] = useState(false);
  const [showCrimeTypes, setShowCrimeTypes] = useState(false);
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
      <div className="bg-gray-light mt-6">
        <div className="max-w-[1400px] mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Region filter */}
            <div className="flex-1">
              <button
                onClick={() => setShowRegions(!showRegions)}
                className="w-full flex items-center justify-between bg-white border border-gray-300 px-4 py-3 text-left cursor-pointer hover:border-purple-dark transition-colors"
              >
                <div>
                  <span className="text-sm text-gray-500">Showing Region(s):</span>
                  <span className="ml-2 font-semibold text-sm">
                    {selectedRegions.length === 0 ? "All" : selectedRegions.join(", ")}
                  </span>
                </div>
                <svg className={`w-4 h-4 transition-transform ${showRegions ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showRegions && (
                <div className="bg-white border border-t-0 border-gray-300 p-4 max-h-60 overflow-y-auto">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
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
              )}
            </div>

            {/* Crime type filter */}
            <div className="flex-1">
              <button
                onClick={() => setShowCrimeTypes(!showCrimeTypes)}
                className="w-full flex items-center justify-between bg-white border border-gray-300 px-4 py-3 text-left cursor-pointer hover:border-purple-dark transition-colors"
              >
                <div>
                  <span className="text-sm text-gray-500">Crime type(s):</span>
                  <span className="ml-2 font-semibold text-sm">
                    {selectedCrimeTypes.length === 0 ? "All" : selectedCrimeTypes.join(", ")}
                  </span>
                </div>
                <svg className={`w-4 h-4 transition-transform ${showCrimeTypes ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showCrimeTypes && (
                <div className="bg-white border border-t-0 border-gray-300 p-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
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
              )}
            </div>

            {/* Keyword search */}
            <div className="flex-1">
              <div className="flex">
                <div className="flex-1">
                  <span className="text-sm text-gray-500 block mb-1 px-1">Keyword Search:</span>
                  <input
                    type="text"
                    placeholder="Keyword"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-dark"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-end gap-2">
              <button
                onClick={() => setFiltersApplied(true)}
                className="bg-teal text-white px-8 py-3 font-semibold cursor-pointer hover:bg-teal-dark transition-colors whitespace-nowrap"
                style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}
              >
                Apply Filters
              </button>
            </div>
          </div>

          {(filtersApplied || keyword) && (
            <button
              onClick={resetFilters}
              className="mt-3 text-purple-dark font-semibold text-sm cursor-pointer hover:underline"
            >
              Reset filters
            </button>
          )}
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

        {/* Pagination */}
        {filteredPersons.length > 0 && (
          <div className="flex justify-center items-center gap-2 mt-10">
            <span className="bg-purple-dark text-white w-10 h-10 flex items-center justify-center rounded font-semibold cursor-pointer">1</span>
            <span className="bg-gray-200 text-gray-700 w-10 h-10 flex items-center justify-center rounded font-semibold cursor-pointer hover:bg-purple-dark hover:text-white transition-colors">2</span>
            <span className="bg-gray-200 text-gray-700 w-10 h-10 flex items-center justify-center rounded font-semibold cursor-pointer hover:bg-purple-dark hover:text-white transition-colors">3</span>
            <span className="text-gray-500">...</span>
            <span className="bg-gray-200 text-gray-700 w-10 h-10 flex items-center justify-center rounded font-semibold cursor-pointer hover:bg-purple-dark hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
