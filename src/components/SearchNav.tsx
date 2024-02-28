'use client';
import { useSearch } from '@/context/SearchcontextProvide';
import React from 'react';

const SearchNav: React.FC = () => {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <div>
      <form className="mx-auto w-full max-w-md">
        <label
          htmlFor="default-search"
          className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Search
        </label>
        <div className="relative w-80">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <svg
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="text-xm block w-full rounded-md border border-gray-300 bg-gray-50 px-4 ps-10 text-gray-900 focus:border-[#00D093] focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="if you're wondering whether to buy it or not,"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default SearchNav;
