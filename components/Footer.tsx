import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-background-light dark:bg-background-dark border-t border-primary/10 mt-auto">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-10 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-primary">
            <div className="size-6 text-primary">
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1h-2v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold text-text-light dark:text-text-dark">Jelajah.AI</h2>
          </div>
          <div className="flex gap-4 text-sm text-text-light/70 dark:text-text-dark/70">
            <button className="hover:text-primary">Syarat & Ketentuan</button>
            <button className="hover:text-primary">Kebijakan Privasi</button>
          </div>
          <p className="text-sm text-text-light/70 dark:text-text-dark/70 text-center md:text-right">
            © 2024 Jelajah.AI. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};