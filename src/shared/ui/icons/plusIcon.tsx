import { FC } from 'react';

const PlusIcon: FC = () => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 pointer-events-none">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8 12h8"></path>
      <path d="M12 8v8"></path>
    </svg>
  );
};

export default PlusIcon;