export type PropertyType =
  | "House"
  | "Apartment"
  | "Condo"
  | "Villa"
  | "Townhouse";

export type ListingStatus = "For Sale" | "For Rent";

export type SortOption = "newest" | "price-asc" | "price-desc" | "area-desc";

export interface Agent {
  name: string;
  title: string;
  phone: string;
  email: string;
  avatar: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  status: ListingStatus;
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  /** Living area in square feet */
  area: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  /** Primary cover image */
  image: string;
  /** Additional gallery images */
  gallery: string[];
  amenities: string[];
  yearBuilt: number;
  featured: boolean;
  agent: Agent;
}

export interface PropertySearchFilters {
  q?: string;
  type?: PropertyType | "All";
  status?: ListingStatus | "All";
  beds?: number;
  sort?: SortOption;
}

