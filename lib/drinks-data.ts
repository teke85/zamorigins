// ---------------------------------------------------------------------------
// drinks-data.ts
// Static drink product data that mirrors the Prisma schema structure.
// When the database is connected, replace these exports with Prisma queries.
// ---------------------------------------------------------------------------

export type DrinkStatus = "PUBLISHED" | "DRAFT" | "OUT_OF_STOCK" | "ARCHIVED";

export interface DrinkVariant {
  id: string;
  name: string; // e.g. "500ml", "330ml"
  sku?: string;
  price: number;
  compareAtPrice?: number;
  stockCount: number;
  weight: number; // grams
}

export interface DrinkProduct {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  subCategory?: string;
  description: string;
  shortDescription: string;
  origin: string;
  tags: string[];
  status: DrinkStatus;
  isFeatured: boolean;
  primaryImage: string;
  images: { url: string; alt: string; isPrimary: boolean; order: number }[];
  variants: DrinkVariant[];
  packaging?: string;
  createdAt: string;
  updatedAt: string;
}

export const drinkProducts: DrinkProduct[] = [
  {
    id: "fanta-bottle",
    slug: "fanta-bottle",
    name: "Fanta Orange – Glass Bottle",
    brand: "Fanta",
    category: "Soft Drinks",
    subCategory: "Carbonated",
    description:
      "The iconic Fanta Orange in its classic glass bottle – crisp, refreshing, and bursting with real orange flavour. Perfect alongside nshima or on its own on a warm afternoon. Sourced and imported from Zambia.",
    shortDescription: "Classic Zambian Fanta Orange in iconic glass bottle.",
    origin: "Zambia",
    tags: ["fanta", "orange", "glass", "carbonated", "imported"],
    status: "PUBLISHED",
    isFeatured: true,
    primaryImage:
      "https://res.cloudinary.com/v69xhq02/image/upload/v1790270623/Fanta_Bottle.jpg",
    images: [
      {
        url: "https://res.cloudinary.com/v69xhq02/image/upload/v1790270623/Fanta_Bottle.jpg",
        alt: "Fanta Orange Glass Bottle",
        isPrimary: true,
        order: 0,
      },
    ],
    variants: [
      {
        id: "fanta-bottle-500ml",
        name: "500ml",
        sku: "FANTA-BTL-500",
        price: 2.49,
        compareAtPrice: 2.99,
        stockCount: 48,
        weight: 550,
      },
    ],
    packaging: "Glass bottle – 500ml",
    createdAt: "2026-09-01T00:00:00Z",
    updatedAt: "2026-09-24T00:00:00Z",
  },
  {
    id: "fanta-disposable",
    slug: "fanta-disposable",
    name: "Fanta Orange – Plastic Bottle",
    brand: "Fanta",
    category: "Soft Drinks",
    subCategory: "Carbonated",
    description:
      "Fanta Orange in a convenient, take-away plastic bottle. Same vibrant Zambian Fanta taste in a lighter, portable format. Great for lunch boxes, picnics and on-the-go refreshment.",
    shortDescription: "Portable Zambian Fanta Orange in plastic bottle.",
    origin: "Zambia",
    tags: ["fanta", "orange", "plastic", "carbonated", "portable"],
    status: "PUBLISHED",
    isFeatured: false,
    primaryImage:
      "https://res.cloudinary.com/v69xhq02/image/upload/v1790270622/Fanta_Disposable.jpg",
    images: [
      {
        url: "https://res.cloudinary.com/v69xhq02/image/upload/v1790270622/Fanta_Disposable.jpg",
        alt: "Fanta Orange Plastic Bottle",
        isPrimary: true,
        order: 0,
      },
    ],
    variants: [
      {
        id: "fanta-disp-500ml",
        name: "500ml",
        sku: "FANTA-DSP-500",
        price: 1.99,
        stockCount: 72,
        weight: 520,
      },
    ],
    packaging: "PET plastic bottle – 500ml",
    createdAt: "2026-09-01T00:00:00Z",
    updatedAt: "2026-09-24T00:00:00Z",
  },
  {
    id: "appy-apple",
    slug: "appy-apple",
    name: "Appy Apple Juice",
    brand: "Appy",
    category: "Juices",
    subCategory: "Apple",
    description:
      "A delightfully light, non-carbonated apple juice drink loved across Zambia. Appy Apple has a naturally sweet, fresh apple flavour that appeals to both children and adults. Imported directly from Zambia.",
    shortDescription: "Light, refreshing non-carbonated Zambian apple juice.",
    origin: "Zambia",
    tags: ["appy", "apple", "juice", "non-carbonated", "kids"],
    status: "PUBLISHED",
    isFeatured: true,
    primaryImage:
      "https://res.cloudinary.com/v69xhq02/image/upload/v1790270622/Appy_Apple.jpg",
    images: [
      {
        url: "https://res.cloudinary.com/v69xhq02/image/upload/v1790270622/Appy_Apple.jpg",
        alt: "Appy Apple Juice",
        isPrimary: true,
        order: 0,
      },
    ],
    variants: [
      {
        id: "appy-apple-250ml",
        name: "250ml",
        sku: "APPY-APL-250",
        price: 1.49,
        stockCount: 96,
        weight: 270,
      },
      {
        id: "appy-apple-500ml",
        name: "500ml",
        sku: "APPY-APL-500",
        price: 2.29,
        stockCount: 60,
        weight: 530,
      },
    ],
    packaging: "Carton / PET",
    createdAt: "2026-09-01T00:00:00Z",
    updatedAt: "2026-09-24T00:00:00Z",
  },
  {
    id: "coca-cola",
    slug: "coca-cola",
    name: "Coca-Cola Classic",
    brand: "Coca-Cola",
    category: "Soft Drinks",
    subCategory: "Carbonated",
    description:
      "The world's most iconic soft drink, now available direct from Zambia. Experience the rich, caramel Coke flavour that tastes uniquely different when bottled in Zambia using locally sourced cane sugar.",
    shortDescription: "Iconic Zambia-bottled Coca-Cola with cane sugar.",
    origin: "Zambia",
    tags: ["coca-cola", "coke", "carbonated", "classic", "cane-sugar"],
    status: "PUBLISHED",
    isFeatured: true,
    primaryImage:
      "https://res.cloudinary.com/v69xhq02/image/upload/v1790270621/Coca_Cola_Soft_DRink.jpg",
    images: [
      {
        url: "https://res.cloudinary.com/v69xhq02/image/upload/v1790270621/Coca_Cola_Soft_DRink.jpg",
        alt: "Coca-Cola Classic",
        isPrimary: true,
        order: 0,
      },
    ],
    variants: [
      {
        id: "coca-cola-500ml",
        name: "500ml",
        sku: "COKE-CLK-500",
        price: 2.29,
        compareAtPrice: 2.79,
        stockCount: 120,
        weight: 540,
      },
    ],
    packaging: "PET bottle – 500ml",
    createdAt: "2026-09-01T00:00:00Z",
    updatedAt: "2026-09-24T00:00:00Z",
  },
  {
    id: "milkit-milkshake",
    slug: "milkit-milkshake",
    name: "Milkit MilkShake",
    brand: "Milkit",
    category: "Milkshakes",
    subCategory: "Flavoured Milk",
    description:
      "A creamy, indulgent Zambian milkshake beloved across the country. Milkit comes in a richly flavoured formulation that's thick, satisfying and utterly delicious – reminiscent of childhood treats in Lusaka.",
    shortDescription: "Creamy Zambian milkshake, rich and indulgent.",
    origin: "Zambia",
    tags: ["milkit", "milkshake", "dairy", "creamy", "kids", "dessert"],
    status: "PUBLISHED",
    isFeatured: false,
    primaryImage:
      "https://res.cloudinary.com/v69xhq02/image/upload/v1790270621/Milkit_MilkShake.jpg",
    images: [
      {
        url: "https://res.cloudinary.com/v69xhq02/image/upload/v1790270621/Milkit_MilkShake.jpg",
        alt: "Milkit MilkShake",
        isPrimary: true,
        order: 0,
      },
    ],
    variants: [
      {
        id: "milkit-200ml",
        name: "200ml",
        sku: "MLKT-SHK-200",
        price: 1.89,
        stockCount: 84,
        weight: 220,
      },
    ],
    packaging: "Carton – 200ml",
    createdAt: "2026-09-01T00:00:00Z",
    updatedAt: "2026-09-24T00:00:00Z",
  },
  {
    id: "appy-lemon",
    slug: "appy-lemon",
    name: "Appy Lemon Juice",
    brand: "Appy",
    category: "Juices",
    subCategory: "Lemon",
    description:
      "The refreshing sister to Appy Apple, this light lemon juice drink delivers a subtle citrus tang without being overwhelming. Naturally light and perfect paired with Zambian snacks.",
    shortDescription: "Light, citrusy Zambian lemon juice drink.",
    origin: "Zambia",
    tags: ["appy", "lemon", "juice", "citrus", "light"],
    status: "PUBLISHED",
    isFeatured: false,
    primaryImage:
      "https://res.cloudinary.com/v69xhq02/image/upload/v1790270621/WhatsApp_Image_2026-09-24_at_18.59.06_12.jpg",
    images: [
      {
        url: "https://res.cloudinary.com/v69xhq02/image/upload/v1790270621/WhatsApp_Image_2026-09-24_at_18.59.06_12.jpg",
        alt: "Appy Lemon Juice",
        isPrimary: true,
        order: 0,
      },
    ],
    variants: [
      {
        id: "appy-lemon-250ml",
        name: "250ml",
        sku: "APPY-LMN-250",
        price: 1.49,
        stockCount: 64,
        weight: 270,
      },
    ],
    packaging: "Carton – 250ml",
    createdAt: "2026-09-01T00:00:00Z",
    updatedAt: "2026-09-24T00:00:00Z",
  },
];

export function getDrinkBySlug(slug: string): DrinkProduct | undefined {
  return drinkProducts.find((p) => p.slug === slug && p.status !== "ARCHIVED");
}

export function getPublishedDrinks(): DrinkProduct[] {
  return drinkProducts.filter((p) => p.status === "PUBLISHED");
}

export function getRelatedDrinks(
  current: DrinkProduct,
  limit = 4
): DrinkProduct[] {
  return drinkProducts
    .filter(
      (p) =>
        p.id !== current.id &&
        p.status === "PUBLISHED" &&
        (p.category === current.category || p.brand === current.brand)
    )
    .slice(0, limit);
}

export const drinkCategories = [
  "All",
  "Soft Drinks",
  "Juices",
  "Milkshakes",
  "Water",
  "Energy Drinks",
];

export const drinkBrands = ["All", "Fanta", "Coca-Cola", "Appy", "Milkit"];
