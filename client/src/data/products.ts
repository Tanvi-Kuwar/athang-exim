import ginger from "@/assets/p-ginger.jpg";
import garlic from "@/assets/p-garlic.jpg";
import onion from "@/assets/p-onion.jpg";
import tomato from "@/assets/p-tomato.jpg";
import pomegranate from "@/assets/p-pomegranate.jpg";
import guava from "@/assets/p-guava.jpg";
import turmeric from "@/assets/p-turmeric.jpg";
import chilli from "@/assets/p-chilli.jpg";
import cloves from "@/assets/p-cloves.jpg";
import pepper from "@/assets/p-pepper.jpg";
import cumin from "@/assets/p-cumin.jpg";
import coriander from "@/assets/p-coriander.jpg";
import cardamom from "@/assets/p-cardamom.jpg";
import cinnamon from "@/assets/p-cinnamon.jpg";
import other from "@/assets/p-other.jpg";
import cotton from "@/assets/p-cotton.avif";
import engineering from "@/assets/p-engineering.avif";

export type Category = "Fresh Produce" | "Fruits" | "Spices" | "Other Products" | "Cotton" | "Engineering Products";
export type Product = {
  slug: string;
  name: string;
  category: Category;
  sub?: "Vegetables";
  image: string;
  short: string;
  description: string;
};

export const products: Product[] = [
  { slug: "ginger", name: "Fresh Ginger", category: "Fresh Produce", sub: "Vegetables", image: ginger, short: "Aromatic, firm rhizomes selected for freshness.", description: "Fresh ginger sourced for wholesale and B2B buyers, selected for firmness, aroma and clean appearance." },
  { slug: "garlic", name: "Fresh Garlic", category: "Fresh Produce", sub: "Vegetables", image: garlic, short: "Well-formed bulbs with tight cloves.", description: "Fresh garlic bulbs supplied to trade buyers, selected for bulb formation, dryness and consistency." },
  { slug: "onion", name: "Fresh Onion", category: "Fresh Produce", sub: "Vegetables", image: onion, short: "Red onions graded for size and skin quality.", description: "Fresh onions sourced for bulk requirements, graded according to buyer specifications." },
  { slug: "tomato", name: "Fresh Tomato", category: "Fresh Produce", sub: "Vegetables", image: tomato, short: "Ripe, firm tomatoes for trade supply.", description: "Fresh tomatoes supplied according to ripeness and size requirements of B2B buyers." },
  { slug: "pomegranate", name: "Pomegranate", category: "Fruits", image: pomegranate, short: "Deep red fruit with rich, juicy arils.", description: "Pomegranates sourced for colour, size and freshness for wholesale and trade partners." },
  { slug: "guava", name: "Guava", category: "Fruits", image: guava, short: "Fresh guavas selected for ripeness.", description: "Fresh guavas supplied for wholesale markets, selected by ripeness and appearance." },
  { slug: "turmeric", name: "Turmeric", category: "Spices", image: turmeric, short: "Bright turmeric fingers and powder.", description: "Turmeric available as whole fingers or powder, sourced for colour and aroma." },
  { slug: "red-chilli", name: "Red Chilli", category: "Spices", image: chilli, short: "Dried red chillies with vivid colour.", description: "Dried red chillies sourced for colour and pungency, available in forms as per requirement." },
  { slug: "cloves", name: "Cloves", category: "Spices", image: cloves, short: "Whole cloves with strong aroma.", description: "Whole cloves selected for aroma, size and dryness for trade buyers." },
  { slug: "black-pepper", name: "Black Pepper", category: "Spices", image: pepper, short: "Bold whole peppercorns.", description: "Whole black pepper sourced for bulk supply, selected for size and pungency." },
  { slug: "cumin", name: "Cumin", category: "Spices", image: cumin, short: "Clean, aromatic cumin seeds.", description: "Cumin seeds supplied for B2B requirements, selected for cleanliness and aroma." },
  { slug: "coriander", name: "Coriander", category: "Spices", image: coriander, short: "Whole coriander seeds.", description: "Coriander seeds sourced for colour and aroma for wholesale buyers." },
  { slug: "cardamom", name: "Cardamom", category: "Spices", image: cardamom, short: "Green cardamom pods.", description: "Green cardamom pods selected by size and colour for trade supply." },
  { slug: "cinnamon", name: "Cinnamon", category: "Spices", image: cinnamon, short: "Fragrant cinnamon quills.", description: "Cinnamon sticks sourced for aroma and quill quality." },
  { slug: "other-commodities", name: "Other Agricultural Commodities", category: "Other Products", image: other, short: "Seasonal and specialty commodities on request.", description: "Additional seasonal and specialty agricultural commodities can be sourced based on buyer requirements." },
  { slug: "cotton", name: "Cotton", category: "Cotton", image: cotton, short: "Quality cotton for textile and industrial requirements.", description: "Cotton supplied to B2B buyers according to quality, grade, and quantity requirements."},
  { slug: "engineering-products", name: "Engineering Products", category: "Engineering Products", image: engineering, short: "Engineering products sourced for industrial requirements.", description: "Engineering products sourced for industrial and commercial buyers based on technical specifications and order requirements."},
];

export const featured = products.slice(0, 12);
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const ON_REQUEST = "Available on Request";
