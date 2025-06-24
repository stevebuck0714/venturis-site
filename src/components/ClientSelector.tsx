'use client';

import { useState, useEffect, useRef } from 'react';
import { useClient } from './ClientContext';
import { usePathname } from 'next/navigation';

const clientNames = [
  { id: 1, name: 'Alessandro Romano', country: 'Italy' },
  { id: 2, name: 'Sophie Laurent', country: 'France' },
  { id: 3, name: 'Hans Mueller', country: 'Germany' },
  { id: 4, name: 'Isabella Santos', country: 'Portugal' },
  { id: 5, name: 'Erik Johansson', country: 'Sweden' },
  { id: 6, name: 'Maria Kowalski', country: 'Poland' },
  { id: 7, name: 'Andreas Papadopoulos', country: 'Greece' },
  { id: 8, name: 'Clara Van den Berg', country: 'Netherlands' },
  { id: 9, name: 'Viktor Novak', country: 'Czech Republic' },
  { id: 10, name: 'Elena Popov', country: 'Bulgaria' },
  { id: 11, name: 'Thomas Nielsen', country: 'Denmark' },
  { id: 12, name: 'Lukas Virtanen', country: 'Finland' },
  { id: 13, name: 'Carmen Rodriguez', country: 'Spain' },
  { id: 14, name: 'Stefan Kovac', country: 'Croatia' },
  { id: 15, name: 'Markus Weber', country: 'Austria' },
  { id: 16, name: 'Ana Ionescu', country: 'Romania' },
  { id: 17, name: 'Pierre Dubois', country: 'Belgium' },
  { id: 18, name: 'Liam O\'Connor', country: 'Ireland' },
  { id: 19, name: 'Matteo Rossi', country: 'Switzerland' },
  { id: 20, name: 'Eva Magnusson', country: 'Norway' }
];

interface ClientSelectorProps {
  showDropdown?: boolean;
}

export default function ClientSelector({ showDropdown = false }: ClientSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { selectedClient, setSelectedClient } = useClient();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!showDropdown) {
    return (
      <div className="text-lg text-gray-700">
        <span className="font-medium mr-2">Client Name:</span>
        <span className="text-gray-900">{selectedClient}</span>
      </div>
    );
  }

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div className="text-lg text-gray-700">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center bg-white border border-gray-300 rounded-md px-3 py-1 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span>{selectedClient}</span>
          <svg
            className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div 
          className="absolute left-0 z-50 mt-1 w-[300px] bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
          style={{ top: '100%' }}
        >
          <ul className="py-1">
            {clientNames.map((client) => (
              <li
                key={client.id}
                className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                  selectedClient === client.name ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                }`}
                onClick={() => {
                  setSelectedClient(client.name);
                  setIsOpen(false);
                }}
              >
                <span className="font-medium">{client.name}</span>
                <span className="text-sm text-gray-500 ml-2">({client.country})</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 