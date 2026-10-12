export type Language = 'it' | 'en';

export interface PropertyImage {
  id: string;
  src: string;
  fallbackSrc?: string;
  alt: {
    it: string;
    en: string;
  };
  caption: {
    it: string;
    en: string;
  };
  category: 'interior' | 'bedroom' | 'kitchen' | 'living' | 'village';
}

export interface RoomDetail {
  id: string;
  name: {
    it: string;
    en: string;
  };
  subtitle: {
    it: string;
    en: string;
  };
  description: {
    it: string;
    en: string;
  };
  image: string;
  features: {
    it: string[];
    en: string[];
  };
  climateNote: {
    it: string;
    en: string;
  };
}

export interface Amenity {
  id: string;
  name: {
    it: string;
    en: string;
  };
  detail: {
    it: string;
    en: string;
  };
  iconName: string;
}

export interface VillageService {
  name: {
    it: string;
    en: string;
  };
  note: {
    it: string;
    en: string;
  };
  iconName: string;
}
