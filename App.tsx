
import React, { useState } from 'react';
import { Screen, TripData } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { PlannerPage } from './pages/PlannerPage';
import { PaymentPage } from './pages/PaymentPage';
import { ConfirmationPage } from './pages/ConfirmationPage';
import { FAQPage } from './pages/FAQPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ItineraryPage } from './pages/ItineraryPage';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.HOME);
  const [tripData, setTripData] = useState<TripData | null>(null);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.HOME:
        return <LandingPage onNavigate={setCurrentScreen} />;
      case Screen.PLANNER:
        return <PlannerPage onNavigate={setCurrentScreen} onSubmit={setTripData} />;
      case Screen.PAYMENT:
        return <PaymentPage onNavigate={setCurrentScreen} tripData={tripData} />;
      case Screen.CONFIRMATION:
        return <ConfirmationPage onNavigate={setCurrentScreen} tripData={tripData} />;
      case Screen.ITINERARY:
        return <ItineraryPage onNavigate={setCurrentScreen} tripData={tripData} />;
      case Screen.FAQ:
        return <FAQPage />;
      case Screen.TESTIMONIALS:
        return <TestimonialsPage onNavigate={setCurrentScreen} />;
      default:
        return <LandingPage onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-display text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark">
      <Header currentScreen={currentScreen} onNavigate={setCurrentScreen} />
      {renderScreen()}
      <Footer />
    </div>
  );
}
