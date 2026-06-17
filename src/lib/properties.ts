import { cache } from "react";
import type {
  Agent,
  Property,
  PropertySearchFilters,
  SortOption,
} from "./types";

const UNSPLASH = "https://images.unsplash.com/photo-";

/** Build an Unsplash image URL from a photo id. */
function img(id: string, w = 1600): string {
  return `${UNSPLASH}${id}?auto=format&fit=crop&w=${w}&q=80`;
}

const agents: Record<string, Agent> = {
  amara: {
    name: "Amara Bennett",
    title: "Senior Listing Agent",
    phone: "+1 (555) 204-1180",
    email: "amara@estate.com",
    avatar: img("1494790108377-be9c29b29330", 240),
  },
  david: {
    name: "David Okafor",
    title: "Luxury Property Specialist",
    phone: "+1 (555) 204-1181",
    email: "david@estate.com",
    avatar: img("1500648767791-00dcc994a43e", 240),
  },
  sofia: {
    name: "Sofia Marchetti",
    title: "Residential Advisor",
    phone: "+1 (555) 204-1182",
    email: "sofia@estate.com",
    avatar: img("1438761681033-6461ffad8d80", 240),
  },
};

export const properties: Property[] = [
  {
    id: "skyline-penthouse",
    title: "Skyline Penthouse with Panoramic Views",
    description:
      "Perched on the top floor of a sought-after downtown tower, this penthouse pairs floor-to-ceiling glass with warm oak interiors. Wake up to sunrise over the bay and entertain on a wraparound terrace built for golden-hour gatherings.",
    price: 2450000,
    status: "For Sale",
    type: "Condo",
    bedrooms: 3,
    bathrooms: 3,
    area: 2680,
    address: "455 Harbor View Blvd, Unit 38",
    city: "San Francisco",
    state: "CA",
    zip: "94111",
    image: img("1567496898669-ee935f5f647a"),
    gallery: [
      img("1502672260266-1c1ef2d93688"),
      img("1493809842364-78817add7ffb"),
      img("1522708323590-d24dbb6b0267"),
    ],
    amenities: [
      "Private terrace",
      "Concierge",
      "Smart home",
      "Floor-to-ceiling windows",
      "Gym",
      "Secure parking",
    ],
    yearBuilt: 2019,
    featured: true,
    agent: agents.david,
  },
  {
    id: "willow-creek-villa",
    title: "Willow Creek Modern Villa",
    description:
      "A statement of clean lines and natural light, this architectural villa opens onto a resort-style pool and mature gardens. The open-plan kitchen flows to a covered lounge, making indoor-outdoor living effortless all year round.",
    price: 3680000,
    status: "For Sale",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    area: 4520,
    address: "12 Willow Creek Lane",
    city: "Austin",
    state: "TX",
    zip: "78733",
    image: img("1613490493576-7fde63acd811"),
    gallery: [
      img("1600210492493-0946911123ea"),
      img("1600607687939-ce8a6c25118c"),
      img("1584622650111-993a426fbf0a"),
    ],
    amenities: [
      "Infinity pool",
      "Home theater",
      "Wine cellar",
      "Chef's kitchen",
      "3-car garage",
      "Landscaped garden",
    ],
    yearBuilt: 2021,
    featured: true,
    agent: agents.amara,
  },
  {
    id: "garden-district-townhouse",
    title: "Garden District Brick Townhouse",
    description:
      "Timeless character meets modern comfort in this restored townhouse. Original hardwood floors, exposed brick, and a sunlit reading nook give every room a story, while a private courtyard offers a quiet escape from the city.",
    price: 985000,
    status: "For Sale",
    type: "Townhouse",
    bedrooms: 4,
    bathrooms: 3,
    area: 2980,
    address: "78 Magnolia Row",
    city: "New Orleans",
    state: "LA",
    zip: "70130",
    image: img("1600585154340-be6161a56a0c"),
    gallery: [
      img("1600566753086-00f18fb6b3ea"),
      img("1484154218962-a197022b5858"),
      img("1505691938895-1758d7feb511"),
    ],
    amenities: [
      "Private courtyard",
      "Exposed brick",
      "Hardwood floors",
      "Renovated kitchen",
      "Fireplace",
    ],
    yearBuilt: 1924,
    featured: true,
    agent: agents.sofia,
  },
  {
    id: "lakeshore-family-home",
    title: "Lakeshore Family Home",
    description:
      "Set on a generous lot just steps from the water, this family home balances space and warmth. A bright great room anchors the main floor, while the fenced backyard and dock access make summers unforgettable.",
    price: 1290000,
    status: "For Sale",
    type: "House",
    bedrooms: 4,
    bathrooms: 3,
    area: 3240,
    address: "210 Lakeshore Drive",
    city: "Seattle",
    state: "WA",
    zip: "98144",
    image: img("1570129477492-45c003edd2be"),
    gallery: [
      img("1600585154526-990dced4db0d"),
      img("1556909114-f6e7ad7d3136"),
      img("1556912172-45b7abe8b7e1"),
    ],
    amenities: [
      "Lake access",
      "Two-car garage",
      "Fenced yard",
      "Open great room",
      "Mud room",
    ],
    yearBuilt: 2008,
    featured: true,
    agent: agents.amara,
  },
  {
    id: "midtown-loft",
    title: "Sunlit Midtown Loft",
    description:
      "An industrial-chic loft with soaring ceilings, polished concrete, and oversized factory windows. Walk to galleries, cafes, and transit from this vibrant, design-forward neighborhood.",
    price: 4200,
    status: "For Rent",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1450,
    address: "900 Foundry Street, Loft 6",
    city: "New York",
    state: "NY",
    zip: "10013",
    image: img("1502672260266-1c1ef2d93688"),
    gallery: [
      img("1493809842364-78817add7ffb"),
      img("1522708323590-d24dbb6b0267"),
      img("1524758631624-e2822e304c36"),
    ],
    amenities: [
      "Exposed ceilings",
      "In-unit laundry",
      "Rooftop access",
      "Stainless appliances",
      "Pet friendly",
    ],
    yearBuilt: 2016,
    featured: false,
    agent: agents.david,
  },
  {
    id: "desert-modern-retreat",
    title: "Desert Modern Retreat",
    description:
      "A serene, low-slung retreat framed by desert light. Walls of glass dissolve the line between inside and out, opening to a heated pool, fire pit, and uninterrupted mountain views.",
    price: 2150000,
    status: "For Sale",
    type: "House",
    bedrooms: 4,
    bathrooms: 4,
    area: 3850,
    address: "5 Sunridge Canyon",
    city: "Scottsdale",
    state: "AZ",
    zip: "85262",
    image: img("1605276374104-dee2a0ed3cd6"),
    gallery: [
      img("1600596542815-ffad4c1539a9"),
      img("1600607687939-ce8a6c25118c"),
      img("1600566753086-00f18fb6b3ea"),
    ],
    amenities: [
      "Heated pool",
      "Fire pit",
      "Mountain views",
      "Solar panels",
      "Outdoor kitchen",
      "Casita",
    ],
    yearBuilt: 2020,
    featured: false,
    agent: agents.amara,
  },
  {
    id: "harborfront-condo",
    title: "Harborfront Two-Bed Condo",
    description:
      "Bright, efficient, and beautifully finished, this harborfront condo offers an open kitchen, spa-like baths, and a balcony overlooking the marina. A turnkey home in a walkable waterfront community.",
    price: 749000,
    status: "For Sale",
    type: "Condo",
    bedrooms: 2,
    bathrooms: 2,
    area: 1320,
    address: "30 Marina Way, Unit 12B",
    city: "Boston",
    state: "MA",
    zip: "02210",
    image: img("1545324418-cc1a3fa10c00"),
    gallery: [
      img("1556909114-f6e7ad7d3136"),
      img("1556912172-45b7abe8b7e1"),
      img("1484154218962-a197022b5858"),
    ],
    amenities: [
      "Marina view",
      "Balcony",
      "Concierge",
      "Fitness center",
      "Garage parking",
    ],
    yearBuilt: 2017,
    featured: false,
    agent: agents.sofia,
  },
  {
    id: "hillside-craftsman",
    title: "Hillside Craftsman Bungalow",
    description:
      "Lovingly maintained Craftsman with signature built-ins, a wide front porch, and a terraced garden. Tucked into a leafy hillside street yet minutes from downtown amenities.",
    price: 3600,
    status: "For Rent",
    type: "House",
    bedrooms: 3,
    bathrooms: 2,
    area: 1980,
    address: "146 Hillcrest Avenue",
    city: "Portland",
    state: "OR",
    zip: "97210",
    image: img("1568605114967-8130f3a36994"),
    gallery: [
      img("1600585154526-990dced4db0d"),
      img("1505691938895-1758d7feb511"),
      img("1502672260266-1c1ef2d93688"),
    ],
    amenities: [
      "Front porch",
      "Built-in shelving",
      "Terraced garden",
      "Detached studio",
      "Washer / dryer",
    ],
    yearBuilt: 1931,
    featured: false,
    agent: agents.amara,
  },
  {
    id: "parkside-residence",
    title: "Parkside Contemporary Residence",
    description:
      "Overlooking the city's signature park, this contemporary residence delivers grand entertaining spaces, a sculptural staircase, and a private rooftop garden with skyline views.",
    price: 4950000,
    status: "For Sale",
    type: "House",
    bedrooms: 6,
    bathrooms: 6,
    area: 6100,
    address: "1 Parkside Terrace",
    city: "Chicago",
    state: "IL",
    zip: "60614",
    image: img("1512917774080-9991f1c4c750"),
    gallery: [
      img("1600210492493-0946911123ea"),
      img("1584622650111-993a426fbf0a"),
      img("1600607687939-ce8a6c25118c"),
    ],
    amenities: [
      "Rooftop garden",
      "Elevator",
      "Home gym",
      "Wine room",
      "Heated floors",
      "Smart security",
    ],
    yearBuilt: 2022,
    featured: false,
    agent: agents.david,
  },
];

