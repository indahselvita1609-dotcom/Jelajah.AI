import React, { useState } from 'react';
import { Screen } from '../types';

interface HeaderProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-center border-b border-solid border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="flex items-center justify-between whitespace-nowrap px-4 sm:px-10 py-3 max-w-screen-xl w-full">
        <div 
          className="flex items-center gap-4 text-primary cursor-pointer" 
          onClick={() => onNavigate(Screen.HOME)}
        >
          <div className="size-6 text-primary">
            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1h-2v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-text-light dark:text-text-dark">
            Jelajah.AI
          </h2>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <div className="flex items-center gap-9">
            <button 
              onClick={() => onNavigate(Screen.HOME)}
              className={`text-sm font-medium leading-normal transition-colors ${currentScreen === Screen.HOME ? 'text-primary' : 'text-text-light/80 hover:text-primary dark:text-text-dark/80'}`}
            >
              Beranda
            </button>
            <button 
              onClick={() => onNavigate(Screen.TESTIMONIALS)}
              className={`text-sm font-medium leading-normal transition-colors ${currentScreen === Screen.TESTIMONIALS ? 'text-primary' : 'text-text-light/80 hover:text-primary dark:text-text-dark/80'}`}
            >
              Testimoni
            </button>
            <button 
              onClick={() => onNavigate(Screen.FAQ)}
              className={`text-sm font-medium leading-normal transition-colors ${currentScreen === Screen.FAQ ? 'text-primary' : 'text-text-light/80 hover:text-primary dark:text-text-dark/80'}`}
            >
              Bantuan
            </button>
          </div>
          <button 
            onClick={() => onNavigate(Screen.PLANNER)}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary-alt text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-80 transition-colors"
          >
            <span className="truncate">Buat Itinerari</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-text-light dark:text-text-dark"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-primary/10 p-4 flex flex-col gap-4 md:hidden shadow-lg">
           <button 
              onClick={() => { onNavigate(Screen.HOME); setMobileMenuOpen(false); }}
              className="text-left text-sm font-medium"
            >
              Beranda
            </button>
            <button 
              onClick={() => { onNavigate(Screen.TESTIMONIALS); setMobileMenuOpen(false); }}
              className="text-left text-sm font-medium"
            >
              Testimoni
            </button>
            <button 
              onClick={() => { onNavigate(Screen.FAQ); setMobileMenuOpen(false); }}
              className="text-left text-sm font-medium"
            >
              Bantuan
            </button>
            <button 
            onClick={() => { onNavigate(Screen.PLANNER); setMobileMenuOpen(false); }}
            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary-alt text-white text-sm font-bold"
          >
            Buat Itinerari
          </button>
        </div>
      )}
    </header>
  );
};