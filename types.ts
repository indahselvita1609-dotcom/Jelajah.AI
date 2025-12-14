
export enum Screen {
  HOME = 'HOME',
  PLANNER = 'PLANNER',
  PAYMENT = 'PAYMENT',
  CONFIRMATION = 'CONFIRMATION',
  FAQ = 'FAQ',
  TESTIMONIALS = 'TESTIMONIALS',
  ITINERARY = 'ITINERARY'
}

export interface TripData {
  destination: string;
  duration: string;
  budget: string;
  travelStyle: string;
  accommodation: string;
  interests: string;
  diet: string;
  notes: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
  trip?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