function sortProperties(list: Property[], sort: SortOption): Property[] {
  const sorted = [...list];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "area-desc":
      return sorted.sort((a, b) => b.area - a.area);
    case "newest":
    default:
      return sorted.sort((a, b) => b.yearBuilt - a.yearBuilt);
  }
}

/** Return every property. Wrapped in `cache` to dedupe within a request. */
export const getAllProperties = cache(async (): Promise<Property[]> => {
  return properties;
});

export const getFeaturedProperties = cache(
  async (limit = 4): Promise<Property[]> => {
    return properties.filter((p) => p.featured).slice(0, limit);
  },
);

export const getPropertyById = cache(
  async (id: string): Promise<Property | undefined> => {
    return properties.find((p) => p.id === id);
  },
);

export const getRelatedProperties = cache(
  async (id: string, limit = 3): Promise<Property[]> => {
    const current = properties.find((p) => p.id === id);
    if (!current) return [];
    return properties
      .filter(
        (p) =>
          p.id !== id && (p.city === current.city || p.type === current.type),
      )
      .slice(0, limit);
  },
);

export const getCities = cache(async (): Promise<string[]> => {
  return Array.from(new Set(properties.map((p) => p.city))).sort();
});

/** Filter and sort properties for the listings page. */
export const searchProperties = cache(
  async (filters: PropertySearchFilters): Promise<Property[]> => {
    const { q, type, status, beds, sort = "newest" } = filters;
    const query = q?.trim().toLowerCase();

    const results = properties.filter((property) => {
      if (type && type !== "All" && property.type !== type) return false;
      if (status && status !== "All" && property.status !== status) {
        return false;
      }
      if (beds && property.bedrooms < beds) return false;
      if (query) {
        const haystack =
          `${property.title} ${property.city} ${property.state} ${property.address} ${property.type}`.toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    });

    return sortProperties(results, sort);
  },
);


