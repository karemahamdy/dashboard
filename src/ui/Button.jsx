import React from 'react';

export default function Button({ children, bg, hover, onClick }) {
  return (
    <button
      type="button"
      className={`text-white ${bg} ${hover} font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
