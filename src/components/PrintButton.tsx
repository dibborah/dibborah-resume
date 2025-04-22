
import { useState } from 'react';

export function PrintButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed bottom-6 right-6 print:hidden">
      <div 
        className={`absolute bottom-full right-0 mb-2 p-2 bg-black text-white text-xs rounded transition-opacity ${
          showTooltip ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Print Resume
      </div>
      <button
        onClick={handlePrint}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="bg-resume-orange hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
      </button>
    </div>
  );
}
