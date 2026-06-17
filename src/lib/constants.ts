import type { ListingStatus, PropertyType, SortOption } from "./types";

export const PROPERTY_TYPES: PropertyType[] = [
  "House",
  "Apartment",
  "Condo",
  "Villa",
  "Townhouse",
];

export const LISTING_STATUSES: ListingStatus[] = ["For Sale", "For Rent"];

export const BEDROOM_OPTIONS = [1, 2, 3, 4, 5] as const;

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "area-desc", label: "Largest area" },
];

export const SITE = {
  name: "fixcmimi.al",
  tagline: "Fairly priced homes across Albania",
  description:
    "fixcmimi.al is a real estate agency offering fairly priced homes for sale and rent across Albania.",
  phone: "+355 4 224 8814",
  email: "hello@fixcmimi.al",
  address: "Rr. Ibrahim Rugova 11, Tiranë, Albania",
} as const;

